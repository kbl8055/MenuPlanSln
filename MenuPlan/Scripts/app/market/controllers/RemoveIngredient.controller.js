(function () {
    'use strict';

    angular
        .module("systemx.market")
        .controller("RemoveIngredientController", RemoveIngredientController);

    RemoveIngredientController.$inject = ['$state', '$stateParams', 'ingredientService'];

    function RemoveIngredientController($state, $stateParams, ingredientService) {
        const vm = this;

        activate();

        function activate() {
            vm.name = $stateParams.name;
            vm.removeIngredient = function () {
                var response = ingredientService.removeIngr($stateParams.id);
                $state.go('masterList');
            }
        }
    }
})();