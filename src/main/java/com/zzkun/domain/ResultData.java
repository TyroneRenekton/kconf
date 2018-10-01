package com.zzkun.domain;

import lombok.Getter;
import lombok.Setter;

import java.io.Serializable;

@Getter
@Setter
public class ResultData<T> implements Serializable {

    private static final long serialVersionUID = 6488648242957305952L;

    private Boolean success = true;
    private T data;
    private String resultCode;
    private String message = "";

    public static ResultData buildErrorResult(String message, String resultCode) {
        ResultData data = new ResultData();
        data.setSuccess(false);
        data.setMessage(message);
        data.setResultCode(resultCode);
        return data;
    }

    public static ResultData buildErrorResult(String message) {
        return buildErrorResult(message, null);
    }

    public static <T> ResultData<T> buildSuccessResult(T data) {
        ResultData<T> resultData = new ResultData<>();
        resultData.setSuccess(true);
        resultData.setData(data);
        return resultData;
    }

    public static <T> ResultData<T> buildSuccessResult() {
        ResultData<T> resultData = new ResultData<>();
        resultData.setSuccess(true);
        return resultData;
    }
}
