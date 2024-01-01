import express from 'express'
import {getByUser, getByPrinter, getAllUser} from '../controllers/adminLogController.js'
const router = express.Router()

router.get('/getByUser/:username', getByUser)

router.get('/getByPrinter/:printer', getByPrinter)

router.get('/getAllUser', getAllUser)

export default router