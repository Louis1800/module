$(function() {
	'use strict';
	var $inputs = $('[data-rule]'),
		$signup = $("#signup"),
		inputs = [];
	$inputs.each(function (index,node) {
		var tmp = new Input(node);
		inputs.push(tmp);
	})
	// console.log(inputs);
	$signup.on("submit",function (e) {
		e.preventDefault();
		$inputs.trigger("blur");
		// console.log(inputs);
		for (var i = 0; i < inputs.length; i++) {
			var r = inputs[i].validator.isValid();
			// console.log(inputs[i]);
			// console.log("第"+(i+1)+"项检测的结果是："+r);
			if (!r) {
				alert("invalid");
				return;
			}
		}
		alert("valid");
		function signup() {
			$.post('/api/signup',{
				
			})
		}
	})


})