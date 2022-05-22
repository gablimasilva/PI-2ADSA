package view;

import org.apache.commons.dbcp2.BasicDataSource;

/**
 *
 * @author bruno.dearaujo
 */
public class Connection {

    private BasicDataSource dataSource;
    private BasicDataSource dataSourceLocal;

    public Connection() {
        dataSource = new BasicDataSource();
        dataSourceLocal = new BasicDataSource();

        // Local
        dataSourceLocal.setDriverClassName("com.mysql.cj.jdbc.Driver");
        dataSourceLocal.setUrl("jdbc:mysql://localhost:3306/techfood?autoReconnect=true&useSSL=false");
        dataSourceLocal.setUsername("root");
        dataSourceLocal.setPassword("urubu100");

        // Cloud
        dataSource.setDriverClassName("com.microsoft.sqlserver.jdbc.SQLServerDriver");
        dataSource.setUrl("jdbc:sqlserver://projeto-totem.database.windows.net:1433;database=projeto-totem;user=FoodTech@projeto-totem;password=2ads@projeto;encrypt=true;trustServerCertificate=false;hostNameInCertificate=*.database.windows.net;loginTimeout=30;");

    }

    public BasicDataSource getDataSource() {
        return dataSource;
    }

    public BasicDataSource getDataSourceLocal() {
        return dataSourceLocal;
    }

}
