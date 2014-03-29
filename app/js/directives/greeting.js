'use strict';

eventsApp.directive('greeting', function() {
    return {
        restrict: 'E',
        replace: true,
        template: "<button class='btn' ng-click='sayHello()' >Say Hello</button>",
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
            link: function(scope, element, attrs, controller) {
                controller.addGreeting('Kiya haal Hain?');
            }
        }
    })
    .directive('arabic', function() {
        return {
            restrict: 'A',
            require: 'greeting',
            link: function(scope, element, attrs, controller) {
                controller.addGreeting('Assalam-o-Alaikum');
            }
        }
    });