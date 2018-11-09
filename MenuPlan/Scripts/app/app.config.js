(function () {
    'use strict';

    angular
        .module('systemx')
        .config(appConfig);

    appConfig.$inject = ['$stateProvider', '$locationProvider', '$urlRouterProvider'];

    function appConfig($stateProvider, $locationProvider, $urlRouterProvider) {
            //$locationProvider.html5Mode(true);
            $urlRouterProvider.otherwise('/masterList');
    }
})();