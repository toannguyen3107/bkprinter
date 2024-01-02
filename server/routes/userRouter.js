/**
 * @swagger
 * tags:
 *   - name: Users
 *     description: Operations related to users
 */
import Router from "express";
import {
  createUser,
  dashboardName,
  deleteUser,
  getAllUsers,
  getUser,
  updateUser,
} from "../controllers/userController.js";
import  authenticateToken  from "../middleware/authMiddleware.js";

const router = Router();

// router.use(authenticateToken);

router.route("/").get(getAllUsers).post(createUser);
router.route("/:id").get(getUser).patch(updateUser).delete(deleteUser);
router.route("/name").post(authenticateToken, dashboardName); // getname of user
export default router;
