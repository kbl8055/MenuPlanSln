(function () {
    'use strict';

    var market = angular.module("systemx.market");

    market.controller('AddIngredientController', ['$http', '$log', '$scope',
        function ($http, $log, $scope) {
            let initialize = function () {
                $scope.getCategories();
                $scope.selectedCategory = 'Select Category';
            }

            $scope.ingredient = { name: '', description: '', price: '', unitOfMeasure: '' };

            $scope.getCategories = function () {
                return $http.get('/api/Lookup/GetCategories/')
                    .success(function (data) {
                        $log.log(data);
                        $scope.categories = data;
                    })
                    .error(function (error) {
                        $log.log(error);
                    });
            }

            $scope.setCategory = function (cat) {
                $scope.selectedCategory = cat.Name;
                $scope.ingredient.categoryId = cat.Id;
            };

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
                $scope.selectedCategory = 'Select Category';
            };

            initialize();
        }
    ]);
})();