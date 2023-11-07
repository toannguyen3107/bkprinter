import mongoose from "mongoose";

const activitySchema = new mongoose.Schema(
  {
    userId: Number,
    printerId: String,
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
