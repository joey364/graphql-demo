const mongoose = require("mongoose")
const { Schema, ObjectId } = mongoose

const BookSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  authorId: {
    type: ObjectId,
    ref: "Author",
    required: true,
  },
});

const Book = mongoose.model("Book", BookSchema)

module.exports = Book
