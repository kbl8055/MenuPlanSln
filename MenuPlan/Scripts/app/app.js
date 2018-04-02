(function () {
    'use strict';

    var systemx = angular.module('systemx', [
        'systemx.home',
        'systemx.market',
        'ui.router'
    ]);

    systemx.config(['$stateProvider', '$locationProvider', '$urlRouterProvider',
        function ($stateProvider, $locationProvider, $urlRouterProvider) {
            //$locationProvider.html5Mode(true);
            $urlRouterProvider.otherwise('/home');

            $stateProvider
                .state('home', {
                    url: '/home',
                    views: {
                        "main": {
                            controller: 'homeCtrl',
                            templateUrl: 'Scripts/app/home/home.tpl.html',
                        }
                    }
                });
            $stateProvider
                .state('market', {
                url: '/market',
                views: {
                    "main": {
                        controller: 'marketCtrl',
                        templateUrl: 'Scripts/app/market/market.tpl.html',
                    }
                }
            });
    }]);

    systemx.controller('AppController', ['$scope', '$state', function ($scope, $state) {
        $scope.goToHome = function () {
            $state.go('home');
        };
    }]);
})();