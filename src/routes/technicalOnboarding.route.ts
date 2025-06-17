import express from "express";
import { verifyToken } from "../middleware/auth.middleware";
import { getTypeTechOnboardingController } from "../controllers/technicalOnboarding.controller";

const router = express.Router();

router.use("tech-onboarding", verifyToken);

router.get("/tech-onboarding/get", getTypeTechOnboardingController);

export default router;
