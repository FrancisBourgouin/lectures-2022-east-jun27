const bcrypt = require("bcryptjs");

const generateUserHelpers = (userObjDB) => {
  const authenticateUser = (email, password) => {
    if (!userObjDB[email]) {
      return { err: "No email like that", data: null };
    }

    if (!bcrypt.compareSync(password, userObjDB[email].password)) {
      // if (userObjDB[email].password !== password) {
      return { err: "No password like that", data: null };
    }

    return { err: null, data: userObjDB[email] };
  };

  const fetchUser = (email) => userObjDB[email] || {};

  return { authenticateUser, fetchUser };
};

module.exports = generateUserHelpers;
