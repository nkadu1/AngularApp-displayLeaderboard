(function() {

    'use strict';
    angular.module('app')
        .controller('listController', ['listService','$scope', function(listService,$scope) {
            var vm = this;
            vm.data = [];

            vm.sortFn = sortFn
            init()

            function init() {
                listService
                    .getData()
                    .then(function(list) {
                        vm.data = list;
                        $scope.data =  vm.data;
                    }, function(error) {
                        console.log(error);
                    })
            }
            function sortFn(sortBy) {
                vm.data = listService.sortFn(sortBy)
            }


        }])


})()