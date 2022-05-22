package view;

/**
 *
 * @author bruno.dearaujo
 */
public class MonitoramentoDisco extends MonitoramentoSlack{
    

    public MonitoramentoDisco() {
        super("disco");
    }
    
    public Boolean monitorarDisco70(Double percentualCapturado){
        return validarMetrica(70, percentualCapturado, "Disco alcançou 70%");
    }
    
    public Boolean monitorarDisco90(Double percentualCapturado){
       return validarMetrica(90, percentualCapturado, "Disco alcançou 90%");
    }
    
    
}
