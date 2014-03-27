'use strict';

eventsApp.controller("EventsController",
    function EventsController($scope, $anchorScroll, $routeParams, $route) {

        $scope.event = $route.current.locals.event;
        // console.log($route.current.foo);
        // console.log($route.current.params.foo);
        // console.log($route.current.params.eventId);
        // console.log($route.current.pathParams.eventId);
        // $scope.event.then(
        //     function(event) {
        //         console.log(event);
        //     },

        //     function(response) {
        //         console.log(response);
        //     }
        // );

        $scope.reload = function() {
            $route.reload();
        }

        $scope.upVoteSession = function(session) {
            session.upVoteCount++;
        };

        $scope.downVoteSession = function(session) {
            session.upVoteCount--;
        };

        $scope.scrollToSession = function() {
            $anchorScroll();
        }

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