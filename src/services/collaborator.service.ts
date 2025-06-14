import { Collaborator } from "../models/collaborator.model";

export const createCollaboratorService = async (data: Collaborator) => {
  const newCollaborator = await Collaborator.create(data);
  return newCollaborator;
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
  const message = "Colaborador eliminado con exito";
  return message + deleteCollaborator;
};
