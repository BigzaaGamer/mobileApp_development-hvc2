// Konkamon Sion
const Settings = {
    secretKey: '123456789qwerty',
    userPass: '987654321abcdef',
    databaseName: 'konkamonSion'
}
const getSecretKey = () =>{
    return Settings.secretKey;
}

module.exports.getSecretKey = getSecretKey
module.exports.userPass = Settings.userPass;
module.exports.databaseName = Settings.databaseName
