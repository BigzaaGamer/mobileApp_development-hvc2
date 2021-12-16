const jwt = require('jsonwebtoken');
const playload = {
    namel: "Konkamon Sion",
    occupation: "Student",
    age: 14
}
const key = 'MySecretKey';
const token = jwt.sign(playload, key, {expiresIn: 15});
try{
    const dataInToken = jwt.verify(token, key);
    console.log(dataInToken);
}catch(err){
    console.log(err);
}