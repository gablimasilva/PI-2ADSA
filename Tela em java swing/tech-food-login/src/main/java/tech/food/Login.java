package tech.food;

/**
 *
 * @author bruno.dearaujo
 */
public class Login extends javax.swing.JFrame {

    /**
     * Creates new form Login
     */
    public Login() {
        initComponents();
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
        login = new javax.swing.JLabel();
        adm = new javax.swing.JLabel();
        usuario = new javax.swing.JLabel();
        inputAdm = new javax.swing.JTextField();
        inputUsuario = new javax.swing.JTextField();
        btnLogar = new javax.swing.JButton();
        passwdUsuario = new javax.swing.JPasswordField();
        passwdAdm = new javax.swing.JPasswordField();
        jPanel4 = new javax.swing.JPanel();

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

        setDefaultCloseOperation(javax.swing.WindowConstants.EXIT_ON_CLOSE);
        setResizable(false);
        getContentPane().setLayout(new org.netbeans.lib.awtextra.AbsoluteLayout());

        login.setFont(new java.awt.Font("Dialog", 1, 36)); // NOI18N
        login.setText("Login");
        getContentPane().add(login, new org.netbeans.lib.awtextra.AbsoluteConstraints(130, 70, 160, 40));

        adm.setFont(new java.awt.Font("Dialog", 0, 12)); // NOI18N
        adm.setText("Administrador");
        getContentPane().add(adm, new org.netbeans.lib.awtextra.AbsoluteConstraints(50, 180, -1, -1));

        usuario.setFont(new java.awt.Font("Dialog", 0, 12)); // NOI18N
        usuario.setText("Usuário");
        getContentPane().add(usuario, new org.netbeans.lib.awtextra.AbsoluteConstraints(260, 180, -1, -1));

        inputAdm.setBorder(javax.swing.BorderFactory.createEtchedBorder());
        inputAdm.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                inputAdmActionPerformed(evt);
            }
        });
        getContentPane().add(inputAdm, new org.netbeans.lib.awtextra.AbsoluteConstraints(40, 250, 100, 30));

        inputUsuario.setBorder(javax.swing.BorderFactory.createEtchedBorder());
        getContentPane().add(inputUsuario, new org.netbeans.lib.awtextra.AbsoluteConstraints(230, 250, 100, 30));

        btnLogar.setBackground(new java.awt.Color(153, 153, 153));
        btnLogar.setFont(new java.awt.Font("Dialog", 0, 14)); // NOI18N
        btnLogar.setForeground(new java.awt.Color(0, 0, 0));
        btnLogar.setText("Entrar");
        btnLogar.setBorder(javax.swing.BorderFactory.createLineBorder(new java.awt.Color(0, 0, 0)));
        btnLogar.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                btnLogarActionPerformed(evt);
            }
        });
        getContentPane().add(btnLogar, new org.netbeans.lib.awtextra.AbsoluteConstraints(110, 360, 150, 40));

        passwdUsuario.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                passwdUsuarioActionPerformed(evt);
            }
        });
        getContentPane().add(passwdUsuario, new org.netbeans.lib.awtextra.AbsoluteConstraints(230, 290, 100, 30));

        passwdAdm.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                passwdAdmActionPerformed(evt);
            }
        });
        getContentPane().add(passwdAdm, new org.netbeans.lib.awtextra.AbsoluteConstraints(40, 290, 100, 30));

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

        pack();
    }// </editor-fold>//GEN-END:initComponents

    private void btnLogarActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_btnLogarActionPerformed
        String login = "", senha = "";
        Boolean logado = false;

        if (inputAdm.getText().equals("") && inputUsuario.getText().equals("")) {
            System.out.println("Insira um Usuário!");
        } else if (passwdAdm.getText().equals("") && passwdUsuario.getText().equals("")) {
            System.out.println("Insira uma Senha!");
        } else {
            System.out.println("Logado com Sucesso!");
            logado = true;
        }

        // TODO add your handling code here:
    }//GEN-LAST:event_btnLogarActionPerformed

    private void inputAdmActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_inputAdmActionPerformed
        // TODO add your handling code here:
    }//GEN-LAST:event_inputAdmActionPerformed

    private void passwdAdmActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_passwdAdmActionPerformed
        // TODO add your handling code here:
    }//GEN-LAST:event_passwdAdmActionPerformed

    private void passwdUsuarioActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_passwdUsuarioActionPerformed
        // TODO add your handling code here:
    }//GEN-LAST:event_passwdUsuarioActionPerformed

    /**
     * @param args the command line arguments
     */
    public static void main(String args[]) {
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
    }

    // Variables declaration - do not modify//GEN-BEGIN:variables
    private javax.swing.JLabel adm;
    private javax.swing.JButton btnLogar;
    private javax.swing.JTextField inputAdm;
    private javax.swing.JTextField inputUsuario;
    private javax.swing.JLabel jLabel1;
    private javax.swing.JPanel jPanel1;
    private javax.swing.JPanel jPanel2;
    private javax.swing.JPanel jPanel3;
    private javax.swing.JPanel jPanel4;
    private javax.swing.JLabel login;
    private javax.swing.JPasswordField passwdAdm;
    private javax.swing.JPasswordField passwdUsuario;
    private javax.swing.JLabel usuario;
    // End of variables declaration//GEN-END:variables
}