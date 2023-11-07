import { Router } from "express";
import { createActivity, getAllActivities } from "../controllers/activityController";
const router = Router();

router.route("/").get(getAllActivities);
router
  .route("/:id")
  .get(getAllActivities).post(createActivity);

export default router;
