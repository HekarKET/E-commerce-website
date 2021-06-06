import mongoose from "mongoose";
import userModel from "../model/user.js";
import { getToken } from "../util.js";

export const createUser = async (req, res) => {
  try {
    const user = req.body;
    const newUser = new userModel(user);
    await newUser.save();

    res.status(201).send({
      id: newUser._id,
      firstName: newUser.firstName,
      lastName: newUser.lastName,
      email: newUser.email,
      address: newUser.address,
      image: newUser.image,
      token: getToken(user),
    });
  } catch (error) {
    res.status(501).send(error);
  }
};

export const updateUser = async (req, res) => {
  
  const user = req.body;
  const userId = req.params.id;

  try {
    
    const newUser = await userModel.findByIdAndUpdate(userId,user);
    if (newUser) {
      
      //await newUser.save();
      res.status(201).send({
        id: newUser._id,
        firstName: newUser.firstName,
        lastName: newUser.lastName,
        email: newUser.email,
        address: newUser.address,
        image: newUser.image,
        token: getToken(user),
      });
    } else {
      res.status(404).send({ message: "User Not Found" });
    }
  } catch (error) {
    res.status(404).send({ message: "User Not Found" });
  }
};

export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    
    const user = await userModel.findOne({ email, password });
    
    if (!user) {
      res.status(404).send({ error: "user not found" });
    } else {
      
      res.status(201).send({
        id:  user._id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        address: user.address,
        password: user.password,
        image: user.image,
        token: getToken(user),
      });
    }
  } catch (error) {
    res.status(404).send(error);
  }
};
