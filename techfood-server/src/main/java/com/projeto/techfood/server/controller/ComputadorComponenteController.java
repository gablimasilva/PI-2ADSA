/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.projeto.techfood.server.controller;

import com.projeto.techfood.server.model.ComputadorComponenteModel;
import com.projeto.techfood.server.molde.ComputadorComponente;
import java.util.List;

/**
 *
 * @author lucas.caitano
 */
public class ComputadorComponenteController {
    private ComputadorComponenteModel ccModel;
    
    public ComputadorComponenteController(){
        ccModel = new ComputadorComponenteModel();
    }
    
    public List<ComputadorComponente> buscarComponentesAzure(Long idComponente){
        return ccModel.buscarComponentesAzure(idComponente);
    }
    
    public List<ComputadorComponente> buscarComponentesLocal(Long idComponente){
        
        return ccModel.buscarComponentesLocal(idComponente);
    }
    
    public void inserirComponenteAzure(Long fkComputador, Long fkComponente, Double valorTotalComponente){
        ccModel.inserirComponenteAzure(fkComputador, fkComponente, valorTotalComponente);
    }
    
    public void inserirComponenteLocal(Long fkComputador, Long fkComponente, Double valorTotalComponente){
        ccModel.inserirComponenteLocal(fkComputador, fkComponente, valorTotalComponente);
    }
}
