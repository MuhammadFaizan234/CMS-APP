import { post } from "../model/admin.js";

export const Post = async (req, res) => {
  const { title, body } = req.body;

  try {
    const addpost = new post({
      Title: title,
      Body: body,
    });

    await addpost.save();

    console.log("add data");
    res.redirect("/dashboard");
  } catch (err) {
    console.log(err);
  }
};
