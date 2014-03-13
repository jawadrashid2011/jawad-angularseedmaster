'use strict';

eventsApp.controller("EventsController",
    function EventsController($scope, eventData) {

        eventData.getEvent(function(event) {
            $scope.event = event;
        });

        $scope.upVoteSession = function(session) {
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