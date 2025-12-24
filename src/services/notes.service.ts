import { notes } from "../data/notes.store";
import { Note } from "../models/note.model";
import { randomUUID } from "crypto";

export const NotesService = {
  getAll(): Note[] {
    return notes;
  },

  getById(id: string): Note | undefined {
    return notes.find(note => note.id === id);
  },

};