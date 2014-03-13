'use strict';

eventsApp.filter("durations", function() {
    return function(duration) {
        switch (duration) {
            case 1:
                return "1 Hour"
            case 4:
                return "4 Hours"
            case 6:
                return "6 Hours"
        }
    };
});