"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const auth_middleware_1 = require("../middleware/auth.middleware");
const collaborator_controller_1 = require("../controllers/collaborator.controller");
const router = express_1.default.Router();
router.use("/collaborator", auth_middleware_1.verifyToken);
router.post("/collaborator/create", collaborator_controller_1.createCollaboratorController);
router.get("/collaborator/data", collaborator_controller_1.getAllInfoFromCollaboratorController);
router.get("/collaborator/find/:id", collaborator_controller_1.getInfoCollaboratorController);
router.patch("/collaborator/update/:id", collaborator_controller_1.updateCollaboratorController);
router.delete("/collaborator/delete/:id", collaborator_controller_1.deleteCollaboratorController);
exports.default = router;
