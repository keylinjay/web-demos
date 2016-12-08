var a = document.getElementsByClassName("absolute");
function tored(){
	try{
		a.innerHTML="red";
	}
	catch(err){
		var txt="";
		txt=err.message;
		alert(txt);
	}
	}