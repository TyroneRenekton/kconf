package com.zzkun.controller;

import cn.hutool.crypto.SecureUtil;
import cn.hutool.json.JSONUtil;
import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONObject;
import com.zzkun.domain.ConfigDO;
import com.zzkun.domain.ResultData;
import com.zzkun.repo.ConfigRepo;
import lombok.extern.slf4j.Slf4j;
import org.apache.commons.collections4.MapUtils;
import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@RestController
@RequestMapping(value = "/api")
@Slf4j
public class ConfigController {

    private static final int PAGE_SIZE = 10;

    @Autowired
    private ConfigRepo configRepo;

    @RequestMapping(value = "/queryAll", method = RequestMethod.POST)
    public Object queryAll(@RequestBody Map<String, Object> dataMap) {
        try {
            Page<ConfigDO> result = configRepo.findAll(
                    PageRequest.of(MapUtils.getIntValue(dataMap, "curPage") - 1, PAGE_SIZE, Sort.Direction.DESC, "id"));
            JSONObject ret = new JSONObject()
                    .fluentPut("total", result.getTotalPages() * result.getSize())
                    .fluentPut("pageSize", result.getSize())
                    .fluentPut("data", result.map(it -> {
                        it.setPassword(null);
                        return it;
                    }).stream().toArray());
            return ResultData.buildSuccessResult(ret);
        } catch (Exception e) {
            log.warn("queryAll error", e);
            return ResultData.buildErrorResult(e.getMessage());
        }
    }

    @RequestMapping(value = "/queryDetail")
    public Object queryDetail(String key) {
        try {
            ConfigDO configDO = configRepo.findConfigDOByConfName(key);
            if (configDO == null) {
                return ResultData.buildErrorResult("没有找到配置型key = " + key);
            }
            configDO.setPassword(null);
            return ResultData.buildSuccessResult(configDO);
        } catch (Exception e) {
            log.warn("queryDetail error", e);
            return ResultData.buildErrorResult(e.getMessage());
        }
    }

    @RequestMapping(value = "/queryJson")
    public Object queryJson(String key) {
        try {
            ConfigDO configDO = configRepo.findConfigDOByConfName(key);
            if (configDO == null) {
                return ResultData.buildErrorResult("没有找到配置型key = " + key);
            }
            String json = configDO.getConfJson();
            return ResultData.buildSuccessResult(JSON.parse(json));
        } catch (Exception e) {
            log.warn("queryDetail error", e);
            return ResultData.buildErrorResult(e.getMessage());
        }
    }

    @RequestMapping(value = "/update")
    public Object update(String key,
                         String value,
                         @RequestParam(required = false) String password) {
        try {
            if (StringUtils.isBlank(key) || StringUtils.isBlank(value)) {
                return ResultData.buildErrorResult("key/value为空");
            }
            ConfigDO configDO = configRepo.findConfigDOByConfName(key);
            if (configDO == null) {
                return ResultData.buildErrorResult("没有找到配置型key = " + key);
            }
            if (StringUtils.isNotBlank(configDO.getPassword()) &&
                    !StringUtils.equals(SecureUtil.sha1(password), configDO.getPassword())) {
                return ResultData.buildErrorResult("密码不正确");
            }
            configDO.setConfJson(value);
            configRepo.save(configDO);
            return ResultData.buildSuccessResult();
        } catch (Exception e) {
            log.warn("update error", e);
            return ResultData.buildErrorResult(e.getMessage());
        }
    }

    @RequestMapping(value = "/add")
    public Object add(String key,
                      String value,
                      @RequestParam(required = false) String comment,
                      @RequestParam(required = false) String password) {
        try {
            if (StringUtils.isBlank(key) || StringUtils.isBlank(value)) {
                return ResultData.buildErrorResult("key/value为空");
            }
            ConfigDO configDO = new ConfigDO();
            configDO.setConfName(key);
            configDO.setConfJson(value);
            configDO.setConfComment(StringUtils.trimToNull(comment));
            if (StringUtils.isNotBlank(password)) {
                configDO.setPassword(SecureUtil.sha1(password));
            }
            configRepo.save(configDO);
            return ResultData.buildSuccessResult();
        } catch (Exception e) {
            log.warn("add error", e);
            return ResultData.buildErrorResult(e.getMessage());
        }
    }
}
