$(function(){
    $('.goback').on('touchstart',function(){

         window.history.go(-1);
    });

    $('.menu-list').on('touchstart',function(){
        if($('.top-list').is(':hidden')){
            $('.top-list').show();
        }else{
            $('.top-list').hide();
        }
    });




})