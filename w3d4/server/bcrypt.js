const bcrypt = require("bcryptjs");
const salt = bcrypt.genSaltSync(10);
const password1 = bcrypt.hashSync("hydrogen", salt);
const password2 = bcrypt.hashSync("rosa", salt);

console.log(salt);
console.log(password1);
console.log(password2);
