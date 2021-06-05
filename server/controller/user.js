import mongoose from "mongoose";
import userModel from "../model/user.js";
import { getToken } from "../util.js";

export const createUser = async (req, res) => {
  try {
    const user = req.body;
    const newUser = new userModel(user);
    await newUser.save();

    res.status(201).send({ newUser: newUser, Token: getToken(newUser) });
  } catch (error) {
    res.status(501).send(error);
  }
};

export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    console.log(req.body);
    const user = await userModel.findOne({ email, password });
    if (!user) {
      res.status(404).send({ error: "user not found" });
    } else {
      console.log({
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        address: user.address,
        password: user.password,
        token: getToken(user),
      });
      res.status(201).send({
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        address: user.address,
        password: user.password,
        token: getToken(user),
      });
    }
  } catch (error) {
    res.status(404).send(error);
  }
};
