var express = require("express");
var router = express.Router();

var usuarioController = require("../controllers/usuarioController");

router.get("/", function (req, res) {
    usuarioController.testar(req, res);
});

router.get("/listar", function (req, res) {
    usuarioController.listar(req, res);
});

router.get("/listarLojas/:fkEmpresa", function (req, res) {
    usuarioController.listarLojas(req, res);
});

router.get("/listarUsuarios/:fkEmpresa", function (req, res) {
    usuarioController.listarUsuarios(req, res);
});

router.get("/listarComputadores/:fkLoja", function (req, res) {
    usuarioController.listarComputadores(req, res);
});

router.get("/listarTodosComputadores/:fkLoja", function (req, res) {
    usuarioController.listarTodosComputadores(req, res);
});

router.get("/buscarInfoLoja/:idLoja", function (req, res) {
    usuarioController.buscarInfoLoja(req, res);
});

router.get("/buscarInfoUsuario/:idUsuario", function (req, res) {
    usuarioController.buscarInfoUsuario(req, res);
});

router.get("/buscarInfoComputador/:idComputador", function (req, res) {
    usuarioController.buscarInfoComputador(req, res);
});

router.post("/cadastrar", function (req, res) {
    usuarioController.cadastrar(req, res);
})

router.post("/cadastrarLoja/:FkEmpresa", function (req, res) {
    usuarioController.cadastrarLoja(req, res);
})

router.post("/cadastrarMaquina", function (req, res) {
    usuarioController.cadastrarMaquina(req, res);
})

router.post("/cadastrarUsuario/:FkEmpresa", function (req, res) {
    usuarioController.cadastrarUsuario(req, res);
})

router.post("/autenticar", function (req, res) {
    usuarioController.entrar(req, res);
});

router.post("/autenticarUsuario", function (req, res) {
    usuarioController.entrarUsuario(req, res);
});

router.post("/atualizarLoja/:idLoja", function (req, res) {
    usuarioController.atualizarLoja(req, res);
});

router.post("/atualizarUsuario/:idUsuario", function (req, res) {
    usuarioController.atualizarUsuario(req, res);
});

router.post("/atualizarComputador/:idComputador", function (req, res) {
    usuarioController.atualizarComputador(req, res);
});

router.post("/deletarComputador/:idComputador", function (req, res) {
    usuarioController.deletarComputador(req, res);
});

router.post("/deletarUsuario/:idUsuario", function (req, res) {
    usuarioController.deletarUsuario(req, res);
});

router.post("/deletarLoja/:idLoja", function (req, res) {
    usuarioController.deletarLoja(req, res);
});




module.exports = router;