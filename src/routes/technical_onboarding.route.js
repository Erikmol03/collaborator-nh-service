"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const auth_middleware_1 = require("../middleware/auth.middleware");
const technical_onboarding_controller_1 = require("../controllers/technical_onboarding.controller");
const router = express_1.default.Router();
router.use("tech-onboarding", auth_middleware_1.verifyToken);
router.post("/tech-onboarding/create", technical_onboarding_controller_1.createTechnicalOnboardingController);
router.patch("/tech-onboarding/update/:id", technical_onboarding_controller_1.updateTechnicalOnboardingController);
exports.default = router;
