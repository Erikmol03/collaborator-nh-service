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
exports.updateTechnicalOnboardingController = exports.createTechnicalOnboardingController = void 0;
const technical_onboarding_service_1 = require("../services/technical_onboarding.service");
const createTechnicalOnboardingController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const createdOnboarding = yield (0, technical_onboarding_service_1.createTechnicalOnboardingService)(req.body);
        res.status(201).json(createdOnboarding);
    }
    catch (error) {
        res.status(400).json({
            message: "Ocurrio un error al procesar la solicitud",
            error: error,
        });
    }
});
exports.createTechnicalOnboardingController = createTechnicalOnboardingController;
const updateTechnicalOnboardingController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const onboardingUpdate = yield (0, technical_onboarding_service_1.updateTechnicalOnboardingService)(parseInt(req.params.id), req.body);
        res.status(200).json(onboardingUpdate);
    }
    catch (error) {
        res.status(400).json({
            message: "Ocurrio un error al procesar la solicitud",
            error: error,
        });
    }
});
exports.updateTechnicalOnboardingController = updateTechnicalOnboardingController;
