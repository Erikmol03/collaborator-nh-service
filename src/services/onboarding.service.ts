import { Onboarding } from "../models/onboarding.model";

export const createOnboardingService = async (data: Onboarding) => {
  const newOnborading = await Onboarding.create(data);
  return newOnborading;
};

export const updateOnboardingService = async (
  id: number,
  data: Partial<Onboarding>
) => {
  await Onboarding.update(data, { where: { id_onboarding: id } });
  const message = "Estado del onboarding actualizado";
  return message;
};
