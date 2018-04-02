(function () {
    'use strict';

    var home = angular.module('systemx.home', ['ui.router']);

    home.controller('homeCtrl', ['$scope',
        function ($scope) {
            $scope.message = "This is me with the start of something great!";
        }]);
})();