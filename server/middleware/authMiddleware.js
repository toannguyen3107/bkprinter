// authMiddleware.js
import jwt from 'jsonwebtoken';
import { StatusCodes } from 'http-status-codes';

const accessTokenSecret = 'secret'; // Replace with your actual secret key

const authenticateToken = (req, res, next) => {
  const token = req.header('Authorization');

  if (!token) {
    return res.status(StatusCodes.UNAUTHORIZED).json({ message: 'Unauthorized - Missing token' });
  }

  jwt.verify(token, accessTokenSecret, (err, user) => {
    if (err) {
      return res.status(StatusCodes.FORBIDDEN).json({ message: 'Forbidden - Invalid token' });
    }

    req.user = user; // Attach the user to the request object for further use
    next();
  });
};

export default authenticateToken;