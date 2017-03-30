package com.danaal.config;

import java.util.Properties;

import javax.sql.DataSource;

import org.apache.tomcat.dbcp.dbcp.BasicDataSource;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.PropertySource;
import org.springframework.core.env.Environment;
import org.springframework.dao.annotation.PersistenceExceptionTranslationPostProcessor;
import org.springframework.orm.hibernate4.HibernateTransactionManager;
import org.springframework.orm.hibernate4.LocalSessionFactoryBean;
import org.springframework.transaction.annotation.EnableTransactionManagement;

@Configuration
@EnableTransactionManagement
@PropertySource({"classpath:persistence-oracle.properties"})
@ComponentScan({"com.danaal.ws"})
public class PersistenceConfig {
	
	@Autowired
	private Environment environment;
	
	@Bean
	public LocalSessionFactoryBean sessionFactoty() {
		LocalSessionFactoryBean localSessionFactoryBean = new LocalSessionFactoryBean();
		
		localSessionFactoryBean.setDataSource(restDataSoruce());
		localSessionFactoryBean.setPackagesToScan(new String[] {"com.danaal.ws.model"});
		localSessionFactoryBean.setHibernateProperties(hibernateProperties());
		
		return localSessionFactoryBean;
	}
	
	@Bean
	public DataSource restDataSoruce() {
		final BasicDataSource basicDataSource = new BasicDataSource();
		
		basicDataSource.setDriverClassName(this.environment.getProperty("jdbc.driverClassName"));
		basicDataSource.setUrl(this.environment.getProperty("jdbc.url"));
		basicDataSource.setUsername(this.environment.getProperty("jdbc.user"));
		basicDataSource.setPassword(this.environment.getProperty("jdbc.pass"));
		
		return basicDataSource;
	}
	
	@Bean
    @Autowired
    public HibernateTransactionManager transactionManager(final SessionFactory sessionFactory) {
        final HibernateTransactionManager txManager = new HibernateTransactionManager();
        txManager.setSessionFactory(sessionFactory);

        return txManager;
    }
	
	@Bean
    public PersistenceExceptionTranslationPostProcessor exceptionTranslation() {
        return new PersistenceExceptionTranslationPostProcessor();
    }
	
	final Properties hibernateProperties() {
        final Properties hibernateProperties = new Properties();
        
        hibernateProperties.setProperty("hibernate.hbm2ddl.auto", this.environment.getProperty("hibernate.hbm2ddl.auto"));
        hibernateProperties.setProperty("hibernate.dialect", this.environment.getProperty("hibernate.dialect"));
        hibernateProperties.setProperty("hibernate.show_sql", "true");

        return hibernateProperties;
    }
}
