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
            .state('vegetable', {
                url: '/market/vegetable',
                views: {
                    "main": {
                        controller: 'VeggieController',
                        templateUrl: 'Scripts/app/market/views/vegetable.tpl.html',
                        resolve: {
                            veggieList: getAllIngredients
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
                        templateUrl: 'Scripts/app/market/views/marketAdd.tpl.html',
                    }
                }
            })
            .state('marketRemove', {
                url: '/market/remove',
                views: {
                    "main": {
                        //controller: 'marketCtrl',
                        templateUrl: 'Scripts/app/market/views/marketRemove.tpl.html',
                    }
                }
            })
            .state('marketUpdate', {
                url: '/market/update',
                views: {
                    "main": {
                        //controller: 'marketCtrl',
                        templateUrl: 'Scripts/app/market/views/marketUpdate.tpl.html',
                    }
                }
            });

        function getAllIngredients(ingredientService) {
            return ingredientService.getAll();
        }
    }
})();