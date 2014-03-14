'use strict';

eventsApp.filter("durations", function() {
    return function(duration) {
        switch (duration) {
            case 1:
                return "1 Hour"
            case 2:
                return "2 Hours"
            case 3:
                return "3 Hours"
            case 4:
                return "4 Hours"
            case 6:
                return "6 Hours"
        }
    };
});