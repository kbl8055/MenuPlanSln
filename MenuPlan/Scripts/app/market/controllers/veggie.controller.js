(function () {
    'use strict';

    var market = angular.module("systemx.market");

    market.controller('veggieCtrl', ['$scope', 'veggieList',
        function ($scope, veggieList) {
            $scope.veggies = veggieList.data;
        }
    ]);
})();