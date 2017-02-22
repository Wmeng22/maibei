var inAPP = angular.module('inAPP', ['commonApp']);
    inAPP.controller('inController', ['$scope', '$http', function ($scope, $http) {
        console.log(common.baseUrl);
    $http.get('php/goodList.php?_'+Math.random()).success(function(response){
    	$scope.list=response.data;

    	console.log(response.data);
    })







}])
