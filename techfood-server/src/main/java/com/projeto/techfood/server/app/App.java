package com.projeto.techfood.server.app;

import com.github.britooo.looca.api.core.Looca;
import com.github.britooo.looca.api.group.discos.Disco;
import com.github.britooo.looca.api.group.memoria.Memoria;
import com.github.britooo.looca.api.group.processador.Processador;
import com.github.britooo.looca.api.util.Conversor;
import com.projeto.techfood.server.controller.ComputadorComponenteController;
import com.projeto.techfood.server.controller.RegistroComponenteController;
import com.projeto.techfood.server.molde.ComputadorComponente;
import java.util.List;

public class App {
    public static void main(String[] args) {
        System.out.println("Bem vindo!");
        
        final Looca looca = new Looca();
        final ComputadorComponenteController computadorCController = new ComputadorComponenteController();
        final RegistroComponenteController registroControler = new RegistroComponenteController();
        
        if(computadorCController.buscarComponentesAzure(Long.valueOf(12)).isEmpty()){
            List<Disco> discos = looca.getGrupoDeDiscos().getDiscos();
            System.out.println("Entrou");
            String ramConvertida = Conversor.formatarBytes(looca.getMemoria().getTotal()).replaceAll("[a-zA-Z]", "").replace(",", ".");
            String cpuConvertido = Conversor.formatarBytes(looca.getProcessador().getFrequencia()).replaceAll("[a-zA-Z]", "").replace(",", ".");

            computadorCController.inserirComponenteAzure(Long.valueOf(12), Long.valueOf(1), Double.valueOf(ramConvertida));
            computadorCController.inserirComponenteAzure(Long.valueOf(12), Long.valueOf(2), Double.valueOf(cpuConvertido));

            for (Disco disco : discos) {
                String discoConvertido = Conversor.formatarBytes(disco.getTamanho()).replaceAll("[a-zA-Z]", "").replace(",", ".");
                
                computadorCController.inserirComponenteAzure(Long.valueOf(12), Long.valueOf(3), Double.valueOf(discoConvertido));
         
            }
           
        }

        if(computadorCController.buscarComponentesLocal(Long.valueOf(12)).isEmpty()){
            
            List<Disco> discos = looca.getGrupoDeDiscos().getDiscos();
            System.out.println("EntrouLocal");

            String ramConvertida = Conversor.formatarBytes(looca.getMemoria().getTotal()).replaceAll("[a-zA-Z]", "").replace(",", ".");
            String cpuConvertido = Conversor.formatarBytes(looca.getProcessador().getFrequencia()).replaceAll("[a-zA-Z]", "").replace(",", ".");

            computadorCController.inserirComponenteLocal(Long.valueOf(12), Long.valueOf(1), Double.valueOf(ramConvertida));
            computadorCController.inserirComponenteLocal(Long.valueOf(12), Long.valueOf(2), Double.valueOf(cpuConvertido));

            for (Disco disco : discos) {
                String discoConvertido = Conversor.formatarBytes(disco.getTamanho()).replaceAll("[a-zA-Z]", "").replace(",", ".");
                
                computadorCController.inserirComponenteLocal(Long.valueOf(12), Long.valueOf(3), Double.valueOf(discoConvertido));
         
            }
            
        }
        System.out.println("Realizando captura dos dados...");
        new Thread(new Runnable() {
            @Override
            public void run() {
                List<ComputadorComponente> listaComponenteAzure = computadorCController.buscarComponentesAzure(Long.valueOf(12));
                List<ComputadorComponente> listaComponenteLocal = computadorCController.buscarComponentesLocal(Long.valueOf(12));
                try {
                    while (true) {
                        Memoria memoria = looca.getMemoria();
                        Processador cpu = looca.getProcessador();
                        List<Disco> discos = looca.getGrupoDeDiscos().getDiscos();
                        
                        String ramConvertida = Conversor.formatarBytes(memoria.getEmUso()).replaceAll("[a-zA-Z]", "").replace(",", ".");
                        Double cpuUso = cpu.getUso();

                        registroControler.inserirRegistrosAzure(listaComponenteAzure.get(0).getIdComputadorComponente(), Double.valueOf(ramConvertida));
                        registroControler.inserirRegistrosAzure(listaComponenteAzure.get(1).getIdComputadorComponente(), Double.valueOf(cpuUso));

                        registroControler.inserirRegistrosLocal(listaComponenteLocal.get(0).getIdComputadorComponente(), Double.valueOf(ramConvertida));
                        registroControler.inserirRegistrosLocal(listaComponenteLocal.get(1).getIdComputadorComponente(), Double.valueOf(cpuUso));
                        
                        System.out.println("Dados capturados");
                        System.out.println(memoria);
                        System.out.println("Processador");
                        System.out.println("Em uso: "+cpu.getUso());
                        
                        System.out.println("Discos");
                        for (int i = 0; i < discos.size(); i++) {
                            System.out.println("Nome: "+discos.get(i).getNome());
                            System.out.println("Em uso: "+Conversor.formatarBytes(discos.get(i).getBytesDeEscritas()));
                            System.out.println("Tamanho: "+Conversor.formatarBytes(discos.get(i).getTamanho()));
                            String discoConvertido = Conversor.formatarBytes(discos.get(i).getBytesDeEscritas()).replaceAll("[a-zA-Z]", "").replace(",", ".");
                            
                            
                            registroControler.inserirRegistrosAzure(listaComponenteAzure.get(2+i).getIdComputadorComponente(), Double.valueOf(discoConvertido));
                            registroControler.inserirRegistrosLocal(listaComponenteLocal.get(2+i).getIdComputadorComponente(), Double.valueOf(discoConvertido));
                            
                        }

                        Thread.sleep(5000);
                    }
                } catch (Exception e) {
                    System.out.println("Erro de leitura!");
                    System.out.println(e);
                }
            }
        }).start();
    }
    
}
