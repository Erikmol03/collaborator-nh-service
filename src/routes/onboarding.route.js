"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const onboarding_controller_1 = require("../controllers/onboarding.controller");
const router = express_1.default.Router();
router.post("/create/onboarding", onboarding_controller_1.createOnboardingController);
router.patch("/update/onboarding", onboarding_controller_1.updateOnboardingController);
exports.default = router;
