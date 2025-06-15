import { TechnicalOnboarding } from "../models/technical_onboarding.model";

export const createTechnicalOnboardingService = async (
  data: TechnicalOnboarding
) => {
  const newOnborading = await TechnicalOnboarding.create(data);
  return newOnborading;
};

export const updateTechnicalOnboardingService = async (
  id: number,
  data: Partial<TechnicalOnboarding>
) => {
  await TechnicalOnboarding.update(data, { where: { id_onboarding: id } });
  const message = "Estado del onboarding actualizado";
  return message;
};
