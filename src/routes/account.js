var express = require('express');
var app = express.Router();
var jsonfile = require('jsonfile');

app.get('/:id',function(req,res){
    var file = './src/database/0001.json';

    jsonfile.readFile(file, function(err, obj) {
      res.render('./account/profile.jsx', {
        account : obj
      });
     //res.send('Account Dashboard - ' + obj.Name  );
   });
});

app.get('/:id/summary',function(req,res){
  res.send('Saving/Current Account Summary for ' + req.params.id );
});

app.get('/:id/view',function(req,res){
  res.send('Saving/Current Account Detail Transaction for ' + req.params.id );
});

app.get('/:id/m2u',function(req,res){
  res.send('M2U Transaction for ' + req.params.id);
});

app.get('/creditCard',function(req,res){
  res.send('Credit / Charge Account');
});

app.get('/fixeddeposit',function(req,res){
  res.send('Fixed Deposit');
});

app.get('/saveAcc/view',function(req,res){
  res.send('View Saving / Current Account');
});

module.exports = app;
