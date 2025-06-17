// tests/services/collaborator.service.test.ts

import { getInfoCollaboratorService } from "../../services/collaborator.service";
import { CollaboratorView } from "../../views/collaborator.view";

jest.mock("../../views/collaborator.view");

const mockedCollaboratorView = CollaboratorView as jest.Mocked<
  typeof CollaboratorView
>;

describe("getInfoCollaboratorService", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("debería retornar datos del colaborador cuando existe", async () => {
    const fakeCollaborator = {
      id_collaborator: 1,
      first_name: "Erik",
      last_name: "Molina",
      email: "erik@example.com",
      date_entry: new Date(),
      date_technical_onboarding: null,
    };

    mockedCollaboratorView.findOne.mockResolvedValue(fakeCollaborator as any);

    const result = await getInfoCollaboratorService(1);

    expect(result).toEqual(fakeCollaborator);
    expect(mockedCollaboratorView.findOne).toHaveBeenCalledWith({
      where: { id_collaborator: 1 },
    });
  });

  it("debería lanzar error si el colaborador no existe", async () => {
    mockedCollaboratorView.findOne.mockResolvedValue(null);

    await expect(getInfoCollaboratorService(99)).rejects.toThrow(
      "No se pudo obtener la información del colaborador."
    );
  });

  it("debería lanzar error si hay un problema en la base de datos", async () => {
    mockedCollaboratorView.findOne.mockRejectedValue(new Error("DB error"));

    await expect(getInfoCollaboratorService(1)).rejects.toThrow(
      "No se pudo obtener la información del colaborador."
    );
  });
});
