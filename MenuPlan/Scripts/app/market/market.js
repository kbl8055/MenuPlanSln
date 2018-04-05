﻿(function () {
    'use strict';

    var market = angular.module('systemx.market', ['ui.router']);

    market.config(['$stateProvider',
        function ($stateProvider) {
            $stateProvider
                .state('market', {
                    url: '/market',
                    views: {
                        "main": {
                            controller: 'marketCtrl',
                            templateUrl: 'Scripts/app/market/market.tpl.html',
                        }
                    }
                })
                .state('vegetable', {
                    url: '/market/vegetable',
                    views: {
                        "main": {
                            controller: 'marketCtrl',
                            templateUrl: 'Scripts/app/market/views/vegetable.tpl.html',
                        }
                    }
                })
                .state('marketAdd', {
                    url: '/market/add',
                    views: {
                        "main": {
                            controller: 'marketCtrl',
                            templateUrl: 'Scripts/app/market/marketAdd.tpl.html',
                        }
                    }
                })
                .state('marketRemove', {
                    url: '/market/remove',
                    views: {
                        "main": {
                            controller: 'marketCtrl',
                            templateUrl: 'Scripts/app/market/marketRemove.tpl.html',
                        }
                    }
                })
                .state('marketUpdate', {
                    url: '/market/update',
                    views: {
                        "main": {
                            controller: 'marketCtrl',
                            templateUrl: 'Scripts/app/market/marketUpdate.tpl.html',
                        }
                    }
                });
        }]);

    market.controller('marketCtrl', ['$scope', '$state',
        function ($scope, $state) {
            $scope.message = 'Welcome to my market landing port.';
            $scope.veggies = [
                { name: 'Garlic', description: 'test', price: '85', unitOfMeasure: 'Kg' },
                { name: 'Laurel', description: 'A bay leaf used for seasoning in cooking', price: '100', unitOfMeasure: 'Kg' },
                { name: 'Black Ground Pepper', description: 'test', price: '80', unitOfMeasure: 'Kg' }
            ];

            //$scope.veggies = function()

            //$scope.ingredient = { name: '', description: '', price: '', unitOfMeasure: '' };

            ////$scope.addIngredient = function () {

            ////}
        }
    ]);
})();