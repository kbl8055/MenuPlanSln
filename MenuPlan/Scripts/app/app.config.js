﻿(function () {
    'use strict';

    angular
        .module('systemx')
        .config(['$stateProvider', '$locationProvider', '$urlRouterProvider',
        function ($stateProvider, $locationProvider, $urlRouterProvider) {
            //$locationProvider.html5Mode(true);
            $urlRouterProvider.otherwise('/market');
        }]);
})();