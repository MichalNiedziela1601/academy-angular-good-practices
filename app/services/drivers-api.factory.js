
(function(){
    'use strict';
    function DriverAPIFactory($http){
        var driverAPI = {};

        driverAPI.getDrivers = function ()
        {
            return $http.get('http://ergast.com/api/f1/2013/driverStandings.json').then(function (result)
            {
                return result.data;
            });
        };

        driverAPI.getDriverRaces = function (id)
        {
            return $http.get('http://ergast.com/api/f1/2013/drivers/' + id + '/results.json').then(function (result)
            {
                return result.data;
            });
        };

        driverAPI.getDriver = function (id)
        {
            return $http.get('http://ergast.com/api/f1/2013/drivers/' + id + '/driverStandings.json').then(function (result)
            {
                return result.data;
            });
        };

        return driverAPI;
    }
    angular.module('app')
        .factory('DriverAPIFactory', ['$http',DriverAPIFactory]);

})();

