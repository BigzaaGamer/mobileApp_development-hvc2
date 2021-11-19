// install module?
const bcrypt = require('bcrypt');
const password = 'password';
const myHash = '$2b$10$RF6LNmYETaS/ZWoK/MDtq.nNNhwWeurKfWosPdNCKBYbyli5S0EZC'; // password

bcrypt.compare(password, myHash, function(err, res) {
    if (res === true) {
        console.log('รหัสผ่านถูกต้อง!!');
    } else {
        console.log('รหัสไม่ตรงกัน!!!');
    }
});