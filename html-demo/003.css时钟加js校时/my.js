var k	=	document.getElementById('keyframe'),
	d	=	new Date(),
	txt = 	"";


txt 	=	"@keyframes circles{from{transform:rotate("+(d.getSeconds()*6)+"deg);}to{transform:rotate("+(d.getSeconds()*6+360)+"deg);}}@keyframes circlem{from{transform:rotate("+(d.getMinutes()*6)+"deg);}to{transform:rotate("+(d.getMinutes()*6)+"deg);}}@keyframes circleh{from{transform:rotate("+(d.getHours()*30)+"deg);}to{transform:rotate("+(d.getHours()*30+360)+"deg);}}";
k.innerText		=	txt;
// alert(txt);
