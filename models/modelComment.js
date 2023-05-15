const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/Mydata', { useNewUrlParser: true, useUnifiedTopology: true });
const Schema = mongoose.Schema;

const commentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  game: { type: String, required: true }, // Tên game
  content: { type: String, required: true }, // Nội dung bình luận
},{
    collection:'Comment'
});

const Comment = mongoose.model('Comment', commentSchema);

module.exports = Comment;
