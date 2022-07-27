const { Pool } = require("pg");

const pool = new Pool({
  database: "jokes",
  password: "francis",
  user: "francis",
  port: 5432,
  host: "localhost",
});

const baseFunctionality = (res) => {
  console.log(`There is currently ${res.rowCount} jokes`);

  console.log("The first joke is:");
  console.log(`${res.rows[0].question}`);
  console.log(`${res.rows[0].answer}`);
};

const fetchAllJokes = () => {
  return pool.query("SELECT * FROM jokes");
};

const fetchJokesPerRating = (rating) => {
  return pool.query(`SELECT * FROM jokes WHERE rating >= $1`, [rating]); // Good!
  return pool.query(`SELECT * FROM jokes WHERE rating >= ${rating}`); // BAD!
};

// fetchAllJokes()
//   .then(baseFunctionality)
//   .catch((err) => console.log(err))
//   .finally(() => pool.end());

const rating = process.argv[2];

fetchJokesPerRating(rating)
  .then(baseFunctionality)
  .catch((err) => console.log(err))
  .finally(() => pool.end());
