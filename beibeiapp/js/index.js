var inAPP = angular.module('inAPP', ['commonApp']);
    inAPP.controller('inController', ['$scope', '$http', function ($scope, $http) {
    $http.get('php/index.php').success(function(response){
    	$scope.list=response.data;

    	console.log(response.data);
    })

    //滚动事件 显示隐藏回到顶部
     $('.content').scroll(function(){
         if($('.content').scrollTop()>800){
             $('.scroll_top').show();
         }else{
             $('.scroll_top').hide();
         }
     })
      // 回到顶部
     $('.scroll_top').on('touchstart',function(){
        goTop(900);
     })

     function goTop(times){

         if(!!!times){
          $(window).scrollTop(0);
          return;
         }

         var sh=$('.content').scrollTop();//移动总距离
         var inter=13.333;//ms,每次移动间隔时间
         var forCount=Math.ceil(times/inter);//移动次数
         var stepL=Math.ceil(sh/forCount);//移动步长
         var timeId=null;
         function ani(){
              !!timeId&&clearTimeout(timeId);
              timeId=null;

              if($('.content').scrollTop()<=0||forCount<=0){//移动端判断次数好些，因为移动端的scroll事件触发不频繁，有可能检测不到有<=0的情况
               $('.content').scrollTop(0);
               return;
          }
          forCount--;
          sh-=stepL;
          $('.content').scrollTop(sh);
          timeId=setTimeout(function(){ani();},inter);
         }
         ani();
     }




}])
