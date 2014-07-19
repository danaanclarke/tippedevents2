'use strict';

var app = angular.module('messageModule', ['ngResource']);

app.factory('messageService', function ($http, $resource) {
    return $resource('https://d067732.ngrok.com/sendMessage/', {}, {
        get: {method: 'GET'}
    });



});
