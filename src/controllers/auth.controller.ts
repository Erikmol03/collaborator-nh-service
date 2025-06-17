import { Request, Response } from "express";
import { authService } from "../services/auth.service";

export const authController = (_req: Request, res: Response) => {
  try {
    const generateToken = authService();
    res.status(201).json({ token: generateToken });
  } catch (error) {
    console.error("Error en token", error);
  }
};
