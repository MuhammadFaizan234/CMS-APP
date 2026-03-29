import express from "express";
import {
  about,
  contact,
  home,
  adminhome,
  addpost,
  login,
  register,
  detail,
} from "../controllers/pages.js";
import { isAuth } from "../middleware/auth.js";

const router = express.Router();

router.get("/", home);
router.get("/about", about);
router.get("/contact", contact);
router.get("/post/:postID", detail);
router.get("/login", login);
router.get("/register", register);
router.get("/dashboard", isAuth, adminhome);
router.get("/addpost", isAuth, addpost);

export default router;
