(function () {
    'use strict';

    angular
        .module("systemx.market")
        .controller('VeggieController', VeggieController);

    VeggieController.$inject = ['veggieList'];

    function VeggieController(veggieList) {
        const vm = this;

        activate();

        function activate() {
            vm.veggies = veggieList.data;
        }
    }
})();