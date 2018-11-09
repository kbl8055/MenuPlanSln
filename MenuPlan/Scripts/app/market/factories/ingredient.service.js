(function () {
    'use strict';

    angular
        .module('systemx.market')
        .factory('ingredientService', ingredientService);

    ingredientService.$inject = ['$http', '$q'];

    function ingredientService ($http, $q) {
        return {
            //getAll: function ($http) {
            //        $http.get('/api/Ingredient/GetAll/').success(function (response) {
            //            return response;
            //        })
            //    }
            //getAll: function () {
            //    return $q.when("My example message!");
            //},
            getAll: function () {
                return $q.when(
                    $http.get('/api/Ingredient/GetAll/').success(function (response) {
                        return response;
                    })
                );
            },
            getByCat: function (catName) {
                return $q.when(
                    $http.get('/api/Ingredient/GetByCategory/' + catName).success(function (response) {
                        return response;
                    })
                );
            },
            removeIngr: function (id) {
                return $q.when(
                    $http.delete('api/Ingredient/Delete/' + id).success(function (response) {
                        console.log(response);
                        return response;
                    })
                );
            }
        };
    }
        //function ($http, $q) {
        //    this.getAll = function () {
        //        var deferred = $q.defer();

        //        $http.get('/api/Ingredient/GetAll/').success(function (response) {
        //            console.log(response);
        //            deferred.resolve(response);
        //        });

        //        return deferred.promise();
        //    };
        //}

        //this.getBreadcrumb = function (foxId, displayName, productType, displayTitleYear) {
        //    var deferred = $q.defer();
        //    $http.get('/api/Breadcrumb/Title/' + foxId, {
        //        params: {
        //            productType: productType
        //        }
        //    }).success(function (result) {

        //        if (!result.foxId) {
        //            result.displayName = displayName;
        //            result.foxId = foxId;
        //        }

        //        if (productType == "EPSD" || productType == "FEATR" || productType == "PILOT" || productType == "CMPEP") {
        //            if (displayTitleYear)
        //                result.displayName = result.displayName + ' (' + displayTitleYear + ')';
        //        }

        //        deferred.resolve(result);
        //    });

        //    return deferred.promise;
        //};

        //this.getAlternateTitles = function (fid) {
        //    return $http.get('/api/Title/TitleAlternates/' + fid);
        //};
})();
