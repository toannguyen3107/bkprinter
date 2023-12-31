import Router from 'express';
import { print } from '../controllers/printingController.js';
import authenticateToken from '../middleware/authMiddleware.js';
import multer from 'multer';
//import pdf from 'pdf-parse';

const router = Router();

const getFormattedDate = () => {
  const currentDate = new Date();
  const day = String(currentDate.getDate()).padStart(2, '0');
  const month = String(currentDate.getMonth() + 1).padStart(2, '0');
  const year = String(currentDate.getFullYear()).slice(-2);
  const hours = String(currentDate.getHours()).padStart(2, '0');
  const minutes = String(currentDate.getMinutes()).padStart(2, '0');
  const seconds = String(currentDate.getSeconds()).padStart(2, '0');

  return `${day}_${month}_${year}_${hours}_${minutes}_${seconds}`;
};

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, '../upload'); // Specify the destination directory
  },
  filename: (req, file, cb) => {
    // Rename the file: userID__originalname__HH_DD_SS__YY.pdf
    const formattedDate = getFormattedDate();
    const uniqueFilename = `${req.user.id}__${formattedDate}__${file.originalname}`;
    cb(null, uniqueFilename);
  },
});
const checkFile = (file) => {
  return false;
} 
const upload = multer({
  storage: storage,
  fileFilter: (req, file, cb) => cb(null, checkFile(file)), // Use fileFilter instead of checkFile
});

router.route('/').post(authenticateToken, upload.single('file'), print);

export default router;
