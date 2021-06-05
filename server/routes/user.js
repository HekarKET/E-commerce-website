import express from "express";
import { createUser, loginUser } from "../controller/user.js";

import { isAuth } from "../util.js";

const router = express.Router();
router.post("/register", createUser);
router.post("/login",  loginUser);

export default router;
