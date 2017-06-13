
import express from 'express';
const app = express();

app.use('/', express.static('public'));

var server = app.listen(3000,function(){
    console.log("We have started our server on port 3000");
});
var reactViews = require('express-react-views');

app.set('view engine', 'jsx');
app.engine('jsx', reactViews.createEngine());

//app.set('view engine', 'ejs');
app.set('views','./src/client');
//app.engine('html', require('ejs').renderFile);



app.get('/here',function(req,res){
    res.send('Hello world');
});

app.get('/index/:username',function(req,res){
    console.log('here -> ' + req.params.username);
    res.render('./public/index.jsx', {
      username : req.params.username
    });
});
app.get('/index',function(req,res){
    res.render('./public/index.jsx');
});
