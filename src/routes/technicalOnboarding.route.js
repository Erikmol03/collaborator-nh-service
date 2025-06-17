"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const auth_middleware_1 = require("../middleware/auth.middleware");
const technicalOnboarding_controller_1 = require("../controllers/technicalOnboarding.controller");
const router = express_1.default.Router();
router.use("tech-onboarding", auth_middleware_1.verifyToken);
router.get("/tech-onboarding/get", technicalOnboarding_controller_1.getTypeTechOnboardingController);
exports.default = router;
