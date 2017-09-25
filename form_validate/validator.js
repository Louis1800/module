$(function() {
	'use strict';
	window.Validator = function(val,rules) {
		// 通用验证规则 迭代独立规则
		this.isValid = function(new_val) {
			if (new_val !== undefined){
				val = new_val;
			}
			console.log(val);
			if ($.isEmptyObject(rules)) {
				return true;
			} else {
				var r = this.required();
				if (!r) {
					return false;
				} else {
					for (var key in rules) {
						var t = this["validate_"+key]();
						if (!t) {return false}
					}	
					return true;
				}
			}

		}
		// 验证值是否为空
		this.required = function() {
			console.log(val);
			var real = $.trim(val);
			// var real = val;
			
			if (!real&&real!==0) {
				return false;
			}
			return true;
		}
		// 验证方法
		function pre_length() {
			val = val.toString();
		}
		function pre_max_min() {
			val = parseFloat(val);
		}
		this.validate_maxlength = function() {
			pre_length(val);
			return val.length <= rules.maxlength;
		}
		this.validate_minlength = function() {
			pre_length(val);
			return val.length >= rules.minlength;
		}
		this.validate_max = function() {
			pre_max_min(val);
			return val <= rules.max;
		}
		this.validate_min = function() {
			pre_max_min(val);
			return val >= rules.min;
		}
		this.validate_numeric = function() {
			return $.isNumeric(val);
		}
		this.validate_pattern = function() {
			var reg = new RegExp(rules.pattern);
			// console.log(reg);
			return reg.test(val);
		}

	}
})