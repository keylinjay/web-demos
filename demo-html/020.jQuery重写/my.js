// jQuery框架的实现
;(function (window,undefined) {
	var arr = [],
		// 截取部分数组
		slice = arr.slice,
		// 拼接数组
		concat = arr.concat,
		push = arr.push,
		indexOf =arr.indexOf,

		class2type = {},
		toString = class2type.toString,
		hasOwn = class2type.hasOwnProperty;
		support = {};

	var jQuery = function(selector,){
		return new jQuery.fn.init();
	};
	jQuery.fn = jQuery.prototype;
	jQuery.fn = {
		init : function(){
			return this;
		}，

	};
	jQuery.extend
	jQuery.fn.init.prototype = jQuery.prototype;

	// 闭包操作，将jQuery赋值到外部window的属性中，这样可以在外部获取到jQuery;
	window.$ = window.jQuery = jQuery;
	
	
}(window));