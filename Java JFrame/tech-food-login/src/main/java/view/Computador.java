package view;

/**
 *
 * @author bruno.dearaujo
 */
public class Computador {

    private String ipComputador;
    private Integer idComputador;
    private String senhaComputador;
    private String hostName;

    public Computador(String ip) {
        this.ipComputador = ip;
        this.senhaComputador = "";
        this.hostName = "";

    }

    public Computador() {
    }

    public String getIpComputador() {
        return ipComputador;
    }

    public void setIpComputador(String ipComputador) {
        this.ipComputador = ipComputador;
    }

    public String getSenhaComputador() {
        return senhaComputador;
    }

    public void setSenhaComputador(String senhaComputador) {
        this.senhaComputador = senhaComputador;
    }
    public Integer getidComputador() {
        return idComputador;
    }

    public void setIdComputador(Integer idComputador) {
        this.idComputador = idComputador;
    }

    public String getHostName() {
        return hostName;
    }

    public void setHostName(String hostName) {
        this.hostName = hostName;
    }
    
    

    @Override
    public String toString() {
        return String.format("Computador %n"
                + "ID: %d %n"
                + "Hostname: %s %n"
                + "IP: %s %n"
                + "SENHA: %s %n", 
                idComputador, hostName, ipComputador, senhaComputador);
    }
    
    
}
