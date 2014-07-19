'use strict';

var app = angular.module('ConfirmModule', ['messageModule']);

app.controller('confirmCtrl', ['messageService'], function($scope, $routeParams, $firebase, messageService) {

    var fireBaseChild = $routeParams.id;
    var fire = new Firebase("https://crowdtipped.firebaseio.com/events/" + fireBaseChild);
    $scope.event = $firebase(fire);

    $scope.friendsArray = [
        {
        name: "Dan",
        number: "18017696432"
        },
        {
        name: "Bill",
        number: "18017696432"
        },
        {
        name: "Houston",
        number: "18017696432"
        }
    ];

    $scope.sendFriend = function(invite) {

    };

    $scope.sendMessage = function(number) {
        messageService.get(number);
        console.log(number);
    };
});

