(function () {
    'use strict';

    var common = angular.module('systemx.common');

    common.service('ingredientService', ['$http', 
        function ($http) {
            this.getAll = function () {
                return $http.get('/api/Ingredient/GetAll/');
            };

            //this.getAlternateTitles = function (fid) {
            //    return $http.get('/api/Title/TitleAlternates/' + fid);
            //};
        }]);
})();