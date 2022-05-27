package view;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.logging.Level;
import java.util.logging.Logger;

/**
 *
 * @author bruno.dearaujo
 */
public class MonitoramentoSlack {
    gravarArq gravar = new gravarArq();
    private String nome;
    private List<Double> percentuais;

    public MonitoramentoSlack(String nome) {
        this.nome = nome;
        percentuais = new ArrayList<>();
    }
                   
    public Boolean validarMetrica(Integer percentualDeAlerta, Double percentualCapturado, String mensagem) {
      percentuais.add(percentualCapturado);
        if (percentuais.size() >= 5) {
            for (Double double1 : percentuais) {
                if (double1 >= percentualDeAlerta){
                    try {
                        SlackIntegration.enviarMensagem(mensagem);
                        gravar.criarLog("Mensagem enviada para o Slack, Mensagem:" + mensagem);
                    } catch (IOException ex) {
                        Logger.getLogger(MonitoramentoSlack.class.getName()).log(Level.SEVERE, null, ex);
                        gravar.criarLog("Exception: " + ex);
                    }
                    percentuais.clear();
                    return true;
                }
            }
        }
        return false;
    }
}

   