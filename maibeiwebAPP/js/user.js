var inAPP=angular.module('inAPP',['commonApp']);
inAPP.controller('inController',['$http','$scope',function($http,$scope){
      $http.get('php/user.php').success(function(response){
            if(response.state){
                $scope.account=response.account;
            }else{
                $scope.account="请登录";
            }
      })

      $scope.loginout=function(){
        $http.get('php/loginout.php').success(function(){
             window.location.href="user.html";
        })
      }

}])



