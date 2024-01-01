import mongoose from "mongoose";
import UserModel, { userSchema } from "./UserModel.js";

const feedbackSchema = new mongoose.Schema(
  {
    title: String,
    user: {type: mongoose.Types.ObjectId, ref: "User"},
    value: String,
    comments: [
        {
            userId: String,
            comment: String,
            firstName: String,
            lastName: String,
            email: String,
            time: Date
        },
    ]
  },
  { timestamps: true }
);

export default mongoose.model("Feedback", feedbackSchema);
