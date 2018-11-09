(function () {
    'use strict';

    angular
        .module("systemx.market")
        .controller('AddIngredientController', AddIngredientController);

    AddIngredientController.$inject = ['$http', '$log', '$state'];

    function AddIngredientController($http, $log, $state) {
        const vm = this;
        vm.ingredient = { name: '', description: '', price: '', unitOfMeasure: ''}
        vm.getCategories = getCategories;
        vm.setCategory = setCategory;
        vm.reset = reset;
        vm.addIngredient = addIngredient;
        vm.selectedCategory = 'Select Category';

        activate();

        function activate() {
            getCategories();
            reset();
        }

        function getCategories() {
            return $http.get('/api/Lookup/GetCategories/')
                .success(function (data) {
                    $log.log(data);
                    vm.categories = data;
                })
                .error(function (error) {
                    $log.log(error);
                });
        }

        function setCategory(cat) {
            vm.selectedCategory = cat.Name;
            vm.ingredient.categoryId = cat.Id;
        }

        function reset() {
            vm.ingredient.name = '';
            vm.ingredient.description = '';
            vm.ingredient.price = '';
            vm.ingredient.unitOfMeasure = '';
            vm.selectedCategory = 'Select Category';
        }

        function addIngredient() {
            let addFormData = vm.ingredient;

            return $http.post('/api/Ingredient/Add/', addFormData)
                .success(function (data) {
                    $log.log(data);
                    reset();
                    $state.go('masterList');
                })
                .error(function (error) {
                    $log.log('Most probably!');
                });
        }
    }
})();