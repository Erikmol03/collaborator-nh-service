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
exports.deleteCollaboratorController = exports.updateCollaboratorController = exports.getInfoCollaboratorController = exports.getAllInfoFromCollaboratorController = exports.createCollaboratorController = void 0;
const collaborator_service_1 = require("../services/collaborator.service");
const createCollaboratorController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newCollaborator = yield (0, collaborator_service_1.createCollaboratorService)(req.body);
        res.status(201).json(newCollaborator);
    }
    catch (error) {
        console.error("Error en createCollaboratorController:", error);
        res.status(500).json({ message: "Error al crear colaborador." });
    }
});
exports.createCollaboratorController = createCollaboratorController;
const getAllInfoFromCollaboratorController = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const collaboratorData = yield (0, collaborator_service_1.getAllInfoFromCollaboratorService)();
        res.status(200).json(collaboratorData);
    }
    catch (error) {
        console.error("Error en getAllInfoFromCollaboratorController:", error);
        res.status(500).json({ message: "Error al obtener colaboradores." });
    }
});
exports.getAllInfoFromCollaboratorController = getAllInfoFromCollaboratorController;
const getInfoCollaboratorController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = parseInt(req.params.id);
    try {
        const collaboratorData = yield (0, collaborator_service_1.getInfoCollaboratorService)(id);
        res.status(200).json(collaboratorData);
    }
    catch (error) {
        console.error(`Error al obtener colaborador con ID ${id}:`, error);
        res.status(404).json({ message: "Colaborador no encontrado." });
    }
});
exports.getInfoCollaboratorController = getInfoCollaboratorController;
const updateCollaboratorController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = parseInt(req.params.id);
    try {
        const result = yield (0, collaborator_service_1.updateCollaboratorService)(id, req.body);
        res.status(200).json({ message: result });
    }
    catch (error) {
        console.error(`Error al actualizar colaborador con ID ${id}:`, error);
        res.status(400).json({ message: "Error al actualizar colaborador." });
    }
});
exports.updateCollaboratorController = updateCollaboratorController;
const deleteCollaboratorController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = parseInt(req.params.id);
    try {
        const result = yield (0, collaborator_service_1.deleteCollaboratorService)(id);
        res.status(200).json({ message: result });
    }
    catch (error) {
        console.error(`Error al eliminar colaborador con ID ${id}:`, error);
        res
            .status(404)
            .json({ message: "Colaborador no encontrado o no se pudo eliminar." });
    }
});
exports.deleteCollaboratorController = deleteCollaboratorController;
