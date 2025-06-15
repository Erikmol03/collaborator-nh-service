import { Collaborator } from "../models/collaborator.model";
import { CollaboratorView } from "../views/collaborator.view";
import { TechnicalOnboardingView } from "../views/techOnboardingDate.view";

type Reminder = {
  email: string;
  date: Date;
};

export const createCollaboratorService = async (data: Collaborator) => {
  const newCollaborator = await Collaborator.create(data);
  return newCollaborator;
};

export const getAllInfoFromCollaboratorService = async () => {
  const collaboratorData = await CollaboratorView.findAll();
  return collaboratorData;
};

export const getUserToReminderTechOnboarding = async () => {
  const dateTechOnboarding = await TechnicalOnboardingView.findAll();
  const reminders: Reminder[] = dateTechOnboarding.map((record) => ({
    email: record.email,
    date: record.date_technical_onboarding,
  }));
  return reminders;
};

export const findAllColaboratorService = async () => {
  const findAllCollaborator = await Collaborator.findAll();
  return findAllCollaborator;
};

export const updateCollaboratorService = async (
  id: number,
  data: Partial<Collaborator>
) => {
  await Collaborator.update(data, {
    where: { id_collaborator: id },
  });
  const message = "Información actualizada con exito";
  return message;
};

export const deleteCollaboratorService = async (id: number) => {
  const deleteCollaborator = await Collaborator.destroy({
    where: { id_collaborator: id },
  });
  if (deleteCollaborator === 0) {
    throw new Error("Colaborador no encotrado");
  }
  const message = "Colaborador eliminado con exito";
  return message;
};
