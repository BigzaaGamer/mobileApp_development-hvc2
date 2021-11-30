const express = require('express');
const app = express();
const members1 = [
    {id:1, name:"Name 1"},
    {id:2, name:"Name 2"}
];
const members2 = [
    {id:1, name:"Name 3"},
    {id:2, name:"Name 4"}
];
const schools = {
    'vocational_college': members1,
    'suankularb': members2
};
app.get('/api/:school', function(req, res){
    const school = req.params.school.toLowerCase();
    if(school == 'vocational_college'){
        res.send(members1);
    } else if(school == 'suankularb'){
        res.send(members2);
    } else{
        res.send("Not Found Any School: " + school);
    }
});

app.get('/api/:school/:id', function(req, res){
    const id = req.params.id;
    const schoolName = req.params.school.toLowerCase();
    if(!schools[schoolName]){
        res.send("School is not found!");
    } else if(schools[schoolName][id-1]){
        res.send(schools[schoolName][id-1]);
    } else{
        res.send(`Not Found student for id ${id}`)
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, function(){
    console.log(`Listening on: http://localhost:${PORT}`);
})