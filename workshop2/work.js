const fs = require('fs')


fs.writeFileSync('hello.txt',"สมาชิกในกลุ่ม:");
fs.appendFileSync('hello.txt','\n1. นาย กรกมล ศรีอ่อน');
fs.appendFileSync('hello.txt', '\n2. นาย ภูริเดช แก้วสุริยา');

// อ่านข้อมูลจาก .json
/*
const { name } = require('./data.json')
fs.appendFileSync('hello.txt',`\n${name.first}`);
fs.appendFileSync('hello.txt',`\n${name.second}`);
*/
