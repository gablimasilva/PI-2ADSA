/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.projeto.techfood.server.model;

import com.projeto.techfood.server.database.Connection;
import org.springframework.jdbc.core.JdbcTemplate;

/**
 *
 * @author lucas.caitano
 */
public class Model {
    protected JdbcTemplate templateAzure;
    protected JdbcTemplate templateLocal;
    
    public Model(){
        Connection conexao = new Connection();
        templateAzure = new JdbcTemplate(conexao.getDataSourceAzure());
        templateLocal = new JdbcTemplate(conexao.getDataSourceLocal());
    }
}
