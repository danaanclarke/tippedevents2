var express = require('express');
var routes = require('./routes');


var app = express();


app.get('/', routes.responseSMS);

app.get('/sendMessage', routes.sendSMS);


app.listen(8000, function(){
    console.log('connected!');
});