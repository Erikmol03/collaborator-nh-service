"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authController = void 0;
const auth_service_1 = require("../services/auth.service");
const authController = (_req, res) => {
    try {
        const generateToken = (0, auth_service_1.authService)();
        res.status(201).json({ token: generateToken });
    }
    catch (error) {
        console.error("Error en token", error);
    }
};
exports.authController = authController;
