var inAPP = angular.module('inAPP', ['commonApp']);
inAPP.controller('inController', ['$scope', '$http', function ($scope, $http) {
 $http.get('php/getsession.php').success(function(response){
				if(!response.state){
                    $.alert('您还没有登录！')
					window.location.href = 'login.html';
				}
	})


    var len = 0;
    $http.get('php/shopcar.php').success(function(response){
    	$scope.list=response.data;
        len = $scope.list.length;
    })

    $scope.delete=function(_event){
      if(confirm("真的确认删除吗？")){
        var html=$(_event.target).parent().parent().parent().siblings('.img').find('a').prop('href');
        console.log(html);
        var indexid = html.split('?')[1];
          console.log(indexid);
        $http.post('php/delete.php',{
            indexid:indexid
        }).success(function(response){
            if(response.state){
                // console.log('ll');
                // $('.mask').hide();
                window.location.href=window.location.href;
            } else {
                $.alert(response.message);
            }

        })

       }
    }



     //点击加减
    $scope.changeNum = function(_event){
        var number = parseInt($(_event.target).siblings('.number').html());
         console.log(number)
      if($(_event.target).is('.minus')){
        console.log('oo')
          if(number>1){
            number--;
          }
          $(_event.target).siblings('.number').html(number);
       }
      if($(_event.target).is('.plus')){
        console.log('ii');
            number++;
          $(_event.target).siblings('.number').html(number);
      }
    }

   //点击单选
    $scope.check=function(_event){

        if($(_event.target).is('.check1')){
            $(_event.target).parent().find('.check2').show();
            $(_event.target).hide();
            changeCheck();
        }

        if($(_event.target).is('.check2')){
            $(_event.target).parent().find('.check1').show();
            $(_event.target).hide();
            changeCheck();
        }
    }

    //点击全选
    $scope.totalCheck=function(_event){

        if($(_event.target).is('.s-car')){

            $('.s-car-1').show();
            $('.s-car').hide();
            $('.check2').show();
            $('.check1').hide();
            changeCheck();
        }

        if($(_event.target).is('.s-car-1')){
            console.log('oo')
            $('.s-car').show();
            $('.s-car-1').hide();
            $('.check1').show();
            $('.check2').hide();
            changeCheck();
        }
    }


    //单选全选函数
    function changeCheck(){

        var Li=0;
        var total=0;
        $('.check2').each(function(){
            if($(this).is(':hidden')){

            }else{
                Li++;
                var price=parseInt($(this).parent().siblings('.s-detail').find('.price').html());
                var num=parseInt($(this).parent().siblings('.s-detail').find('.number').html())
                total += price*num;
            }
        })
        $('.s-tobuy .total').html(total);
        if(Li==len){
            $('.s-car-1').show();
            $('.s-car').hide();
        }else{
            $('.s-car').show();
            $('.s-car-1').hide();
        }
    }


    //加入确认下单
    $scope.toSure = function(){
        var arr = [];
        $('.check2').each(function(){
            if($(this).is(':hidden')){

            }else{
                var idx = $(this).parent().siblings('.img').find('a').prop('href').split('?')[1];
                arr.push(idx);
                console.log(arr);
            }
        })
        // $.get('sure.html',{id:arr},function(){
        //     window.location.href = "sure.html";

        // })      这是jquery使用get方法时的写法
        // $http.get('sure.html',{id:arr}).success(function(){
        //        // window.location.href = "sure.html";
        // })
        window.location.href = "sure.html?indexid="+arr;

    }


}])