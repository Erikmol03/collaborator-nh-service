import express from "express";
import {
  createTechnicalOnboardingController,
  updateTechnicalOnboardingController,
} from "../controllers/technical_onboarding.controller";

const router = express.Router();

router.post("/create/onboarding", createTechnicalOnboardingController);
router.patch("/update/onboarding/:id", updateTechnicalOnboardingController);

export default router;
