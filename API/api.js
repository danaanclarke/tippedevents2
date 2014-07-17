'use strict';

var express = require('express');
var app = express();
var bodyparser = require('body-parser');

app.use(bodyparser.json());

app.post = ('/message_send', function(req, res) {
  var msg = req.param('msg');
});

var server = app.listen(8000, function() {
    console.log('Listening on port %d', server.address().port);
});
