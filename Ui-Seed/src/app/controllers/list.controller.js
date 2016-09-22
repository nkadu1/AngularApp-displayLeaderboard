(function () {

    'use strict';
    angular.module('app')
        .controller('listController', ['listService', function (listService) {
            var vm = this;
            vm.data = [];
            init()
            function init() {
                listService
                    .getData()
                    .then(function (list) {
                        vm.data = list;
                    }, function (error) {
                        console.log(error);
                    })
            }
        }])


})()