(function () {

    angular
        .module('app')
        .directive('main', main)

    function main() {
        var directive = {
            scope: {
                listItems: '=items',
            },
            templateUrl: './app/templates/list.directive.tmpl.html',
            controller: dirController,
            controllerAs: 'vm'
        }

        function dirController(listService) {
            var vm = this;
            vm.sortFn = function (sortBy) {
                console.log('Here in controller sort ' + sortBy)
                vm.data = listService.sortFn(sortBy)
            }
        }

        return directive
    }
})()