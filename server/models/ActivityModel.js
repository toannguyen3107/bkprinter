import mongoose from "mongoose";

const activitySchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Types.ObjectId,
      ref: "User",
    },
    printer: {
      type: mongoose.Types.ObjectId,
      ref: "Printer",
    },
    document: String,
    price: Number,
    status: {
      type: String,
      enum: ["Chưa thanh toán", "Đã thanh toán"],
    },
  },
  { timestamps: true }
);

export default mongoose.model("Activity", activitySchema);
