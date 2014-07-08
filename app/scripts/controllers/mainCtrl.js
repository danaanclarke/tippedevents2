angular.module('crowdTipped', 'twilioService').controller('mainCtrl', function( $scope, $http, $firebase) {
	$scope.clicked = false;

    var fire = new Firebase("https://crowdtipped.firebaseio.com/events");
    
    $scope.newEventTitle="";
    $scope.newEventLocation="";
    $scope.newEventTime="";
    $scope.newEventAttendee="";
    $scope.newEventTippingPoint="";
    $scope.events = $firebase(fire);
    $scope.addEvent = function (e) {
    	$scope.events.$add({
    		name: $scope.newEventTitle,
    		location: $scope.newEventLocation,
    		time: $scope.newEventTime,
    		attendees: $scope.newEventAttendee,
    		tippingpoint: $scope.newEventTippingPoint
    	});

    };

// var response = $http.sendrequest('/sendText',{/*data*/}){

}
});
   



  