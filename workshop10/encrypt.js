const { makeHash } = require("./makeHash");

makeHash("Hello, dcrypt.js!").then(res => {
    console.log(res);
}).catch(err => {
    console.log(err);
});

// โค้ด เข้ารหัสข้อความ