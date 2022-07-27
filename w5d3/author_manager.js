const { Pool } = require("pg");

const pool = new Pool({
  database: "jokes",
  password: "francis",
  user: "francis",
  port: 5432,
  host: "localhost",
});

const name = process.argv[2];
const funny = process.argv[3];
const description = process.argv[4];

const query =
  "INSERT INTO authors (name, funny, description) VALUES ($1, $2, $3) RETURNING *";

pool
  .query(query, [name, funny, description])
  .then((res) => console.log(`Added new user with the ID of ${res.rows[0].id}`))
  .catch((err) => console.log(err));
