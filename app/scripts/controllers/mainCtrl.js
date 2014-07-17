'use strict';

app.controller('mainCtrl', ['$scope', '$firebase', '$location', function( $scope, $firebase, $location, messageService) {
	$scope.clicked = false;

    var fire = new Firebase("https://crowdtipped.firebaseio.com/events");

    $scope.newEvent = {};
    $scope.events = $firebase(fire);
    $scope.addEvent = function (e) {
        $scope.events.$add(e).then(function(data){
           var eventData = data.name();
           $location.path('/details/' + eventData);
        })
        $scope.newEvent = null;
    };

    messageService.getData().then(function(data) {
        $scope.data = data;
        $scope.event = {
            newEvent.Title:"h",
            newEvent.location: "g"
        }

    messageService.post(event)
    })

}]);


   



  