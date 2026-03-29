import express from "express";
import { Login, Logout, register } from "../controllers/user.js";

const userrouter = express.Router();

userrouter.post("/Login", Login);
userrouter.post("/register", register);
userrouter.get("/logout", Logout);

export default userrouter;
