import { Request, Response } from "express";
import { NotesService } from "../services/notes.service";

export const NotesController = {
    getAll(req: Request, res: Response) {
        const notes = NotesService.getAll();
        res.status(200).json(notes);
    },

    getById(req: Request, res: Response) {
        const { id } = req.params;
        const note = NotesService.getById(id);

        if (!note) {
            return res.status(404).json({ error: "Note not found" });
        }

        res.status(200).json(note);
    },
}   