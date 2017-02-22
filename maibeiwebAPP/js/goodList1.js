$(function(){
function load(){
    $.get('php/goodList.php',function(response){
        var list=JSON.parse(response);
        var data=list.data;
        if(data){
           $.each(data, function(index, val) {
              if(index<12){
                var $li = '<li><a href="goodDetail.html?'+this.indexid+'"><img src="'+this.src+'"><p>'+this.title+'</p><span>￥</span><span>'+this.price+this.indexid+'</span></a></li>';
                $('.l-content ul').append($li);
              }
           });
        }
    })

    var myScroll,
                pullDown = $("#pullDown"),
                pullUp = $("#pullUp"),
                pullDownLabel = $(".pullDownLabel"),
                pullUpLabel = $(".pullUpLabel"),
                container = $('#list'),
                loadingStep = 0; //加载状态0默认，1显示加载状态，2执行加载数据，只有当为0时才能再次加载，这是防止过快拉动刷新
            var ii = 0;
            var i = 12;

            pullDown.hide();
            pullUp.hide();
            myScroll = new IScroll("#wrapper", {
                scrollbars: true,
                mouseWheel: true,
                interactiveScrollbars: true,
                shrinkScrollbars: 'scale',
                fadeScrollbars: true,
                scrollY: true,
                click: true,
                probeType: 2,
                bindToWrapper: true
            });
            myScroll.on("scroll", function() {

                if(loadingStep == 0 && !pullDown.attr("class").match('refresh|loading') && !pullUp.attr("class").match('refresh')) {
                    if(this.y >= 0) { //下拉刷新操作
                        $(".pulldown-tips").hide();
                        pullDown.addClass("refresh").show();
                        pullDownLabel.text("松手刷新数据");
                        loadingStep = 1;
                        myScroll.refresh();
                    } else if(this.y < (this.maxScrollY)) { //上拉加载更多
                        //                      $(".pullUpLabel").hide();
                        pullUp.addClass("refresh").show();
                        pullUpLabel.text("正在载入");
                        loadingStep = 1;
                        pullUpAction();
                    }
                }
            });
            myScroll.on("scrollEnd", function() {
                if(loadingStep == 1) {
                    if(pullDown.attr("class").match("refresh")) { //下拉刷新操作
                        pullDown.removeClass("refresh").addClass("loading");
                        pullDownLabel.text("正在刷新");
                        //                      pullUp.removeClass("refresh").addClass("loading");
                        //                      pullUp.text("正在刷新");
                        loadingStep = 2;
                        pullDownAction();

                    }
                }


            });

            function pullDownAction() {
                setTimeout(function() {
                    $.get('php/goodList.php',function(response){
                        var list=JSON.parse(response);
                        var data=list.data;
                        if(data) {
                            for(var j = 13; j < 17; j++) {
                                var n = i++;

                                var $li = '<li><a href="goodDetail.html?'+data[n].indexid+'"><img src="'+data[n].src+'"><p>'+data[n].title+'</p><span>￥</span><span>'+data[n].price+data[n].indexid+'</span></a></li>';
                                $('.l-content ul').append($li);
                            }
                            pullDown.attr('class', '').hide();
                            myScroll.refresh();
                            loadingStep = 0;
                            $(".pulldown-tips").show();
                        } else {
                            $.alert(response.message);
                        }
                    });
                }, 800);
            }

            function pullUpAction() {
                setTimeout(function() {
                    $.get('php/goodList.php',function(response){
                        var list=JSON.parse(response);
                        var data=list.data;
                        if(data) {
                            for(var j = 13; j < 17; j++) {
                                var n = i++;
                               var $li = '<li><a href="goodDetail.html?'+data[n].indexid+'"><img src="'+data[n].src+'"><p>'+data[n].title+'</p><span>￥</span><span>'+data[n].price+data[n].indexid+'</span></a></li>';
                                $('.l-content ul').append($li);
                            }
                            pullUp.attr('class', '').hide();
                            myScroll.refresh();
                            loadingStep = 0;
                            $('.pullUpLabel').show();
                        } else {
                            $.alert(response.message);
                        }
                    });
                }, 800);
            }
            document.addEventListener('touchmove', function(e) {
                e.preventDefault();
            }, false);


}

load();


})