package view;

/**
 *
 * @author bruno.dearaujo
 */
public class Computador {

    private String ipComputador;
    private Integer idComputador;
    private String senhaComputador;

    public Computador(String ip) {
        this.ipComputador = ip;
        this.senhaComputador = "";

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

    @Override
    public String toString() {
        return "Computador{" + "ipComputador=" + ipComputador + ", idComputador=" + idComputador + ", senhaComputador=" + senhaComputador + '}';
    }
    
    
}
