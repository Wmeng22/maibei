
var common = common || {};

common.baseUrl = 'http://10.3.134.20:8080/beibeiapp/';

var commonApp = angular.module('commonApp', []);

commonApp.directive('dkRepeat', function () {
    return function (_scope) {
    // console.log(arguments);
    // console.log(_scope.columnName);
    // console.log(_scope.dictionary);
    }
})

commonApp.directive('tab', function () {
    return {
        restrict: 'E',
        templateUrl: 'html/footer.html',
        scope: {},
        controller: function ($scope, $element, $attrs, $http) {

        },
        link: function (_scope, _element, _attrs) {
        }
    }
})

commonApp.directive('list',function(){
    return {
        restrict:'E',
        templateUrl:'html/list.html',
        scope:{},
        controller: function ($scope, $element, $attrs, $http) {

        },
        link: function (_scope, _element, _attrs) {
        }
    }
})

commonApp.filter('range',function(){
    return function(array,range){
        for(var i = 1; i<=range; i++){
            array.push(i);
        }
        return array;
    }
})

commonApp.config(["$httpProvider", function ($httpProvider) {
    $httpProvider.defaults.transformRequest=function(obj){
        var str=[];
        for(var p in obj){
            str.push(encodeURIComponent(p)+"="+encodeURIComponent(obj[p]));
        }
        return str.join("&");
    };
    $httpProvider.defaults.headers.post={
        'Content-Type':'application/x-www-form-urlencoded'
    }
    $httpProvider.interceptors.push(function ($rootScope, $q) {
        return {
            'request': function (config) {
                //请求执行
                // if (!$('.mask')[0]) {
                //     var _html = '<div class="mask item-hidden"><i class="fa fa-spinner fa-spin"></i></div>';
                //     $(_html).appendTo($('body'));
                // }
                // $('.mask').removeClass('item-hidden');
                if (config.url.indexOf('.html') < 0 && config.url.indexOf('.txt') < 0) {
                    config.url = common.baseUrl + config.url;
                }
                config.params = $.extend(config.params,{ '_': Math.random() });
                return config || $q.when(config);
            },
            'requestError': function (rejection) {
                //请求出错的时候执行
                return rejection;
            },
            'response': function (response) {
                //响应成功的回调函数
                // $('.mask').addClass('item-hidden');
                return response || $q.when(response);
            },
            'responseError': function (response) {
                //响应失败的回调函数
                // $.alert(response.status + ' - ' + response.statusText + '<br/>请求路径：<br/>' + response.config.url, '请求错误');
                // $('.mask').addClass('item-hidden');
                return $q.reject(response);
            }
        };
    });
}]);