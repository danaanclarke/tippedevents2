var accountSid = 'AC92abf988b6eddaa9fc704166623e84c3';
var authToken = '5cabb4232697375f86607f969bb71d85';


//require the Twilio module and create a REST client
var client = require('/usr/local/lib/node_modules/twilio')(accountSid, authToken);

client.sendMessage({

    to:'+18017696432', // Any number Twilio can deliver to
    from: '+18016920756', // A number you bought from Twilio and can use for outbound communication
    body: 'Hey Soul Sista' // body of the SMS message

}, function(err, responseData) { //this function is executed when a response is received from Twilio


    if (!err) { // "err" is an error received during the request, if any

        // "responseData" is a JavaScript object containing data received from Twilio.
        // A sample response from sending an SMS message is here (click "JSON" to see how the data appears in JavaScript):
        // http://www.twilio.com/docs/api/rest/sending-sms#example-1

        console.log(responseData.from); // outputs "+14506667788"
        console.log(responseData.body); // outputs "word to your mother."

    }else{
        console.log(err);
    }
});