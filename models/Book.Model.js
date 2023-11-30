const mongoose = require("mongoose");

const bookSchema = mongoose.Schema(
  {
    title: { type: String, required: true },
    author: { type: String, required: true },
    language: { type: String, required: true },
    description: { type: String, required: true },
    publishDate: { type: Date },
    totalQuantity: { type: Number, require: true },
    genre: String,
  },
  {
    versionKey: false,
  }
);

const BookModel = mongoose.model("books", bookSchema);

module.exports = {
  BookModel,
};
