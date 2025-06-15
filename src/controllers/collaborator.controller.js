"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteCollaboratorController = exports.updateCollaboratorController = exports.findAllColaboratorController = exports.getAllInfoFromCollaboratorController = exports.createCollaboratorController = void 0;
const collaborator_service_1 = require("../services/collaborator.service");
const createCollaboratorController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newCollaborator = yield (0, collaborator_service_1.createCollaboratorService)(req.body);
        res.status(201).json(newCollaborator);
    }
    catch (error) {
        res.status(400).json({
            message: "Ocurrio un error al procesar la solicitud",
            error: error,
        });
    }
});
exports.createCollaboratorController = createCollaboratorController;
const getAllInfoFromCollaboratorController = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const collaboratorData = yield (0, collaborator_service_1.getAllInfoFromCollaboratorService)();
        console.log("Info de la view", collaboratorData);
        res.status(200).json(collaboratorData);
    }
    catch (error) {
        res.status(404).json({
            message: "No se encontraron colaboradores",
            error: error,
        });
    }
});
exports.getAllInfoFromCollaboratorController = getAllInfoFromCollaboratorController;
const findAllColaboratorController = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const collaboratorsFound = yield (0, collaborator_service_1.findAllColaboratorService)();
        res.status(200).json(collaboratorsFound);
    }
    catch (error) {
        res.status(404).json({
            message: "No se han encontrado colaboradores",
            error: error,
        });
    }
});
exports.findAllColaboratorController = findAllColaboratorController;
const updateCollaboratorController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const collaboratorUpdate = yield (0, collaborator_service_1.updateCollaboratorService)(parseInt(req.params.id), req.body);
        res.status(200).json(collaboratorUpdate);
    }
    catch (error) {
        res.status(400).json({
            message: "Ocurrio un error al procesar la solicitud",
            error: error,
        });
    }
});
exports.updateCollaboratorController = updateCollaboratorController;
const deleteCollaboratorController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const deletedCollaborator = yield (0, collaborator_service_1.deleteCollaboratorService)(parseInt(req.params.id));
        res.status(200).json(deletedCollaborator);
    }
    catch (error) {
        res.status(404).json({
            message: "Ocurrio un error al procesar la solicitud",
            error: error,
        });
    }
});
exports.deleteCollaboratorController = deleteCollaboratorController;
