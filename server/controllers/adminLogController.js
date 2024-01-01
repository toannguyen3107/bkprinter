import LogModel from '../models/LogModel.js'

async function getByUser(req, res) {
    const username = req.params.username
    const page = req.query.page
    try {
        const data = await LogModel.find({userName: username})
        console.log(username)
        res.status(200).json({
            count: data.length,
            data
        })
    } catch(error) {
        res.status(500).json({message: error.toString()})
    }
}

async function getByPrinter(req, res) {
    const printer = req.params.printer
    const page = req.query.page
    console.log(printer)
    console.log(page)
    try {
        const data = await LogModel.find({printerId: printer})
        res.status(200).json({
            count: Date.length,
            data
        })
    } catch(error) {
        res.status(500).json({message: error.toString()})
    }
}

async function getAllUser(req, res) {
    const page = req.query.page

    try {
        const data = await LogModel.find({})
        res.status(200).json({
            count: data.length,
            data
        })
    } catch(error) {
        res.status(500).json({message: error.toString()})
    }
}

export {
    getByUser,
    getByPrinter,
    getAllUser,
}