(function(){
    'use strict';

    function search()
    {
        return function (input, search)
        {
            if(!search){
                return input;
            }else {
                var array = [];
                var reg = new RegExp(search, 'i');
                angular.forEach(input, function (item)
                {
                    if (reg.test(item.Driver.givenName) || reg.test(item.Driver.familyName)) {
                        array.push(item);
                    }
                });
                return array;
            }
        };
    }

    angular.module('app').filter('search', search);
})();

