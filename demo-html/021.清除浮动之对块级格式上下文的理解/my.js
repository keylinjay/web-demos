;(function () {

	var $ = function (id) {return document.getElementById(id);};

	function eventProx (node,tag,eventType,fun) {
		 node.addEventListener(eventType, function(){
		 	var event = arguments[0] || window.event,
		 		target = event.target;
		 	if(target.tagName.toLowerCase() === tag){
		 		fun.apply(target,event);
		 	}
		 },false);
	}

	function resetRender () {
		 var contents = $("btns").getElementsByTagName("p");
		 var l = contents.length;
		 for(var i = 0;i < l;i++){
		 	contents[i].style.display = "none";
		 }
	}

	function changeClass (node) {
		var name = node.innerText;
		$("wraper").className = "wrap "+name;
	}

	function render (node) {
		 var id = node.innerText;
		 $(id).style.display = "block";
	}

	function hundle () {
		 resetRender();
		 changeClass(this);
		 render(this); 
	}

	function init () {
		resetRender();
		eventProx($("btns"),"button","click",hundle);
	}
	init();
})();	