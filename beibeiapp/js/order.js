var inAPP = angular.module('inAPP', ['commonApp']);
inAPP.controller('inController', ['$scope', '$http', function ($scope, $http) {

    $http.get('php/order.php').success(function(response){
    	$scope.datalist=response.data;

    })


}])