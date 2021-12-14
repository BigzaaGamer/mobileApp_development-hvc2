const bcrypt = require('bcryptjs');
const text = "Hello, dcrypt.js!";
const exHash = "$2a$10$OorixDsN0j0JEFHWx.63ruPUTSz27I6ww2EADIdkJZCaqLfhb3h4y";
const promiseResult = bcrypt.compare(text, exHash);

promiseResult.then(res => {
    console.log(res);
}).catch(err => {
    console.log(err);
});

// โค้ด การตรวจสอบ hash