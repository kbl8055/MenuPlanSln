(function () {
    'use strict';

    angular.module('systemx')
        .controller('AppController', ['$scope', '$state', function ($scope, $state) {
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
    }]);
})();