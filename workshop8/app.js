const express = require('express');
const fs = require('fs');
const app = express();

app.set('view engine','ejs');
app.set('views','all-views');

app.get('/', function(req, res){
    fs.readFile('./data.json', (err, data) =>{
        const dataList = JSON.parse(data);
        if(err){
            res.status(400).send("ERROR! List not found!");
        } else {
            res.render('konkamon_template',{lists:dataList});
        }
    });
});
app.listen(3000, function(){
    console.log("Running On: http://localhost:3000");
});