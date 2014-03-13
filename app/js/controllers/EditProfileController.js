'use strict';
/* 
 * Created by Jawad Rashid
 */
eventsApp.controller("EditProfileController",
    function EditProfileController($scope, gravatarUrlBuilder) {
        $scope.user = {}; 
        
        $scope.getGravatarUrl = function(email) {
            return gravatarUrlBuilder.buildGravatarUrl(email);
        };
    }
);

