'use strict';

app.service('messageService', function ($http) {
		this.getData = function() {
            return $http.get('http://localhost:8000/message_send/');
            };

        this.postData = function (data) {
            return $http.post('/message_send', data);
            };
});
