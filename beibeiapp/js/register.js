var inAPP = angular.module('inAPP', ['commonApp']);
inAPP.controller('inController', ['$scope', '$http', function ($scope, $http) {
    $scope.submit=function(){
    	$http.post('php/register.php',{
    		account:$scope.account,
    		phone:$scope.phone,
    		password:$scope.password,
    		email:$scope.email
    	}).success(function(response){
    		if(response.state){
				window.location.href = 'login.html';
			} else {
				$.alert(response.message);
			}
    	})
    }

}])