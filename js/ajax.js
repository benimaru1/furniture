function ajax(method,url,postStr){
	return new Promise((resolve,reject)=>{
		//1获取xhr
		var xhr = (function(){
			if(window.XMLHttpRequest){
				return new XMLHttpRequest();
			}else{
				return new ActiveXObject("Microsoft.XMLHttp");
			}
		})();
		//2,创建请求
		xhr.open(method,url,true);
		//3,设置回调
		xhr.onreadystatechange=function(){
			if(xhr.readyState == 4){
				if(xhr.status ==200){
					if(url.indexOf(".php") !=-1){
						resolve(JSON.parse(xhr.responseText));
					}else{
						resolve(xhr.responseText);
					}
				}else{
					reject("ajax出错了"+xhr.status);
				}
			}
		}
		//4,设置请求消息头
		if(method == "post"){
			xhr.setRequestHeader(
				"Content-Type","application/x-www-form-urlencoded");
		}
		//5,发送
		xhr.send(postStr);
	});
}