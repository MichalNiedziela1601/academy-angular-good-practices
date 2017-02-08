(function ()
{
    'use strict';

    function DriversController(DriverAPIFactory)
    {
        var ctrl = this;
        ctrl.nameFilter = null;
        ctrl.driversList = [];

        /////////////

        function searchFilter(driver)
        {
            var re = new RegExp(ctrl.nameFilter, 'i');
            return !ctrl.nameFilter || re.test(driver.Driver.givenName) || re.test(driver.Driver.familyName);
        }

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

        ctrl.searchFilter = searchFilter;
    }

    angular.module('app')
            .controller('DriversController', ['DriverAPIFactory',DriversController]);


})();


