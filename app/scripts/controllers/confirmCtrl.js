'use strict';

app.controller('confirmCtrl', function($scope, $routeParams, $firebase) {

    var fireBaseChild = $routeParams.id;
    var fire = new Firebase("https://crowdtipped.firebaseio.com/events/" + fireBaseChild);
    $scope.event = $firebase(fire);
});

