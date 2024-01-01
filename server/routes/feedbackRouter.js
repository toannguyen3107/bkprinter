import { Router } from "express";
import { addFeedback, getAllFeedback, getFeedbackById, getUserFeedback, updateFeedback } from "../controllers/feedbackController.js";
import authenticateToken from '../middleware/authMiddleware.js';
const router = Router();

router.route("/").get(authenticateToken, getUserFeedback)
router.route("/").post(authenticateToken, addFeedback)
router.route("/update").post(authenticateToken, updateFeedback)
router.route("/all").get(authenticateToken, getAllFeedback)
router.route("/:id").get(authenticateToken, getFeedbackById)



export default router;
