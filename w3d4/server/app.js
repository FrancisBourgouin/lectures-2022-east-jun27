const express = require("express"); // Requires Express Framework (Routing / Server)
const path = require("path"); // Requires Path (Multiple OS path support)
const cookieParser = require("cookie-parser"); // Require Cookie Parser (Parse string to cookie)
const logger = require("morgan"); // Require Morgan (Logs the requests received)
const generateUserHelpers = require("./helpers/userHelpers");
const cookieSession = require("cookie-session");
const bcrypt = require("bcryptjs");

const app = express(); // Create an express server and reference with app
const salt = bcrypt.genSaltSync(10);
// view engine setup
app.set("views", path.join(__dirname, "views")); // Where the views are
app.set("view engine", "ejs"); // The rendering engine will be EJS

// Middlewares
app.use(logger("dev")); // Logs, always triggered
app.use(express.json()); // Parse incoming body (POST / PUT)
app.use(express.urlencoded({ extended: false })); // Parse incoming body (POST / PUT)
app.use(cookieParser()); // Parse cookie values, always triggered
app.use(express.static(path.join(__dirname, "public"))); // Serve static files
app.use(
  cookieSession({
    name: "session",
    keys: ["$oksq/!134k,M", "Pequeno pollo de la pampa"],

    // Cookie Options
    maxAge: 24 * 60 * 60 * 1000, // 24 hours
  })
);

app.use((req, res, next) => {
  console.log("req", req.path);

  // if (req.path === "/" || req.path === "/login") {
  //   return next();
  // }
  const whiteList = ["/", "/login"];
  if (whiteList.includes(req.path)) {
    return next();
  }

  if (!req.session.email) {
    return res.redirect("/");
  }

  return next();
});

const user1 = {
  name: "Dimitri Ivanovich Mendeleiv",
  email: "periodic@table.com",
  password: bcrypt.hashSync("hydrogen", salt),
  secret: "Actually prefers biology",
};

const user2 = {
  name: "Doug Judy",
  email: "pontiac@bandit.com",
  password: bcrypt.hashSync("rosa", salt),
  secret: "doesn't drive stick",
};

const usersArr = [user1, user2];
const usersObj = {
  "periodic@table.com": user1,
  "pontiac@bandit.com": user2,
};

const { authenticateUser, fetchUser } = generateUserHelpers(usersObj);
// const userHelpers = generateUserHelpers(usersObj)
// userHelpers.authenticateUser

app.get("/", (req, res) => {
  return res.render("index");
});

app.post("/login", (req, res) => {
  // const email = req.body.email
  // const password = req.body.password

  const { email, password } = req.body;
  const { error, data } = authenticateUser(email, password);

  if (error) {
    console.log(error);
    return res.redirect("/");
  }

  // res.cookie("email", email);
  req.session.email = email;
  return res.redirect("/secret");
});

app.get("/secret", (req, res) => {
  const currentUser = fetchUser(req.session.email);

  const templateVars = {
    name: currentUser.name,
    secret: currentUser.secret,
  };

  return res.render("secret", templateVars);
});

app.get("/api/users", (req, res) => {
  res.json(usersObj);
});

module.exports = app;
