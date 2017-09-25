$(function() {
	'use strict';
	window.Input = function(selector) {
		var $ele,
			$errele,
			me = this,
			rules = {};
		// 初始化input的验证器 ?声明val的位置待斟酌
		this.load_validator = function() {
			var val = $ele.val();
			// console.log(val);
			this.validator = new Validator(val,rules);
		}
		// 取得input 的value
		// this.get_val = function() {
		// 	return $ele.val();			
		// }
		// 初始化input
		function init() {
			self();
			get_errele();
			parse_rules();
			me.load_validator();
			listen();
			// console.log(listen());
		}
		//监听input 失去焦点事件
		function listen() {
			$ele.on("blur",function() {
				var r = me.validator.isValid($ele.val());
				// console.log("valid:"+r);
				if (r) {
					$errele.hide();
				} else {
					$errele.show();
				}
			})
		}
		// 取得error id字符串
		function get_erridstr() {
			return "#" + $ele.attr("name") + "-input-err";
		}
		// 取得error 信息的节点
		function get_errele() {
			$errele = $(get_erridstr());
			return $errele;
		}
		//选择selector 传入的节点名称&兼容DOM对象与Jquery对象
		function self() {
			if (selector instanceof $) {
				$ele = selector;
			} else {
				$ele = $(selector);
			}
			// console.log($ele);
		}
		// 根据data-rule的内容解析验证规则
		function parse_rules() {
			var rule_str = $ele.data("rule");
			if (!rule_str) {
				return;
			}else{
				var rule_arr = rule_str.split("|");
				for (var i = 0; i < rule_arr.length; i++) {
					var item_arr = rule_arr[i].split(":");
					rules[item_arr[0]] = JSON.parse(item_arr[1]);
				}
				// console.log(rules)
			}
		}
		init();
	}
})