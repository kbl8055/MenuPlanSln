(function () {
    'use strict';

    angular
        .module("systemx.market")
        .controller('VeggieController', VeggieController);

    VeggieController.$inject = ['$scope', 'veggieList'];

    function VeggieController($scope, veggieList) {
        $scope.veggies = veggieList.data;
    }
})();