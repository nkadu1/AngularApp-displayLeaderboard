(function () {
    'use strict';

    angular.module('app')
        .service('listService', ['$http', '$q', function ($http) {

            var vs = this;
            vs.getData = getData;
            vs.sortFn = sortFn
            vs.data = [];
            vs.flag = false;

            function sortFn(sortBy) {
                vs.data.sort(sort_by(sortBy, vs.flag, parseInt));
                vs.flag = !vs.flag;
                return vs.data;
            }

            var sort_by = function (sortBy, reverse) {
                var key = parseInt ? function (x) {
                    return parseInt(x[sortBy])
                } :
                    function (x) {
                        return x[sortBy]
                    };

                reverse = !reverse ? 1 : -1;
                return function (a, b) {
                    return a = key(a), b = key(b), reverse * ((a > b) - (b > a));
                }
            }

            function getData() {
                return $http.get('https://fcctop100.herokuapp.com/api/fccusers/top/recent')
                    .then(successDataFn, errorFn)
            }

            function successDataFn(response) {
                vs.data = response.data
                return vs.data;
            }

            function errorFn(error) {
                return $q.reject();
            }
        }])

})()