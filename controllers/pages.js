import { post } from "../model/admin.js";

export const home = async (req, res) => {
  const data = await post.find();
  res.render("index", { posts: data });
};
export const about = (req, res) => {
  res.render("about");
};
export const contact = (req, res) => {
  res.render("contact");
};
export const detail = async (req, res) => {
  const pid = req.params.postID;

  const data = await post.findOne({ _id: pid });

  res.render("detail", { posts: data });
};
export const adminhome = (req, res) => {
  res.render("admin/index");
};

export const addpost = (req, res) => {
  res.render("admin/addpost");
};

export const login = (req, res) => {
  res.render("login");
};

export const register = (req, res) => {
  res.render("register");
};
