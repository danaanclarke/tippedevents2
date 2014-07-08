app.service('twilioService') {

};

function TwillioObject(){
    this.client = new twilio.RestClient('AC92abf988b6eddaa9fc704166623e84c3', '5cabb4232697375f86607f969bb71d85');

}

    TwillioObject.prototype.sendText = function(){  
     
    // Pass in parameters to the REST API using an object literal notation. The
    // REST client will handle authentication and response serialzation for you.
    client.sms.messages.create({
        to:'+18017696432',
        from:'+18016920756',
        body: newEventTitle + ' at ' + newEventLocation + ' at ' + newEventTime + '. Click the link if you\'ll be there:'
    }, function(error, message) {
        // The HTTP request to Twilio will run asynchronously. This callback
        // function will be called when a response is received from Twilio
        // The "error" variable will contain error information, if any.
        // If the request was successful, this value will be "falsy"
        if (!error) {
            // The second argument to the callback will contain the information
            // sent back by Twilio for the request. In this case, it is the
            // information about the text messsage you just sent:
            console.log('Success! The SID for this SMS message is:');
            console.log(message.sid);
     
            console.log('Message sent on:');
            console.log(message.dateCreated);
        } else {
            console.log('Oops! There was an error.');
        }
    });
};

 
