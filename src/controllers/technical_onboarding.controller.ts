import { Request, Response } from "express";
import {
  createTechnicalOnboardingService,
  updateTechnicalOnboardingService,
} from "../services/technical_onboarding.service";

export const createTechnicalOnboardingController = async (
  req: Request,
  res: Response
) => {
  try {
    const createdOnboarding = await createTechnicalOnboardingService(req.body);
    res.status(201).json(createdOnboarding);
  } catch (error) {
    res.status(400).json({
      message: "Ocurrio un error al procesar la solicitud",
      error: error,
    });
  }
};

export const updateTechnicalOnboardingController = async (
  req: Request,
  res: Response
) => {
  try {
    const onboardingUpdate = await updateTechnicalOnboardingService(
      parseInt(req.params.id),
      req.body
    );
    res.status(200).json(onboardingUpdate);
  } catch (error) {
    res.status(400).json({
      message: "Ocurrio un error al procesar la solicitud",
      error: error,
    });
  }
};
