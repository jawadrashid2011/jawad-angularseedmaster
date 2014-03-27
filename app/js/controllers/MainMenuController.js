'use strict';

eventsApp.controller('MainMenuController',
    function MainMenuController($scope, $location) {
        console.log($location.absUrl());
        $scope.createEvent = function() {
            console.log("In Function");
            // $location.url('newEvent');
        }
    }
);