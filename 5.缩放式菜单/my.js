
var ex1=document.getElementById('ex1'),
	ex2=document.getElementById('ex2'),
	h1=ex1.parentElement.children[1],
	h2=ex2.parentElement.children[1];
function show (e) {
	var sh=function(){
		//(ex1.parentElement.children[2].style.height==="0em")?ex1.parentElement.children[2].style.height="8em":ex1.parentElement.children[2].style.height="0em";
		(this.parentElement.children[2].style.height==="0em")?this.parentElement.children[2].style.height="8em":this.parentElement.children[2].style.height="0em";
	}
	return sh;
}
var show1=show();
alert(show());
h1.addEventListener("click",show ());
h2.addEventListener("click",show ());
