import Router from 'express'
import {test} from '../controllers/printingController.js';


const router = Router();

router.route('/').get(test);

export default router;