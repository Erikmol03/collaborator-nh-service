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
exports.updateOnboardingController = exports.createOnboardingController = void 0;
const onboarding_service_1 = require("../services/onboarding.service");
const createOnboardingController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const createdOnboarding = yield (0, onboarding_service_1.createOnboardingService)(req.body);
        res.status(201).json(createdOnboarding);
    }
    catch (error) {
        res.status(400).json({
            message: "Ocurrio un error al procesar la solicitud",
            error: error,
        });
    }
});
exports.createOnboardingController = createOnboardingController;
const updateOnboardingController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const onboardingUpdate = yield (0, onboarding_service_1.updateOnboardingService)(parseInt(req.params.id), req.body);
        res.status(200).json(onboardingUpdate);
    }
    catch (error) {
        res.status(400).json({
            message: "Ocurrio un error al procesar la solicitud",
            error: error,
        });
    }
});
exports.updateOnboardingController = updateOnboardingController;
