import mongoose from "mongoose";

const printerSchema = new mongoose.Schema(
  {
    printerId: String,
    location: {
      campus: { type: String },
      building: { type: String },
      room: { type: String },
    },
    isColorPrinter:Boolean,
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
