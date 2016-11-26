"use strict"
var  a	= document.getElementsByClassName('a'),
	a1	= document.getElementsByClassName("a1"),
	r	= document.getElementsByClassName("r"),
	r1	= document.getElementsByClassName("r1"),
	p 	= document.getElementById("introduction");
function ab(){
	a[0].style.cssText	=	"position: absolute;top: 0px;left: 0px;";
	p.innerText 	=	"absolute不占据文档流，因此不会改变其他元素的位置";
}
function re(){
	a[0].style.cssText 	=	"position: relative;top: 0px;left: 0px;";
	p.innerText 	=	"relative占据文档流，因此会改变其他元素的位置";
}
function fix(){
	a[0].style.cssText 	=	"position: fixed;top: 0px;left: 0px;";
	p.innerText 	=	"fixed会在视窗固定位置显示";
}
function sta(){
	a[0].style.cssText 	=	"position: static;top: 0px;left: 0px;";
	p.innerText 	=	"static为默认值，不会被定位,如果的他的所有上级元素的position值为static（默认值），则相对于body定位";
}