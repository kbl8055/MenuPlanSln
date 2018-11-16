(function () {
    'use strict';

    angular
        .module('systemx.market')
        .controller('EditIngredientController', EditIngredientController);

    EditIngredientController.$inject = ['$http', '$log', '$state', '$stateParams'];

    function EditIngredientController($http, $log, $state, $stateParams) {
        const vm = this;
        vm.setCategory = setCategory;
        vm.getCategories = getCategories;
        vm.editIngredient = editIngredient;
        vm.valFormEditIngr = valFormEditIngr;
        let ingredient = $stateParams.ingredient;
        vm.ingredient = {
            id: ingredient.Id,
            name: ingredient.Name,
            description: ingredient.Description,
            price: ingredient.Price,
            unitOfMeasure: ingredient.UnitOfMeasure,
            categoryId: ingredient.CategoryId
        };

        activate();

        // Function Declarations
        function activate() {
            getCategories();
            setCategory($stateParams.ingredient.Category);
        }

        function setCategory(cat) {
            vm.selectedCategory = cat.Name;
            vm.ingredient.categoryId = cat.Id;
        }

        function getCategories() {
            return $http.get('/api/Lookup/GetCategories/')
                .success(function (data) {
                    vm.categories = data;
                })
                .error(function (error) {
                    $log.log(error);
                });
        }

        function editIngredient() {
            let editFormData = vm.ingredient;

            return $http.put('/api/Ingredient/Edit/', editFormData)
                .success(function (data) {
                    $state.go('masterList');
                })
                .error(function (error) {
                    $log.log('Most probably!');
                });
        }

        function valFormEditIngr(isValid) {
            vm.submitted = true;

            if (isValid) {
                editIngredient();
            }
        }
    }
})();