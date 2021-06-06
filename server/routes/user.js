import express from "express";
import { createUser, loginUser, updateUser } from "../controller/user.js";

import { isAuth } from "../util.js";

const router = express.Router();
router.post("/register", createUser);
router.post("/login",  loginUser);
router.patch("/login/:id", isAuth, updateUser);

export default router;
