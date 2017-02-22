var inAPP = angular.module('inAPP', ['commonApp']);
inAPP.controller('inController', ['$scope', '$http', function ($scope, $http) {
    $scope.submit=function(){
        $http.post('php/adminlogin.php',{
            email:$scope.email,
            password:$scope.password
        }).success(function(response){
            if(response.state){
                window.location.href = 'admin.html';
            } else {
                $.alert(response.message);
            }
        })
    }

}])