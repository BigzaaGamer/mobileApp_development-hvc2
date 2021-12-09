const express = require('express');
const fs = require('fs');
const cityApi = require('./api/city');
const coordinateApi = require('./api/coordinate');
const app = express();
app.set('view engine', 'ejs');
app.set('views', 'views');
app.use(express.json());
app.use(express.static(__dirname + '/'));
app.get('/workshop9', function (req, res) {
    fs.readFile('./th-city.json', (err, data) => {
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
app.get('/example', function (req, res) {
    fs.readFile('./th-city.json', (err, data) => {
        const listObj = JSON.parse(data);
        if (err) {
            res.status(400).send('Error List not found');
        } else {
            res.status(200).render('home-example', {
                lists: listObj
            });
        }
    });
});

app.get('/api/coordinate', function (req, res) {
    const longitude = req.query.lon !== "" ? req.query.lon : "0";
    const latitude = req.query.lat !== "" ? req.query.lat : "0";
    if (longitude == null || latitude == null) {
        const err = 'Error';
        res.status(400).render('notfound', {
            forcastObj: err
        });
    } else {
        const resultData = coordinateApi(longitude, latitude)
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
app.get('/api/city', function (req, res) {
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
app.get('/example/api/city', function (req, res) {
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
                res.status(200).render('forecast-example', {
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
const port = process.env.port || 3000;
app.listen(port, function () {
    console.log('Running on http://localhost:'+port);
});