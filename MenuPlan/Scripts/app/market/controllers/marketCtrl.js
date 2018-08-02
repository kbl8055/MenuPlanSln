(function () {
    'use strict';

    var market = angular.module("systemx.market");

    market.controller('marketCtrl', 
        function () {
            //$scope.ingredient = { name: '', description: '', price: '', unitOfMeasure: '' };

            //let init = function () {
            //    $scope.getIngredients();
            //    $scope.getCategories();
            //    $scope.selectedCategory = 'Select Category';
            //}

            //console.log(veggieList);
            //$scope.name = veggieList;
            //$scope.veggies = veggieList.data;

            //$http.get('/api/Ingredient/GetAll/').success(function (response) {
            //    console.log(response);
            //    $scope.veggies = response;
            //});


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
    );
})();