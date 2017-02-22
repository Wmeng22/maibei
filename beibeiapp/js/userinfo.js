var inAPP = angular.module('inAPP', ['commonApp']);
inAPP.controller('inController', ['$scope', '$http', function ($scope, $http) {
    $scope.submit=function(){
    	$http.post('php/userinfo.php',{
    		account:$scope.account,
    		phone:$scope.phone,
    		oldpassword:$scope.oldpassword,
    		password:$scope.password,
    		email:$scope.email
    	}).success(function(response){
    		if(response.state){
				$.alert(response.message);
			} else {
				$.alert(response.message);
			}
    	})
    }

}])