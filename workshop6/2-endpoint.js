const express = require('express');
const app = express();

app.get('/', function(req, res){
    res.send("Hello World!, Hello Express!<br><a href='/api/res'>go to API</a>");
});

app.get('/api/res', function(req, res){
    const resJSON = [
        {id:1, name:"ชื่อคนที่ 1", nickname:"ชื่อเล่น 1"},
        {id:2, name:"ชื่อคนที่ 2", nickname:"ชื่อเล่น 2"},
    ];
    res.send(resJSON);
});

app.listen(3000, function(){
    console.log("[INFO] Server is running on: http://localhost:3000");
});