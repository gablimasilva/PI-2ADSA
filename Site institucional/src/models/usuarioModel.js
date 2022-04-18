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

function cadastrar(nomeLoja, emailLoja, telefoneLoja, cepLoja, estado, cidade, bairro, logradouro, numeroRua, complemento, cnpjMatriz, responsavel, senhaLoja) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", nomeLoja, emailLoja, telefoneLoja, cepLoja, estado, cidade, bairro, logradouro, numeroRua, complemento, cnpjMatriz, responsavel, senhaLoja);
    var instrucao = `
        INSERT INTO Empresa(TecnicoResponsavel,RazaoSocial,CNPJEmpresa,EmailEmpresa,TelefoneEmpresa,SenhaEmpresa,CEP,Estado,Cidade,Bairro,Logradouro,Numero,Complemento) VALUES ('${responsavel}','${nomeLoja}','${cnpjMatriz}','${emailLoja}','${telefoneLoja}','${senhaLoja}','${cepLoja}','${estado}','${cidade}','${bairro}','${logradouro}','${numeroRua}','${complemento}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function cadastrarLoja(FkEmpresa,nomeLoja, gerente, cnpjLoja, cepLoja, estado, cidade, bairro, logradouro, numeroRua, complemento, emailLoja, telefoneLoja) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", nomeLoja, gerente, cnpjLoja, cepLoja, estado, cidade, bairro, logradouro, numeroRua, complemento, emailLoja, telefoneLoja);
    var instrucao = `
        INSERT INTO Loja(FkEmpresa,RazaoSocial,GerenteLoja,CNPJLoja,CEPLoja,Estado,Cidade,Bairro,Logradouro,NumeroRua,Complemento,Email,Telefone) VALUES ('${FkEmpresa}','${nomeLoja}','${gerente}','${cnpjLoja}','${cepLoja}','${estado}','${cidade}','${bairro}','${logradouro}','${numeroRua}','${complemento}','${emailLoja}','${telefoneLoja}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function cadastrarMaquina(tipoComputador,loja, ip, so, hostname, mac, local) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", tipoComputador, loja, ip, so, hostname, mac, local);
    var instrucao = `
        INSERT INTO Computador(FkTipoComputador,FkLoja,IpComputador,SistemaOperacional,Hostname,EnderecoMACComputador,LocalComputador) VALUES ('${tipoComputador}',${loja},'${ip}','${so}','${hostname}','${mac}','${local}');
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


module.exports = {
    entrar,
    cadastrar,
    cadastrarLoja,
    cadastrarMaquina,
    cadastrarUsuario,
    listar,
    listarLojas,
    listarComputadores,
};