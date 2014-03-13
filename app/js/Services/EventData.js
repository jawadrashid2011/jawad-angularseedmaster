"use strict";
/* 
 * Created by Jawad Rashid
 */
eventsApp.factory("eventData", function($resource) {
    return {
        getEvent: function() {
            return $resource('data/event/:id.json', {
                id: '@id'
            }).get({
                id: 1
            });
        }
    };
});