import cron from "node-cron";
import { sendTechnicalOnboardingReminder } from "../services/mail.service";
import { getUserToReminderTechOnboarding } from "../services/collaborator.service";

cron.schedule("* * * * *", async () => {
  console.log("⏰ Ejecutando tarea de recordatorio...");

  const sessions = await getUserToReminderTechOnboarding(); // Busca sesiones en 7 días

  for (const session of sessions) {
    await sendTechnicalOnboardingReminder(session.email, session.date);
  }
});
