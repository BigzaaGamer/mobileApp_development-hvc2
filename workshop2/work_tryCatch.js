const fs = require('fs');

try{
    fs.writeFileSync('hello.txt',"สมาชิกในกลุ่ม:");
    fs.appendFile('hello.txt','\nชื่อ 1');
    fs.appendFile('hellod.txt', '\nชื่อ 2');
}
catch(err){
    if(err.code == "ERR_INVALID_CALLBACK"){
        console.log("ERROR: Invalid Callback");
    }
    else{
        console.log(err);}
        
        
    }

