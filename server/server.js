import express from "express";
import morgan from "morgan";
import * as dotenv from "dotenv";
dotenv.config({ path: "../.env" });
import mongoose from "mongoose";

const app = express();
app.use(express.json());

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use("*", (req, res) => {
  res.status(404).json({ msg: "not found" });
});

const port = process.env.PORT || 5001;

try {
  await mongoose.connect(process.env.MONGO_URL);
  app.listen(5001, () => {
    console.log(`server listening on port ${port}`);
  });
} catch (error) {
  console.log(error);
  process.exit(1);
}
