'use strict';

var app = angular.module('crowdTipped');

app.factory('messageService', function ($http) {
    return {
        send: function() {
            return $http({url: 'http://localhost:8000/sendMessage/', method: 'GET'});
        }
    };
});

