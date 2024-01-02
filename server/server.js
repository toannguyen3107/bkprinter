import express from "express";
import morgan from "morgan";
import * as dotenv from "dotenv";
dotenv.config({ path: "../.env" });
import mongoose from "mongoose";
import userRouter from "./routes/userRouter.js";
import printerRouter from "./routes/printerRouter.js";
import activityRouter from "./routes/activityRouter.js";
import historyRouter from "./routes/historyRouter.js";
import userLogRouter from './routes/userLogRouter.js'
import adminLogRouter from './routes/adminLogRouter.js'
import cors from 'cors';
// login route
import loginRouter from './routes/loginRouter.js';
// printing route
import printingRouter from './routes/printingRouter.js';
//swagger: config
import swaggerUi from 'swagger-ui-express';
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const swaggerDocument = require('./swagger-output.json');
import cron from "node-cron";

//swagger: end config

const app = express();
app.use(cors());
//swagger: config
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
//swagger: end config

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use("/api/users", userRouter);
app.use("/api/printers", printerRouter);
app.use("/api/activities", activityRouter);
app.use("/api/login", loginRouter);
app.use('/api/printing', printingRouter);
app.use('/api/history', historyRouter)
app.use('/api/userLog', userLogRouter)
app.use('/api/adminLog', adminLogRouter)
app.use("*", (req, res) => {
  res.status(404).json({ message: "not found" });
});

const port = process.env.PORT || 5001;

try {
  await mongoose.connect(process.env.MONGO_URL);

  // Define the cron job to run every 30 seconds
  cron.schedule('*/30 * * * * *', async () => {
    // Call the function to update printer statuses
    await updatePrinterStatus();
  });

  app.listen(5001, () => {
    console.log(`server listening on port ${port}`);
  });
} catch (error) {
  console.log(error);
  process.exit(1);
}

// Function to update printer statuses
async function updatePrinterStatus() {
  try {
    // Query for printers with status "Đang in"
    const printersToUpdate = await mongoose.model("Printer").find({ status: "Đang in" });

    // Update the status based on conditions
    for (const printer of printersToUpdate) {
      if (printer.pagesRemaining === 0) {
        printer.status = "Hết giấy";
      } else {
        printer.status = "Sẵn sàng";
      }

      // Save the updated printer status
      await printer.save();
    }

    console.log(`Updated ${printersToUpdate.length} printers.`);
  } catch (error) {
    console.error("Error updating printer statuses:", error);
  }
}
