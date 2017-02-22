var inAPP = angular.module('inAPP', ['commonApp']);
inAPP.controller('inController', ['$scope', '$http', function ($scope, $http) {

    $http.get('php/admin.php').success(function(response){
        if(response.state){
            $scope.list = response.data;
        } else {
            $.alert(response.message);
        }
    });

    $scope.delete=function(_event){
        if(confirm('确定删除吗？')){
            var indexid = $(_event.target).parent().siblings('.indexid').html();
            $http.post('php/admindelete.php',{indexid:indexid}).success(function(response){
                 $('.mask').addClass('item-hidden');
                window.location.reload();

            })
        }
    }

    var indexid = '';
    $scope.exdit=function(_event){
        $('.mask-bg').show();
        $('#exdit').show();
        indexid=$(_event.target).parent().siblings('.indexid').html();
        $http.post('php/exdit.php',{indexid:indexid}).success(function(res){
            $scope.data=res.data;
            $scope.productnum = $scope.data[0].productnum;
            $scope.title = $scope.data[0].title;
            $scope.src = $scope.data[0].src;
            $scope.color = $scope.data[0].color;
            $scope.img1 = $scope.data[0].img1;
            $scope.img2 = $scope.data[0].img2;
            $scope.img3 = $scope.data[0].img3;
            $scope.adddata = $scope.data[0].adddata;
            $scope.issuer = $scope.data[0].issuer;
            $scope.size = $scope.data[0].size;
        })
    }

    $scope.sub=function(){
       $http.post('php/sub.php',{
            indexid:indexid,
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
                 $('.mask-bg').hide();
              $('#exdit').hide();
            } else {
                $.alert(response.message);
            }
        })
    }

    $scope.cancel=function(){
          $('.mask-bg').hide();
          $('#exdit').hide();
    }


}])