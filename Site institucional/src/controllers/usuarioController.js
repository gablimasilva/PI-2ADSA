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

function listarLojas(req, res) {
    var fkEmpresa = req.params.fkEmpresa;
    usuarioModel.listarLojas(fkEmpresa)
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
    var estado = req.body.estado;
    var cidade = req.body.cidade;
    var bairro = req.body.bairro;
    var logradouro = req.body.logradouro;
    var numeroRua = req.body.numeroRua;
    var complemento = req.body.complemento;
    var cnpjMatriz = req.body.cnpjMatriz;
    var responsavel = req.body.responsavel;
    var senhaLoja = req.body.senhaLoja;
    // var confirmacaoSenha = req.body.confirmacaoSenha;


    if (nomeLoja == undefined) {
        res.status(400).send("nome da loja está undefined!");
    } else if (emailLoja == undefined) {
        res.status(400).send("Seu email da loja está undefined!");
    } else if (telefoneLoja == undefined) {
        res.status(400).send("Telefone da loja está undefined!");
    } else if (cepLoja == undefined) {
        res.status(400).send("Cep da loja está undefined!");
    } else if (estado == undefined) {
        res.status(400).send("Estado da loja está undefined!");
    } else if (cidade == undefined) {
        res.status(400).send("Cidade da loja está undefined!");
    } else if (bairro == undefined) {
        res.status(400).send("Bairro da loja está undefined!");
    } else if (logradouro == undefined) {
        res.status(400).send("Logradouro da loja está undefined!");
    } else if (numeroRua == undefined) {
        res.status(400).send("Numero da rua está undefined!");
    } else if (complemento == undefined) {
        res.status(400).send("Complemento está undefined!");
    } else if (cnpjMatriz == undefined) {
        res.status(400).send("CNPJ está undefined!");
    } else if (responsavel == undefined) {
        res.status(400).send("Técnico responsável está undefined!");
    } else if (senhaLoja == undefined) {
        res.status(400).send("Senha da loja está undefined!");
    } else {
        usuarioModel.cadastrar(nomeLoja, emailLoja, telefoneLoja, cepLoja, estado, cidade, bairro, logradouro, numeroRua, complemento, cnpjMatriz, responsavel, senhaLoja)
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

function cadastrarLoja(req, res) {
    console.log(req.body);
    var nomeLoja = req.body.nomeLoja;
    var gerente = req.body.gerenteLoja;
    var cnpjLoja = req.body.cnpjLoja;
    var cepLoja = req.body.cepLoja;
    var estado = req.body.estado;
    var cidade = req.body.cidade;
    var bairro = req.body.bairro;
    var logradouro = req.body.logradouro;
    var numeroRua = req.body.numeroRuaLoja;
    var complemento = req.body.complementoLoja;
    var emailLoja = req.body.emailLoja;
    var telefoneLoja = req.body.telefoneLoja;
    var FkEmpresa = req.params.FkEmpresa;


    if (nomeLoja == undefined) {
        res.status(400).send("nome da loja está undefined!");
    } else if (gerente == undefined) {
        res.status(400).send("Seu gerente da loja está undefined!");
    } else if (cnpjLoja == undefined) {
        res.status(400).send("Cnpj da loja está undefined!");
    } else if (cepLoja == undefined) {
        res.status(400).send("Cep da loja está undefined!");
    } else if (estado == undefined) {
        res.status(400).send("Estado da loja está undefined!");
    } else if (cidade == undefined) {
        res.status(400).send("Cidade da loja está undefined!");
    } else if (bairro == undefined) {
        res.status(400).send("Bairro da loja está undefined!");
    } else if (logradouro == undefined) {
        res.status(400).send("Logradouro da loja está undefined!");
    } else if (numeroRua == undefined) {
        res.status(400).send("Numero da rua está undefined!");
    } else if (complemento == undefined) {
        res.status(400).send("Complemento está undefined!");
    } else if (emailLoja == undefined) {
        res.status(400).send("Email da loja está undefined!");
    } else if (telefoneLoja == undefined) {
        res.status(400).send("Telefone da loja está undefined!");
    } else {
        usuarioModel.cadastrarLoja(FkEmpresa, nomeLoja, gerente, cnpjLoja, cepLoja, estado, cidade, bairro, logradouro, numeroRua, complemento, emailLoja, telefoneLoja)
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


function cadastrarMaquina(req, res) {
    var tipoComputador = req.body.tipoComputador;
    var loja = req.body.loja;
    var ip = req.body.ip;
    var so = req.body.so;
    var hostname = req.body.hostname;
    var mac = req.body.mac;
    var local = req.body.local;
    var senha = req.body.senha;


    if (tipoComputador == undefined) {
        res.status(400).send("Tipo do computador está undefined!");
    } else if (ip == undefined) {
        res.status(400).send("IP está undefined!");
    } else if (so == undefined) {
        res.status(400).send("Sistema Operacional está undefined!");
    } else if (hostname == undefined) {
        res.status(400).send("Hostname está undefined!");
    } else if (mac == undefined) {
        res.status(400).send("Endereço MAC está undefined!");
    } else if (local == undefined) {
        res.status(400).send("Local está undefined!");
    } else if (loja == undefined) {
        res.status(400).send("Loja do computador está undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Senha do computador está undefined!");
    } else {
        usuarioModel.cadastrarMaquina(tipoComputador, loja, ip, so, hostname, mac, local, senha)
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

function cadastrarUsuario(req, res) {
    var cargo = req.body.cargo;
    var fkEmpresa = req.params.FkEmpresa;
    var nome = req.body.nome;
    var email = req.body.email;
    var senha = req.body.senha;

    if (cargo == undefined) {
        res.status(400).send("Cargo está undefined!");
    } else if (nome == undefined) {
        res.status(400).send("Nome está undefined!");
    } else if (email == undefined) {
        res.status(400).send("Email está undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Senha está undefined!");
    } else {
        usuarioModel.cadastrarUsuario(cargo, fkEmpresa, nome, email, senha)
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
    cadastrarLoja,
    cadastrarMaquina,
    cadastrarUsuario,
    listar,
    listarLojas,
    testar
}