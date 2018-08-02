(function () {
    'use strict';

    var market = angular.module("systemx.market");

    market.controller('addIngredientCtrl', ['$http', '$scope',
        function ($http, $scope) {
            $scope.ingredient = { name: '', description: '', price: '', unitOfMeasure: '' };

            $scope.addIngredient = function () {
                let addFormData = $scope.ingredient;

                return $http.post('/api/Ingredient/Add/', addFormData)
                    .success(function (data) {
                        $log.log(data);
                    })
                    .error(function (error) {
                        $log.log('Most probably!');
                    });
            };

            $scope.reset = function () {
                $scope.ingredient.name = '';
                $scope.ingredient.description = '';
                $scope.ingredient.price = '';
                $scope.ingredient.unitOfMeasure = '';
            };
        }
    ]);
})();