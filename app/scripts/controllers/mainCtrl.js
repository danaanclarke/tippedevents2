'use strict';

var app = angular.module('mainModule', ['firebase', 'messageModule']);

app.controller('mainCtrl', ['$scope', '$firebase', '$location', function( $scope, $firebase, $location, messageService) {
    $scope.clicked = false;

    var fire = new Firebase("https://crowdtipped.firebaseio.com/events");

    $scope.newEvent = {};
    $scope.events = $firebase(fire);
    $scope.addEvent = function (e) {
        $scope.events.$add(e).then(function (data) {
            var eventData = data.name();
            $location.path('/details/' + eventData);
        });
        $scope.newEvent = null;
    };


}]);


   



  