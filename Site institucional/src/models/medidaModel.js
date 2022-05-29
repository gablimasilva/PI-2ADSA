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
    instrucaoSql = `select top 5 fkComputadorComponente from registroComponente join computadorComponente on idComputadorComponente = fkComputadorComponente where fkComputador = ${fkComponente} and fkComponente = 2 order by fkComponente desc;`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarCPU(maquina) {
    instrucaoSql = `select top 5 valorConsumido from registroComponente join computadorComponente on idComputadorComponente = fkComputadorComponente where fkComputadorComponente = ${maquina} order by idRegistroComponente desc ;`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


function buscarFkComponenteRAM(fkComponente) {
    instrucaoSql = `select top 5 fkComputadorComponente from registroComponente join computadorComponente on idComputadorComponente = fkComputadorComponente where fkComputador = ${fkComponente} and fkComponente = 1 order by fkComponente desc;`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarRAM(maquina) {
    instrucaoSql = `select top 5 valorConsumido from registroComponente join computadorComponente on idComputadorComponente = fkComputadorComponente where fkComputadorComponente = ${maquina} order by idRegistroComponente desc;`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarFkComponenteDISCO(fkComponente) {
    instrucaoSql = `select top 5 fkComputadorComponente from registroComponente join computadorComponente on idComputadorComponente = fkComputadorComponente where fkComputador = ${fkComponente} and fkComponente = 3 order by fkComponente desc;`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarDISCO(maquina) {
    instrucaoSql = `select top 5 valorConsumido from registroComponente join computadorComponente on idComputadorComponente = fkComputadorComponente where fkComputadorComponente = ${maquina} order by idRegistroComponente desc;`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarIncidentes(maquina) {
    instrucaoSql = `select count(idIncidente) as "contagem" from incidente where fkComputador = ${maquina};`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarLocal(maquina) {
    instrucaoSql = `select localComputador from Computador where idComputador = ${maquina};`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarIntervaloDeIncidentes(maquina) {

    instrucaoSql = `SELECT cast(datediff(minute,min(incidente.dataHora),max(incidente.dataHora))/count(incidente.dataHora) as int) as 'valor' from incidente join computador on idComputador = incidente.fkComputador join computadorComponente on computadorComponente.fkComputador = idComputador where (fkComponente = 1 or fkComponente = 2 or fkComponente = 3) and incidente.fkComputador = ${maquina};`

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarIntervaloDeIncidentesPorCategoria(maquina, categoria) {
    instrucaoSql = `select count(idIncidente) as incidentes from incidente where fkComputador = ${maquina} and descricao like '%${categoria}%';`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarIncidentesLoja(loja) {
    instrucaoSql = `SELECT count(IdIncidente) as 'contagem' from [dbo].[incidente] join [dbo].[computador] on idComputador = incidente.fkComputador where fkLoja = ${loja};`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarStatusComputador(maquina) {
    instrucaoSql = `select top 1 dataHora from registroComponente join computadorComponente on idComputadorComponente = fkComputadorComponente where fkComputador = ${maquina} order by idRegistroComponente desc;`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarUltimaHora(idComputador) {
    instrucaoSql = `select top 1 dataHora as 'hora', DATEADD(SECOND,-20,DATEADD(HOUR,-3,GETDATE())) as 'atual' from [dbo].[registroComponente] join [dbo].[computadorComponente] on fkComputadorComponente = idComputadorComponente where fkComputador = ${idComputador} order by idRegistroComponente desc;`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarUltimoComponente(idComputador, componente) {
    instrucaoSql = `select top 1 ValorConsumido as 'valor' from [dbo].[registroComponente] join [dbo].[computadorComponente] on fkComputadorComponente = idComputadorComponente where fkComponente = ${componente} and fkComputador = ${idComputador} order by idRegistroComponente desc;`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarIP(maquina) {
    instrucaoSql = `select IpComputador from [dbo].[computador] where IdComputador = ${maquina};`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarHoraDISCO(maquina) {
    instrucaoSql = `select top 5 DATEPART(minute, DataHora) as 'minuto',
	DATEPART(second, DataHora) as 'segundo' from [dbo].[registroComponente]
		join [dbo].[computadorComponente]
			on fkComputadorComponente = idComputadorComponente
				where fkComputador = ${maquina}
					and fkComponente = 3
						order by idRegistroComponente desc;`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarHoraRAM(maquina) {
    instrucaoSql = `select top 5 DATEPART(minute, DataHora) as 'minuto',
	DATEPART(second, DataHora) as 'segundo' from [dbo].[registroComponente]
		join [dbo].[computadorComponente]
			on fkComputadorComponente = idComputadorComponente
				where fkComputador = ${maquina}
					and fkComponente = 1
						order by idRegistroComponente desc;`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarHoraCPU(maquina) {
    instrucaoSql = `select top 5 DATEPART(minute, DataHora) as 'minuto',
	DATEPART(second, DataHora) as 'segundo' from [dbo].[registroComponente]
		join [dbo].[computadorComponente]
			on fkComputadorComponente = idComputadorComponente
				where fkComputador = ${maquina}
					and fkComponente = 2
						order by idRegistroComponente desc;`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function listarAlertas(loja) {
    instrucaoSql = `select incidente.descricao, incidente.dataHora, computador.idComputador from incidente join computador on idComputador = fkComputador where fkLoja = ${loja} order by incidente.idIncidente desc;`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarRelatorioMaquina(fkComputador, dateInicio, dateFim, fkComponente) {
      instrucaoSql = `select registroComponente.idRegistroComponente as idRegistro,
                            convert(varchar, DataHora, 103) as data,
                            convert(varchar, DataHora, 8) as hora, 
                            registroComponente.ValorConsumido,
                            computador.HostnameComputador, 
                            computadorComponente.TotalComponente,
                            computadorComponente.fkComponente
                            from registroComponente 
    join computadorComponente
        on fkComputadorComponente = idComputadorComponente
            join computador
                on fkComputador = idComputador
                    where fkComputador = ${fkComputador}
                        and DataHora between '${dateInicio}' 
                            and '${dateFim}'
                                and fkComponente = ${fkComponente}`;

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
    buscarIntervaloDeIncidentesPorCategoria,
    buscarIncidentesLoja,
    buscarStatusComputador,
    buscarUltimaHora,
    buscarUltimoComponente,
    buscarIP,
    buscarHoraDISCO,
    buscarHoraRAM,
    buscarHoraCPU,
    listarAlertas,
    buscarRelatorioMaquina
}