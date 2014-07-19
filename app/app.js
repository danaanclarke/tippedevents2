'use strict';

var app = angular.module('crowdTipped', ['ngRoute', 'firebase', 'mainModule', 'messageModule']);

app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider

        .when('/', {
            templateUrl: 'Views/main.html',
            controller: 'mainCtrl'
        })

        .when('/details/:id', {
            templateUrl: 'Views/confirmation.html',
            controller: 'confirmCtrl'
        })

        .otherwise({ redirectTo: '/' });
}]);




