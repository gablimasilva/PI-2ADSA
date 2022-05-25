package com.projeto.techfood.server.database;

import org.apache.commons.dbcp2.BasicDataSource;

/**
 *
 * @author bruno.dearaujo
 */
public class Connection {

    private BasicDataSource dataSourceAzure;
    private BasicDataSource dataSourceLocal;

    public Connection() {
        dataSourceAzure = new BasicDataSource();
        dataSourceLocal = new BasicDataSource();

        // Local
        dataSourceLocal.setDriverClassName("com.mysql.cj.jdbc.Driver");
        dataSourceLocal.setUrl("jdbc:mysql://172.17.0.2:3306/techfood?autoReconnect=true&useSSL=false");
        dataSourceLocal.setUsername("root");
        dataSourceLocal.setPassword("urubu100");

        // Cloud
        dataSourceAzure.setDriverClassName("com.microsoft.sqlserver.jdbc.SQLServerDriver");
        dataSourceAzure.setUrl("jdbc:sqlserver://projeto-totem.database.windows.net:1433;database=projeto-totem;user=FoodTech@projeto-totem;password=2ads@projeto;encrypt=true;trustServerCertificate=false;hostNameInCertificate=*.database.windows.net;loginTimeout=30;");

    }

    public BasicDataSource getDataSourceAzure() {
        return dataSourceAzure;
    }

    public BasicDataSource getDataSourceLocal() {
        return dataSourceLocal;
    }

}
