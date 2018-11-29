(function () {
    'use strict';

    angular
        .module("systemx.market")
        .controller('AddEditIngredientController', AddEditIngredientController);

    AddEditIngredientController.$inject = ['$http', '$log', '$scope', '$state', '$stateParams'];

    function AddEditIngredientController($http, $log, $scope, $state, $stateParams) {

        $scope.goMarket = function () {
            $scope.navigationLinks.goToMarket();
        };
    }
})();