package view;

import org.apache.commons.dbcp2.BasicDataSource;

/**
 *
 * @author bruno.dearaujo
 */
public class Connection {

    private BasicDataSource dataSource;

    public Connection() {
        dataSource = new BasicDataSource();

        dataSource.setDriverClassName("com.microsoft.sqlserver.jdbc.SQLServerDriver");
        dataSource.setUrl("jdbc:sqlserver://projeto-totem.database.windows.net:1433;database=projeto-totem;user=FoodTech@projeto-totem;password=2ads@projeto;encrypt=true;trustServerCertificate=false;hostNameInCertificate=*.database.windows.net;loginTimeout=30;");
        // dataSource.setUsername("root");
        // dataSource.setPassword("programador.2021");

    }

    public BasicDataSource getDataSource() {
        return dataSource;
    }

}
