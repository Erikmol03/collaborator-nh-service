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
exports.deleteCollaboratorService = exports.updateCollaboratorService = exports.getInfoCollaboratorService = exports.getUserToReminderTechOnboarding = exports.getAllInfoFromCollaboratorService = exports.createCollaboratorService = void 0;
const collaborator_model_1 = require("../models/collaborator.model");
const collaborator_view_1 = require("../views/collaborator.view");
const techOnboardingDate_view_1 = require("../views/techOnboardingDate.view");
const createCollaboratorService = (data) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newCollaborator = yield collaborator_model_1.Collaborator.create(data);
        return newCollaborator;
    }
    catch (error) {
        console.error("Error al crear colaborador:", error);
        throw new Error("No se pudo crear el colaborador.");
    }
});
exports.createCollaboratorService = createCollaboratorService;
const getAllInfoFromCollaboratorService = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const collaboratorData = yield collaborator_view_1.CollaboratorView.findAll();
        return collaboratorData;
    }
    catch (error) {
        console.error("Error al obtener todos los colaboradores:", error);
        throw new Error("No se pudo obtener la información de los colaboradores.");
    }
});
exports.getAllInfoFromCollaboratorService = getAllInfoFromCollaboratorService;
const getUserToReminderTechOnboarding = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const dateTechOnboarding = yield techOnboardingDate_view_1.TechnicalOnboardingView.findAll();
        const reminders = dateTechOnboarding.map((record) => ({
            email: record.email,
            date: record.date_technical_onboarding,
        }));
        return reminders;
    }
    catch (error) {
        console.error("Error al obtener recordatorios de onboarding técnico:", error);
        throw new Error("No se pudo obtener la información de recordatorios.");
    }
});
exports.getUserToReminderTechOnboarding = getUserToReminderTechOnboarding;
const getInfoCollaboratorService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const collaboratorData = yield collaborator_view_1.CollaboratorView.findOne({
            where: { id_collaborator: id },
        });
        if (!collaboratorData) {
            throw new Error("Colaborador no encontrado.");
        }
        return collaboratorData;
    }
    catch (error) {
        console.error(`Error al obtener colaborador con ID ${id}:`, error);
        throw new Error("No se pudo obtener la información del colaborador.");
    }
});
exports.getInfoCollaboratorService = getInfoCollaboratorService;
const updateCollaboratorService = (id, data) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield collaborator_model_1.Collaborator.update(data, {
            where: { id_collaborator: id },
        });
        return "Información actualizada con éxito.";
    }
    catch (error) {
        console.error("Error actualizando colaborador:", error);
        throw new Error("No se pudo actualizar la información del colaborador.");
    }
});
exports.updateCollaboratorService = updateCollaboratorService;
const deleteCollaboratorService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const deleted = yield collaborator_model_1.Collaborator.destroy({
            where: { id_collaborator: id },
        });
        if (deleted === 0) {
            throw new Error("Colaborador no encontrado para eliminar.");
        }
        return "Colaborador eliminado con éxito.";
    }
    catch (error) {
        console.error("Error eliminando colaborador:", error);
        throw new Error("No se pudo eliminar el colaborador.");
    }
});
exports.deleteCollaboratorService = deleteCollaboratorService;
