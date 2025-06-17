import { Request, Response } from "express";
import { getTypeTechOnboardingService } from "../services/technicalOnboarding.service";

export const getTypeTechOnboardingController = async (
  _req: Request,
  res: Response
) => {
  try {
    const getType = await getTypeTechOnboardingService();
    res.status(201).json(getType);
  } catch (error) {
    res.status(400).json({
      message: "Ocurrio un error al procesar la solicitud",
      error: error,
    });
  }
};
