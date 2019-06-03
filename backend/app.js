const express = require('express');
const mongoose = require('mongoose');
const async = require('async');
const request = require('request');
const indexRoutes = require("./routes/index");
const app = express();
const bodyParser = require('body-parser')


mongoose.connect('mongodb://localhost/hotelesal', function(err,res){
  if(err) console.log('Error con la conexion '+err);
  else console.log("conexion BD realizada");
})

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))


app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

app.use("/", indexRoutes);


app.listen('4850');
console.log("Inicio server almundo");
