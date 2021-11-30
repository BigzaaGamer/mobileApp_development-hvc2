const express = require('express');
const app = express();
const members = [
    {id:1,name:"Konkamon Sion", nickname:"Big"},
    {id:2,name:"Bruh Bruh", nickname:"Bruh"} // เปลี่ยนเป็นชื่อสมาชิก
];
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
        res.send("ERROR!: Not Found!");
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, function(){
    console.log(`Listening on: http://localhost:${PORT}`);
})