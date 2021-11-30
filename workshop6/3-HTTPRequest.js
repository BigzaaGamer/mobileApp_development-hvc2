const express = require('express');
const app = express();

const members = [
    {id:1,name:"ชื่อคนที่ 1", nickname:"ชื่อเล่น 1", number: "เลขที่"},
    {id:2,name:"ชื่อคนที่ 2", nickname:"ชื่อเล่น 2", number: "เลขที่"}
];

app.get('/', function(req, res){
    res.send("<a href='/api/members/'>/api/members/</a>");
});

app.get('/api/members', function(req, res){
    res.send(members);
});

app.get('/api/members/:id', function(req, res){
    const id = req.params.id;
    if(id == 1){
        res.send(members[0]);
    } else if(id == 2){
        res.send(members[1]);
    } else{
        res.status(400).send("[ERROR!] 404: Not Found!");
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, function(){
    console.log(`[INFO] Server is running on: http://localhost:${PORT}`);
});