const mongoose = require("mongoose")
const { Schema } = mongoose

const AuthorSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  books: {
    type: [mongoose.ObjectId],
    ref: "Book",
    default: [],
  },
});

const Author =mongoose.model("Author", AuthorSchema) 

module.exports = Author
