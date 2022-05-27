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

router.get("/buscarRAM/:maquina", function (req, res) {
    medidaController.buscarRAM(req, res);
})

router.get("/buscarFkComponenteRAM/:fkComponente", function (req, res) {
    medidaController.buscarFkComponenteRAM(req, res);
})

router.get("/buscarDISCO/:maquina", function (req, res) {
    medidaController.buscarDISCO(req, res);
})

router.get("/buscarFkComponenteDISCO/:fkComponente", function (req, res) {
    medidaController.buscarFkComponenteDISCO(req, res);
})

router.get("/buscarIncidentes/:maquina", function (req, res) {
    medidaController.buscarIncidentes(req, res);
})

router.get("/buscarLocal/:maquina", function (req, res) {
    medidaController.buscarLocal(req, res);
})

router.get("/buscarIntervaloDeIncidentes/:maquina", function (req, res) {
    medidaController.buscarIntervaloDeIncidentes(req, res);
})

router.get("/buscarIntervaloDeIncidentesPorCategoria/:maquina/:categoria", function (req, res) {
    medidaController.buscarIntervaloDeIncidentesPorCategoria(req, res);
})

router.get("/buscarIncidentesLoja/:loja", function (req, res) {
    medidaController.buscarIncidentesLoja(req, res);
})

router.get("/buscarStatusComputador/:maquina", function (req, res) {
    medidaController.buscarStatusComputador(req, res);
})

router.get("/buscarUltimaHora/:idComputador", function (req, res) {
    medidaController.buscarUltimaHora(req, res);
})

router.get("/buscarUltimoComponente/:idComputador/:Componente", function (req, res) {
    medidaController.buscarUltimoComponente(req, res);
})

router.get("/buscarIP/:maquina", function (req, res) {
    medidaController.buscarIP(req, res);
})

router.get("/buscarHoraDISCO/:maquina", function (req, res) {
    medidaController.buscarHoraDISCO(req, res);
})

router.get("/buscarHoraRAM/:maquina", function (req, res) {
    medidaController.buscarHoraRAM(req, res);
})

router.get("/buscarHoraCPU/:maquina", function (req, res) {
    medidaController.buscarHoraCPU(req, res);
})

router.get("/listarAlertas/:loja", function (req, res) {
    medidaController.listarAlertas(req, res);
})

module.exports = router;