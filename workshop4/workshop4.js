const { getSecretKey, databaseName } = require('./settings');

console.log("Secret Key: " + getSecretKey());
console.log("Database Name: " + databaseName);
