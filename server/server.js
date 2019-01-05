const express = require('express');
const bodyParser = require('body-parser');
const {ObjectID} = require('mongodb');
const cors = require('cors');

var {mongoose} = require('./db/mongoose');
var {CarsWiki} = require('./models/carsWiki');

var app = express();
// var corsOptions = {
//     origin: 'http://localhost:49152',
//     optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
//   }

app.use(cors());

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
        parentOrg: req.body.parentOrg,
        csnum: req.body.csnum,
        description: req.body.description
    });

    carswiki.save().then((doc)=>{
        res.send(doc);
    },(e)=>{
        res.status(400).send(e);
    });
});

app.get('/carswiki', (req, res)=>{
    CarsWiki.find().then((cars)=>{
        res.send(cars);
    }, (e)=> {
        res.status(400).send(e);
    })
});

app.get('/carswiki/:id', (req, res)=>{
    var id = req.params.id;

    if(!ObjectID.isValid(id)){
        return res.status(404).send();
    }

    CarsWiki.findById(id).then((car)=>{
        if(!car){
            return res.status(404).send();
        }
        res.send(car);
    }).catch((e)=>{
        res.status(400).send(e);
    });
});

app.delete('/carswiki/:id', (req, res)=>{
    var id = req.params.id;

    if(!ObjectID.isValid(id)){
        return res.status(404).send();
    }

    CarsWiki.findByIdAndRemove(id).then((car)=>{
        if(!car){
            return res.status(404).send();
        }

        res.send(car);
    }).catch((e)=>{
        res.status(400).send(e);
    });
});

app.put('/carswiki/:id', (req, res) => {
    var id = req.params.id;
    var body = req.body;
    
    if(!ObjectID.isValid(id)){
        return res.status(404).send();
    }

    CarsWiki.findByIdAndUpdate(id, {$set: body}, {new: true}).then((car)=>{
        if(!car){
            return res.status(404).send();
        }
        res.send({car});
    }).catch((e)=>{
        res.status(400).send(e);
    });
});

app.listen(3000, ()=>{
    console.log("Started on port 3000")
});

