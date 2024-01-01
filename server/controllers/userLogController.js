import LogModel from "../models/LogModel.js"
import UserModel from "../models/UserModel.js";
import jwt from 'jsonwebtoken'

const accessTokenSecret = 'secret';

async function getUserLog(req, res) {
    try {
        const token = req.header('Authorization')
        const jwtObject = jwt.verify(token, accessTokenSecret)

        const user = await UserModel.findOne({userId: jwtObject.username})
        const userName = user.lastName + " " + user.firstName
        const data = await LogModel.find({userName})

        res.status(200).json({
            count: data.length,
            data
        })
    } catch(error) {
        res.status(500).json({
            message: error.toString()
        })
    }
}

export {
    getUserLog,
}