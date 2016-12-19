var express = require('express');
var app = express();
var api = require('./api/timestamp.js');

app.use(express.static(__dirname + '/public'));
app.set('views', './public');

app.get('/', function(req,res){
   res.render('index');
});

api(app);

app.listen(8080, function(){
    console.log('App listening on port 8080');
});
