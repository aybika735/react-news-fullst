const mongoose = require("mongoose");

const categorySchema = mongoose.Schema({
  text: String,
  categoryId:{
      type: mongoose.SchemaTypes.ObjectId,
      ref: "Category",

  }
});

const Comment = mongoose.model("Comment", categorySchema);

module.exports = Comment;
