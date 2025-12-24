import { Request, Response } from "express";
import { NotesService } from "../services/notes.service";

export const NotesController = {
    getAll(_req: Request, res: Response) {
        const notes = NotesService.getAll();
        res.status(200).json(notes);
    },

    getById(req: Request, res: Response) {
        const id = req.params.id;
        if (!id) {
            return res.status(400).json({ error: "Note id is required" });
        }
        const note = NotesService.getById(id);

        if (!note) {
            return res.status(404).json({ error: "Note not found" });
        }

        res.status(200).json(note);
    },

    create(req: Request, res: Response) {
        const { title, content } = req.body;    
        if (!title || !content) {
            return res.status(400).json({
                error: "Title and content are required"
            });
        }   
        const note = NotesService.create(title, content);
        res.status(201).json(note);
    },

    update(req: Request, res: Response) {
        const id = req.params.id;
        const { title, content } = req.body;

        if (!id) {
            return res.status(400).json({ error: "Note id is required" });
        }

        if (!title || !content) {
            return res.status(400).json({
                error: "Title and content are required"
            });
        }

    const updatedNote = NotesService.update(id, title, content);

    if (!updatedNote) {
        return res.status(404).json({ error: "Note not found" });
    }

    res.status(200).json(updatedNote);
    },

    delete(req: Request, res: Response) {
        const id = req.params.id;

        if (!id) {
        return res.status(400).json({ error: "Note id is required" });
        }

        const deleted = NotesService.delete(id);

        if (!deleted) {
        return res.status(404).json({ error: "Note not found" });
        }

        res.status(204).send();
    }
}