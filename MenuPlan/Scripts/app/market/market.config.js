(function () {
    'use strict';

    angular
        .module('systemx.market')
        .config(marketConfig);

    marketConfig.$inject = ['$stateProvider'];

    function marketConfig($stateProvider) {
        $stateProvider
            .state('market', {
                url: '/market',
                views: {
                    "main": {
                        controller: 'MarketController',
                        templateUrl: 'Scripts/app/market/views/market.tpl.html',
                    }
                }
            })
            .state('masterList', {
                url: '/masterList',
                views: {
                    "main": {
                        controller: 'MasterListController',
                        controllerAs: 'vm',
                        templateUrl: 'Scripts/app/market/views/masterList.tpl.html',
                        resolve: {
                            ingredients: getAllIngredientsWithCategories
                        },
                    }
                }
            })
            .state('vegetable', {
                url: '/market/vegetable',
                views: {
                    "main": {
                        controller: 'VeggieController',
                        controllerAs: 'vm',
                        templateUrl: 'Scripts/app/market/views/vegetable.tpl.html',
                        resolve: {
                            //veggieList: getAllIngredients
                            veggieList: getIngredientsByCat
                            //"veggieList": ['ingredientService', function (ingredientService) {
                            //    return ingredientService.getAll();
                            //}]
                        },
                        //getCategories: function () { return {}; },
                        //"veggieList": ['ingredientService', function (ingredientService) {
                        //    return ingredientService.getAll();
                        //}]
                    }
                }
            })
            .state('marketAdd', {
                url: '/market/add',
                views: {
                    "main": {
                        controller: 'AddIngredientController',
                        controllerAs: 'vm',
                        templateUrl: 'Scripts/app/market/views/marketAdd.tpl.html',
                    }
                }
            })
            .state('marketRemove', {
                url: '/market/remove/:id/:name',
                views: {
                    "main": {
                        controller: 'RemoveIngredientController',
                        controllerAs: 'vm',
                        templateUrl: 'Scripts/app/market/views/marketRemove.tpl.html',
                    }
                }
            })
            .state('marketUpdate', {
                url: '/market/update/{ingredient:json}',
                views: {
                    "main": {
                        controller: 'EditIngredientController',
                        controllerAs: 'vm',
                        templateUrl: 'Scripts/app/market/views/marketUpdate.tpl.html',
                    }
                }
            });

        function getAllIngredients(ingredientService) {
            return ingredientService.getAll();
        }

        function getAllIngredientsWithCategories(ingredientService) {
            return ingredientService.getAllWithCategories();
        }

        function getIngredientsByCat(ingredientService) {
            return ingredientService.getByCat('vegetable');
        }
    }
})();