﻿(function () {
    'use strict';

    angular
        .module("systemx.market")
        .controller('VeggieController', VeggieController);

    VeggieController.$inject = ['$scope', 'veggieList'];

    function VeggieController($scope, veggieList) {
        activate();

        function activate() {
            const vm = this;
            vm.veggies = veggieList.data;

            return vm.veggies;
        }
    }
})();