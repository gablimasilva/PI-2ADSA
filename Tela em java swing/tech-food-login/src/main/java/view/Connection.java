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
        dataSource.setUrl("jdbc:mysql://localhost:3306/mydb");
        dataSource.setUsername("root");
        dataSource.setPassword("programador.2021");
        
        dataSource.set

    }

    public BasicDataSource getDataSource() {
        return dataSource;
    }

}
