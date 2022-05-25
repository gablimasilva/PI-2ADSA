/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.projeto.techfood.server.model;

/**
 *
 * @author lucas.caitano
 */
public class RegistroComponenteModel extends Model{
    public RegistroComponenteModel(){
        super();
    }
    
    public void inserirRegistrosAzure(Long fkComputadorComponente, Double valorConsumido){
        templateAzure.update("INSERT INTO registroComponente "
                + "(fkComputadorComponente, ValorConsumido, DataHora, statusComputador)"
                + "VALUES"
                + "(?, ?, getdate(), 'Ativo')", fkComputadorComponente, valorConsumido);
    }
    
    public void inserirRegistrosLocal(Long fkComputadorComponente, Double valorConsumido){
        templateLocal.update("INSERT INTO registroComponente "
                + "(fkComputadorComponente, ValorConsumido, DataHora, statusComputador)"
                + "VALUES"
                + "(?, ?, now(), 'Ativo')", fkComputadorComponente, valorConsumido);
    }
    
}
