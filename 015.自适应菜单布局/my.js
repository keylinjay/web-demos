var menu=document.getElementById('menu'),
	nav=document.getElementById('nav'),
	toggle=document.getElementById('toggle');

toggle.onclick = function(){menu.style.display=(menu.style.display==="block")?"none":"block";};