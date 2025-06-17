"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./src/app/app"));
const dataBaseConection_1 = require("./src/db/dataBaseConection");
const generateToken_1 = require("./src/utilities/generateToken");
require("./src/utilities/autoSendRemiderEmail.schedule");
const PORT = process.env.PORT || 3001;
app_1.default.listen(PORT);
(0, dataBaseConection_1.testConnection)();
(0, generateToken_1.generateToken)();
