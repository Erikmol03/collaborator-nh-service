"use strict";
// tests/services/collaborator.service.test.ts
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
const collaborator_service_1 = require("../../services/collaborator.service");
const collaborator_view_1 = require("../../views/collaborator.view");
jest.mock("../../views/collaborator.view");
const mockedCollaboratorView = collaborator_view_1.CollaboratorView;
describe("getInfoCollaboratorService", () => {
    afterEach(() => {
        jest.clearAllMocks();
    });
    it("debería retornar datos del colaborador cuando existe", () => __awaiter(void 0, void 0, void 0, function* () {
        const fakeCollaborator = {
            id_collaborator: 1,
            first_name: "Erik",
            last_name: "Molina",
            email: "erik@example.com",
            date_entry: new Date(),
            date_technical_onboarding: null,
        };
        mockedCollaboratorView.findOne.mockResolvedValue(fakeCollaborator);
        const result = yield (0, collaborator_service_1.getInfoCollaboratorService)(1);
        expect(result).toEqual(fakeCollaborator);
        expect(mockedCollaboratorView.findOne).toHaveBeenCalledWith({
            where: { id_collaborator: 1 },
        });
    }));
    it("debería lanzar error si el colaborador no existe", () => __awaiter(void 0, void 0, void 0, function* () {
        mockedCollaboratorView.findOne.mockResolvedValue(null);
        yield expect((0, collaborator_service_1.getInfoCollaboratorService)(99)).rejects.toThrow("No se pudo obtener la información del colaborador.");
    }));
    it("debería lanzar error si hay un problema en la base de datos", () => __awaiter(void 0, void 0, void 0, function* () {
        mockedCollaboratorView.findOne.mockRejectedValue(new Error("DB error"));
        yield expect((0, collaborator_service_1.getInfoCollaboratorService)(1)).rejects.toThrow("No se pudo obtener la información del colaborador.");
    }));
});
