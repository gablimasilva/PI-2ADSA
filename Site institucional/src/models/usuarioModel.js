var database = require("../database/config")

function listar() {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucao = `
        SELECT * FROM Empresa;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function listarLojas(fkEmpresa) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucao = `
        SELECT * FROM Loja where fkEmpresa = ${fkEmpresa};
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function listarUsuarios(fkEmpresa) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucao = `
        SELECT * FROM Usuario where fkEmpresa = ${fkEmpresa};
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function buscarInfoUsuario(idUsuario) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucao = `
        SELECT * FROM Usuario where IdUsuario = ${idUsuario};
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function buscarInfoComputador(idComputador) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucao = `
        SELECT * FROM Computador where IdComputador = ${idComputador};
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function listarTodosComputadores(fkLoja) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucao = `
    select RazaoSocial,idComputador,HostnameComputador,IpComputador from [dbo].[computador]
	join [dbo].[loja]
		on fkLoja = idLoja
        where fkEmpresa = ${fkLoja};
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function listarComputadores(fkLoja) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucao = `
        SELECT * FROM Computador where fkLoja = ${fkLoja};
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function entrar(emailLoja, senhaLoja) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ", emailLoja, senhaLoja)
    var instrucao = `
        SELECT * FROM Empresa WHERE emailEmpresa = '${emailLoja}' AND senhaEmpresa = '${senhaLoja}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}


function buscarInfoLoja(idLoja) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ")
    var instrucao = `select * from [dbo].[loja] where idLoja = ${idLoja};`;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function entrarUsuario(emailUsuario, senhaUsuario) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ", emailUsuario, senhaUsuario)
    var instrucao = `
        SELECT * FROM usuario WHERE emailUsuario = '${emailUsuario}' AND senhaUsuario = '${senhaUsuario}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function cadastrar(nomeLoja, emailLoja, telefoneLoja, cepLoja, estado, cidade, bairro, logradouro, numeroRua, complemento, cnpjMatriz, responsavel, senhaLoja) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", nomeLoja, emailLoja, telefoneLoja, cepLoja, estado, cidade, bairro, logradouro, numeroRua, complemento, cnpjMatriz, responsavel, senhaLoja);
    var instrucao = `
        INSERT INTO Empresa(TecnicoResponsavel,RazaoSocial,CNPJEmpresa,EmailEmpresa,TelefoneEmpresa,SenhaEmpresa,CEP,Estado,Cidade,Bairro,Logradouro,Numero,Complemento) VALUES ('${responsavel}','${nomeLoja}','${cnpjMatriz}','${emailLoja}','${telefoneLoja}','${senhaLoja}','${cepLoja}','${estado}','${cidade}','${bairro}','${logradouro}','${numeroRua}','${complemento}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function cadastrarLoja(FkEmpresa, nomeLoja, gerente, cnpjLoja, cepLoja, estado, cidade, bairro, logradouro, numeroRua, complemento, emailLoja, telefoneLoja) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", nomeLoja, gerente, cnpjLoja, cepLoja, estado, cidade, bairro, logradouro, numeroRua, complemento, emailLoja, telefoneLoja);
    var instrucao = `
        INSERT INTO Loja(FkEmpresa,RazaoSocial,GerenteLoja,CNPJLoja,CEPLoja,Estado,Cidade,Bairro,Logradouro,NumeroRua,Complemento,EmailLoja,Telefone) VALUES ('${FkEmpresa}','${nomeLoja}','${gerente}','${cnpjLoja}','${cepLoja}','${estado}','${cidade}','${bairro}','${logradouro}','${numeroRua}','${complemento}','${emailLoja}','${telefoneLoja}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function cadastrarMaquina(tipoComputador, loja, ip, so, hostname, mac, local, senha) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", tipoComputador, loja, ip, so, hostname, mac, local, senha);
    var instrucao = `
        INSERT INTO Computador(FkTipoComputador,FkLoja,IpComputador,SistemaOperacional,HostnameComputador,EnderecoMACComputador,LocalComputador, SenhaComputador) VALUES ('${tipoComputador}',${loja},'${ip}','${so}','${hostname}','${mac}','${local}','${senha}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function cadastrarUsuario(cargo, fkEmpresa, nome, email, senha) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", cargo, fkEmpresa, nome, email, senha);
    var instrucao = `
        INSERT INTO Usuario(fkEmpresa,fkCargo,nomeUsuario,emailUsuario,senhaUsuario) VALUES ('${fkEmpresa}','${cargo}','${nome}','${email}','${senha}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function atualizarLoja(idLoja,nomeLoja,gerente,cnpjLoja,cepLoja,estado,cidade,bairro,logradouro,numeroRua,complemento,emailLoja,telefoneLoja) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():");
    var instrucao = `
        UPDATE Loja SET
        RazaoSocial = '${nomeLoja}',
        CNPJLoja = '${cnpjLoja}',
        GerenteLoja = '${gerente}',
        CEPLoja = '${cepLoja}',
        Estado = '${estado}',
        Cidade = '${cidade}',
        Bairro = '${bairro}',
        Logradouro = '${logradouro}',
        NumeroRua = '${numeroRua}',
        Complemento = '${complemento}',
        EmailLoja = '${emailLoja}',
        Telefone = '${telefoneLoja}' where idLoja = ${idLoja}
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function atualizarUsuario(idUsuario,cargo,nomeUsuario,emailUsuario,senhaUsuario) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():");
    var instrucao = `
        UPDATE Usuario SET
        nomeUsuario = '${nomeUsuario}',
        emailUsuario = '${emailUsuario}',
        senhaUsuario = '${senhaUsuario}',
        fkCargo = '${cargo}' where idUsuario = ${idUsuario}
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function atualizarComputador(idComputador,tipoComputador,loja,ip,so,hostname,mac,local,senha) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():");
    var instrucao = `
        UPDATE Computador SET
        fkLoja = '${loja}',
        fkTipoComputador = '${tipoComputador}',
        IpComputador = '${ip}',
        SistemaOperacional = '${so}',
        HostnameComputador = '${hostname}',
        EnderecoMACComputador = '${mac}',
        LocalComputador = '${local}',
        senhaComputador = '${senha}' where idComputador = ${idComputador}
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function deletarComputador(idComputador) {
    var instrucao = `
        DELETE FROM computador where idComputador = ${idComputador} 
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function deletarUsuario(idUsuario) {
    var instrucao = `
        DELETE FROM usuario where idUsuario = ${idUsuario} 
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function deletarLoja(idLoja) {
    var instrucao = `
        DELETE FROM loja where idLoja = ${idLoja} 
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}


module.exports = {
    entrar,
    entrarUsuario,
    cadastrar,
    cadastrarLoja,
    cadastrarMaquina,
    cadastrarUsuario,
    listar,
    listarLojas,
    listarComputadores,
    listarUsuarios,
    listarTodosComputadores,
    buscarInfoLoja,
    buscarInfoUsuario,
    buscarInfoComputador,
    atualizarLoja,
    atualizarUsuario,
    atualizarComputador,
    deletarComputador,
    deletarUsuario,
    deletarLoja
};