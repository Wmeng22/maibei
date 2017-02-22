var addAPP = angular.module('addAPP', ['commonApp']);
addAPP.controller('inController', ['$scope', '$http', function ($scope, $http) {
    $scope.submit=function(){
        $http.post('php/addproduct.php',{
            productnum:$scope.productnum,
            title:$scope.title,
            src:$scope.src,
            color:$scope.color,
            img1:$scope.img1,
            img2:$scope.img2,
            img3:$scope.img3,
            price:$scope.price,
            adddata:$scope.adddata,
            issuer:$scope.issuer,
            size:$scope.size
        }).success(function(response){
            if(response.state){
                $.alert('添加成功！');
            } else {
                $.alert(response.message);
            }
        })
    }

}])