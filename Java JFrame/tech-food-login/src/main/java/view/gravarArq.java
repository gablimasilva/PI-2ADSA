/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package view;

import java.io.BufferedWriter;
import java.io.File;
import java.io.FileWriter;
import java.io.IOException;
import java.io.PrintWriter;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

/**
 *
 * @author gustavo
 */
class gravarArq {
       private DateTimeFormatter dateTimeLog = DateTimeFormatter.ofPattern("[yyyy/MM/dd HH:mm:ss]");
    // Momento para por no nome do arquivo
    private DateTimeFormatter dateTimeName = DateTimeFormatter.ofPattern("yyyy-MM-dd");
    private String momentoLog = dateTimeLog.format(LocalDateTime.now());
    private String momentoNomeLog = dateTimeName.format(LocalDateTime.now());
    private Integer qtdPag = 1;
    private String nomeLog = String.format("src/main/resources/%s_Log_TechFood_%d.txt", momentoNomeLog,qtdPag);
    private Integer qtdLinhas = 0;

    public void criarLog(String message){
        DateTimeFormatter dateTimeForLog = DateTimeFormatter.ofPattern("[yyyy/MM/dd HH:mm:ss]");
        // Momento para por no nome do arquivo
        String horarioLog = dateTimeForLog.format(LocalDateTime.now());
        try (
            FileWriter criarArquivo = new FileWriter(nomeLog, true);
            BufferedWriter buffer = new BufferedWriter(criarArquivo);
            PrintWriter gravarArq = new PrintWriter(criarArquivo)
            ){
            gravarArq.append(String.format("%s -- %s\n", horarioLog, message));
            qtdLinhas++;
            if(qtdLinhas<1000){
                qtdLinhas = 0;
                qtdPag =+1;
                String nomeLog = String.format("src/main/resources/%s_Log_TechFood_%d.txt", momentoNomeLog,qtdPag);
                FileWriter novoCriarArquivo = new FileWriter(nomeLog, true);
                BufferedWriter Novobuffer = new BufferedWriter(novoCriarArquivo);
                
            }
        } catch (IOException e) {
            System.out.println(e);
        }
    }
}

