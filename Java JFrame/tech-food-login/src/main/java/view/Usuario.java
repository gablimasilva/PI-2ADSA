package view;

/**
 *
 * @author bruno.dearaujo
 */
public class Usuario {

    private String ip;
    private String senha;

    public Usuario(String ip) {
        this.ip = ip;
        this.senha = "";

    }

    public Usuario() {
    }

    ;

    public String getIp() {
        return ip;
    }

    public void setIp(String ip) {
        this.ip = ip;
    }

    public String getSenha() {
        return senha;
    }

    public void setSenha(String senha) {
        this.senha = senha;
    }

}
