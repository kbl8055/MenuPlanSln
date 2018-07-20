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
                    resolve: {
                        getCategories: function () { return {}; },
                        veggieList: ['ingredientService', function (ingredientService) {
                            return ingredientService.getAll();
                        }]
                    },
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

    market.controller('marketCtrl', ['$http', '$log', '$scope', '$state', 'ingredientService', 'veggieList',
        function ($http, $log, $scope, $state, ingredientService, veggieList) {
            $scope.ingredient = { name: '', description: '', price: '', unitOfMeasure: '' };

            //let init = function () {
            //    $scope.getIngredients();
            //    $scope.getCategories();
            //    $scope.selectedCategory = 'Select Category';
            //}

            $scope.veggies = veggieList;
            //$scope.getIngredients = function () {
            //    return ingredientService.getAll()
            //        .then(function (response) {
            //            $scope.veggies = response.data;
            //        })()
            //};
            //$scope.getIngredients = function () {
            //    return $http.get('/api/Ingredient/GetAll/')
            //        .success(function (data) {
            //            $scope.veggies = data;
            //        })
            //        .error(function (data) {
            //            $scope.errorMessage = $log.log(data);
            //        });
            //};

            //$scope.addIngredient = function () {
            //    let addFormData = $scope.ingredient;

            //    return $http.post('/api/Ingredient/Add/', addFormData)
            //        .success(function (data) {
            //            $log.log(data);
            //        })
            //        .error(function (error) {
            //            $log.log('Most probably!');
            //        });
            //}

            //$scope.getCategories = function () {
            //    let categories = [];

            //    return $http.get('/api/Lookup/GetCategories/')
            //        .success(function (data) {
            //            $log.log(data);
            //            $scope.categories = data;
            //        })
            //        .error(function (error) {
            //            $log.log(error);
            //        });
            //}

            //$scope.setCategory = function (cat) {
            //    $scope.selectedCategory = cat.Name;
            //    $scope.ingredient.categoryId = cat.Id;
            //};

            //init();
        }
    ]);
})();