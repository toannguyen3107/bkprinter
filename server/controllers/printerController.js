import Printer from '../models/PrinterModel.js'
import { StatusCodes } from "http-status-codes";

export const getAllPrinters = async (req, res) => {
  // #swagger.tags = ['Printers']
  
  
  const printers = await Printer.find();
  res.status(StatusCodes.OK).json({ printers });
};

export const createPrinter = async (req, res) => {
  // #swagger.tags = ['Printers']
  
  
  const printer = await Printer.create(req.body);
  res.status(StatusCodes.CREATED).json({ printer });
};

export const getPrinter = async (req, res) => {
  // #swagger.tags = ['Printers']
 
  const printer = await Printer.findOne({printerId: req.params.id});
  if(!printer){
    return res.status(StatusCodes.BAD_REQUEST).json({message: "Don't have printer"});
  }
  res.status(StatusCodes.OK).json({ printer });
};

export const updatePrinter = async (req, res) => {
  // #swagger.tags = ['Printers']
  

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
  // #swagger.tags = ['Printers']
  try {
    const printer = await Printer.findOneAndDelete({ printerId: req.params.id });

    if (!printer) {
      return res.status(StatusCodes.NOT_FOUND).json({ message: 'Printer not found' });
    }

    res.status(StatusCodes.OK).json({ message: 'Printer deleted', printer });
  } catch (error) {
    console.error('Error deleting printer:', error);
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).send('Internal Server Error');
  }
};

