const bcrypt = require('bcryptjs');

async function makeHash(myText){
    const resultPromise = bcrypt.hash(myText, 10);
    return resultPromise;
}

module.exports.makeHash = makeHash;

// โค้ด makeHash.js