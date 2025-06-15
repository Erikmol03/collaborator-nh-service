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
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateTechnicalOnboardingService = exports.createTechnicalOnboardingService = void 0;
const technical_onboarding_model_1 = require("../models/technical_onboarding.model");
const createTechnicalOnboardingService = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const newOnborading = yield technical_onboarding_model_1.TechnicalOnboarding.create(data);
    return newOnborading;
});
exports.createTechnicalOnboardingService = createTechnicalOnboardingService;
const updateTechnicalOnboardingService = (id, data) => __awaiter(void 0, void 0, void 0, function* () {
    yield technical_onboarding_model_1.TechnicalOnboarding.update(data, { where: { id_onboarding: id } });
    const message = "Estado del onboarding actualizado";
    return message;
});
exports.updateTechnicalOnboardingService = updateTechnicalOnboardingService;
