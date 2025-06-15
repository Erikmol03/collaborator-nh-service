import sgMail from "@sendgrid/mail";

sgMail.setApiKey(process.env.SENDGRID_API_KEY!);

export const sendTechnicalOnboardingReminder = async (
  to: string,
  date: Date
) => {
  const message = {
    to,
    from: "novahiremailer@gmail.com",
    subject: "Recordatorio de Onboarding Técnico",
    text: `Hola, recuerda que tu sesión técnica de onboarding será el ${date}`,
  };

  try {
    await sgMail.send(message);
    console.log("Correo enviado");
  } catch (error) {
    console.error("Error al enviar el correo ", error);
  }
};
