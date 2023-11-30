const express = require("express");
const BookRouter = express.Router();
const {
  getAllBooks,
  getBookById,
  addNewBook,
  updateBook,
  deleteBook,
} = require("../controllers/Book.Controllers");

// GET all books from database
BookRouter.get("/", getAllBooks);

// GET a specific book by ID from database
BookRouter.get("/:id", getBookById);

// POST - Add a new book
BookRouter.post("/", addNewBook);

// PUT - Update an existing book in database
BookRouter.put("/:id", updateBook);

// DELETE - Remove a book from database
BookRouter.delete("/:id", deleteBook);

module.exports = {
  BookRouter,
};
