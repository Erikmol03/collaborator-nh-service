import cron from "node-cron";
import { sendTechnicalOnboardingReminder } from "../services/mail.service";
import { getUserToReminderTechOnboarding } from "../services/collaborator.service";

cron.schedule("0 8 * * 1", async () => {
  try {
    const sessions = await getUserToReminderTechOnboarding();
    for (const session of sessions) {
      await sendTechnicalOnboardingReminder(session.email, session.date);
    }
  } catch (error) {
    console.error("No se encontraton onboardings técnicos ", error);
  }
});
