/**
 * Created by niraj on 9/20/2016.
 */
describe('list Service',function (){

    var service;
    var $q;
    beforeEach(function(){
        module('app');
        inject(function($injector,$q){
            service =  $injector.get('listService');
          //  $q = $injector.get('$q');
        })
    })


    it('should contain data',inject(function($httpBackend,$http){
        var $scope = {};
        var expectedUrl = 'https://fcctop100.herokuapp.com/api/fccusers/top/recent';
        var listdata =    {"username":"sjames1958gm","img":"https://avatars.githubusercontent.com/u/4639625?v=3","alltime":3053,"recent":648,"lastUpdate":"2016-09-19T20:26:56.675Z"};

        $http.get(expectedUrl)
            .success(function(data, status, headers, config) {
                $scope.lisdata = data;
            });
        $httpBackend
            .when('GET',expectedUrl)
            .respond(
                {"username":"sjames1958gm","img":"https://avatars.githubusercontent.com/u/4639625?v=3","alltime":3053,"recent":648,"lastUpdate":"2016-09-19T20:26:56.675Z"}
            )
        $httpBackend.flush();

       expect( $scope.lisdata.username).toEqual('sjames1958gm');
    }))


    // it('should handle error',inject(function($httpBackend,$http){
    //     var $scope = {};
    //     var expectedUrl = 'https://fcctop100.herokuapp.com/api/fccu/top/recent';
    //     var listdata =    {"username":"sjames1958gm","img":"https://avatars.githubusercontent.com/u/4639625?v=3","alltime":3053,"recent":648,"lastUpdate":"2016-09-19T20:26:56.675Z"};
    //
    //     // $http.get(expectedUrl)
    //     //     .success(function(data, status, headers, config) {
    //     //         $scope.lisdata = data;
    //     //     });
    //     $httpBackend
    //         .expect('GET',expectedUrl)
    //         .respond(400)
    //     service.getData()
    //
    //     $httpBackend.flush();
    //
    //     expect().toHaveBeenCalledWith(400);
    // }))



})