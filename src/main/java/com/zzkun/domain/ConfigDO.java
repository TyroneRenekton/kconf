package com.zzkun.domain;

import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "config_do")
@Data
@NoArgsConstructor
@EntityListeners(AuditingEntityListener.class)
public class ConfigDO {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @CreatedDate
    private LocalDateTime gmtCreate;

    @LastModifiedDate
    private LocalDateTime gmtModify;

    /**
     * 名称
     */
    private String confName;

    /**
     * 注释
     */
    private String confComment;

    /**
     * 内容JSON
     */
    @Column(length = 65536)
    private String confJson;

    /**
     * 修改密码
     */
    private String password;
}
