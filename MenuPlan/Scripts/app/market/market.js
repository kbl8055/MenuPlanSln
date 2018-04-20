(function () {
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
                            templateUrl: 'Scripts/app/market/views/market.tpl.html',
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
                            templateUrl: 'Scripts/app/market/views/marketAdd.tpl.html',
                        }
                    }
                })
                .state('marketRemove', {
                    url: '/market/remove',
                    views: {
                        "main": {
                            controller: 'marketCtrl',
                            templateUrl: 'Scripts/app/market/views/marketRemove.tpl.html',
                        }
                    }
                })
                .state('marketUpdate', {
                    url: '/market/update',
                    views: {
                        "main": {
                            controller: 'marketCtrl',
                            templateUrl: 'Scripts/app/market/views/marketUpdate.tpl.html',
                        }
                    }
                });
        }]);

    market.controller('marketCtrl', ['$http', '$log', '$scope', '$state',
        function ($http, $log, $scope, $state) {
            $scope.getIngredients = function () {
                return $http.get('/api/Ingredient/GetAll/')
                    .success(function (data) {
                        $scope.veggies = data;
                    })
                    .error(function (data) {
                        $scope.errorMessage = $log.log(data);
                    });
            };

            $scope.addIngredient = function () {
                return $http.post('/api/Ingredient/Add/')
            }

            var init = function () {
                $scope.getIngredients();
            }
        }
    ]);
})();