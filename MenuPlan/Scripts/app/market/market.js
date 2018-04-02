(function () {
    'use strict';

    var market = angular.module('systemx.market', ['ui.router']);

    market.config(['$stateProvider',
        function ($stateProvider) {
            $stateProvider
                .state('vegetable', {
                    url: '/market/vegetable',
                    views: {
                        "main": {
                            controller: 'marketCtrl',
                            templateUrl: 'Scripts/app/market/views/vegetable.tpl.html',
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

            $scope.goToMarket = function () {
                $state.go('market');
            };
        }
    ]);
})();