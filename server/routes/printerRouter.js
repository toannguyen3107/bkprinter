import Router from "express";
import {
  createPrinter,
  deletePrinter,
  getAllPrinters,
  getPrinter,
  updatePrinter,
} from "../controllers/printerController.js";
const router = Router();

router.route("/").get(getAllPrinters).post(createPrinter);
router.route("/:printerId").get(getPrinter).patch(updatePrinter).delete(deletePrinter);

export default router;