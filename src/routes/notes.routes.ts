import { Router } from "express";
import { NotesController } from "../controllers/notes.controller";
import { validate } from "../middlewares/validation.middleware";
import { createNoteSchema, updateNoteSchema, noteIdParamSchema } from "../validators/notes.schema";

const router = Router();

router.get("/notes", NotesController.getAll);
router.get("/notes/:id", validate(noteIdParamSchema, "params"), NotesController.getById);
router.post("/notes", validate(createNoteSchema), NotesController.create);
router.put("/notes/:id", validate(noteIdParamSchema, "params"), validate(updateNoteSchema), NotesController.update);
router.delete("/notes/:id", validate(noteIdParamSchema, "params"), NotesController.delete);

export default router;
