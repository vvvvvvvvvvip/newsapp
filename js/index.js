var tt = angular.module('tt',['ngTouch','ngAnimate','ngRoute']);
tt.controller('indexCtrl',['$scope','$location',function($scope,$location){
  $scope.meaulist = [
		{name:'推荐',url:'#/tuijian',state:true},
		{name:'视频',url:'#/shipin',state:true},
		{name:'军事',url:'#/junshi',state:true},
    {name:'社会',url:'#/shehui',state:true},
    {name:'娱乐',url:'#/yule',state:true},
    {name:'科技',url:'#/keji',state:false},
    {name:'汽车',url:'#/qiche',state:false},
    {name:'国际',url:'#/guoji',state:false},
    {name:'体育',url:'#/tiyu',state:false},
    {name:'财经',url:'#/caijing',state:false},
    {name:'时尚',url:'#/shishang',state:false},
    {name:'游戏',url:'#/youxi',state:false},
    {name:'历史',url:'#/lishi',state:false},
    {name:'探索',url:'#/tansuo',state:false},
    {name:'美食',url:'#/meishi',state:false},
    {name:'育儿',url:'#/yuer',state:false},
    {name:'养生',url:'#/yangsheng',state:false},
    {name:'美文',url:'#/meiwen',state:false},
	];
  // $scope.path = $location.path();
  $scope.whenClick = function(url){
    $location.path(url);
    $('#title').addClass('dis');
    $('#content').addClass('dis');
  }
  $scope.againClick = function(url){
    $location.path('/');
    $('#title').removeClass('dis');
    $('#content').removeClass('dis');
  }

}])

tt.controller('tuijianCtrl',['$scope','$news',function($scope,$news){
  var list = $news.getNewsByType('tuijian');
  $scope.tupianList = list.filter(function(v,i){
    return v.xinwentype === 'tupian';
  })
  $scope.wenziList = list.filter(function(v,i){
    return v.xinwentype === 'wenzi';
  })
  $scope.shipinList = list.filter(function(v,i){
    return v.xinwentype === 'shipin';
  })
}])
tt.controller('shipinCtrl',['$scope','$news',function($scope,$news){
  var list = $news.getNewsByType('shipin');
  $scope.tupianList = list.filter(function(v,i){
    return v.xinwentype === 'tupian';
  })
  $scope.wenziList = list.filter(function(v,i){
    return v.xinwentype === 'wenzi';
  })
  $scope.shipinList = list.filter(function(v,i){
    return v.xinwentype === 'shipin';
  })
}])
tt.controller('junshiCtrl',['$scope','$news',function($scope,$news){
  var list = $news.getNewsByType('junshi');
  $scope.tupianList = list.filter(function(v,i){
    return v.xinwentype === 'tupian';
  })
  $scope.wenziList = list.filter(function(v,i){
    return v.xinwentype === 'wenzi';
  })
  $scope.shipinList = list.filter(function(v,i){
    return v.xinwentype === 'shipin';
  })
}])
tt.controller('shehuiCtrl',['$scope','$news',function($scope,$news){
  var list = $news.getNewsByType('shehui');
  $scope.tupianList = list.filter(function(v,i){
    return v.xinwentype === 'tupian';
  })
  $scope.wenziList = list.filter(function(v,i){
    return v.xinwentype === 'wenzi';
  })
  $scope.shipinList = list.filter(function(v,i){
    return v.xinwentype === 'shipin';
  })
}])
tt.controller('yuleCtrl',['$scope','$news',function($scope,$news){
  var list = $news.getNewsByType('yule');
  $scope.tupianList = list.filter(function(v,i){
    return v.xinwentype === 'tupian';
  })
  $scope.wenziList = list.filter(function(v,i){
    return v.xinwentype === 'wenzi';
  })
  $scope.shipinList = list.filter(function(v,i){
    return v.xinwentype === 'shipin';
  })
}])
tt.controller('searchCtrl',['$scope',function($scope){
   $scope.searchList = [
    {name:'宋仲基'},
    {name:'江疏影'},
    {name:'王思聪 孟佳'},
    {name:'夫妻吵架阳台扔下两万钞票'},
    {name:'霍建华 胡歌'},
    {name:'火星情报局'},
    {name:'赵丽颖'},
    {name:'baby'},
    {name:'男生当面说一个女生胖'},
   ]
}])
tt.controller('addCtrl',['$scope',function($scope){

}])
tt.controller('contentCtrl',['$scope','$news',function($scope,$news){
  var list = $news.getNewsByType('tuijian');
  $scope.tupianList = list.filter(function(v,i){
    return v.xinwentype === 'tupian';
  })
  $scope.wenziList = list.filter(function(v,i){
    return v.xinwentype === 'wenzi';
  })
  $scope.shipinList = list.filter(function(v,i){
    return v.xinwentype === 'shipin';
  })
}])


tt.directive('ttTitle',function(){
	return {
		replace: true,
		restrict: 'E',
		templateUrl: 'views/tt-title.html',
		link:function($scope,el){
			$('.top-meau ul li').first().find('a').addClass('red');
			$('.top-meau ul').on('click','li',function(){
				$('.top-meau ul li').find('a').removeClass('red');
				$(this).find('a').toggleClass('red');
			})

      $('.title_l').on('click',function(){
        $('.alert').css('display','block');
      })
      $('.close').on('click',function(){
        $('.alert').css('display','none');
      })
		}
	}
})

tt.config(['$routeProvider',function($routeProvider){
  $routeProvider.when('/',{
    controller:'tuijianCtrl',
    templateUrl:'views/tuijian.html'
  })
  .when('/tuijian',{
    controller:'tuijianCtrl',
    templateUrl:'views/tuijian.html'
  })
  .when('/shipin',{
    controller:'shipinCtrl',
    templateUrl:'views/shipin.html'
  })
  .when('/junshi',{
    controller:'junshiCtrl',
    templateUrl:'views/junshi.html'
  })
  .when('/shehui',{
    controller:'shehuiCtrl',
    templateUrl:'views/shehui.html'
  })
  .when('/yule',{
    controller:'yuleCtrl',
    templateUrl:'views/yule.html'
  })
  .when('/search',{
    controller:'searchCtrl',
    templateUrl:'views/search.html'
  })
  .when('/add',{
    controller:'addCtrl',
    templateUrl:'views/add.html'
  })
  .when('/content',{
    controller:'contentCtrl',
    templateUrl:'views/content.html'
  })
  .otherwise({
    redirectTo:'/'
  });
}])

tt.factory('$news',[function(){
    var news = [
        {
          id:1001,
          type:'tuijian',
          title:'习近平提出培育两国共同“朋友圈”',
          src:'专题',
          cmt:'5万评论',
          time:'1分钟前',
          xinwentype:'wenzi',
        },
        {
          id:1002,
          type:'tuijian',
          image1:'img/tp1.jpg',
          image2:'img/tp2.jpg',
          image3:'img/tp3.jpg',
          title:'永远不要跟二货一起吃饭',
          src:'时代魅力女人',
          cmt:'评论 23',
          time:'6分钟前',
          xinwentype:'tupian'
        },
        {
          id:1003,
          type:'tuijian',
          image:'img/sp1.jpg',
          title:'富二代开车撞到军官之后，吊炸天啦！',
          src:'人生视角',
          cmt:'评论 95',
          time:'10分钟前',
          xinwentype:'shipin'
        },
        {
          id:1004,
          type:'tuijian',
          image1:'img/tp4.jpg',
          image2:'img/tp5.jpg',
          image3:'img/tp6.jpg',
          title:'迪士尼CEO回应王健林 "不该来中国"',
          src:'同花顺',
          cmt:'评论 24',
          time:'12分钟前',
          xinwentype:'tupian'
        },
        {
          id:1005,
          type:'shipin',
          image:'img/sp2.jpg',
          title:'【英雄联盟】科普-英雄联盟是啥',
          src:'虎牙视频',
          cmt:'评论 2',
          time:'06-09',
          xinwentype:'shipin'
        },
        {
          id:1006,
          type:'shipin',
          image:'img/sp3.jpg',
          title:'《疯狂动物城》端午赛龙舟，结局有点猜不到',
          src:'创意音乐',
          cmt:'评论 12',
          time:'06-09',
          xinwentype:'shipin'
        },
        {
          id:1007,
          type:'shipin',
          image:'img/sp4.jpg',
          title:'战斗种族个个都是汉子，一言不合就干架',
          src:'触控前沿视频',
          cmt:'评论 6',
          time:'06-09',
          xinwentype:'shipin'
        },
        {
          id:1008,
          type:'shipin',
          image:'img/sp5.jpg',
          title:'翼服穿身带你纵横蓝天白云',
          src:'虎牙视频',
          cmt:'评论 0',
          time:'06-09',
          xinwentype:'shipin'
        },
        {
          id:1009,
          type:'junshi',
          bgimg:'img/bgimg1.jpg',
          title:'某部列装大批新装备 官兵敲锣打鼓欢迎',
          src:'解放军报融媒体',
          cmt:'评论 489',
          time:'2小时前',
          xinwentype:'tupian'
        },
        {
          id:1010,
          type:'shehui',
          title:'黑龙江大部将迎来中到大雨局部暴雨',
          src:'新华网',
          cmt:'评论 148',
          time:'47分钟前',
          xinwentype:'wenzi'
        },
        {
          id:1011,
          type:'shehui',
          image1:'img/tp10.jpg',
          image2:'img/tp11.jpg',
          image3:'img/tp12.jpg',
          title:'太原第一座地铁站终于建成啦！就在这！',
          src:'太原大小事',
          cmt:'评论 26',
          time:'1小时前',
          xinwentype:'tupian'
        },
        {
          id:1012,
          type:'yule',
          image1:'img/tp7.jpg',
          image2:'img/tp8.jpg',
          image3:'img/tp9.jpg',
          title:'《魔兽》电影国内两日狂揽6亿 超越各国票房总和',
          src:'中国青年网',
          cmt:'评论 66',
          time:'30分钟前',
          xinwentype:'tupian'
        },
    ];
    return {
      getNewsByType:function(type){
          var r = news.filter(function(v,i){
            return  v.type === type;
          })
          return r;
      }
    }
}]);

tt.controller('contentCtrl',['$scope','$routeParams','$news',function($scope,$routeParams,$news){
  // var id = $routeParams.id;
  // var chatList = $news.getallchat();
  // $scope.duifang = chatList[id].image;
  // $scope.ll = chatList[id].liaotianjilu;
}])


