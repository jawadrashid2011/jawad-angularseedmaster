"use strict";
/* 
 * Created by Jawad Rashid
 */
eventsApp.factory("eventData", function($resource, $q, $timeout) {
    var resource = $resource('data/event/:id.json', {
        id: '@id'
    });
    var saveResource = $resource('data/event/:id', {
        id: '@id'
    });
    return {

        getEvent: function(eventId) {
            var deferred = $q.defer();
            $timeout(function() {
                resource.get({
                    id: eventId
                }, function(event) {
                    deferred.resolve(event);
                }, function(response) {
                    deferred.reject(response);
                });
            }, 0);


            return deferred.promise;
        },
        save: function(event) {
            var deferred = $q.defer();
            event.id = 999;
            saveResource.save(event,
                function(response) {
                    deferred.resolve(response);
                },
                function(response) {
                    deferred.reject(response);
                }
            );

            return deferred.promise;
        },
        getAllEvents: function() {
            return resource.query();
        }
    };
});