const express = require('express');
const app = express();

app.get('/', function(req, res){
    res.send("Hello World!, Hello Express!");
});

app.listen(3000, function(){
    console.log("[INFO] Server is running on: http://localhost:3000");
});
