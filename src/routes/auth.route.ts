import express from "express";
import { authController } from "../controllers/auth.controller";

const router = express.Router();

router.get("/auth", authController);

export default router;
