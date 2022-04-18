package view;

import java.awt.Color;
import java.awt.Image;
import java.util.List;
import javax.swing.Icon;
import javax.swing.ImageIcon;
import javax.swing.JLabel;
import javax.xml.transform.Templates;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;

/**
 *
 * @author bruno.dearaujo
 */
public class Login extends javax.swing.JFrame {

    public static void main(String[] args) {
        /* Set the Nimbus look and feel */
        //<editor-fold defaultstate="collapsed" desc=" Look and feel setting code (optional) ">
        /* If Nimbus (introduced in Java SE 6) is not available, stay with the default look and feel.
         * For details see http://download.oracle.com/javase/tutorial/uiswing/lookandfeel/plaf.html 
         */
        try {
            for (javax.swing.UIManager.LookAndFeelInfo info : javax.swing.UIManager.getInstalledLookAndFeels()) {
                if ("Nimbus".equals(info.getName())) {
                    javax.swing.UIManager.setLookAndFeel(info.getClassName());
                    break;
                }
            }
        } catch (ClassNotFoundException ex) {
            java.util.logging.Logger.getLogger(Login.class.getName()).log(java.util.logging.Level.SEVERE, null, ex);
        } catch (InstantiationException ex) {
            java.util.logging.Logger.getLogger(Login.class.getName()).log(java.util.logging.Level.SEVERE, null, ex);
        } catch (IllegalAccessException ex) {
            java.util.logging.Logger.getLogger(Login.class.getName()).log(java.util.logging.Level.SEVERE, null, ex);
        } catch (javax.swing.UnsupportedLookAndFeelException ex) {
            java.util.logging.Logger.getLogger(Login.class.getName()).log(java.util.logging.Level.SEVERE, null, ex);
        }
        //</editor-fold>

        /* Create and display the form */
        java.awt.EventQueue.invokeLater(new Runnable() {
            public void run() {
                new Login().setVisible(true);
            }
        });
        // Esse objeto guarda as configurações do banco de dados                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        
        Connection config = new Connection();

        JdbcTemplate template = new JdbcTemplate(config.getDataSource());
    }

    /**
     * Creates new form Login
     */
    public Login() {
        initComponents();
        // Deixando a tela no centro;
        setLocationRelativeTo(null);
    }

    /**
     * This method is called from within the constructor to initialize the form.
     * WARNING: Do NOT modify this code. The content of this method is always
     * regenerated by the Form Editor.
     */
    @SuppressWarnings("unchecked")
    // <editor-fold defaultstate="collapsed" desc="Generated Code">//GEN-BEGIN:initComponents
    private void initComponents() {

        jPanel1 = new javax.swing.JPanel();
        jPanel2 = new javax.swing.JPanel();
        jLabel1 = new javax.swing.JLabel();
        jPanel3 = new javax.swing.JPanel();
        jLabel5 = new javax.swing.JLabel();
        usuario = new javax.swing.JLabel();
        inputUsuario = new javax.swing.JTextField();
        btnLogar = new javax.swing.JButton();
        passwdUsuario = new javax.swing.JPasswordField();
        jPanel4 = new javax.swing.JPanel();
        jLabel3 = new javax.swing.JLabel();
        jPanel5 = new javax.swing.JPanel();
        login = new javax.swing.JLabel();
        jLabel6 = new javax.swing.JLabel();

        javax.swing.GroupLayout jPanel1Layout = new javax.swing.GroupLayout(jPanel1);
        jPanel1.setLayout(jPanel1Layout);
        jPanel1Layout.setHorizontalGroup(
            jPanel1Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addGap(0, 100, Short.MAX_VALUE)
        );
        jPanel1Layout.setVerticalGroup(
            jPanel1Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addGap(0, 100, Short.MAX_VALUE)
        );

        javax.swing.GroupLayout jPanel2Layout = new javax.swing.GroupLayout(jPanel2);
        jPanel2.setLayout(jPanel2Layout);
        jPanel2Layout.setHorizontalGroup(
            jPanel2Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addGap(0, 100, Short.MAX_VALUE)
        );
        jPanel2Layout.setVerticalGroup(
            jPanel2Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addGap(0, 100, Short.MAX_VALUE)
        );

        jLabel1.setText("jLabel1");

        javax.swing.GroupLayout jPanel3Layout = new javax.swing.GroupLayout(jPanel3);
        jPanel3.setLayout(jPanel3Layout);
        jPanel3Layout.setHorizontalGroup(
            jPanel3Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addGap(0, 100, Short.MAX_VALUE)
        );
        jPanel3Layout.setVerticalGroup(
            jPanel3Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addGap(0, 100, Short.MAX_VALUE)
        );

        jLabel5.setText("jLabel5");

        setDefaultCloseOperation(javax.swing.WindowConstants.EXIT_ON_CLOSE);
        setTitle("Tech Food");
        setBackground(new java.awt.Color(255, 211, 80));
        setLocation(new java.awt.Point(0, 0));
        setMinimumSize(new java.awt.Dimension(400, 500));
        setResizable(false);
        setSize(new java.awt.Dimension(0, 0));
        getContentPane().setLayout(new org.netbeans.lib.awtextra.AbsoluteLayout());

        usuario.setFont(new java.awt.Font("Dialog", 0, 14)); // NOI18N
        usuario.setForeground(new java.awt.Color(117, 66, 0));
        usuario.setText("IP da Máquina");
        getContentPane().add(usuario, new org.netbeans.lib.awtextra.AbsoluteConstraints(60, 190, -1, -1));

        inputUsuario.setBorder(javax.swing.BorderFactory.createLineBorder(new java.awt.Color(255, 211, 80)));
        inputUsuario.setName(""); // NOI18N
        JLabel computerIcon = new JLabel();
        computerIcon.setBounds(275, 4, 20, 20);
        computerIcon.setIcon(new javax.swing.ImageIcon(new javax.swing.ImageIcon(getClass().getResource("/computer-32.png")).getImage().getScaledInstance(20, 20, Image.SCALE_DEFAULT)));

        inputUsuario.add(computerIcon);
        inputUsuario.addFocusListener(new java.awt.event.FocusAdapter() {
            public void focusGained(java.awt.event.FocusEvent evt) {
                inputUsuarioFocusGained(evt);
            }
            public void focusLost(java.awt.event.FocusEvent evt) {
                inputUsuarioFocusLost(evt);
            }
        });
        inputUsuario.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                inputUsuarioActionPerformed(evt);
            }
        });
        getContentPane().add(inputUsuario, new org.netbeans.lib.awtextra.AbsoluteConstraints(60, 210, 300, 30));

        btnLogar.setBackground(new java.awt.Color(243, 242, 241));
        btnLogar.setFont(new java.awt.Font("Dialog", 0, 14)); // NOI18N
        btnLogar.setForeground(new java.awt.Color(117, 66, 0));
        btnLogar.setText("Login");
        btnLogar.setBorder(javax.swing.BorderFactory.createLineBorder(new java.awt.Color(117, 66, 0)));
        btnLogar.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                btnLogarActionPerformed(evt);
            }
        });
        getContentPane().add(btnLogar, new org.netbeans.lib.awtextra.AbsoluteConstraints(140, 360, 150, 40));

        passwdUsuario.setBorder(javax.swing.BorderFactory.createLineBorder(new java.awt.Color(255, 211, 80)));
        passwdUsuario.setCursor(new java.awt.Cursor(java.awt.Cursor.TEXT_CURSOR));
        passwdUsuario.setDisabledTextColor(new java.awt.Color(117, 91, 95));
        JLabel iconKey = new JLabel();
        iconKey.setBounds(275, 4, 20, 20);
        iconKey.setIcon(new javax.swing.ImageIcon(new javax.swing.ImageIcon(getClass().getResource("/key-32.png")).getImage().getScaledInstance(20, 20, Image.SCALE_DEFAULT)));

        passwdUsuario.add(iconKey);
        passwdUsuario.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                passwdUsuarioActionPerformed(evt);
            }
        });
        getContentPane().add(passwdUsuario, new org.netbeans.lib.awtextra.AbsoluteConstraints(60, 290, 300, 30));

        javax.swing.GroupLayout jPanel4Layout = new javax.swing.GroupLayout(jPanel4);
        jPanel4.setLayout(jPanel4Layout);
        jPanel4Layout.setHorizontalGroup(
            jPanel4Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addGap(0, 0, Short.MAX_VALUE)
        );
        jPanel4Layout.setVerticalGroup(
            jPanel4Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addGap(0, 0, Short.MAX_VALUE)
        );

        getContentPane().add(jPanel4, new org.netbeans.lib.awtextra.AbsoluteConstraints(296, 447, -1, -1));

        jLabel3.setFont(new java.awt.Font("Dialog", 0, 14)); // NOI18N
        jLabel3.setForeground(new java.awt.Color(117, 66, 0));
        jLabel3.setText("Senha");
        getContentPane().add(jLabel3, new org.netbeans.lib.awtextra.AbsoluteConstraints(60, 270, -1, -1));

        jPanel5.setBackground(new java.awt.Color(255, 211, 80));

        login.setFont(new java.awt.Font("Dialog", 1, 36)); // NOI18N
        login.setForeground(new java.awt.Color(117, 66, 0));
        login.setText("Login");

        jLabel6.setFont(new java.awt.Font("Dialog", 1, 36)); // NOI18N
        jLabel6.setForeground(new java.awt.Color(177, 66, 0));
        jLabel6.setText("Login");

        javax.swing.GroupLayout jPanel5Layout = new javax.swing.GroupLayout(jPanel5);
        jPanel5.setLayout(jPanel5Layout);
        jPanel5Layout.setHorizontalGroup(
            jPanel5Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addGroup(javax.swing.GroupLayout.Alignment.TRAILING, jPanel5Layout.createSequentialGroup()
                .addContainerGap(javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE)
                .addComponent(login, javax.swing.GroupLayout.PREFERRED_SIZE, 160, javax.swing.GroupLayout.PREFERRED_SIZE)
                .addGap(688, 688, 688))
            .addGroup(jPanel5Layout.createSequentialGroup()
                .addGap(159, 159, 159)
                .addComponent(jLabel6, javax.swing.GroupLayout.PREFERRED_SIZE, 138, javax.swing.GroupLayout.PREFERRED_SIZE)
                .addContainerGap(javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE))
        );
        jPanel5Layout.setVerticalGroup(
            jPanel5Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addGroup(jPanel5Layout.createSequentialGroup()
                .addGap(28, 28, 28)
                .addComponent(jLabel6)
                .addGap(212, 212, 212)
                .addComponent(login, javax.swing.GroupLayout.PREFERRED_SIZE, 40, javax.swing.GroupLayout.PREFERRED_SIZE)
                .addContainerGap(javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE))
        );

        getContentPane().add(jPanel5, new org.netbeans.lib.awtextra.AbsoluteConstraints(0, 0, 420, 110));

        pack();
    }// </editor-fold>//GEN-END:initComponents

    private void btnLogarActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_btnLogarActionPerformed

        Connection config = new Connection();
        JdbcTemplate login = new JdbcTemplate(config.getDataSource());

        String codigo = "", senha = "";
        Boolean logado = false;

        if (inputUsuario.getText().equals("")) {
            System.out.println("Insira seu IP!");
        } else if (passwdUsuario.getText().equals("")) {
            System.out.println("Insira sua senha!");
        } else {
            List<Computador> listaComputador = login.query("select * from computador where ipComputador = ? and senhaComputador = ?;",
                    new BeanPropertyRowMapper<>(Computador.class), inputUsuario.getText(), passwdUsuario.getText());
            if (listaComputador.isEmpty()) {
                System.out.println("IP e/ou senha inválidos!");
            }
            for (Computador computador : listaComputador) {
                System.out.println(computador.getIpComputador());
                System.out.println(computador.getSenhaComputador());
                dispose();
                new Monitoramento(computador).setVisible(true);

                System.out.println("Logado com Sucesso!");
                logado = true;
            }
        }
        // TODO add your handling code here:
    }//GEN-LAST:event_btnLogarActionPerformed

    private void passwdUsuarioActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_passwdUsuarioActionPerformed
        // TODO add your handling code here:
    }//GEN-LAST:event_passwdUsuarioActionPerformed

    private void inputUsuarioActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_inputUsuarioActionPerformed
        // TODO add your handling code here:
    }//GEN-LAST:event_inputUsuarioActionPerformed

    private void inputUsuarioFocusLost(java.awt.event.FocusEvent evt) {//GEN-FIRST:event_inputUsuarioFocusLost
        // TODO add your handling code here:
        if (inputUsuario.getText().equals("")) {
            inputUsuario.setText("Insira um IP");
            inputUsuario.setForeground(new Color(153, 153, 153));
        }
    }//GEN-LAST:event_inputUsuarioFocusLost

    private void inputUsuarioFocusGained(java.awt.event.FocusEvent evt) {//GEN-FIRST:event_inputUsuarioFocusGained
        // TODO add your handling code here:
        if (inputUsuario.getText().equals("Insira um IP")) {
            inputUsuario.setText("");
            inputUsuario.setForeground(new Color(153, 153, 153));
        }
    }//GEN-LAST:event_inputUsuarioFocusGained

    /**
     * @param args the command line arguments
     */

    // Variables declaration - do not modify//GEN-BEGIN:variables
    private javax.swing.JButton btnLogar;
    private javax.swing.JTextField inputUsuario;
    private javax.swing.JLabel jLabel1;
    private javax.swing.JLabel jLabel3;
    private javax.swing.JLabel jLabel5;
    private javax.swing.JLabel jLabel6;
    private javax.swing.JPanel jPanel1;
    private javax.swing.JPanel jPanel2;
    private javax.swing.JPanel jPanel3;
    private javax.swing.JPanel jPanel4;
    private javax.swing.JPanel jPanel5;
    private javax.swing.JLabel login;
    private javax.swing.JPasswordField passwdUsuario;
    private javax.swing.JLabel usuario;
    // End of variables declaration//GEN-END:variables
}
