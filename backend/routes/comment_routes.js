
import express from 'express';
const router = express.Router();

import comments from '../models/commentSchema.js';

router.post('/comment', async (req, res) => {
    const { comment, name } = req.body;

    try {
        const addnewComment = new comments({ comment, name })
        await addnewComment.save();
        res.status(201).json({ message: "සාර්තකව ඔබගේ කමෙන්ට් එක ඇඩ් වී ඇත...", comment: addnewComment });

    } catch (error) {
        res.status(500).json({ message: 'කමෙන්ට් කරන්න බෑ... ගැටලුව​ක්', error: error.message });
    }
})

export default router;