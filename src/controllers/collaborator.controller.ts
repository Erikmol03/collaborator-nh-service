import { Request, Response } from "express";
import {
  createCollaboratorService,
  getAllInfoFromCollaboratorService,
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
  } catch (error) {
    res.status(400).json({
      message: "Ocurrio un error al procesar la solicitud",
      error: error,
    });
  }
};

export const getAllInfoFromCollaboratorController = async (
  _req: Request,
  res: Response
) => {
  try {
    const collaboratorData = await getAllInfoFromCollaboratorService();
    console.log("Info de la view", collaboratorData);
    res.status(200).json(collaboratorData);
  } catch (error) {
    res.status(404).json({
      message: "No se encontraron colaboradores",
      error: error,
    });
  }
};

export const findAllColaboratorController = async (
  _req: Request,
  res: Response
) => {
  try {
    const collaboratorsFound = await findAllColaboratorService();
    res.status(200).json(collaboratorsFound);
  } catch (error) {
    res.status(404).json({
      message: "No se han encontrado colaboradores",
      error: error,
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
      error: error,
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
    res.status(404).json({
      message: "Ocurrio un error al procesar la solicitud",
      error: error,
    });
  }
};
