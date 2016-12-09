var nav = document.getElementsByClassName('in'),
	bn = document.getElementsByClassName("bn");

bn[0].onclick=function(e) {
	nav[0].style.height===""?nav[0].style.height="auto":nav[0].style.height="";
};
bn[1].onclick=function(e) {
	nav[1].style.height===""?nav[1].style.height="8em":nav[1].style.height="";
};
