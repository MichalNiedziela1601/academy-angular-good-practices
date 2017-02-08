/* Directives */

(function(){
    'use strict';

    function DriverDetailsDirective(){
        return {
            restrict: 'EA',
            link: linkFn,
            scope: {
                driver: '='
            },
            templateUrl: 'directives/templates/driver-details.directive.html'
        };

        function linkFn(scope,elm,attrs){
        }
    }

    angular.module('app')
        .directive('driverDetails', DriverDetailsDirective);

})();


