import { StatusCodes } from "http-status-codes";
import PDF from "pdf-page-counter";
import fs from "fs";
import Printer from '../models/PrinterModel.js'

async function checkForm({ layout, pages, color, pps, printer }) {
    const validLayouts = ['horizontal', 'vertical'];
    const validPages = ['allpage', 'evenpage', 'oddpage'];
    const validPps = ['one', 'two', 'four'];

    if (
        validLayouts.includes(layout) &&
        validPages.includes(pages) &&
        validPps.includes(pps)
    ) {
        // Check if the printer ID exists in the database
        const existingPrinter = await Printer.findOne({ printerId: printer });

        if (existingPrinter) {
            return true;
        }
    }

    return false;
}
function countPage({ number, pages, pps, printer, doubleSided }) {
    let num = parseInt(number);
    let div = doubleSided ? 2 : 1;
    if (pages === 'allpage') {
        // console.log('Print all pages');
        div += 0;
    } else if (pages === 'evenpage') {
        // console.log('Print even pages');
        div *= 2;
    } else if (pages === 'oddpage') {
        // console.log('Print odd pages');
        div *= 2;
    }

    if (pps === 'one') {
        // console.log('Print 1 page at a time');
        div += 0;
    } else if (pps === 'two') {
        // console.log('Print 2 pages at a time');
        div *= 2;
    } else if (pps === 'four') {
        // console.log('Print 4 pages at a time');
        div *= 4;
    }


    // Default case
    return parseInt(Math.ceil(num / div));
}

async function checkPageRemaingPrinter({ page, printerId }) {
    try {
        const printer = await Printer.findOne({ printerId: printerId });

        if (!printer) {
            // Printer not found in the database
            return { status: false, message: 'Máy in không tồn tại trong cơ sở dữ liệu.' };
        }

        if (page <= printer.pageRemaining) {
            // Update the remaining pages in the printer
            await Printer.updateOne({ printerId: printerId }, { $set: { pageRemaining: printer.pagesRemaining - page } });
            return { status: true, message: 'Có đủ trang để in. Đã cập nhật số trang còn lại trong máy in.' };
        } else {
            // Not enough pages in the printer
            return { status: false, message: `Máy in không đủ giấy. Chọn máy in khác. Số trang cần in: ${page}.` };
        }
    } catch (error) {
        console.error('Error in checkPageRemaingPrinter:', error);
        throw error; // Rethrow the error for better error handling in the calling function
    }
}
function removeFile(filename) {
    const filePath = '../upload/' + filename;
    // Remove the file
    fs.unlinkSync(filePath);
}

export const print = async (req, res) => {
    try {

        const { layout, pages, color, pps, printer } = req.body;
        // Validate the form data
        const isFormValid = await checkForm({ layout, pages, color, pps, printer });

        if (!isFormValid) {
            // Send a response indicating the form data is not in the correct format
            removeFile(req.filename);
            return res.status(StatusCodes.BAD_REQUEST).json({ error: 'Invalid form data format.' });
        }

        const dataBuffer = fs.readFileSync('../upload/' + req.filename);
        const data = await PDF(dataBuffer);
        const numPagePrint = await countPage({ number: data.numpages, pages, pps, printer, doubleSided: true });

        // Use the PDF module to get information about the PDF
        const checkPagePrinter = await checkPageRemaingPrinter({ page: numPagePrint, printerId: printer });
        if (checkPagePrinter.status === false) {
            // remove file if dont correct
            removeFile(req.filename);
            return res.status(StatusCodes.FORBIDDEN).json({ massage: checkPagePrinter.message });
        }
        // Respond with a success message
        res.status(StatusCodes.OK).json({ message: 'Data received successfully.' });
    } catch (error) {
        // Handle errors
        console.error('Error:', error);

        // Send an error response
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: 'Internal Server Error' });
    }
};
