import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  printerId: String,
  userId: Number,
  location: {
    campus: { type: String },
    building: { type: String },
    room: { type: String },
  },
  cost: String,
  time: String // Assuming you want to store the time as a Date type
});


export default mongoose.model("HistoryPrint", userSchema);
