var express=require("express");
var cors = require('cors');
var bodyParser = require('body-parser');

var app=express();

app.use(cors({
    origin: '*'
}));
app.use(bodyParser.json())

app.listen(6969,()=>{console.log("appläuft")});

app.post("/Invoices", (req, res, next) => {
    console.log(req.body.bewerbungstext)
    // hier pdf generieren
    res.json(req.body.bewerbungstext);
   });