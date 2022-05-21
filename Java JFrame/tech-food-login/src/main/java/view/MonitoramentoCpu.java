package view;

/**
 *
 * @author bruno.dearaujo
 */
public class MonitoramentoCpu extends MonitoramentoSlack {

    public MonitoramentoCpu() {
        super("cpu");
    }
    
    public Boolean monitorarCpu70(Double percentualCapturado){
        return validarMetrica(70, percentualCapturado, "CPU alcançou 70%");
    }
    
    public Boolean monitorarCpu90(Double percentualCapturado){
       return validarMetrica(90, percentualCapturado, "CPU alcançou 90%");
    }
    

}
