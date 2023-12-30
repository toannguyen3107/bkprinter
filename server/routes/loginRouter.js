import { Router } from 'express';
import { checkRole, login } from '../controllers/loginController.js'; // Import the checkRole function
import  authenticateToken from '../middleware/authMiddleware.js';

const router = Router();

router.route('/').post(login).get((req, res) => {
    //#swagger.tags = ['Login']
    res.send('It is working...');
});

// Use the authMiddleware for authentication
router.route('/checkrole').get(authenticateToken, checkRole);

export default router;
