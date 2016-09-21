(function() {

    angular
        .module('app')
        .directive('main', main)

    function main() {
        var directive = {
            replace: true,
            restrict: 'EA',
            scope: {
                listItem: '=main',
                index: '@'
            },
            template: "<tr>" +
            " <td>{{index}}</td>" +
            "<td>{{listItem.username}}</td>" +
            "<td>{{listItem.recent}}</td>" +
                "<td>{{listItem.alltime}}</td>" +
            "</tr>"
        }
        return directive
    }

})()