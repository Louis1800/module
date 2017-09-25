// main.js

//轮播头图
$(function() {
	// dom元素
	var $btn1 = $(".m-slider-cbtn").children().eq(0),//上一页
		$btn2 = $(".m-slider-cbtn").children().eq(1),//下一页
		$content = $(".m-slider ul"),//内容
		$spotlist = $(".m-slider-tip"),//点状示意
		$spots;
	var step,//内容移动的步长
		page = 0,//初始页码
		totalpage;//总页数
	// 初始化页面
	function init() {
		totalpage = $content.children().length;
		console.log(totalpage);
		$content.css("width",(totalpage*100 + "%"));
		$content.children().css("width",(100 / totalpage + "%"));
		step = $content.parent().width();
		// 根据页数算出换页圆点数
		for (var i = 0; i < totalpage; i++) {
				$spotlist.append($('<a></a>'));
			}
		$spots = $spotlist.find("a");
		$spots.eq(0).addClass("w-current");
		$btn1.bind("click",btnleft);
		$btn2.bind("click",btnright);
	}

	// 初始化页面并添加事件
	init();

	// 为按钮添加事件

	function btnright() {
		if (!$content.is(':animated')) {
			var n = page + 1;
			if(n>=totalpage){
				page = 0;
			}else{
				page = n;
			}
			move(500);
		} 
	}
	function btnleft() {
		if (!$content.is(':animated')) {
			var n = page - 1;
			if(n<0){
				page = totalpage-1;
			}else{
				page = n;
			}
			move(500);
		} 
	}
	function slider() {
		page++;
		if(page>=totalpage){
			page=0;
		}
		move(1000);
		
	}
	function move(time) {
		time = time||500;
		$content.animate({"margin-left":(-page*step+"px")},time);
		$spotlist.children().removeClass("w-current");
		$spots.eq(page).addClass("w-current");
	}
	setInterval(slider,4000);
})


