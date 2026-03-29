import { user } from "../model/user.js";

export const Login = async (req, res) => {
  const { mail, pwd } = req.body;

  try {
    const email = await user.findOne({ email: mail });
    if (!email) {
      res.send("<h1>Invalid email!</h1>");
    }

    if (email.password == pwd) {
      req.session.user = {
        id: user._id,
        email: user.email,
      };
      res.redirect("/dashboard");
    } else {
      res.send("<h1>Invalid Password!</h1>");
    }
  } catch (err) {
    console.log(err);
    res.send(err);
  }
};

export const register = async (req, res) => {
  const { fname, lname, mail, pwd, mob, addr } = req.body;
  try {
    const newuser = new user({
      firstName: fname,
      lastName: lname,
      email: mail,
      password: pwd,
      mobile: mob,
      address: addr,
    });

    await newuser.save();

    console.log("Record added.");
    res.redirect("/login");
  } catch (err) {
    console.log(err.message);
    res.send(err);
  }
};

export const Logout = async (req, res) => {
  res.clearCookie("connect.sid");
  req.session.destroy((err) => {
    if (err) {
      console.error("Session destroy error:", err);
      return res.status(500).json({ message: "Logout failed" });
    }
    res.redirect("/");
  });
};
