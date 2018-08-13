(function () {
    'use strict';

    angular
        .module("systemx.market")
        .controller('AddIngredientController', AddIngredientController);

    AddIngredientController.$inject = ['$http', '$log', '$scope'];

    function AddIngredientController($http, $log, $scope) {
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
})();