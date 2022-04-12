var database = require("../database/config")

function listar() {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucao = `
        SELECT * FROM Empresa;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function entrar(emailLoja, senhaLoja) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ", emailLoja, senhaLoja)
    var instrucao = `
        SELECT * FROM Empresa WHERE emailLoja = '${emailLoja}' AND senhaLoja = '${senhaLoja}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function cadastrar(nomeLoja, emailLoja, telefoneLoja, cepLoja, numeroRua, complemento, cnpjMatriz, responsavel, senhaLoja) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", nomeLoja, emailLoja, telefoneLoja, cepLoja, numeroRua, complemento, cnpjMatriz, responsavel, senhaLoja);
    var instrucao = `
        INSERT INTO Empresa(nomeLoja,emailLoja,telefoneLoja,cepLoja,numeroRua,complemento,cnpjMatriz,responsavel,senhaLoja) VALUES ('${nomeLoja}','${emailLoja}','${telefoneLoja}','${cepLoja}','${numeroRua}','${complemento}','${cnpjMatriz}','${responsavel}','${senhaLoja}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    entrar,
    cadastrar,
    listar,
};