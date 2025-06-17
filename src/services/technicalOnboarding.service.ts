import { TechnicalOnboarding } from "../models/technicalOnboarding.model";

export const getTypeTechOnboardingService = async () => {
  try {
    const newOnborading = await TechnicalOnboarding.findAll();
    return newOnborading;
  } catch (error) {
    console.error(
      "Error no se encontraron tipos de onboardings técnicos",
      error
    );
    throw new Error("No se pudo obtener los tipos de onboarding");
  }
};
