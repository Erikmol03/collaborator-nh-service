"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const verifyToken = (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
        res.status(403).json({ message: "Token no proporcionado" });
        return;
    }
    const token = authHeader.split("")[1];
    try {
        const tokenDecoded = jsonwebtoken_1.default.verify(token, process.env.JWT_SECRET);
        next();
    }
    catch (error) {
        res.status(403).json({ message: "Token invalido o expirado" });
    }
};
exports.verifyToken = verifyToken;
