const { BookModel } = require("../models/Book.Model");

// Get all books
const getAllBooks = async (req, res) => {
  try {
    const books = await BookModel.find();
    res.status(200).json(books);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get a specific book by ID
const getBookById = async (req, res) => {
  const { id } = req.params;
  try {
    const book = await BookModel.findById(id);
    if (!book) {
      return res.status(404).json({ message: "Book not found" });
    }
    res.status(200).json(book);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Add a new book
const addNewBook = async (req, res) => {
  try {
    const NewBook = await BookModel(req.body);
    await NewBook.save();
    res.status(200).json(NewBook);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Update an existing book
const updateBook = async (req, res) => {
  const {
    title,
    author,
    language,
    description,
    publishDate,
    totalQuantity,
    genre,
  } = req.body;
  const { id } = req.params;
  try {
    const updatedBook = await BookModel.findByIdAndUpdate(
      { _id: id },
      {
        title,
        author,
        genre,
        language,
        description,
        publishDate,
        totalQuantity,
      },
      { new: true }
    ); // Setting { new: true } returns the updated document

    if (!updatedBook) {
      return res.status(404).json({ message: "Book not found" });
    }

    res.status(200).json(updatedBook);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Delete a book
const deleteBook = async (req, res) => {
  const { id } = req.params;
  try {
    const book = await BookModel.findOne({ _id: id });
    if (!book) {
      return res.status(404).json({ message: "Book not found" });
    }

    await BookModel.findByIdAndDelete({ _id: id });
    res.status(200).json({ message: "Book deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  getAllBooks,
  getBookById,
  addNewBook,
  updateBook,
  deleteBook,
};
