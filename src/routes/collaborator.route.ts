import express from "express";
import {
  createCollaboratorController,
  findAllColaboratorController,
  updateCollaboratorController,
  deleteCollaboratorController,
} from "../controllers/collaborator.controller";

const router = express.Router();

router.post("/collaborator", createCollaboratorController);
router.get("/collaborator", findAllColaboratorController);
router.patch("/collaborator", updateCollaboratorController);
router.delete("/collaborator", deleteCollaboratorController);

export default router;
