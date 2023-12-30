import jwt from 'jsonwebtoken';
import User from '../models/UserModel.js';
import { StatusCodes } from 'http-status-codes';

const accessTokenSecret = 'secret';

const login = async (req, res) => {
    //#swagger.tags = ['Login']

    
    // Read email and password from the request body
    const { email, password } = req.body;

    try {
        // Find user from the database by email and password
        const user = await User.findOne({ email, password });

        if (user) {
            // Generate an access token
            const accessToken = jwt.sign({ username: user.userId, role: user.role }, accessTokenSecret);

            res.json({
                accessToken
            });
        } else {
            res.status(StatusCodes.UNAUTHORIZED).send('Username or password incorrect');
        }
    } catch (error) {
        console.error(error);
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).send('Internal Server Error');
    }
};

const checkRole = (req, res) => {
    //#swagger.tags = ['Login']
    
    try {
        // Extract the user's role from the decoded token
        const { role } = req.user;

        res.status(StatusCodes.OK).json({ role }); // Send the role as a JSON response
    } catch (error) {
        console.error(error);
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).send('Internal Server Error');
    }
};

export { login, checkRole };
