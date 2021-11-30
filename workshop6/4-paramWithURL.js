const express = require('express');
const app = express();

const members1 = [
    {id:1, name:"ชื่อคนที่ 1", nickname:"ชื่อเล่น 1"},
    {id:2, name:"ชื่อคนที่ 2", nickname:"ชื่อเล่น 2"},
];

const members2 = [
    {id:1, name:"Kevin Lane Keller"},
    {id:2, name:"David M. Kelley"}
];

const clubs = {
    'python': members1,
    'marketing': members2
};

app.get('/api/:club', function(req, res){
    const club = req.params.club.toLowerCase();
    if(club == 'python'){
        res.send(members1);
    } else if(club == 'marketing'){
        res.send(members2);
    } else{
        res.send("Not Found Any Club: " + club);
    }
});

app.get('/api/:club/:id', function(req, res){
    const id = req.params.id;
    const clubName = req.params.club.toLowerCase();
    if(!clubs[clubName]){
        res.send("Club "+ clubName + " is not found!");
    } else if(clubs[clubName][id-1]){
        res.send(clubs[clubName][id-1]);
    } else{
        res.send(`Not Found member for id ${id}`)
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, function(){
    console.log(`[INFO] Server is running on: http://localhost:${PORT}`);
});