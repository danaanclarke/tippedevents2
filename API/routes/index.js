'use strict'

var twilio = require('twilio');

var accountSid = 'AC92abf988b6eddaa9fc704166623e84c3';
var authToken = '5cabb4232697375f86607f969bb71d85';


//require the Twilio module and create a REST client
var client = require('twilio')(accountSid, authToken);

exports.responseSMS = function(req, res) {
    var resp = new twilio.TwimlResponse();
    resp.message('Thanks for responding!');
    res.send(resp.toString()).type('text/xml');
};

exports.sendSMS = function(req, res){

    var invite = req.body;
    console.log(invite);

    client.sendMessage({
        body: 'Please Vote',
        to: '+18017696432',
        from: '+18016920756'
    }, function(err,message){
        res.send(message);
    });
};
