var express = require("express");
var router = express.Router();

var medidaController = require("../controllers/medidaController");

router.get("/ultimas/:idAquario", function(req, res) {
    medidaController.buscarUltimasMedidas(req, res);
});

router.get("/tempo-real/:idAquario", function(req, res) {
    medidaController.buscarMedidasEmTempoReal(req, res);
})

router.get("/buscarCPU/:maquina", function (req, res) {
    medidaController.buscarCPU(req, res);
})

router.get("/buscarFkComponenteCPU/:fkComponente", function (req, res) {
    medidaController.buscarFkComponenteCPU(req, res);
})
module.exports = router;