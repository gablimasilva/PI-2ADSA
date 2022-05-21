package view;

/**
 *
 * @author bruno.dearaujo
 */
public class MonitoramentoRam extends MonitoramentoSlack{
    
    public MonitoramentoRam() {
        super("ram");
    }
    
    public Boolean monitorarRam70(Double percentualCapturado){
        return validarMetrica(70, percentualCapturado, "Ram alcançou 70%");
    }
    
    public Boolean monitorarRam90(Double percentualCapturado){
       return validarMetrica(90, percentualCapturado, "Ram alcançou 90%");
    }
}
