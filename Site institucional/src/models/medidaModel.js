var database = require("../database/config");

function buscarUltimasMedidas(idAquario, limite_linhas) {
    instrucaoSql = `select 
                        temperatura, 
                        umidade, 
                        momento,
                        DATE_FORMAT(momento,'%H:%i:%s') as momento_grafico
                        from medida
                        where fk_aquario = ${idAquario}
                        order by id desc limit ${limite_linhas}`;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarMedidasEmTempoReal(idAquario) {
    instrucaoSql = `select temperatura, 
                            umidade, 
                            DATE_FORMAT(momento,'%H:%i:%s') as momento_grafico, 
                            fk_aquario 
                            from medida where fk_aquario = ${idAquario} 
                    order by id desc limit 1`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


function buscarFkComponenteCPU(fkComponente) {
    instrucaoSql = `select top 5 fkComputadorComponente from registroComponente join computadorComponente on idComputadorComponente = fkComputadorComponente and fkComputador = ${fkComponente} and fkComponente = 1 order by fkComponente desc;`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarCPU(maquina) {
    instrucaoSql = `select top 5 valorConsumido from registroComponente join computadorComponente on idComputadorComponente = fkComputadorComponente and fkComputadorComponente = ${maquina} order by idRegistroComponente desc ;`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


function buscarFkComponenteRAM(fkComponente) {
    instrucaoSql = `select top 5 fkComputadorComponente from registroComponente join computadorComponente on idComputadorComponente = fkComputadorComponente and fkComputador = ${fkComponente} and fkComponente = 2 order by fkComponente desc;`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarRAM(maquina) {
    instrucaoSql = `select top 5 valorConsumido from registroComponente join computadorComponente on idComputadorComponente = fkComputadorComponente and fkComputadorComponente = ${maquina} order by idRegistroComponente desc;`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarFkComponenteDISCO(fkComponente) {
    instrucaoSql = `select top 5 fkComputadorComponente from registroComponente join computadorComponente on idComputadorComponente = fkComputadorComponente and fkComputador = ${fkComponente} and fkComponente = 3 order by fkComponente desc;`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarDISCO(maquina) {
    instrucaoSql = `select top 5 valorConsumido from registroComponente join computadorComponente on idComputadorComponente = fkComputadorComponente and fkComputadorComponente = ${maquina} order by idRegistroComponente desc;`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarIncidentes(maquina) {
    instrucaoSql = `select count(idIncidentes) as "contagem" from incidentes join registroComponente on idRegistroComponente = fkRegistroComponente join computadorComponente on idComputadorComponente = fkComputadorComponente join componente on fkComponente = idComponente where fkComputador = ${maquina};`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarLocal(maquina) {
    instrucaoSql = `select localComputador from Computador where idComputador = ${maquina};`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarIntervaloDeIncidentes(maquina) {

    instrucaoSql = `SELECT cast(datediff(minute,min(incidentes.dataHora),max(incidentes.dataHora))/count(incidentes.dataHora) as int) as 'valor' from incidentes join registroComponente on idRegistroComponente = fkRegistroComponente join computadorComponente on idComputadorComponente = fkComputadorComponente join componente on fkComponente = idComponente where (idComponente = 1 or idComponente = 2 or idComponente = 3) and fkComputador = ${maquina};`

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarIntervaloDeIncidentesPorCategoria(maquina, categoria) {
    instrucaoSql = `select count(idIncidentes) as "incidentes" from incidentes join registroComponente on idRegistroComponente = fkRegistroComponente join computadorComponente on idComputadorComponente = fkComputadorComponente join componente on fkComponente = idComponente where idComponente = ${categoria} and fkComputador = ${maquina};`;

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
    buscarLocal,
    buscarIntervaloDeIncidentes,
    buscarIntervaloDeIncidentesPorCategoria
}