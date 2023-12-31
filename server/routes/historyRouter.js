import Router from "express";
import {
  createPrinter,
  deletePrinter,
  getAllPrinters,
  getPrinter,
  updatePrinter,
} from "../controllers/printerController.js";
import { deleteAllHistory, getAllHistory } from "../controllers/printingController.js";
const router = Router();

router.route("/").get(getAllHistory);
router.route("/deleteAll").delete(deleteAllHistory);

export default router;