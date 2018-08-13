(function () {
    'use strict';

    angular
        .module('systemx')
        .controller('AppController', AppController);

    AppController.$inject = ['$scope', '$state'];

    function AppController($scope, $state) {
        $scope.navigationLinks = {
            goToHome: function () {
                $state.go('home');
            },
            goToMarket: function () {
                $state.go('market');
            },
            removeIngredient: function () {
                $state.go('marketRemove');
            },
            addIngredient: function () {
                $state.go('marketAdd');
            },
            updateIngredient: function () {
                $state.go('marketUpdate');
            }
        };
    }
})();