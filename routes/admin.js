import express from "express";
import { Post } from "../controllers/admin.js";

const adminrouter = express.Router();

adminrouter.post("/post", Post);

export default adminrouter;
