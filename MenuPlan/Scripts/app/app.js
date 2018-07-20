(function () {
    'use strict';

    var systemx = angular.module('systemx', [
        'systemx.common',
        'systemx.market',
        'ui.router'
    ]);

    systemx.config(['$stateProvider', '$locationProvider', '$urlRouterProvider',
        function ($stateProvider, $locationProvider, $urlRouterProvider) {
            //$locationProvider.html5Mode(true);
            $urlRouterProvider.otherwise('/market');
        }]);

    systemx.controller('AppController', ['$scope', '$state', function ($scope, $state) {
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