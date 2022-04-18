var express = require("express");
var router = express.Router();

var usuarioController = require("../controllers/usuarioController");

router.get("/", function(req, res) {
    usuarioController.testar(req, res);
});

router.get("/listar", function(req, res) {
    usuarioController.listar(req, res);
});

router.get("/listarLojas/:fkEmpresa", function (req, res) {
    usuarioController.listarLojas(req, res);
});

router.get("/listarComputadores/:fkLoja", function (req, res) {
    usuarioController.listarComputadores(req, res);
});

router.post("/cadastrar", function(req, res) {
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

router.post("/autenticar", function(req, res) {
    usuarioController.entrar(req, res);
});
  
module.exports = router;