const express = require('express');
const fs = require('fs');
const cityApi = require('./workshop9/api/city');
const coordinateApi = require('./workshop9/api/coordinate');
const app = express();
app.set('view engine', 'ejs');
app.set('views', './workshop9/views');
app.use(express.json());
app.use(express.static(__dirname + '/'));
const PORT = process.env.PORT || 3000;

app.get('/workshop9', function (req, res) {
    fs.readFile('./workshop9/th-city.json', (err, data) => {
        const listObj = JSON.parse(data);
        if (err) {
            res.status(400).send('Error List not found');
        } else {
            res.status(200).render('home', {
                lists: listObj
            });
        }
    });
});
app.get('/workshop9/api/city', function (req, res) {
    const city = req.query.city !== "" ? req.query.city : "Bangkok";
    const country = "th";
    if (city == null || country == null) {
        const err = 'Error';
        res.status(400).render('notfound', {
            forcastObj: err
        });
    } else {
        const resultData = cityApi(city, country)
            .then((result) => {
                const data = (result.data);
                res.status(200).render('forecast', {
                    forcastObj: result.data
                });
            })
            .catch((err) => {
                res.status(400).render('notfound', {
                    forcastObj: err
                });
            });
    }
});

app.listen(PORT, function(){
    console.log(`running on http://localhost:${PORT}`);
});