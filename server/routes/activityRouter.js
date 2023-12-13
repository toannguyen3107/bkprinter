import { Router } from "express";
import { createActivity, getAllActivities, getAllActivitiesByDate } from "../controllers/activityController.js";
const router = Router();

router.route("/").get(getAllActivities).post(createActivity);

export default router;
