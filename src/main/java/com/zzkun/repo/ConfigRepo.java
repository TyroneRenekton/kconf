package com.zzkun.repo;

import com.zzkun.domain.ConfigDO;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

@SuppressWarnings("ALL")
public interface ConfigRepo extends JpaRepository<ConfigDO, Long> {

    @Override
    List<ConfigDO> findAll();

    @Override
    ConfigDO getOne(Long aLong);

    @Override
    <S extends ConfigDO> S save(S s);

    @Override
    Optional<ConfigDO> findById(Long aLong);

    @Override
    void delete(ConfigDO configDO);

    ConfigDO findConfigDOByConfName(String confName);

    @Override
    Page<ConfigDO> findAll(Pageable pageable);
}
