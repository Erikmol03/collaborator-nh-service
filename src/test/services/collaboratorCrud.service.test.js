"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
const collaborator_model_1 = require("../../models/collaborator.model");
const collaboratorService = __importStar(require("../../services/collaborator.service"));
jest.mock("../../models/collaborator.model", () => ({
    Collaborator: {
        create: jest.fn(),
        update: jest.fn(),
        destroy: jest.fn(),
    },
}));
describe("createCollaboratorService", () => {
    it("debe crear un nuevo colaborador", () => __awaiter(void 0, void 0, void 0, function* () {
        const mockData = {
            first_name: "John",
            last_name: "Doe",
            email: "john@example.com",
        };
        const mockCreated = Object.assign({ id: 1 }, mockData);
        collaborator_model_1.Collaborator.create.mockResolvedValue(mockCreated);
        const result = yield collaboratorService.createCollaboratorService(mockData);
        expect(collaborator_model_1.Collaborator.create).toHaveBeenCalledWith(mockData);
        expect(result).toEqual(mockCreated);
    }));
});
describe("updateCollaboratorService", () => {
    it("debe actualizar la información del colaborador correctamente", () => __awaiter(void 0, void 0, void 0, function* () {
        collaborator_model_1.Collaborator.update.mockResolvedValue([1]);
        const result = yield collaboratorService.updateCollaboratorService(1, {
            email: "nuevo@correo.com",
        });
        expect(collaborator_model_1.Collaborator.update).toHaveBeenCalledWith({ email: "nuevo@correo.com" }, { where: { id_collaborator: 1 } });
        expect(result).toBe("Información actualizada con éxito.");
    }));
    it("debe manejar errores al actualizar", () => __awaiter(void 0, void 0, void 0, function* () {
        collaborator_model_1.Collaborator.update.mockRejectedValue(new Error("Fallo DB"));
        yield expect(collaboratorService.updateCollaboratorService(1, {})).rejects.toThrow("No se pudo actualizar la información del colaborador."); // o lanzas error explícitamente
    }));
});
describe("deleteCollaboratorService", () => {
    it("debe eliminar un colaborador exitosamente", () => __awaiter(void 0, void 0, void 0, function* () {
        collaborator_model_1.Collaborator.destroy.mockResolvedValue(1);
        const result = yield collaboratorService.deleteCollaboratorService(1);
        expect(collaborator_model_1.Collaborator.destroy).toHaveBeenCalledWith({
            where: { id_collaborator: 1 },
        });
        expect(result).toBe("Colaborador eliminado con éxito.");
    }));
    it("debe lanzar error si el colaborador no existe", () => __awaiter(void 0, void 0, void 0, function* () {
        collaborator_model_1.Collaborator.destroy.mockResolvedValue(0);
        yield expect(collaboratorService.deleteCollaboratorService(999)).rejects.toThrow("No se pudo eliminar el colaborador.");
    }));
});
