import { Router } from "express";
import { NotesController } from "../controllers/notes.controller";

const router = Router();

router.get("/notes", NotesController.getAll);
router.get("/notes/:id", NotesController.getById);
router.post("/notes", NotesController.create);
router.put("/notes/:id", NotesController.update);
router.delete("/notes/:id", NotesController.delete);

export default router;