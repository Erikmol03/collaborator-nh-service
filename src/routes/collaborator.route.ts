import express from "express";
import {
  createCollaboratorController,
  getAllInfoFromCollaboratorController,
  findAllColaboratorController,
  updateCollaboratorController,
  deleteCollaboratorController,
} from "../controllers/collaborator.controller";

const router = express.Router();

router.post("/create/collaborator", createCollaboratorController);
router.get("/data/collaborator", getAllInfoFromCollaboratorController);
router.get("/find/collaborator", findAllColaboratorController);
router.patch("/update/collaborator/:id", updateCollaboratorController);
router.delete("/delete/collaborator/:id", deleteCollaboratorController);

export default router;
