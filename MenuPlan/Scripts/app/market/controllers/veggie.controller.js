(function () {
    'use strict';

    var market = angular.module("systemx.market");

    market.controller('VeggieController', ['$scope', 'veggieList',
        function ($scope, veggieList) {
            $scope.veggies = veggieList.data;
        }
    ]);
})();