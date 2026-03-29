import express from "express";
import path from "node:path";
import { fileURLToPath } from "node:url";
import router from "./routes/router.js";
import userrouter from "./routes/user.js";
import adminrouter from "./routes/admin.js";
import { connetmongodb } from "./config/db.js";
import session from "express-session";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

connetmongodb();

const app = express();

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname + "/public")));
app.use(
  session({
    secret: "faizan2245569872",
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 1000 * 60 * 60,
    },
  }),
);

app.use(router);
app.use(userrouter);
app.use(adminrouter);

export default app;
