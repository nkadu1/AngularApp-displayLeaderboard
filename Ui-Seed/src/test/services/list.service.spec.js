/**
 * Created by niraj on 9/20/2016.
 */
describe('list Service', function () {

    var service;
    var $q;
    var data = [{
        "username": "sjames1958gm",
        "img": "https://avatars.githubusercontent.com/u/4639625?v=3",
        "alltime": 3053,
        "recent": 648,
        "lastUpdate": "2016-09-19T20:26:56.675Z"
    }, {
        "username": "ndburrus",
        "img": "https://avatars.githubusercontent.com/u/15148847?v=3",
        "alltime": 1891,
        "recent": 480,
        "lastUpdate": "2016-09-19T18:46:08.545Z"
    },]
    beforeEach(function () {
        module('app');
        inject(function ($injector, $q) {

            service = $injector.get('listService');
        })
    })


    it('should contain data', inject(function ($httpBackend, $http, _listService_) {
        service = _listService_;
        $scope = {}
        var expectedUrl = 'https://fcctop100.herokuapp.com/api/fccusers/top/recent';
        $http.get(expectedUrl)
            .success(function (data, status, headers, config) {
                $scope.lisdata = data;
            });
        $httpBackend
            .when('GET', expectedUrl)
            .respond(
                {
                    "username": "sjames1958gm",
                    "img": "https://avatars.githubusercontent.com/u/4639625?v=3",
                    "alltime": 3053,
                    "recent": 648,
                    "lastUpdate": "2016-09-19T20:26:56.675Z"
                }
            )
        $httpBackend.flush();

        expect($scope.lisdata.username).toEqual('sjames1958gm');
    }))


    it("calls the returns sorted data function", function () {
        service.sortFn('recent');
        spyOn(service, "sortFn").and.callFake(function () {
            return data;
        });
        var a = service.sortFn('recent');
        expect(a[0].alltime).toEqual(3053);
    });


    it("tracks all the arguments of its calls", function () {
        spyOn(service, "sortFn")
        service.sortFn('recent');
        expect(service.sortFn).toHaveBeenCalledWith('recent');
    });


})