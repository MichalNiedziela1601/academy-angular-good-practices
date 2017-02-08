
(function(){
    'use strict';
    
    function DriverController($routeParams,DriverAPIFactory){
        var ctrl = this;
        ctrl.id = $routeParams.id;
        ctrl.races = [];
        ctrl.driver = null;

        //////////////////
        function getDriver(id)
        {
            DriverAPIFactory.getDriver(id).then(function(response){
                ctrl.driver = response.MRData.StandingsTable.StandingsLists[0].DriverStandings[0];
            });
        }

        function getDriverRaces(id)
        {
            DriverAPIFactory.getDriverRaces(id).then(function (response)
            {
                ctrl.races = response.MRData.RaceTable.Races;
            });
        }

        function init()
        {
            getDriver(ctrl.id);
            getDriverRaces(ctrl.id);
        }

        /////////////////////////
        init();
    }
    
    angular.module('app')
        .controller('DriverController', ['$routeParams','DriverAPIFactory',DriverController]);
    
    
})();
