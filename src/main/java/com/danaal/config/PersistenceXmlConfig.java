package com.danaal.config;

import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.ImportResource;
import org.springframework.transaction.annotation.EnableTransactionManagement;

@Configuration
@EnableTransactionManagement
@ComponentScan({ "com.danaal.ws.dao", "com.danaal.ws.service" })
@ImportResource({ "classpath:hibernateConfig.xml" })
public class PersistenceXmlConfig {

    private PersistenceXmlConfig() {
        super();
    }

}