var medidaModel = require("../models/medidaModel");

function buscarUltimasMedidas(req, res) {

    const limite_linhas = 7;

	var idAquario = req.params.idAquario;

	console.log(`Recuperando as ultimas ${limite_linhas} medidas`);

    medidaModel.buscarUltimasMedidas(idAquario, limite_linhas).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}


function buscarMedidasEmTempoReal(req, res) {

	var idAquario = req.params.idAquario;

	console.log(`Recuperando medidas em tempo real`);

    medidaModel.buscarMedidasEmTempoReal(idAquario).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function buscarIntervaloDeIncidentesPorCategoria(req, res) {
    var maquina = req.params.maquina;
    var categoria = req.params.categoria;

    console.log(`Recuperando medidas em tempo real`);

    medidaModel.buscarIntervaloDeIncidentesPorCategoria(maquina,categoria).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function buscarUltimaHora(req, res) {
    var idComputador = req.params.idComputador;

    console.log(`Recuperando medidas em tempo real`);

    medidaModel.buscarUltimaHora(idComputador).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function buscarUltimoComponente(req, res) {
    var idComputador = req.params.idComputador;
    var componente = req.params.Componente;

    console.log(`Recuperando medidas em tempo real`);

    medidaModel.buscarUltimoComponente(idComputador,componente).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}


function buscarIncidentesLoja(req, res) {
    var loja = req.params.loja;

    console.log(`Recuperando medidas em tempo real`);

    medidaModel.buscarIncidentesLoja(loja).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function buscarIP(req, res) {
    var maquina = req.params.maquina;

    console.log(`Recuperando medidas em tempo real`);

    medidaModel.buscarIP(maquina).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}



function buscarStatusComputador(req, res) {
    var maquina = req.params.maquina;

    console.log(`Recuperando medidas em tempo real`);

    medidaModel.buscarStatusComputador(maquina).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function buscarIntervaloDeIncidentes(req, res) {
    var maquina = req.params.maquina;

    console.log(`Recuperando medidas em tempo real`);

    medidaModel.buscarIntervaloDeIncidentes(maquina).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function buscarLocal(req, res) {
    var maquina = req.params.maquina;

    console.log(`Recuperando medidas em tempo real`);

    medidaModel.buscarLocal(maquina).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}


function buscarIncidentes(req, res) {
    var maquina = req.params.maquina;

    console.log(`Recuperando medidas em tempo real`);

    medidaModel.buscarIncidentes(maquina).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function buscarFkComponenteCPU(req, res) {
    var fkComponente = req.params.fkComponente;

    console.log(`Recuperando medidas em tempo real`);

    medidaModel.buscarFkComponenteCPU(fkComponente).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function buscarFkComponenteRAM(req, res) {
    var fkComponente = req.params.fkComponente;

    console.log(`Recuperando medidas em tempo real`);

    medidaModel.buscarFkComponenteRAM(fkComponente).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function buscarFkComponenteDISCO(req, res) {
    var fkComponente = req.params.fkComponente;

    console.log(`Recuperando medidas em tempo real`);

    medidaModel.buscarFkComponenteDISCO(fkComponente).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}


function buscarCPU(req, res) {
    var maquina = req.params.maquina;

    console.log(`Recuperando medidas em tempo real`);

    medidaModel.buscarCPU(maquina).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function buscarRAM(req, res) {
    var maquina = req.params.maquina;

    console.log(`Recuperando medidas em tempo real`);

    medidaModel.buscarRAM(maquina).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function buscarDISCO(req, res) {
    var maquina = req.params.maquina;

    console.log(`Recuperando medidas em tempo real`);

    medidaModel.buscarDISCO(maquina).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function buscarHoraDISCO(req, res) {
    var maquina = req.params.maquina;

    console.log(`Recuperando medidas em tempo real`);

    medidaModel.buscarHoraDISCO(maquina).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function buscarHoraRAM(req, res) {
    var maquina = req.params.maquina;

    console.log(`Recuperando medidas em tempo real`);

    medidaModel.buscarHoraRAM(maquina).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function buscarHoraCPU(req, res) {
    var maquina = req.params.maquina;

    console.log(`Recuperando medidas em tempo real`);

    medidaModel.buscarHoraCPU(maquina).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function listarAlertas(req, res) {
    var loja = req.params.loja;

    console.log(`Recuperando medidas em tempo real`);

    medidaModel.listarAlertas(loja).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
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
    listarAlertas
}