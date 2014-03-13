'use strict';

eventsApp.controller("EventsController",
    function EventsController($scope, eventData) {

        $scope.event = eventData.getEvent();

        $scope.upVoteSession = function(session, event) {
            console.log(event);
            console.log($scope.event);
            session.upVoteCount++;
        };

        $scope.downVoteSession = function(session) {
            session.upVoteCount--;
        };

        $scope.snippet = "<span style='color:red;'>Hi there</span>";
        $scope.boolValue = true;
        $scope.mystyle = {
            color: 'red'
        };
        $scope.myclass = "blue";
        $scope.buttonDisabled = true;
        $scope.sortorder = "name";
    }
);