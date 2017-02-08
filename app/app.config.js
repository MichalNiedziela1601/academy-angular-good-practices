(function ()
{
    'use strict';

    function config($routeProvider, $locationProvider)
    {
        $locationProvider.html5Mode({
            enabled: true, requireBase: false
        });

        $routeProvider
                .when('/drivers', {
                    templateUrl: 'drivers/drivers.html', controller: 'DriversController', controllerAs: 'driversCtrl'
                })
                .when('/drivers/:id', {
                    templateUrl: 'driver/driver.html', controller: 'DriverController', controllerAs: 'driverCtrl'
                })
                .otherwise({redirectTo: '/drivers'});
    }

    angular.module('app')
            .config(config);

})();
