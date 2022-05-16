package view;

import com.github.britooo.looca.api.core.Looca;
import java.io.IOException;
import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import org.json.JSONObject;

/**
 *
 * @author bruno.dearaujo
 */
// classe que deixaremos configurado para o envio das mensagens ao nosso workspace no Slack
public class Slack {
    
    //responsável por realizar as requisições e obter as respostas, caso tenha.
    private static final HttpClient client = HttpClient.newHttpClient();
    // inicializando o atributo com o valor da URL, referente ao nosso Workspace
    private static final String URL = "https://hooks.slack.com/services/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";

    // Método estático para padronizar o envio das mensagens
    public static void enviarMensagem(JSONObject content) throws IOException, InterruptedException {

        HttpRequest request = HttpRequest.newBuilder(
                URI.create(URL))
                .header("accept", "application/json")
                .POST(HttpRequest.BodyPublishers.ofString(content.toString()))
                .build();

        // objeto que irá armazenar as respostas do cliente 
        HttpResponse<String> response = client.send(request, HttpResponse.BodyHandlers.ofString());

        System.out.println(String.format("Status: %s", response.statusCode()));
        System.out.println(String.format("Response: %s", response.body()));
    }
}
