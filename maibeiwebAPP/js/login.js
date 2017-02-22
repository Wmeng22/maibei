var inAPP = angular.module('inAPP', ['commonApp']);
inAPP.controller('inController', ['$scope', '$http', function ($scope, $http) {
    $scope.submit=function(){
    	$http.post('php/login.php',{
    		account:$scope.account,
    		password:$scope.password
    	}).success(function(response){
    		if(response.state){
			window.location.href = 'shopcar.html';
			} else {
			 window.location.href ='register.html';
			}
    	})
    }

}])