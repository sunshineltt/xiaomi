
$(function(){
 //购物车下拉
 $(".gouwu").hover(function(){
	$(this).next(".gouwuxiala").slideDown();
},function(){
	$(this).next(".gouwuxiala").slideUp();
})
//nav下拉菜单的实现
$(".navyiji").hover(function(){
	$('.navyiji ul').stop();
	$(this).children("ul").slideDown();
},function(){
	$('.navyiji ul').stop();
	$(this).children("ul").hide();
})

//nav right 搜索框的实现

$(".searchbox").hover(function(){
	if($(".nav_right_hidden").css("display")=="none"){
		$(".searchbox").css({borderRight:"1px solid #333"})
		$(".nav_rightinput").css({border:"1px solid #333"})
	}
 },function(){
	if($(".nav_right_hidden").css("display")=="none"){
		$(".searchbox").css({borderRight:"1px solid #ccc"})
		$(".nav_rightinput").css({border:"1px solid #ccc"})
	}
	
})
$(".searchbox").focus(function(){
	$(".nav_right_hidden").show();
 	$(".searchbox").css({borderRight:"1px solid red"})
	$(".nav_rightinput").css({border:"1px solid red"})
 	$(".shouhuan").hide();
	$(".xiaomishouji4").hide();
})
$(".searchbox").blur(function(){
	$(".nav_right_hidden").hide();
	$(".nav_rightinput").css({border:"1px solid #ccc"})
	$(".searchbox").css({borderRight:"1px solid #ccc"})
  	$(".shouhuan").show();
	$(".xiaomishouji4").show();
})
$(".nav_right_hidden li").hover(function(){
 	$(this).css({background:"#FAFAFA"})
 },function(){
	$(this).css({background:"none"})
}) 

 //sidebar的实现  banner左侧
$(".mainmenu").hover(function(){
	$(this).children(".side-hidden").show();
 },function(){
	$(this).children(".side-hidden").hide();
 })
//banner轮播的实现
var imgs=$(".mainimgs img");
var circle=$(".circle");
var index=0;
function move(type){
	if(type=="r"){
		index++;
		if(index>imgs.length-1){
			index=0;
		}
	}if(type=="l"){
		index--;
		if(index<0){
			index=imgs.length-1;
		}
	}
	imgs.hide();
	imgs.eq(index).fadeIn();
	circle.css("background","#666");
	circle.eq(index).css("background","#fff");
}
$(".main").hover(function(){
	clearInterval(t);
	},function(){
		t=setInterval(function(){
			move("r");
		},3000)
})
$(".zuo").click(function(){
  		move("l");
 })

$(".you").click(function(){
 	move("r");
})

var t=setInterval(function(){
	move("r");
},3000)
$(".circle").click(function(){
 	var index1=$(this).index();
 	imgs.hide();
	imgs.eq(index1).fadeIn();
	circle.css({background:"#666"});
	circle.eq(index1).css({background:"#fff"});
 	index=$(this).index();
}) 

//小米明星单品轮播的实现
function movedp(){
	var left=$(".danpin_mainbox").position().left;
 	if(left==-1240){//盒子向右
		$(".danpin_mainbox").animate({left:0},600);
		$(".a2").css({color:"#b0b0b0"})
		$(".a1").css({color:"#e0e0e0"})
		
	}else{	//盒子向左
		$(".danpin_mainbox").animate({left:-1240},600);
		$(".a1").css({color:"#b0b0b0"})
		$(".a2").css({color:"#e0e0e0"})
 	}
}
var tdp=setInterval(movedp,2000);
$(".danpin_mainbox").hover(function(){
	clearInterval(tdp);
},function(){
	tdp=setInterval(movedp,2000);
})
$(".a1").hover(function(){
	clearInterval(tdp);
},function(){
	tdp=setInterval(movedp,2000);
})

$(".a2").hover(function(){
	clearInterval(tdp);
},function(){
	tdp=setInterval(movedp,2000);
})

$(".a1").click(function(){
	if($(".danpin_mainbox").position().left==-1240){
		movedp();
	} 
 })
$(".a2").click(function(){
	if($(".danpin_mainbox").position().left==0){
		movedp();
	}
})
//每个楼层的小块的显示
 //var left=$(".danpin_mainbox").position().left;
var top=$(".hidden").position().top;
$(".danpin_main1").hover(function(){
   	 $(this).children(".hidden").animate({top:225},300); 
  	//$(this).children(".hidden").show();
},function(){
	 $(this).children(".hidden").animate({top:330},300); 
	//$(this).children(".hidden").hide();
})

 
//内容     的各个轮播开始
 
var numts=0; 
var numyy=0; 
var numyx=0; 
var numzt=0; 

 $(".neirong1").hover(function(){
 	$(this).children(".nr-zuo").show();
 	$(this).children(".nr-you").show();
  },function(){
 	$(this).children(".nr-zuo").hide();
 	$(this).children(".nr-you").hide();
  })
// 左右按钮划过变颜色
$(".nr-zuo").hover(function(){
	$(this).css({background:"#888"})
},function(){
	$(this).css({background:"#ccc"})
})
$(".nr-you").hover(function(){
	$(this).css({background:"#888"})
},function(){
	$(this).css({background:"#ccc"})
})

//图书  左右按钮的点击效果 
 $(".tsjt-you").click(function(){
	if(numts<=2){
		$('.tsbtn').css({background:'#ccc',border:'none',borderRadius:'50%'})
		numts++;
 		$('.ts').css('left',-296*numts);
 		$('.tsbtn').eq(numts).css({background:'#fff',border:'2px solid #ff6700',borderRadius:'50%'})
 	}else{
		return;
	}
})

$(".tsjt-zuo").click(function(){
	if(numts>=1){
		$('.tsbtn').css({background:'#ccc',border:'none',borderRadius:'50%'})
		numts--;
 		$('.ts').css('left',-296*numts);
 		$('.tsbtn').eq(numts).css({background:'#fff',border:'2px solid #ff6700',borderRadius:'50%'})
 		// $('.ncirclebox li').eq(numts).
 	}else{
		return;
	}
})

// 图书  小按钮的点击效果
  $('.tsbtn').click(function(){
 	var index=$(this).index();
 	$('.tsbtn').css({border:'none',background:'#ccc'}); 
  	numts=index;
  	$('.ts').css('left',-296*index);
 	$('.tsbtn').eq(index).css({background:'#fff',border:'2px solid #ff6700',borderRadius:'50%'})
 })


//主题  左右按钮的点击效果 
 $(".ztjt-you").click(function(){
	if(numzt<=2){
		$('.ztbtn').css({background:'#ccc',border:'none',borderRadius:'50%'})
		numzt++;
 		$('.zt').css('left',-296*numzt);
 		$('.ztbtn').eq(numzt).css({background:'#fff',border:'2px solid #ff6700',borderRadius:'50%'})
 	}else{
		return;
	}
})

$(".ztjt-zuo").click(function(){
	if(numzt>=1){
		$('.ztbtn').css({background:'#ccc',border:'none',borderRadius:'50%'})
		numzt--;
 		$('.zt').css('left',-296*numzt);
 		$('.ztbtn').eq(numzt).css({background:'#fff',border:'2px solid #ff6700',borderRadius:'50%'})
 		// $('.ncirclebox li').eq(numzt).
 	}else{
		return;
	}
})

// 主题  小按钮的点击效果
  $('.ztbtn').click(function(){
 	var index=$(this).index();
 	$('.ztbtn').css({border:'none',background:'#ccc'}); 
  	numzt=index;
  	$('.zt').css('left',-296*index);
 	$('.ztbtn').eq(index).css({background:'#fff',border:'2px solid #ff6700',borderRadius:'50%'})
 })

//游戏  左右按钮的点击效果 
 $(".yxjt-you").click(function(){
	if(numyx<=2){
		$('.yxbtn').css({background:'#ccc',border:'none',borderRadius:'50%'})
		numyx++;
 		$('.yx').css('left',-296*numyx);
 		$('.yxbtn').eq(numyx).css({background:'#fff',border:'2px solid #ff6700',borderRadius:'50%'})
 	}else{
		return;
	}
})

$(".yxjt-zuo").click(function(){
	if(numyx>=1){
		$('.yxbtn').css({background:'#ccc',border:'none',borderRadius:'50%'})
		numyx--;
 		$('.yx').css('left',-296*numyx);
 		$('.yxbtn').eq(numyx).css({background:'#fff',border:'2px solid #ff6700',borderRadius:'50%'})
 		// $('.ncirclebox li').eq(numyx).
 	}else{
		return;
	}
})

// 游戏  小按钮的点击效果
  $('.yxbtn').click(function(){
 	var index=$(this).index();
 	$('.yxbtn').css({border:'none',background:'#ccc'}); 
  	numyx=index;
  	$('.yx').css('left',-296*index);
 	$('.yxbtn').eq(index).css({background:'#fff',border:'2px solid #ff6700',borderRadius:'50%'})
 })

//应用 左右按钮的点击效果 
 $(".yyjt-you").click(function(){
	if(numyy<=2){
		$('.yybtn').css({background:'#ccc',border:'none',borderRadius:'50%'})
		numyy++;
 		$('.yy').css('left',-296*numyy);
 		$('.yybtn').eq(numyy).css({background:'#fff',border:'2px solid #ff6700',borderRadius:'50%'})
 	}else{
		return;
	}
})

$(".yyjt-zuo").click(function(){
	if(numyy>=1){
		$('.yybtn').css({background:'#ccc',border:'none',borderRadius:'50%'})
		numyy--;
 		$('.yy').css('left',-296*numyy);
 		$('.yybtn').eq(numyy).css({background:'#fff',border:'2px solid #ff6700',borderRadius:'50%',marginTop:'-2px'})
 		// $('.yybtn').eq(numyy).classList('current');
 	}else{
		return;
	}
})

// 应用  小按钮的点击效果
  $('.yybtn').click(function(){
 	var index=$(this).index();
 	$('.yybtn').css({border:'none',background:'#ccc'}); 
  	numyy=index;
  	$('.yy').css('left',-296*index);
 	$('.yybtn').eq(index).css({background:'#fff',border:'2px solid #ff6700',borderRadius:'50%'})
 })
 /*  内容结束*/
  // 视频开始
  $(".shipin1").hover(function(){
  	$(this).children(".scircle").css({background:"#ff6700",border:"2px solid #ff6700"})
  },function(){
  	$(this).children(".scircle").css({background:"#565656",border:"2px solid #fff"})

  })





})