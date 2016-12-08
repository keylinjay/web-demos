function $ (n) {
	var regid=/^#.+/,
		regcls=/^\..+/;
	if(regid.test(n)){
		return document.getElementById(n.substr(1));
	}else if(regcls.test(n)){
		return document.getElementsByClassName(n.substr(1));
	}else{
		return document.getElementsByTagName(n);
	}
}
// 添加元素
function addElement (dparent,achild) {
	var dold[],tem,i;
	console.log(achild[0]);
	for(i=0;i<achild.length;i++){
		tem=document.createElement('p');
		dold.push(tem);
		dold[i].id='insert-'+achild[i];
		dold[i].innerText=achild[i];
		dparent.appendChild(dold[i]);
	}
}
addElement($('#insert'),[2,4,1,5,3]);