import User from "../models/UserModel.js";
import { StatusCodes } from "http-status-codes";

export const getAllUsers = async (req, res) => {
  // #swagger.tags = ['Users']

  const users = await User.find();
  res.status(StatusCodes.OK).json({ users });
};

export const createUser = async (req, res) => {
  // #swagger.tags = ['Users']
  
  const user = await User.create(req.body);
  res.status(StatusCodes.CREATED).json({ user });
};

export const getUser = async (req, res) => {
  // #swagger.tags = ['Users']
  
  const user = await User.findOne({userId: req.params.id});
  if(!user){
    return res.status(StatusCodes.BAD_REQUEST).json({message: 'Dont have user!'});
  }
  res.status(StatusCodes.OK).json({ user });
};

export const updateUser = async (req, res) => {
  // #swagger.tags = ['Users']
  
  const user = await User.findOneAndUpdate({userId: req.params.id}, req.body, {
    new: true,
  });
  res.status(StatusCodes.OK).json({ message: "user updated", user });
};

export const deleteUser = async (req, res) => {
  // #swagger.tags = ['Users']
  
  const user = await User.findByIdAndDelete(req.params.id);
  res.status(StatusCodes.OK).json({ message: "user deleted" });
};

export const dashboardName = async (req, res) => {
  /*
    #swagger.tags = ['Users']
    #swagger.security = [{
            "apiKeyAuth": []
    }]
  */
  const user = await User.findOne({userId: req.user.id});
  if(!user){
    return res.status(StatusCodes.BAD_REQUEST).json({message: 'Dont have user!'});
  }
  res.status(StatusCodes.OK).json({ username:  user.firstName + " " + user.lastName});
}