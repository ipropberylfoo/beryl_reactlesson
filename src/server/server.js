
import express from 'express';
const app = express();

app.use('/', express.static('public'));

var server = app.listen(3001,function(){
    console.log("We have started our server on port 3001");
});
var reactViews = require('express-react-views');

var accountModule  = require('../routes/account');
var paymentModule  = require('../routes/payment');

app.set('view engine', 'jsx');
app.engine('jsx', reactViews.createEngine());

//app.set('view engine', 'ejs');
app.set('views','./src/client');
//app.engine('html', require('ejs').renderFile);



//app.get('/here',function(req,res){
//    res.send('Hello world');
//});
app.use('/v1/account', accountModule);
app.use('/v1/payment', paymentModule);

app.get('/user/:username',function(req,res){
    console.log('here -> ' + req.params.username);
    res.render('./public/index.jsx', {
      username : req.params.username
    });
});
app.get('/',function(req,res){
    res.render('./public/index.jsx');
});
app.get('/menu',function(req,res){
    res.render('./public/menu.jsx');
});
