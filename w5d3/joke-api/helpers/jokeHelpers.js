const jokeHelpers = (pool) => {
  const fetchAllJokes = () => {
    return pool
      .query(
        "SELECT *, jokes.id AS joke_id FROM jokes JOIN authors ON jokes.author_id = authors.id"
      )
      .then((res) => res.rows);
  };
  const fetchAJoke = (id) => {
    return pool
      .query(
        "SELECT *,jokes.id AS joke_id FROM jokes JOIN authors ON jokes.author_id = authors.id WHERE jokes.id = $1",
        [id]
      )
      .then((res) => res.rows[0]);
  };

  const insertJoke = (question, answer, rating, author_id) => {
    const queryValues = [question, answer, rating, author_id];
    const queryStatement = `
      INSERT INTO 
        jokes
        (question, answer, rating, author_id)
      VALUES
        ($1, $2, $3, $4)
      RETURNING
        *
    `;
    return pool.query(queryStatement, queryValues).then((res) => res.rows[0]);
  };

  return { fetchAllJokes, fetchAJoke, insertJoke };
};

module.exports = jokeHelpers;
