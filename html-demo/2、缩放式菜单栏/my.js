var h1=document.getElementById('ex1').parentElement.children[1],
	h2=document.getElementById("ex2").parentElement.children[1];

function show() {
	var sh=function(){
		var h=this.parentElement.children[2];
		if (h.style.height==="0em") {
			h.style.height="8em";
		}else{
			h.style.height="0em";
		}
	}
	return sh;
}


h1.addEventListener("click",show());
h2.onclick=show();
