import mongoose from "mongoose";

const printerSchema = new mongoose.Schema(
  {
    printerId: String,
    location: String,
    pagesRemaining: Number,
    model: String,
    make: String,
    status: {
      type: String,
      enum: ["Sẵn sàng", "Đang in", "Hết giấy"],
    },
  },
  { timestamps: true }
);

export default mongoose.model("Printer", printerSchema);
