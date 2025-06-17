import { Collaborator } from "../../models/collaborator.model";
import * as collaboratorService from "../../services/collaborator.service";

jest.mock("../../models/collaborator.model", () => ({
  Collaborator: {
    create: jest.fn(),
    update: jest.fn(),
    destroy: jest.fn(),
  },
}));

describe("createCollaboratorService", () => {
  it("debe crear un nuevo colaborador", async () => {
    const mockData = {
      first_name: "John",
      last_name: "Doe",
      email: "john@example.com",
    };
    const mockCreated = { id: 1, ...mockData };

    (Collaborator.create as jest.Mock).mockResolvedValue(mockCreated);

    const result = await collaboratorService.createCollaboratorService(
      mockData as any
    );
    expect(Collaborator.create).toHaveBeenCalledWith(mockData);
    expect(result).toEqual(mockCreated);
  });
});

describe("updateCollaboratorService", () => {
  it("debe actualizar la información del colaborador correctamente", async () => {
    (Collaborator.update as jest.Mock).mockResolvedValue([1]);

    const result = await collaboratorService.updateCollaboratorService(1, {
      email: "nuevo@correo.com",
    });
    expect(Collaborator.update).toHaveBeenCalledWith(
      { email: "nuevo@correo.com" },
      { where: { id_collaborator: 1 } }
    );
    expect(result).toBe("Información actualizada con éxito.");
  });

  it("debe manejar errores al actualizar", async () => {
    (Collaborator.update as jest.Mock).mockRejectedValue(new Error("Fallo DB"));

    await expect(
      collaboratorService.updateCollaboratorService(1, {})
    ).rejects.toThrow("No se pudo actualizar la información del colaborador."); // o lanzas error explícitamente
  });
});

describe("deleteCollaboratorService", () => {
  it("debe eliminar un colaborador exitosamente", async () => {
    (Collaborator.destroy as jest.Mock).mockResolvedValue(1);

    const result = await collaboratorService.deleteCollaboratorService(1);
    expect(Collaborator.destroy).toHaveBeenCalledWith({
      where: { id_collaborator: 1 },
    });
    expect(result).toBe("Colaborador eliminado con éxito.");
  });

  it("debe lanzar error si el colaborador no existe", async () => {
    (Collaborator.destroy as jest.Mock).mockResolvedValue(0);

    await expect(
      collaboratorService.deleteCollaboratorService(999)
    ).rejects.toThrow("No se pudo eliminar el colaborador.");
  });
});
