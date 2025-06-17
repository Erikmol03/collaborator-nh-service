"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authService = void 0;
const generateToken_1 = require("../utilities/generateToken");
const authService = () => {
    const token = (0, generateToken_1.generateToken)();
    return token;
};
exports.authService = authService;
