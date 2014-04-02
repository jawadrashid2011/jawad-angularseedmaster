'use strict';

eventsApp.directive('datePicker', function() {
    return {
        restrict: 'A',
        link: function(scope, element, attributes, controller) {
            element.datepicker();
        }
    }
})