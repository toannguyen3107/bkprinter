import Printer from '../models/PrinterModel.js'
import { StatusCodes } from "http-status-codes";

export const getAllPrinters = async (req, res) => {
  const printers = await Printer.find();
  res.status(StatusCodes.OK).json({ printers });
};

export const createPrinter = async (req, res) => {
  const printer = await Printer.create(req.body);
  res.status(StatusCodes.CREATED).json({ printer });
};

export const getPrinter = async (req, res) => {
  const printer = await Printer.findById(req.params.id);
  res.status(StatusCodes.OK).json({ printer });
};

export const updatePrinter = async (req, res) => {
  try {
    const printer = await Printer.findOneAndUpdate({ printerId: req.params.id }, req.body, {
      new: true,
    });

    if (!printer) {
      return res.status(StatusCodes.NOT_FOUND).json({ message: 'Printer not found' });
    }

    res.status(StatusCodes.OK).json({ message: 'Printer updated', printer });
  } catch (error) {
    console.error('Error updating printer:', error);
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).send('Internal Server Error');
  }
};

export const deletePrinter = async (req, res) => {
  const printer = await Printer.findByIdAndDelete(req.params.id);
  res.status(StatusCodes.OK).json({ message: "printer deleted" });
};
