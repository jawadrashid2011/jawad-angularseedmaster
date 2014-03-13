"use strict";
/* 
 * Created by Jawad Rashid
 */
eventsApp.controller("EditEventController",
    function EditEventController($scope, eventData) {

        $scope.saveEvent = function(event, newEventForm) {
            console.log(newEventForm);
            if (newEventForm.$valid) {
                // window.alert('event ' + event.name + ' saved');
                eventData.save(event)
                    .then(
                        function(response) {
                            console.log("success", response);
                        },
                        function(response) {
                            console.log("error", response);
                        }
                )
            }
        };

        $scope.cancelEdit = function() {
            window.location = "EventsDetails.html"
        };
    }
);