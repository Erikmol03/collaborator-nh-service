import express from "express";
import { verifyToken } from "../middleware/auth.middleware";
import {
  createCollaboratorController,
  getAllInfoFromCollaboratorController,
  findAllColaboratorController,
  updateCollaboratorController,
  deleteCollaboratorController,
} from "../controllers/collaborator.controller";

const router = express.Router();

router.use("/collaborator", verifyToken);

router.post("/collaborator/create", createCollaboratorController);
router.get("/collaborator/data", getAllInfoFromCollaboratorController);
router.get("/collaborator/find", findAllColaboratorController);
router.patch("/collaborator/update/:id", updateCollaboratorController);
router.delete("/collaborator/delete/:id", deleteCollaboratorController);

export default router;
