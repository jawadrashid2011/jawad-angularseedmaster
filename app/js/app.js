'use strict';

var eventsApp = angular.module('eventsApp', ['ngSanitize', 'ngResource', 'ngCookies'])
    .config(function($routeProvider) {
        $routeProvider.when('/newEvent', {
            templateUrl: 'templates/NewEvent.html',
            controller: 'EditEventController'
        });
        $routeProvider.when('/events', {
            templateUrl: 'templates/EventList.html',
            controller: 'EventListController'
        });
        $routeProvider.when('/event/:eventId', {
        // foo: 'bar',
            templateUrl: 'templates/EventsDetails.html',
            controller: 'EventsController'
        });
        $routeProvider.otherwise({
            redirectTo: '/events'
        });
    });