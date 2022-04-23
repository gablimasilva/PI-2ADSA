package view;

import com.github.britooo.looca.api.core.Looca;
import com.github.britooo.looca.api.util.Conversor;
import java.util.List;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;

/**
 *
 * @author bruno.dearaujo
 */
public class Monitoramento extends javax.swing.JFrame {
    
    /**
     * Creates new form Monitoramento
     */
    private Computador computador;

    public Monitoramento(Computador computador) {
        this.computador = computador;
        // Deixando a tela no centro;
        setLocationRelativeTo(null);
        initComponents();
        sistemaOperacional();
        monitoramentoGeral();
    }

    /**
     * This method is called from within the constructor to initialize the form.
     * WARNING: Do NOT modify this code. The content of this method is always
     * regenerated by the Form Editor.
     */
    @SuppressWarnings("unchecked")
    // <editor-fold defaultstate="collapsed" desc="Generated Code">//GEN-BEGIN:initComponents
    private void initComponents() {

        jLabel1 = new javax.swing.JLabel();
        jLabel2 = new javax.swing.JLabel();
        jLabel3 = new javax.swing.JLabel();
        jLabel4 = new javax.swing.JLabel();
        jLabel5 = new javax.swing.JLabel();
        sistemaOperacional = new javax.swing.JLabel();
        dadosCpu = new javax.swing.JLabel();
        dadosDisco = new javax.swing.JLabel();
        dadosRam = new javax.swing.JLabel();
        jLabel10 = new javax.swing.JLabel();
        hostName = new javax.swing.JLabel();

        setDefaultCloseOperation(javax.swing.WindowConstants.EXIT_ON_CLOSE);

        jLabel1.setFont(new java.awt.Font("Dialog", 0, 18)); // NOI18N
        jLabel1.setForeground(new java.awt.Color(177, 66, 0));
        jLabel1.setText("Monitoramento das máquinas");

        jLabel2.setText("Sistema Operacional");

        jLabel3.setText("CPU");

        jLabel4.setText("Disco");

        jLabel5.setText("Ram");

        sistemaOperacional.setText("| ___________________");

        dadosCpu.setText("| __________________");

        dadosDisco.setText("| ___________________");

        dadosRam.setText("| ___________________");

        jLabel10.setText("Hostname");

        hostName.setText("| ___________________");

        javax.swing.GroupLayout layout = new javax.swing.GroupLayout(getContentPane());
        getContentPane().setLayout(layout);
        layout.setHorizontalGroup(
            layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addGroup(layout.createSequentialGroup()
                .addGap(52, 52, 52)
                .addGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                    .addComponent(jLabel1, javax.swing.GroupLayout.PREFERRED_SIZE, 256, javax.swing.GroupLayout.PREFERRED_SIZE)
                    .addGroup(layout.createSequentialGroup()
                        .addGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                            .addComponent(jLabel3)
                            .addComponent(jLabel4)
                            .addComponent(jLabel5)
                            .addComponent(jLabel2)
                            .addComponent(jLabel10))
                        .addGap(28, 28, 28)
                        .addGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                            .addComponent(sistemaOperacional, javax.swing.GroupLayout.PREFERRED_SIZE, 219, javax.swing.GroupLayout.PREFERRED_SIZE)
                            .addComponent(dadosDisco)
                            .addComponent(dadosCpu)
                            .addComponent(dadosRam)
                            .addComponent(hostName))))
                .addContainerGap(91, Short.MAX_VALUE))
        );
        layout.setVerticalGroup(
            layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addGroup(layout.createSequentialGroup()
                .addGap(30, 30, 30)
                .addComponent(jLabel1, javax.swing.GroupLayout.PREFERRED_SIZE, 35, javax.swing.GroupLayout.PREFERRED_SIZE)
                .addGap(50, 50, 50)
                .addGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)
                    .addComponent(jLabel2)
                    .addComponent(sistemaOperacional))
                .addGap(35, 35, 35)
                .addGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)
                    .addComponent(jLabel3)
                    .addComponent(dadosCpu))
                .addGap(42, 42, 42)
                .addGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)
                    .addComponent(jLabel4)
                    .addComponent(dadosDisco))
                .addGap(38, 38, 38)
                .addGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)
                    .addComponent(jLabel5)
                    .addComponent(dadosRam))
                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED, 42, Short.MAX_VALUE)
                .addGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)
                    .addComponent(jLabel10)
                    .addComponent(hostName))
                .addContainerGap())
        );

        pack();
    }// </editor-fold>//GEN-END:initComponents

    /**
     * @param args the command line arguments
     */
//    public static void main(String args[]) {
//        /* Set the Nimbus look and feel */
//        //<editor-fold defaultstate="collapsed" desc=" Look and feel setting code (optional) ">
//        /* If Nimbus (introduced in Java SE 6) is not available, stay with the default look and feel.
//         * For details see http://download.oracle.com/javase/tutorial/uiswing/lookandfeel/plaf.html 
//         */
//        try {
//            for (javax.swing.UIManager.LookAndFeelInfo info : javax.swing.UIManager.getInstalledLookAndFeels()) {
//                if ("Nimbus".equals(info.getName())) {
//                    javax.swing.UIManager.setLookAndFeel(info.getClassName());
//                    break;
//                }
//            }
//        } catch (ClassNotFoundException ex) {
//            java.util.logging.Logger.getLogger(Monitoramento.class.getName()).log(java.util.logging.Level.SEVERE, null, ex);
//        } catch (InstantiationException ex) {
//            java.util.logging.Logger.getLogger(Monitoramento.class.getName()).log(java.util.logging.Level.SEVERE, null, ex);
//        } catch (IllegalAccessException ex) {
//            java.util.logging.Logger.getLogger(Monitoramento.class.getName()).log(java.util.logging.Level.SEVERE, null, ex);
//        } catch (javax.swing.UnsupportedLookAndFeelException ex) {
//            java.util.logging.Logger.getLogger(Monitoramento.class.getName()).log(java.util.logging.Level.SEVERE, null, ex);
//        }
//        //</editor-fold>
//        Looca looca = new Looca();
//
//        /* Create and display the form */
//        java.awt.EventQueue.invokeLater(new Runnable() {
//            public void run() {
//                new Monitoramento().setVisible(true);
//            }
//
//        });
//
//    }
    public void monitoramentoGeral() {

        // Instâncias de captura dos dados
        Looca looca = new Looca();
        Conversor conversor = new Conversor();

        // Instâncias para inserir no banco
        Connection config = new Connection();
        JdbcTemplate monitorar = new JdbcTemplate(config.getDataSource());

        List listaComponente = monitorar.queryForList("select * from computadorComponente where fkComputador = ?", computador.getidComputador());

        System.out.println(listaComponente);

        new Thread(new Runnable() {
            @Override
            public void run() {

                try {
                    while (true) {

                        System.out.println(computador.toString());
                        String exibirDadosDisco = Conversor.formatarBytes(looca.getGrupoDeDiscos().getVolumes().get(0).getDisponivel());
                        String exibirDadosCpu = looca.getProcessador().getUso().toString();
                        String exibirDadosRam = "Em Uso:" + Conversor.formatarBytes(looca.getMemoria().getEmUso())
                                + "   |  Total:" + (Conversor.formatarBytes(looca.getMemoria().getTotal()));
                        String exibirHostname = computador.getHostnameComputador();

                        dadosCpu.setText(exibirDadosCpu);
                        dadosDisco.setText(exibirDadosDisco);
                        dadosRam.setText(exibirDadosRam);
                        hostName.setText(exibirHostname);
                        Thread.sleep(5000);
                    }
                } catch (Exception e) {
                    System.out.println("Erro de leitura!");
                    System.out.println(e);
                }
            }
        }).start();
    }

//    public void hostName() {
//        Looca looca = new Looca();
//        hostName.setText(looca.getProcessador().getIdentificador());
//    }

    public void sistemaOperacional() {
        Looca looca = new Looca();
        sistemaOperacional.setText(looca.getSistema().getSistemaOperacional());
    }

    // Variables declaration - do not modify//GEN-BEGIN:variables
    private javax.swing.JLabel dadosCpu;
    private javax.swing.JLabel dadosDisco;
    private javax.swing.JLabel dadosRam;
    private javax.swing.JLabel hostName;
    private javax.swing.JLabel jLabel1;
    private javax.swing.JLabel jLabel10;
    private javax.swing.JLabel jLabel2;
    private javax.swing.JLabel jLabel3;
    private javax.swing.JLabel jLabel4;
    private javax.swing.JLabel jLabel5;
    private javax.swing.JLabel sistemaOperacional;
    // End of variables declaration//GEN-END:variables
}
