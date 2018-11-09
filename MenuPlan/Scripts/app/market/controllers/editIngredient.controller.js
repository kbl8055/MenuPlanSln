(function () {
    'use strict';

    angular
        .module('systemx.market')
        .controller('EditIngredientController', EditIngredientController);

    EditIngredientController.$inject = ['$stateParams'];

    function EditIngredientController($stateParams) {
        const vm = this;

        activate();

        function activate() {
            vm.ingredient = $stateParams.ingredient;
        }
    }
})();