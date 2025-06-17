import { Request, Response } from "express";
import {
  createCollaboratorService,
  getAllInfoFromCollaboratorService,
  getInfoCollaboratorService,
  updateCollaboratorService,
  deleteCollaboratorService,
} from "../services/collaborator.service";

export const createCollaboratorController = async (
  req: Request,
  res: Response
) => {
  try {
    const newCollaborator = await createCollaboratorService(req.body);
    res.status(201).json(newCollaborator);
  } catch (error) {
    console.error("Error en createCollaboratorController:", error);
    res.status(500).json({ message: "Error al crear colaborador." });
  }
};

export const getAllInfoFromCollaboratorController = async (
  _req: Request,
  res: Response
) => {
  try {
    const collaboratorData = await getAllInfoFromCollaboratorService();
    res.status(200).json(collaboratorData);
  } catch (error) {
    console.error("Error en getAllInfoFromCollaboratorController:", error);
    res.status(500).json({ message: "Error al obtener colaboradores." });
  }
};

export const getInfoCollaboratorController = async (
  req: Request,
  res: Response
) => {
  const id = parseInt(req.params.id);
  try {
    const collaboratorData = await getInfoCollaboratorService(id);
    res.status(200).json(collaboratorData);
  } catch (error) {
    console.error(`Error al obtener colaborador con ID ${id}:`, error);
    res.status(404).json({ message: "Colaborador no encontrado." });
  }
};

export const updateCollaboratorController = async (
  req: Request,
  res: Response
) => {
  const id = parseInt(req.params.id);
  try {
    const result = await updateCollaboratorService(id, req.body);
    res.status(200).json({ message: result });
  } catch (error) {
    console.error(`Error al actualizar colaborador con ID ${id}:`, error);
    res.status(400).json({ message: "Error al actualizar colaborador." });
  }
};

export const deleteCollaboratorController = async (
  req: Request,
  res: Response
) => {
  const id = parseInt(req.params.id);
  try {
    const result = await deleteCollaboratorService(id);
    res.status(200).json({ message: result });
  } catch (error) {
    console.error(`Error al eliminar colaborador con ID ${id}:`, error);
    res
      .status(404)
      .json({ message: "Colaborador no encontrado o no se pudo eliminar." });
  }
};
