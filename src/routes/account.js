var express = require('express');
var app = express.Router();


app.get('/createAccount',function(req,res){
  res.send('Create Account Here');
});

module.exports = app;
