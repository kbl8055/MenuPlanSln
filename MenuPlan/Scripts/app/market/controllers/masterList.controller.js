(function () {
    'use strict';

    angular
        .module("systemx.market")
        .controller('MasterListController', MasterListController);

    MasterListController.$inject = ['ingredients'];

    function MasterListController(ingredients) {
        const vm = this;

        activate();

        function activate() {
            vm.ingredients = ingredients.data;
        }
    }
})();