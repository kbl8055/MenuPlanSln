(function () {
    'use strict';

    angular
        .module("systemx.market")
        .controller("RemoveIngredientController", RemoveIngredientController);

    RemoveIngredientController.$inject = ['$stateParams'];

    function RemoveIngredientController($stateParams) {
        const vm = this;

        activate();

        function activate() {
            vm.name = $stateParams.name;
        }
    }
})();