"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendTechnicalOnboardingReminder = void 0;
const mail_1 = __importDefault(require("@sendgrid/mail"));
mail_1.default.setApiKey(process.env.SENDGRID_API_KEY);
const sendTechnicalOnboardingReminder = (to, date) => __awaiter(void 0, void 0, void 0, function* () {
    const message = {
        to,
        from: "novahiremailer@gmail.com",
        subject: "Recordatorio de Onboarding Técnico",
        text: `Hola, recuerda que tu sesión técnica de onboarding será el ${date}`,
    };
    try {
        yield mail_1.default.send(message);
        console.log("Correo enviado");
    }
    catch (error) {
        console.error("Error al enviar el correo ", error);
    }
});
exports.sendTechnicalOnboardingReminder = sendTechnicalOnboardingReminder;
