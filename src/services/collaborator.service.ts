import { Collaborator } from "../models/collaborator.model";
import { CollaboratorView } from "../views/collaborator.view";
import { TechnicalOnboardingView } from "../views/techOnboardingDate.view";

type Reminder = {
  email: string;
  date: Date;
};

export const createCollaboratorService = async (data: Collaborator) => {
  try {
    const newCollaborator = await Collaborator.create(data);
    return newCollaborator;
  } catch (error) {
    console.error("Error al crear colaborador:", error);
    throw new Error("No se pudo crear el colaborador.");
  }
};

export const getAllInfoFromCollaboratorService = async () => {
  try {
    const collaboratorData = await CollaboratorView.findAll();
    return collaboratorData;
  } catch (error) {
    console.error("Error al obtener todos los colaboradores:", error);
    throw new Error("No se pudo obtener la información de los colaboradores.");
  }
};

export const getUserToReminderTechOnboarding = async () => {
  try {
    const dateTechOnboarding = await TechnicalOnboardingView.findAll();
    const reminders: Reminder[] = dateTechOnboarding.map((record) => ({
      email: record.email,
      date: record.date_technical_onboarding,
    }));
    return reminders;
  } catch (error) {
    console.error(
      "Error al obtener recordatorios de onboarding técnico:",
      error
    );
    throw new Error("No se pudo obtener la información de recordatorios.");
  }
};

export const getInfoCollaboratorService = async (id: number) => {
  try {
    const collaboratorData = await CollaboratorView.findOne({
      where: { id_collaborator: id },
    });
    if (!collaboratorData) {
      throw new Error("Colaborador no encontrado.");
    }
    return collaboratorData;
  } catch (error) {
    console.error(`Error al obtener colaborador con ID ${id}:`, error);
    throw new Error("No se pudo obtener la información del colaborador.");
  }
};

export const updateCollaboratorService = async (
  id: number,
  data: Partial<Collaborator>
) => {
  try {
    await Collaborator.update(data, {
      where: { id_collaborator: id },
    });
    return "Información actualizada con éxito.";
  } catch (error) {
    console.error("Error actualizando colaborador:", error);
    throw new Error("No se pudo actualizar la información del colaborador.");
  }
};

export const deleteCollaboratorService = async (id: number) => {
  try {
    const deleted = await Collaborator.destroy({
      where: { id_collaborator: id },
    });

    if (deleted === 0) {
      throw new Error("Colaborador no encontrado para eliminar.");
    }

    return "Colaborador eliminado con éxito.";
  } catch (error) {
    console.error("Error eliminando colaborador:", error);
    throw new Error("No se pudo eliminar el colaborador.");
  }
};
