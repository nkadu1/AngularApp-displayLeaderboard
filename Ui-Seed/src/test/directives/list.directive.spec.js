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
            "<tr>" +
            " <td>{{index}}</td>" +
            "<td>{{listItem.username}}</td>" +
            "<td>{{listItem.recent}}</td>" +
            "<td>{{listItem.alltime}}</td>" +
            "</tr>"))($rootScope);
        console.log('Html here ' +  elem.html )
        $rootScope.$digest();

    }))
    it('should have tr and td elements', function () {
        //console.log(elm);
        var tableRow = elem.find('tr');
        var tableData = elem.find('td');
        expect(tableRow).toBeDefined();
        expect(tableData).toBeDefined();
    });

})