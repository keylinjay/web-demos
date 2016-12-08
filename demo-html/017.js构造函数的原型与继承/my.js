l(per.prototype);
function l (n) {
	return console.log(n);
}

function per () {
	// console.log('per');
	return new per.prototype.init();
}
per.prototype={
	init:function(){
		l('by per.prototype.init')
	}
}
l(per.prototype);
l(per.constructor);
l(per.prototype.constructor);
l(per.prototype.init.constructor);
l(per.prototype.init.prototype.constructor);
l(per());
l(per().prototype);
l(per().constructor);
l(per() instanceof per);
per.prototype.init.prototype=per.prototype;
l(per() instanceof per);