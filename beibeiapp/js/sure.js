   var common = common || {};

common.baseUrl = 'http://10.3.134.20:8080/beibeiapp/';


    var idx = window.location.search;
    var indexid = idx.split('=')[1];
    var arr = indexid.split(',');

    var response='';

      $.post(common.baseUrl+'php/sure.php',function(res){
           response = JSON.parse(res);
            for (var i = 0; i < response.length; i++) {
              for (var j = 0; j < arr.length; j++) {
                var html='';
                    if(arr[j] == response[i].indexid) {
                           html += '<div class="shoppingcar-list" ><div class="shopname">店铺1</div><div class="productlist">';
                           html += '<div class="product-img"><a href="#"><img src="'+response[i].src+'"></a></div>';
                           html += '<div class="item-content"><div class="product-name" >'+response[i].title+'</div><div class="color">颜色：'+response[i].Color+'&nbsp;尺码：'+response[i].Size+'</div>';
                           html += '<div class="item-controller"><div class="product-price">￥'+response[i].price+'</div><div class="item-count">X <span>'+response[i].num+'</span></div> </div></div> </div>';
                           html += '<div class="list-group"><div class="list-group-item"><div class="col-xs-4">配送方式</div><div class="col-xs-8 text-right">快递免邮</div></div>';
                           html += '<div class="list-group-item"><div class="col-xs-4">运费险</div><div class="col-xs-8"><input type="text" name="invoice" placeholder="请购买运费险"/></div></div>';
                           html += '<div class="list-group-item"><div class="col-xs-4">买家留言</div><div class="col-xs-8"><input type="text" name="notes" placeholder="选填"/></div></div>';
                    }
                    $('.content').append(html);
                };
            }
         })

      $('.toorder').on('touchstart', function(event) {
        for(var i=0;i<response.length;i++){
            for(var j=0;j<arr.length;j++){
                if(arr[j] == response[i].indexid) {
                  $.post(common.baseUrl+'php/toorder.php',{
                       src:response[i].src,
                       title:response[i].title,
                       Color:response[i].Color,
                       Size:response[i].Size,
                       price:response[i].price,
                       num:response[i].num
                  },function(res){
                      if(confirm('添加成功！')){
                        window.location.href='order.html';
                      }
                  })
                }
            }

        }
      });



          // };
          //



    // for(i in arr){
    //  $.post('php/sure.php',{indexid:arr[i]},function(res){
    //       response = JSON.parse(res);
    //         console.log(response)
    //         $.each(response,function(){
    //             console.log(response)

                // var  list = $(" <div class="shoppingcar-list" ></div>")


        //         <div class="shoppingcar-list" >
        //     <div class="shopname">店铺1</div>
        //     <div class="productlist">
        //         <div class="product-img"><a href="#"><img src="img/l-1.jpg"></a></div>
        //         <div class="item-content">
        //             <div class="product-name" >童装女装加绒卫衣纯棉T恤打底衫3</div>
        //             <div class="item-controller">
        //                 <div class="product-price">￥ 120</div>
        //                 <div class="item-count">X <span>2</span></div>
        //             </div>
        //         </div>
        //     </div>
        //      <div class="list-group">
        //         <div class="list-group-item">
        //             <div class="col-xs-4">配送方式</div>
        //             <div class="col-xs-8 text-right">快递免邮</div>
        //         </div>
        //         <div class="list-group-item">
        //             <div class="col-xs-4">运费险</div>
        //             <div class="col-xs-8"><input type="text" name="invoice" placeholder="请购买运费险"/></div>
        //         </div>
        //         <div class="list-group-item">
        //             <div class="col-xs-4">买家留言</div>
        //             <div class="col-xs-8"><input type="text" name="notes" placeholder="选填"/></div>
        //         </div>
        //         <div class="list-group-item">
        //             <div class="col-xs-12 text-right">共4件商品，合计：<span class="item-price">￥ 480.00</span></div>
        //         </div>
        //     </div>
        // </div>
             // html += '<div class="shoppingcar-list" ><div class="shopname">店铺1</div><div class="productlist">';
             // html += '<div class="product-img"><a href="#"><img src="'+this.src+'"></a></div>';
             // html += '<div class="item-content"><div class="product-name" >'+this.title+'</div><div class="color">颜色：'+this.Color+'&nbsp;尺码：'+this.Size+'</div>';
             // html += '<div class="item-controller"><div class="product-price">￥'+this.price+this.indexid+'</div><div class="item-count">X <span>'+this.num+'</span></div> </div></div> </div>';
             // html += '<div class="list-group"><div class="list-group-item"><div class="col-xs-4">配送方式</div><div class="col-xs-8 text-right">快递免邮</div></div>';
             // html += '<div class="list-group-item"><div class="col-xs-4">运费险</div><div class="col-xs-8"><input type="text" name="invoice" placeholder="请购买运费险"/></div></div>';
             // html += '<div class="list-group-item"><div class="col-xs-4">买家留言</div><div class="col-xs-8"><input type="text" name="notes" placeholder="选填"/></div></div>';
    //         })
    //          $('.content').append(html);

    //  })
    // }

// var vum=new Vue({
//     el: "#demo1",
//     data: {
//         message: "",
//         datas: "",

//     },
//     methods:{
//         showData:function () {
//             jQuery.ajax({
//                 type: 'Get',
//                 url: "good.txt",
//                 success: function (res) {
//                     vum.datas = res.data;
//                 }
//             })
//         }
//     }
// })

// //使用jquery
// jQuery(function () {
//     // jQuery("#btn_1").bind("click", function () {
//     //     alert(jQuery("#name").val());
//     // });
//     loadData();
// })
// //jquery加载数据
// function loadData() {
//     // jQuery.ajax({
//     //     type: 'Get',
//     //     url: "good.txt",
//     //     success: function (res) {
//     //         vum.message = res
//     //         console.log(vum.message)
//     //     }
//     // })

//     var idx = window.location.search;
//     var indexid = idx.split('=')[1];
//     var arr = indexid.split(',');
//     var array=[];
//     for(i=0;i<arr.length;i++){
//      $.post('php/sure.php',{indexid:arr[i]},function(res){
//          var response = JSON.parse(res);

//         // array.push(response)
//         // console.log(response);
//             // vum.message = response;
//             console.log(response);

//      })
//     }
//     // var response = JSON.parse(array);
//     // vum.message = response;
//     // console.log(response);
// }

