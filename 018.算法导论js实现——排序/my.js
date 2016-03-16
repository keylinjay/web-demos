function $ (name) {
	var regid = /^#.+/,
		regcls= /^\..+/,
		regtag= /[a-zA-Z]+/;
	
	if (regid.test(name)) {

		return document.getElementById(name.substring(1));
	}else if(regcls.test(name)){
		return document.getElementsByClassName(name.substring(1));
	}else{
		return document.getElementsByTagName(name);
	}
}

function vta (name) {
	return $(name).value.split('');
}
// 插入法排序

function insert_sort (arrold) {
	var i,j,tem;
	// 从第2个数开始插入法排序
	for(i=1;i<arrold.length;i++){
		// 将待排序的数字储存到临时变量中
		tem = arrold[i];
		// 与已经排好序的前面几位进行比较，并腾出要插入的位置
		for(j=i-1;tem<arrold[j]&&j>=0;j--){
			arrold[j+1]=arrold[j];			
		}
		// 因为上面的循环最后执行了j--，所以插入位置为j+1
		arrold[j+1]=tem;
	}
	// 循环结束，返回排序好的数组
	return arrold;
}



$('#insert').value = Math.ceil(Math.random()*10000000);
$('#insert_b').onclick= function(){$('#insert_r').value=insert_sort(vta('#insert')).join('');};

// 插入排序递归版
function insert_m (arrold,p,q) {
	if(p<q){
		insert_m(arrold,p,q-1);
		(function  (arrold,p,q) {
			var tem,i,j;
			tem = arrold[q+1];
			for(j=q;tem<arrold[j]&&j>=0;j--){
				arrold[j+1]=arrold[j];
			}
			arrold[j+1]=tem;
		})(arrold,p,q-1);
	}
	return arrold;
}


$('#insertm').value = Math.ceil(Math.random()*10000000);
$('#insertm_b').onclick= function(){$('#insertm_r').value=insert_m(vta('#insertm'),0,vta('#insertm').length).join('');};

// 分治法排序
function merge_sort (a,p,q) {
	if(q-p>0){
		var r = Math.ceil((q-p)/2);
		merge_sort(a,p,r-1);
		merge_sort(a,r,q);
		merge(a,p,q,r);
	}
	return a;
}
function merge (a,p,q,r) {
	var al,ar,i,j,k;
	for(i=0;i<r-p;i++){
		al[i]=a[r+i];
	}
	for(j=0;q-r-p;j++){
		ar[j]=a[p+j];
	}
	i=0;j=0;
	for(k=0;k<q-p;k++){
		if(i<r-p&&al[i]<ar[j]){
			a[k]=al[i];
			i++;
		}else{
			a[k]=ar[j];
			j++;
		}
	}
}
$('#merge').value = Math.ceil(Math.random()*10000000);
$('#merge_b').onclick= function(){$('#merge_r').value=insert_m(vta('#merge'),0,vta('#merge').length).join('');};
