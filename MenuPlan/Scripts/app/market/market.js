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
                            resolve: {
                                veggieList: function (ingredientService) {
                                    return ingredientService.getAll();
                                }
                            },
                        }
                    }
                })
                .state('vegetable', {
                    url: '/market/vegetable',
                    views: {
                        "main": {
                            controller: 'marketCtrl',
                            templateUrl: 'Scripts/app/market/views/vegetable.tpl.html',
                            resolve: {
                                veggieList: function (ingredientService) {
                                    return ingredientService.getAll();
                                }
                            },
                            //getCategories: function () { return {}; },
                            //"veggieList": ['ingredientService', function (ingredientService) {
                            //    return ingredientService.getAll();
                            //}]
                        }
                    }
                })
                //.state('marketAdd', {
                //    url: '/market/add',
                //    views: {
                //        "main": {
                //            controller: 'marketCtrl',
                //            templateUrl: 'Scripts/app/market/views/marketAdd.tpl.html',
                //        }
                //    }
                //})
                //.state('marketRemove', {
                //    url: '/market/remove',
                //    views: {
                //        "main": {
                //            controller: 'marketCtrl',
                //            templateUrl: 'Scripts/app/market/views/marketRemove.tpl.html',
                //        }
                //    }
                //})
                //.state('marketUpdate', {
                //    url: '/market/update',
                //    views: {
                //        "main": {
                //            controller: 'marketCtrl',
                //            templateUrl: 'Scripts/app/market/views/marketUpdate.tpl.html',
                //        }
                //    }
        }]);
})();
