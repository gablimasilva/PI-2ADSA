var database = require("../database/config");

function buscarUltimasMedidas(idAquario,limite_linhas) {
    instrucaoSql = `select 
                        temperatura, 
                        umidade, 
                        momento,
                        DATE_FORMAT(momento,'%H:%i:%s') as momento_grafico
                        from medida
                        where fk_aquario = ${idAquario}
                        order by id desc limit ${limite_linhas}`;
    console.log("Executando a instrução SQL: \n"+instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarMedidasEmTempoReal(idAquario) {
    instrucaoSql = `select temperatura, 
                            umidade, 
                            DATE_FORMAT(momento,'%H:%i:%s') as momento_grafico, 
                            fk_aquario 
                            from medida where fk_aquario = ${idAquario} 
                    order by id desc limit 1`;
                    
    console.log("Executando a instrução SQL: \n"+instrucaoSql);
    return database.executar(instrucaoSql);
}


function buscarFkComponenteCPU(fkComponente) {
    instrucaoSql = `select fkComputadorComponente from registroComponente join computadorComponente on idComputadorComponente = fkComputadorComponente and fkComputador = ${fkComponente} and fkComponente = 1 order by fkComponente desc limit 1;`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarCPU(maquina) {
    instrucaoSql = `select valorConsumido from registroComponente join computadorComponente on idComputadorComponente = fkComputadorComponente and fkComputadorComponente = ${maquina} order by idRegistro desc limit 5;`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


function buscarFkComponenteRAM(fkComponente) {
    instrucaoSql = `select fkComputadorComponente from registroComponente join computadorComponente on idComputadorComponente = fkComputadorComponente and fkComputador = ${fkComponente} and fkComponente = 2 order by fkComponente desc limit 1;`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarRAM(maquina) {
    instrucaoSql = `select valorConsumido from registroComponente join computadorComponente on idComputadorComponente = fkComputadorComponente and fkComputadorComponente = ${maquina} order by idRegistro desc limit 5;`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarFkComponenteDISCO(fkComponente) {
    instrucaoSql = `select fkComputadorComponente from registroComponente join computadorComponente on idComputadorComponente = fkComputadorComponente and fkComputador = ${fkComponente} and fkComponente = 3 order by fkComponente desc limit 1;`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarDISCO(maquina) {
    instrucaoSql = `select valorConsumido from registroComponente join computadorComponente on idComputadorComponente = fkComputadorComponente and fkComputadorComponente = ${maquina} order by idRegistro desc limit 5;`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarIncidentes(maquina) {
    instrucaoSql = `select count(idIncidente) as contagem from registroComponente join incidentes on fkRegistro = idRegistro where fkComputadorComponente = ${maquina};`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarLocal(maquina) {
    instrucaoSql = `select localComputador from Computador where idComputador = ${maquina};`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


module.exports = {
    buscarUltimasMedidas,
    buscarMedidasEmTempoReal,
    buscarCPU,
    buscarFkComponenteCPU,
    buscarRAM,
    buscarFkComponenteRAM,
    buscarDISCO,
    buscarFkComponenteDISCO,
    buscarIncidentes,
    buscarLocal
}