package com.projeto.techfood.server.molde;

/**
 *
 * @author lucas.caitano
 */
public class ComputadorComponente {
    private Long idComputadorComponente;
    private Long fkComputador;
    private Long fkComponente;
    private Double totalComponente;
    private String unidadeMedida;
    
    public ComputadorComponente(){
        
    }

    public Long getIdComputadorComponente() {
        return idComputadorComponente;
    }

    public void setIdComputadorComponente(Long idComputadorComponente) {
        this.idComputadorComponente = idComputadorComponente;
    }

    public Long getFkComputador() {
        return fkComputador;
    }

    public void setFkComputador(Long fkComputador) {
        this.fkComputador = fkComputador;
    }

    public Long getFkComponente() {
        return fkComponente;
    }

    public void setFkComponente(Long fkComponente) {
        this.fkComponente = fkComponente;
    }

    public Double getTotalComponente() {
        return totalComponente;
    }

    public void setTotalComponente(Double totalComponente) {
        this.totalComponente = totalComponente;
    }

    public String getUnidadeMedida() {
        return unidadeMedida;
    }

    public void setUnidadeMedida(String unidadeMedida) {
        this.unidadeMedida = unidadeMedida;
    }

    

    @Override
    public String toString() {
        return "ComputadorComponente{" + "idComputadorComponente=" + idComputadorComponente + ", fkComputador=" + fkComputador + ", fkComponente=" + fkComponente + ", totalComponente=" + totalComponente + ", unidadeMedida=" + unidadeMedida + '}';
    }
    
    
}
