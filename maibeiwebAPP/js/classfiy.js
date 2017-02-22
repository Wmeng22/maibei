$(function(){
	
	$('.menu-list').on('touchstart',function(){
		if($('.top-list').is(':hidden')){
			$('.top-list').show();
		}else{
			$('.top-list').hide();
		}
	})
	
	$('.m-menu').on('touchstart',function(){
		$('.m-menu').find('p').css('background','#fff');
		$(this).find('p').css('background','#F5F5F5');
		$('.m-menu').find('.classfiy-right').hide();
		$(this).find('.classfiy-right').show();
	})
	
	
	
	
	
})
