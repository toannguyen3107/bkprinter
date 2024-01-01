import express from 'express'
import {getUserLog} from '../controllers/userLogController.js'
const router = express.Router()

router.get('/', getUserLog)

export default router