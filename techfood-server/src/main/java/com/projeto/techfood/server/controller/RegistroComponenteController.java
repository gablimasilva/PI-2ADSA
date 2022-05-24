/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.projeto.techfood.server.controller;

import com.projeto.techfood.server.model.RegistroComponenteModel;

/**
 *
 * @author lucas.caitano
 */
public class RegistroComponenteController {
    private RegistroComponenteModel registroModel;

    public RegistroComponenteController() {
        registroModel = new RegistroComponenteModel();
    }
    
    
    
    public void inserirRegistrosAzure(Long fkComputadorComponente, Double valorConsumido){
        registroModel.inserirRegistrosAzure(fkComputadorComponente, valorConsumido);
    }
    
    public void inserirRegistrosLocal(Long fkComputadorComponente, Double valorConsumido){
        registroModel.inserirRegistrosLocal(fkComputadorComponente, valorConsumido);
    }
}
