var usuarioModel = require("../models/usuarioModel");

var sessoes = [];

function testar(req, res) {
    console.log("ENTRAMOS NA usuarioController");
    res.json("ESTAMOS FUNCIONANDO!");
}

function listar(req, res) {
    usuarioModel.listar()
        .then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhum resultado encontrado!")
            }
        }).catch(
            function (erro) {
                console.log(erro);
                console.log("Houve um erro ao realizar a consulta! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}

function entrar(req, res) {
    var emailLoja = req.body.emailLoja;
    var senhaLoja = req.body.senhaLoja;

    if (emailLoja == undefined) {
        res.status(400).send("Email está undefined!");
    } else if (senhaLoja == undefined) {
        res.status(400).send("Senha está undefined!");
    } else {
        usuarioModel.entrar(emailLoja, senhaLoja)
            .then(
                function (resultado) {
                    console.log(`\nResultados encontrados: ${resultado.length}`);
                    console.log(`Resultados: ${JSON.stringify(resultado)}`); // transforma JSON em String

                    if (resultado.length == 1) {
                        console.log(resultado);
                        res.json(resultado[0]);
                    } else if (resultado.length == 0) {
                        res.status(403).send("Email e/ou senha inválido(s)");
                    } else {
                        res.status(403).send("Mais de um usuário com o mesmo login e senha!");
                    }
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log("\nHouve um erro ao realizar o login! Erro: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }

}

function cadastrar(req, res) {
    var nomeLoja = req.body.nomeLoja;
    var emailLoja = req.body.emailLoja;
    var telefoneLoja = req.body.telefoneLoja;
    var cepLoja = req.body.cepLoja;
    var numeroRua = req.body.numeroRua;
    var cnpjMatriz = req.body.cnpjMatriz;
    var senhaLoja = req.body.senhaLoja;
    // var confirmacaoSenha = req.body.confirmacaoSenha;


    if (nomeLoja == undefined) {
        res.status(400).send("nome da loja está undefined!");
    } else if (emailLoja == undefined) {
        res.status(400).send("Seu email da loja está undefined!");
    } else if (telefoneLoja == undefined) {
        res.status(400).send("Telefone da loja está undefined!");
    }
    else if (cepLoja == undefined) {
        res.status(400).send("Cep da loja está undefined!");
    }
    else if (numeroRua == undefined) {
        res.status(400).send("Numero da rua está undefined!");
    }
    else if (cnpjMatriz == undefined) {
        res.status(400).send("CNPJ está undefined!");
    }
    else if (senhaLoja == undefined) {
        res.status(400).send("Senha da loja está undefined!");
    }
    else {
        usuarioModel.cadastrar(nomeLoja, emailLoja, telefoneLoja, cepLoja, numeroRua, cnpjMatriz, senhaLoja)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

module.exports = {
    entrar,
    cadastrar,
    listar,
    testar
}