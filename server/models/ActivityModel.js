import mongoose from "mongoose";

const activitySchema = new mongoose.Schema(
  {
    printerId: String,
    userId: String,
    document: String,
    pages: Number,
    price: Number,
    isBW: Boolean,
    status: {
      type: String,
      enum: ["Chưa thanh toán", "Đã thanh toán"],
      default: "Chưa thanh toán",
    },
  },
  { timestamps: true }
);

export default mongoose.model("Activity", activitySchema);
