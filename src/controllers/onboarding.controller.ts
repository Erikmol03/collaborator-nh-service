import { Request, Response } from "express";
import {
  createOnboardingService,
  updateOnboardingService,
} from "../services/onboarding.service";

export const createOnboardingController = async (
  req: Request,
  res: Response
) => {
  try {
    const createdOnboarding = await createOnboardingService(req.body);
    res.status(201).json(createdOnboarding);
  } catch (error) {
    res.status(400).json({
      message: "Ocurrio un error al procesar la solicitud",
      error: error.message,
    });
  }
};

export const updateOnboardingController = async (
  req: Request,
  res: Response
) => {
  try {
    const onboardingUpdate = await updateOnboardingService(
      parseInt(req.params.id),
      req.body
    );
    res.status(200).json(onboardingUpdate);
  } catch (error) {
    res.status(400).json({
      message: "Ocurrio un error al procesar la solicitud",
      error: error.message,
    });
  }
};
