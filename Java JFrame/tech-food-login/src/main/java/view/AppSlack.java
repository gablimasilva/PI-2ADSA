package view;

import java.io.IOException;
import org.json.JSONObject;

/**
 *
 * @author bruno.dearaujo
 */

public class AppSlack {

    public static void main(String[] args) throws IOException, InterruptedException {

        JSONObject json = new JSONObject();

        json.put("text", "Primeira notificação! :shrug:");

        Slack.enviarMensagem(json);

    }

}
