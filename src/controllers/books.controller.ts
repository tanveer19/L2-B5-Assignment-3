import express, { Request, Response } from "express";
import Book from "../models/books.model";
import { BookResponseDto } from "../interfaces/books.interface";

export const booksRoutes = express.Router();

// ...existing code...
booksRoutes.post("/", async (req: Request, res: Response<BookResponseDto>) => {
  try {
    const book = await Book.create(req.body);

    // Convert Mongoose document to plain object
    const bookObj = book.toObject();

    // Create a new object with _id first
    const data = {
      _id: bookObj._id,
      title: bookObj.title,
      author: bookObj.author,
      genre: bookObj.genre,
      isbn: bookObj.isbn,
      description: bookObj.description,
      copies: bookObj.copies,
      available: bookObj.available,
      createdAt: bookObj.createdAt,
      updatedAt: bookObj.updatedAt,
    };

    res.status(201).json({
      success: true,
      message: "Book created successfully",
      data, // _id will appear first
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Failed to create book",
      error: error instanceof Error ? error.message : "Unknown error",
    });
  }
});
// ...existing code...

booksRoutes.get("/", async (req: Request, res: Response) => {
  const books = await Book.find();

  res.status(201).json({
    success: true,
    message: "Book created",
    books,
  });
});

booksRoutes.get("/:bookId", async (req: Request, res: Response) => {
  const bookId = req.params.bookId;
  const book = await Book.findById(bookId);

  res.status(201).json({
    success: true,
    message: "Book created",
    book,
  });
});

booksRoutes.patch("/:bookId", async (req: Request, res: Response) => {
  const bookId = req.params.bookId;
  const updatedBody = req.body;
  const book = await Book.findByIdAndUpdate(bookId, updatedBody, { new: true });

  res.status(201).json({
    success: true,
    message: "Book updated",
    book,
  });
});

booksRoutes.delete("/:bookId", async (req: Request, res: Response) => {
  const bookId = req.params.bookId;
  const book = await Book.findByIdAndDelete(bookId);

  res.status(201).json({
    success: true,
    message: "Book deleted",
    book,
  });
});
