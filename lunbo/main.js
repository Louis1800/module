$(function() {
	// dom元素
	var $btn1 = $(".change_btn").children().eq(0),//上一页
		$btn2 = $(".change_btn").children().eq(1),//下一页
		$content = $(".v_content_list ul"),//内容
		$spotlist = $(".hightlight-tip"),//点状示意
		$spots;
	var step,//内容移动的步长
		marleft = 0,//内容的左外边距数值
		page = 0,//初始页码
		totalpage,//总页数
		min;//margin最小数值，margin最大数值为0

	// 初始化页面
	function init() {
		totalpage = Math.ceil($content.children().length / 4);
		$content.css("width",(totalpage*100 + "%"));
		$content.children().css("width",(100 / (4*totalpage) + "%"));
		step = $content.parent().width();
		min = Math.abs(step)-$content.width();
		// 根据页数算出换页圆点数
		for (var i = 0; i < totalpage; i++) {
				$spotlist.append($('<span></span>'));
			}
		$spots = $spotlist.find("span");
		$spots.eq(0).addClass("current");
		$btn1.bind("click",btnleft);
		$btn2.bind("click",btnright);
		btntoggle();
	}

	// 初始化页面并添加事件
	init();

	// 页数抵达两端后是否显示翻页按钮
	function btntoggle() {
		if (marleft==0) {
			$btn1.fadeTo(200,.1);
		} else if (marleft==min) {
			$btn2.fadeTo(200,.1);
		} else {
			$btn1.fadeTo(200,1);
			$btn2.fadeTo(200,1);
		}
	}

	// 为按钮添加事件

	function btnright() {
			if (!$content.is(':animated')) {
				var m = marleft - step;
				var n = page + 1;
				if(m<=0&&m>=min){
					marleft = m;
					page = n;
					$content.animate({"margin-left":(marleft+"px")},500);
					$spotlist.children().removeClass("current");
					$spots.eq(page).addClass("current");
					btntoggle();
				}
			} 
	}
	function btnleft() {
			if (!$content.is(':animated')) {
				var m = marleft + step;
				var n = page - 1;
				if(m<=0&&m>=min){
					marleft = m;
					page = n;
					$content.animate({"margin-left":(marleft+"px")},500);
					$spotlist.children().removeClass("current");
					$spots.eq(page).addClass("current");
					btntoggle();
				}
			} 
	}
	
})


