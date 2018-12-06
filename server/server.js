const express = require('express');
const bodyParser = require('body-parser');

var {mongoose} = require('./db/mongoose');
var {CarsWiki} = require('./models/carsWiki');

var app = express();

app.use(bodyParser.json());

app.post('/carswiki', (req, res)=>{
    var carswiki = new CarsWiki({
        brand: req.body.brand,
        flagship: req.body.flagship,
        location: req.body.location,
        revenue: req.body.revenue,
        symbol: req.body.symbol,
        carImg: req.body.carImg,
        year: req.body.year,
        csnum: req.body.csnum,
        description: req.body.description
    });

    carswiki.save().then((doc)=>{
        res.send(doc);
    },(e)=>{
        res.status(400).send(e);
    });
});

app.listen(3000, ()=>{
    console.log("Started on port 3000")
});

