import express from "express";
import {
  createOnboardingController,
  updateOnboardingController,
} from "../controllers/onboarding.controller";

const router = express.Router();

router.post("/onboarding", createOnboardingController);
router.patch("/onboarding", updateOnboardingController);

export default router;
