'use strict';

eventsApp.directive('greeting', function() {
    return {
        restrict: 'E',
        replace: true,
        template: "<button class='btn' ng-click='sayHello()' >Say Hello</button>",
        priority: -1,
        controller: function($scope) {
            var greetings = ['hello'];
            $scope.sayHello = function() {
                alert(greetings.join());
            }

            this.addGreeting = function(greeting) {
                greetings.push(greeting);
            }
        }

    }
})
    .directive('urdu', function() {
        return {
            restrict: 'A',
            require: 'greeting',
            priority: -1,
            terminal: true,
            link: function(scope, element, attrs, controller) {
                controller.addGreeting('Kiya haal Hain?');
            }
        }
    })
    .directive('arabic', function() {
        return {
            restrict: 'A',
            require: 'greeting',
            priority: -2,
            link: function(scope, element, attrs, controller) {
                controller.addGreeting('Assalam-o-Alaikum');
            }
        }
    });