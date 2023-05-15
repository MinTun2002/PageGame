const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const Comment = require('../models/modelComment');
mongoose.connect('mongodb://127.0.0.1:27017/Mydata', { useNewUrlParser: true, useUnifiedTopology: true });


// Sử dụng body-parser middleware
// router.use(bodyParser.urlencoded({ extended: false }));
// router.use(bodyParser.json());

// Lấy danh sách bình luận cho một game cụ thể
router.get('/:game', async (req, res) => {
  const { game } = req.params;

  try {
    const comments = await Comment.find({ game });
    res.json(comments);
  } catch (error) {
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

// Thêm bình luận mới cho một game cụ thể
router.post('/:game', async (req, res) => {
  const { game } = req.params;
  const { name, content } = req.body;


  try {
    const comment = new Comment({ name,game, content });
    await comment.save();
    res.sendStatus(201);
  } catch (error) {
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

module.exports = router;
