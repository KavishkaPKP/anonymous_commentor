import mongoose from "mongoose";


const commentSchema = new mongoose.Schema({

    comment: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: false,
    },

}, {
    timestamps: true
});

const comment = mongoose.model("comment", commentSchema);
export default comment;
