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
                $state.go('masterList');
            },
            removeIngredient: function (name) {
                $state.go('marketRemove', {
                    name: name
                });
            },
            addIngredient: function () {
                $state.go('marketAdd');
            },
            updateIngredient: function (ingredient) {
                $state.go('marketUpdate', {
                    ingredient: ingredient
                }, { location: false });
            }
        };
    }
})();