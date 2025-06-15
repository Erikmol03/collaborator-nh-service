import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

export const verifyToken = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    res.status(403).json({ message: "Token no proporcionado" });
    return;
  }

  const token = authHeader.split("")[1];

  try {
    const tokenDecoded = jwt.verify(token, process.env.JWT_SECRET as string);
    next();
  } catch (error) {
    res.status(403).json({ message: "Token invalido o expirado" });
  }
};
