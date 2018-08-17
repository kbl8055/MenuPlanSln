(function () {
    'use strict';

    angular
        .module("systemx.market")
        .controller('MarketController', MarketController);

    MarketController.$inject = [];

    function MarketController() {
		const vm = this;

        activate();

        function activate() {
        }
    }
})();