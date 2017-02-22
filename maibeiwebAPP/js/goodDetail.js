


var inAPP = angular.module('inAPP', ['commonApp']);
    inAPP.controller('inController', ['$scope', '$http', function ($scope, $http) {
    var indexid = location.search.replace('?','');
    var Color = '';
    var Size = '';
    $http.post('php/good.php',{indexid:indexid}).success(function(response){
    	$scope.list=response.data;
    	console.log(response.data);

    	//获取颜色，尺寸
    	var color = $scope.list[0]['color'];
      console.log(color);
    	var array = color.split(';');
    	var html='';
    	for(var i=0;i<array.length;i++){
    		html += '<span>' + array[i] + '</span>';
    	}
    	$('.color div').append(html);

      var size = $scope.list[0]['size'];
    	var array1 = size.split(';');
    	var html1='';
    	for(var i=0;i<array1.length;i++){
    		html1 += '<span>' + array1[i] + '</span>';
    	}
    	$('.size div').append(html1);

    	$('.color div span').on('touchstart',function(evt){
    		 $(this).parent().parent().find('span').css({ "background":" #fff",
								                          "border": "1px solid rgba(61,61,61,.4)",
								                          "color": "#000"});
    		// $(this).addClass('active');
    		$(this).css({ "background":" #ff4965",
                          "border-color": "#ff4965",
                          "color": "#fff"});
    		Color = $(this).html();
    	})
    	$('.size div span').on('touchstart',function(){
    		 $(this).parent().parent().find('span').css({ "background":" #fff",
								                          "border": "1px solid rgba(61,61,61,.4)",
								                          "color": "#000"});
    		// $(this).addClass('active');
    		$(this).css({ "background":" #ff4965",
                          "border-color": "#ff4965",
                          "color": "#fff"});

    		Size = $(this).html();
    	})


        var mySwiper = new Swiper('.swiper-container', {
				autoplay: 2000,
				speed: 800,
				autoHeight: true,
		  		pagination: '.swiper-pagination',
		    });
    });

    //显示隐藏颜色尺码
    $scope.showMessage =function(_event){
      if($(_event.target).is('.add-car')){
        $('.mask-bg').show();
        $('.chooseColor').slideDown(400);
       }
       if ($(_event.target).is('i')){
          $('.mask-bg').hide();
         $('.chooseColor').slideUp(400);
       }
    }


    //点击加减
    $scope.changeNum = function(_event){
    	var number = parseInt($('.number').html());

      if($(_event.target).is('.minus')){
      	console.log(number)
      	  if(number>1){
      	  	number--;
      	  }
      	  $('.number').html(number);
       }
      if($(_event.target).is('.plus')){
      	console.log(number)
      	    number++;
      	    $('.number').html(number);
      }
    }

    //加入购物车
    var goodnum=20170100;
    $scope.addCar=function(){
       goodnum++
		$http.post('php/goodDetail.php',{
					title: $('.d-title p').html(),
					goodnum: goodnum,
					price: $('.d-title .price').html(),
					src: $('.swiper-slide').eq(0).find('img').attr('src'),
					Color: Color,
					Size: Size,
					number: $('.number').html()
				}).success(function(response){


             $('.mask-bg').hide();
             $('.chooseColor').hide();
						 confirm('添加成功！');

		})
	}


  //评论
   $('#d-detail').on('touchstart',function(){
      $('.d-content').show();
      $('.d-comment').hide();
      $(this).css({'background':'#F5F5F5','color':'#000'});
      $('#comment').css({'background':'#496','color':'#fff'});
    })

    $('#comment').on('touchstart',function(){
      $('.d-comment').show();
      $('.d-content').hide();
      $(this).css({'background':'#F5F5F5','color':'#000'});
      $('#d-detail').css({'background':'#496','color':'#fff'});
    })

}])
