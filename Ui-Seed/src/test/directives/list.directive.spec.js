/**
 * Created by niraj on 9/20/2016.
 */

describe('list Directive', function () {
    var listdata = [{

        "username": "sjames1958gm",
        "img": "https://avatars.githubusercontent.com/u/4639625?v=3",
        "alltime": 3053,
        "recent": 648,
        "lastUpdate": "2016-09-19T20:26:56.675Z"
    }]
    var $compile;
    var $rootScope;
    var elem;

    beforeEach(module('app'))

    beforeEach(inject(function (_$compile_, _$rootScope_) {

        $compile = _$compile_
        $rootScope = _$rootScope_
        elem = $compile(angular.element(
            '<table class="table table-striped">' +
            '<thead>' +
            '<tr>' +
            '<th>#</th>' +
            '<th>Camper Name</th>' +
            '<th>Points in Past 30 Days</th>' +
            '<th>All time Points</th>' +
            '</tr>' +
            '</thead>' +
            '<tbody>' +
            '<tr ng-repeat="user in listItems">' +
            '  <td>{{$index+1}}</td>' +
            '<td>{{user.username}}</td>' +
            '<td>{{user.recent}}</td>' +
            '<td>{{user.alltime}}</td>' +
            '</tr>' +
            '</tbody>' +
            '</table>'))($rootScope);
        $rootScope.$digest();
    }))


    it('should have tr and td elements', function () {
        //console.log(elm);
        var tableRow = elem.find('tr');
        var tableData = elem.find('td');
        expect(tableRow).toBeDefined();
        expect(tableData).toBeDefined();
    });

    it('should contain following data', function () {
        $rootScope.$apply(function () {
            $rootScope.username = 'nkadu'
            $rootScope.recent = 10
            $rootScope.alltime = 100

        })
        expect($rootScope.username).toEqual('nkadu');
        expect($rootScope.recent).toEqual(10);
    });

})