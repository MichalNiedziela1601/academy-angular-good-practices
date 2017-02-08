(function ()
{
    'use strict';

    function DriversController(DriverAPIFactory)
    {
        var ctrl = this;
        ctrl.nameFilter = null;
        ctrl.driversList = [];

        /////////////

        function getDrivers()
        {
            DriverAPIFactory.getDrivers().then(function (response)
            {
                ctrl.driversList = response.MRData.StandingsTable.StandingsLists[0].DriverStandings;
            });
        }

        function init()
        {
            getDrivers();
        }

        ///////////////
        init();

    }

    angular.module('app')
            .controller('DriversController', ['DriverAPIFactory',DriversController]);


})();


