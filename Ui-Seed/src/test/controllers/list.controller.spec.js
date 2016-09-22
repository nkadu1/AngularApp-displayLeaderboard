/**
 * Created by niraj on 9/20/2016.
 */


describe('Tests for list Controller', function () {
    var listdata = [{

                "username": "sjames1958gm",
                "img": "https://avatars.githubusercontent.com/u/4639625?v=3",
                "alltime": 3053,
                "recent": 648,
                "lastUpdate": "2016-09-19T20:26:56.675Z"
    }]
    var $rootScope, $scope, $controller, registerController, $q, service;
    ;

    beforeEach(module('app'));

    beforeEach(inject(function (_$controller_, _$rootScope_, _$q_, _listService_) {
        $q = _$q_;
        $rootScope = _$rootScope_;
        service = _listService_;
        $scope = {};
        $controller = _$controller_;

    }))

    it('Should load data in data Array in controller', function () {
        spyOn(service, 'getData').and.callFake(function () {
            var deferred = $q.defer();
            deferred.resolve(listdata)
            return deferred.promise
        })
        var vm = $controller('listController', {$scope: $scope});
        $rootScope.$apply()
        expect(vm.data[0].username).toBe(listdata[0].username)
    })


})