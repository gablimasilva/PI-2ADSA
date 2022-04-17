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

        dataSource.setDriverClassName("com.mysql.cj.jdbc.Driver");
        dataSource.setUrl("jdbc:mysql://localhost:3306/techfood");
        dataSource.setUsername("root");
        dataSource.setPassword("");

    }

    public BasicDataSource getDataSource() {
        return dataSource;
    }

}
