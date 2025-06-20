import express, { Request, Response } from "express";
import { Note } from "../models/notes.model";

export const notesRoutes = express.Router();

notesRoutes.post("/create-note", async (req: Request, res: Response) => {
  const body = req.body;

  // notesRoutesroach 1
  // const myNote = new Note({
  //   title: "Learning express",
  //   tags: {
  //     label: "database",
  //   },
  // });

  // await myNote.save();

  // notesRoutesroach 2
  const note = await Note.create(body);

  res.status(201).json({
    success: true,
    message: "Note created",
    note,
  });
});

notesRoutes.get("/", async (req: Request, res: Response) => {
  const notes = await Note.find();

  res.status(201).json({
    success: true,
    message: "Note created",
    notes,
  });
});

notesRoutes.get("/:noteId", async (req: Request, res: Response) => {
  const noteId = req.params.noteId;
  const note = await Note.findById(noteId);

  res.status(201).json({
    success: true,
    message: "Note created",
    note,
  });
});

notesRoutes.patch("/:noteId", async (req: Request, res: Response) => {
  const noteId = req.params.noteId;
  const updatedBody = req.body;
  const note = await Note.findByIdAndUpdate(noteId, updatedBody, { new: true });
  // const note = await Note.updateOne({ _id: noteId }, updatedBody, {
  //   new: true,
  // });

  res.status(201).json({
    success: true,
    message: "Note updated",
    note,
  });
});

notesRoutes.delete("/:noteId", async (req: Request, res: Response) => {
  const noteId = req.params.noteId;
  const note = await Note.findByIdAndDelete(noteId);
  // const note = await Note.updateOne({ _id: noteId }, updatedBody, {
  //   new: true,
  // });

  res.status(201).json({
    success: true,
    message: "Note deleted",
    note,
  });
});
