(function () {
    'use strict';

    var market = angular.module('systemx.market');

    market.directive('addEditForm', AddEditDirective);

    AddEditDirective.$inject = ['$http', '$log', '$state', '$stateParams'];

    function AddEditDirective($http, $log, $state, $stateParams) {
        let controller = function ($scope) {
            const vm = this;
            vm.setCategory = setCategory;
            vm.getCategories = getCategories;
            vm.valForm = valForm;
            vm.goMarket = goMarket;

            activate();

            // Function Declarations
            function activate() {
                getCategories();
                initializeIngredients();
            }

            function initializeIngredients() {
                if ($scope.mode.toLowerCase() == 'add') {
                    vm.ingredient = { name: '', description: '', price: '', unitOfMeasure: '', categoryId: undefined }
                    //reset();
                    vm.selectedCategory = 'Select Category';
                }
                else if ($scope.mode.toLowerCase() == 'edit') {
                    let ingredient = $stateParams.ingredient;
                    vm.ingredient = {
                        id: ingredient.Id,
                        name: ingredient.Name,
                        description: ingredient.Description,
                        price: ingredient.Price,
                        unitOfMeasure: ingredient.UnitOfMeasure,
                        categoryId: ingredient.CategoryId
                    };

                    setCategory($stateParams.ingredient.Category);
                }
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

            function reset() {
                vm.ingredient.name = '';
                vm.ingredient.description = '';
                vm.ingredient.price = '';
                vm.ingredient.unitOfMeasure = '';
                vm.ingredient.categoryId = undefined;
                vm.selectedCategory = 'Select Category';
            }

            function addIngredient() {
                let addFormData = vm.ingredient;

                return $http.post('/api/Ingredient/Add/', addFormData)
                    .success(function (data) {
                        reset();
                        $state.go('masterList');
                    })
                    .error(function (error) {
                        $log.log('Most probably!');
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

            function valForm(isValid) {
                vm.submitted = true;

                if (isValid) {
                    let currentMode = $scope.mode.toLowerCase();

                    if (currentMode === 'add') {
                        addIngredient();
                    }
                    else if (currentMode === 'edit') {
                        editIngredient();
                    }
                }
            }

            function goMarket() {
                $scope.onGoMarket();
            }
        };

        return {
            restrict: 'EA',
            templateUrl: '/Scripts/app/market/views/addEditForm.tpl.html',
            scope: {
                mode: '@',
                onGoMarket: '='
            },
            controller: controller,
            controllerAs: 'vm'
        };
    }
})();