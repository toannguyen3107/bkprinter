import { StatusCodes } from "http-status-codes";

export const test = async(req, res) => {
    // #swagger.tags = ['Printing']
    res.status(StatusCodes.OK).json({message: 'hello world!'});
}