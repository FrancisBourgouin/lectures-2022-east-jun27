const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const { Pool } = require("pg");
const jokeHelpers = require("./helpers/jokeHelpers");

const pool = new Pool({
  database: "jokes",
  password: "francis",
  user: "francis",
  port: 5432,
  host: "localhost",
});
// const pool2 = new Pool({
//   database: "jokes",
//   password: "francis",
//   user: "francis",
//   port: 5432,
//   host: "localhost",
// });

const { fetchAllJokes, fetchAJoke, insertJoke } = jokeHelpers(pool);
// const { fetchAllJokes, fetchAJoke, insertJoke } = jokeHelpers(pool);

// const helpers = jokeHelpers(pool);
// const fetchAllJokes = helpers.fetchAllJokes;
// const fetchAJoke = helpers.fetchAJoke;
// const insertJoke = helpers.insertJoke;

const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.get("/api/jokes", (req, res) => {
  fetchAllJokes()
    .then((rows) => res.json(rows))
    .catch((err) => res.json(err));
});

app.get("/api/jokes/:joke_id", (req, res) => {
  fetchAJoke(req.params.joke_id)
    .then((joke) => res.json(joke))
    .catch((err) => res.json(err));
});

app.post("/api/jokes", (req, res) => {
  const { question, answer, rating, author_id } = req.body;
  insertJoke(question, answer, rating, author_id)
    .then((joke) => res.json(joke))
    .catch((err) => res.json(err));
});

module.exports = app;
