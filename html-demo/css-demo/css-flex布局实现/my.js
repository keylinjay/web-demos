// *******功能函数部分*******

// 获得id元素
function gid(id){
	
	return document.getElementById(id);
}
// 获得class元素
function gcls(cls){
	return document.getElementsByClassName(cls);
}
// 获得tag元素
function gtag (tag) {
	return document.getElementsByTagName(tag);
}

// 判断是含有class
function hasClass(obj,cls){
	return obj.className.match(new RegExp('(\\s|^)'+cls+'(\\s|$)'));
}
// 添加class
function addClass(obj,cls){
	if(!hasClass(obj,cls)){
		obj.className+=" "+cls;
	}
}

// 删除class
function removeClass(obj,cls){
	if(hasClass(obj,cls)){
		var reg = new RegExp('(\\s|^)'+cls+'(\\s|$)');
		obj.className = obj.className.replace(reg,"");
	}
}


// **************功能函数部分结束***********