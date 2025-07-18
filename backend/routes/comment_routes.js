import express from 'express';
const router = express.Router();

import comments from '../models/commentSchema.js';

// Assuming you use express.Router() somewhere:

router.get('/getComment', async (req, res) => {
  try {
    const allComments = await comments.find();
    res.status(200).json(allComments); // send array of comments directly
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch comments', error: error.message });
  }
});

router.post('/comment', async (req, res) => {
  const { comment, name } = req.body;
  
  try {
    const newComment = new comments({ comment, name });
    await newComment.save();
    res.status(201).json({ 
      message: 'සාර්ථකව කමෙන්ට් එක ඇඩ් කරා!', 
      comment: newComment 
    });
  } catch (error) {
    res.status(500).json({ message: 'Failed to save comment', error: error.message });
  }
});
export default router;