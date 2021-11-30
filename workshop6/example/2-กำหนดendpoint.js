const expressFunction = require('express');
const expressApp = expressFunction();
expressApp.get('/', function(req,res){
    res.send("Hello World!<br>Hello Express!");
});
expressApp.get('/api/res', function(req, res){
    const resJSON = {id:1, name:"jeerawuth"};
    res.send(resJSON);
})
expressApp.listen(3000, function(){
    console.log("Listening on: http://localhost:3000");
})