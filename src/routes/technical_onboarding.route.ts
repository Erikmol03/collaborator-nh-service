import express from "express";
import { verifyToken } from "../middleware/auth.middleware";
import {
  createTechnicalOnboardingController,
  updateTechnicalOnboardingController,
} from "../controllers/technical_onboarding.controller";

const router = express.Router();

router.use("tech-onboarding", verifyToken);

router.post("/tech-onboarding/create", createTechnicalOnboardingController);
router.patch(
  "/tech-onboarding/update/:id",
  updateTechnicalOnboardingController
);

export default router;
