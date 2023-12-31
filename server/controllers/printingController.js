import { StatusCodes } from "http-status-codes";

export const print = async(req, res) => {
     // #swagger.tags = ['Printing']
    /*
        #swagger.security = [{
                "apiKeyAuth": []
        }] 
    */

        const { layout, pages, color, pps, printer } = req.body;
      
        // Handle the received data as needed
        console.log('Layout:', layout);
        console.log('Pages:', pages);
        console.log('Color:', color);
        console.log('PPS:', pps);
        console.log('Printer:', printer);
        console.log('Filename', req.filename)
        // console.log('File:', file);

        res.status(StatusCodes.OK).json({message: 'Data received successfully.' });
}