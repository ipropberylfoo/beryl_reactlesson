var express = require('express');
var app = express.Router();


app.get('/makePayment',function(req,res){
  res.send('Make Payment Here');
});

module.exports = app;
