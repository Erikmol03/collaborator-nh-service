import { Request, Response } from "express";
import {
  createCollaboratorService,
  findAllColaboratorService,
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
  } catch (error: any) {
    res.status(400).json({
      message: "Ocurrio un error al procesar la solicitud",
      error: error.message,
    });
  }
};

export const findAllColaboratorController = async (res: Response) => {
  try {
    const collaboratorsFound = await findAllColaboratorService();
    res.status(200).json(collaboratorsFound);
  } catch (error) {
    res.status(404).json({
      message: "No se han encontrado colaboradores",
      error: error.message,
    });
  }
};

export const updateCollaboratorController = async (
  req: Request,
  res: Response
) => {
  try {
    const collaboratorUpdate = await updateCollaboratorService(
      parseInt(req.params.id),
      req.body
    );
    res.status(200).json(collaboratorUpdate);
  } catch (error) {
    res.status(400).json({
      message: "Ocurrio un error al procesar la solicitud",
      error: error.message,
    });
  }
};

export const deleteCollaboratorController = async (
  req: Request,
  res: Response
) => {
  try {
    const deletedCollaborator = await deleteCollaboratorService(
      parseInt(req.params.id)
    );
    res.status(200).json(deletedCollaborator);
  } catch (error) {
    res.status(400).json({
      message: "Ocurrio un error al procesar la solicitud",
      error: error.message,
    });
  }
};
