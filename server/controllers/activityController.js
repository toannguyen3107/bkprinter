import Activity from "../models/ActivityModel.js";
import { StatusCodes } from "http-status-codes";

export const getAllActivities = async (req, res) => {
  const activities = await Activity.find();
  res.status(StatusCodes.OK).json({ activities });
};

export const createActivity = async (req, res) => {
  req.body.userId = req.params.userId;
  const activity = await Activity.create(req.body);
  res.status(StatusCodes.CREATED).json({ activity });
};

export const getAllUserActivities = async (req, res) => {
  const activities = await Activity.find({ userId: req.params.id });
  req.status(StatusCodes.OK).jon({activities})
}