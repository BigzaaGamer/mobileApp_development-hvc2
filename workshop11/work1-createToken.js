const jwt = require('jsonwebtoken');
const playload = {
    namel: "Konkamon Sion",
    occupation: "Student",
    age: 14
}

const key = "MY_KEY";
const token = jwt.sign(playload, key, {expiresIn: 60*5});

console.log(token);
