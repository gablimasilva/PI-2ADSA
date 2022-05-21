package view;

import com.github.seratch.jslack.Slack;
import com.github.britooo.looca.api.core.Looca;
import com.github.seratch.jslack.api.webhook.Payload;
import com.github.seratch.jslack.api.webhook.WebhookResponse;
import org.springframework.jdbc.core.JdbcTemplate;
import java.io.IOException;

/**
 *
 * @author bruno.dearaujo
 */
// classe que deixaremos configurado para o envio das mensagens ao nosso workspace no Slack
public class SlackIntegration {

    // inicializando o atributo com o valor da URL, referente ao nosso Workspace
    private static String url = "https://hooks.slack.com/services/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";
    private static String token = "xoxb-3555187353749-3558099940498-tNE0pqeXosEmdHu9M5FIC3Sn";
    private static String canal = "canal-notificações";
  

    // Método estático para padronizar o envio das mensagens

    public static void enviarMensagem(String mensagem) throws IOException {
        try {
            StringBuilder msg = new StringBuilder();
            msg.append(mensagem);
            
            Payload payload = Payload.builder().channel(canal).text(msg.toString()).build();

           WebhookResponse response = Slack.getInstance().send(url, payload);

        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}

        
        
