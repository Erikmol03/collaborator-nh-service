"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const collaborator_controller_1 = require("../controllers/collaborator.controller");
const router = express_1.default.Router();
router.post("/create/collaborator", collaborator_controller_1.createCollaboratorController);
router.get("/data/collaborator", collaborator_controller_1.getAllInfoFromCollaboratorController);
router.get("/find/collaborator", collaborator_controller_1.findAllColaboratorController);
router.patch("/update/collaborator/:id", collaborator_controller_1.updateCollaboratorController);
router.delete("/delete/collaborator/:id", collaborator_controller_1.deleteCollaboratorController);
exports.default = router;
