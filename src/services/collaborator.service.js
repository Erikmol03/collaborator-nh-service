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
exports.deleteCollaboratorService = exports.updateCollaboratorService = exports.findAllColaboratorService = exports.getUserToReminderTechOnboarding = exports.getAllInfoFromCollaboratorService = exports.createCollaboratorService = void 0;
const collaborator_model_1 = require("../models/collaborator.model");
const collaborator_view_1 = require("../views/collaborator.view");
const techOnboardingDate_view_1 = require("../views/techOnboardingDate.view");
const createCollaboratorService = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const newCollaborator = yield collaborator_model_1.Collaborator.create(data);
    return newCollaborator;
});
exports.createCollaboratorService = createCollaboratorService;
const getAllInfoFromCollaboratorService = () => __awaiter(void 0, void 0, void 0, function* () {
    const collaboratorData = yield collaborator_view_1.CollaboratorView.findAll();
    return collaboratorData;
});
exports.getAllInfoFromCollaboratorService = getAllInfoFromCollaboratorService;
const getUserToReminderTechOnboarding = () => __awaiter(void 0, void 0, void 0, function* () {
    const dateTechOnboarding = yield techOnboardingDate_view_1.TechnicalOnboardingView.findAll();
    const reminders = dateTechOnboarding.map((record) => ({
        email: record.email,
        date: record.date_technical_onboarding,
    }));
    return reminders;
});
exports.getUserToReminderTechOnboarding = getUserToReminderTechOnboarding;
const findAllColaboratorService = () => __awaiter(void 0, void 0, void 0, function* () {
    const findAllCollaborator = yield collaborator_model_1.Collaborator.findAll();
    return findAllCollaborator;
});
exports.findAllColaboratorService = findAllColaboratorService;
const updateCollaboratorService = (id, data) => __awaiter(void 0, void 0, void 0, function* () {
    yield collaborator_model_1.Collaborator.update(data, {
        where: { id_collaborator: id },
    });
    const message = "Información actualizada con exito";
    return message;
});
exports.updateCollaboratorService = updateCollaboratorService;
const deleteCollaboratorService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const deleteCollaborator = yield collaborator_model_1.Collaborator.destroy({
        where: { id_collaborator: id },
    });
    if (deleteCollaborator === 0) {
        throw new Error("Colaborador no encotrado");
    }
    const message = "Colaborador eliminado con exito";
    return message;
});
exports.deleteCollaboratorService = deleteCollaboratorService;
