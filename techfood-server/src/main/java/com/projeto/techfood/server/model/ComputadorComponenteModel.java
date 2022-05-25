/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.projeto.techfood.server.model;

import com.projeto.techfood.server.molde.ComputadorComponente;
import java.util.List;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;

/**
 *
 * @author lucas.caitano
 */
public class ComputadorComponenteModel extends Model{
    
    public ComputadorComponenteModel(){
        super();
        
    }
    
    public List<ComputadorComponente> buscarComponentesAzure(Long idComputador){
        List<ComputadorComponente> listaComponentes = 
                templateAzure.query("SELECT * FROM computadorComponente WHERE fkComputador = ?", 
                        new BeanPropertyRowMapper<>(ComputadorComponente.class), idComputador);
        System.out.println("Azure"+listaComponentes);
        return listaComponentes;
    }
    
    public List<ComputadorComponente> buscarComponentesLocal(Long idComputador){
        List<ComputadorComponente> listaComponentes = 
                templateLocal.query("SELECT * FROM computadorComponente WHERE fkComputador = ?", 
                        new BeanPropertyRowMapper<>(ComputadorComponente.class), idComputador);
        System.out.println("Local"+listaComponentes);
        return listaComponentes;
    }
    
    public void inserirComponenteAzure(Long fkComputador, Long fkComponente, Double valorTotalComponente){
        templateAzure.update(
                    "INSERT INTO computadorComponente (fkComputador, fkComponente, TotalComponente, UnidadeDeMedida)"
                    + "VALUES(?, ?, ?, 'GB')",
                    fkComputador, fkComponente, valorTotalComponente);
    }
    
    public void inserirComponenteLocal(Long fkComputador, Long fkComponente, Double valorTotalComponente){
        templateLocal.update(
                    "INSERT INTO computadorComponente (fkComputador, fkComponente, TotalComponente, UnidadeDeMedida)"
                    + "VALUES(?, ?, ?, 'GB')",
                    fkComputador, fkComponente, valorTotalComponente);
    }
}
