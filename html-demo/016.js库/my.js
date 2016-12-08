function $ (name) {
	var regid = /^#.+/,
		regcls= /^\..+/,
		regtag= /[a-zA-Z]+/;
	
	if (regid.test(name)) {

		return document.getElementById(name.substring(1));
	}else if(regcls.test(name)){
		return document.getElementsByClassName(name.substring(1));
	}else{
		return document.getElementsByTagName(name);
	}
}
$.hasClass = function(name,cls){
	var reg = new RegExp("[\\s]*"+cls+"[\\s]*");

	return $(name).className.match(reg);
};
$.addClass = function (name,cls) {
	
	if(!$.hasClass(name,cls)){
		return $(name).className += " "+cls;
	}
}
$.removeClass = function(name,cls){
	var reg = new RegExp("[\\s]*"+cls+"[\\s]*");
	if($.hasClass(name,cls)){
		return $(name).className=$(name).className.replace(reg,'');
	}
}

$('#addcls').onclick= function(){ $.addClass('#t2','dn');};

$('#rmcls').onclick = function(){$.removeClass('#t2','dn');};

console.log($.hasClass('#t1','t'));
console.log($('#t1'));
console.log($('#p1'));
console.log($('div'));
console.log($('.p'));

