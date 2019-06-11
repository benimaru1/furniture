(()=>{
	$("#footer").load("footer.html");
	$("#uname").blur(function(){
		if(!this.value){
			$(this).next().html("用户名不能为空")
				.addClass("msg-err");
		}else{
			$(this).next().html("")
				.removeClass("msg-err");
		}
	});
	$("#upwd").blur(function(){
		if(!this.value){
			$(this).next().html("密码不能为空")
				.addClass("msg-err");
		}else{
			$(this).next().html("")
				.removeClass("msg-err");
		}
	});
	/*按钮单击监听事件监听*/
	$("#btn-login").click(function(){
		if($("#uname").val()&&$("#upwd").val()){
			$.ajax({
				type:"POST",
				data:$("#form-login").serialize(),
				url:"data/user/login.php",
				success:function(data){
					console.log(data);
					if(data.code ===200 ){
						alert("登录成功,正在跳转...");
						location.href = "index.html";
					} else if  (data.code === 201){
						alert("用户名或密码错误");
					}else{
						alert(data.msg);
					}
				}
			});
		}
	});

	/*7天之内不再登录*/
	$(document).ready(function(){
		if($.cookie("rmbUser") == "true"){
			$("#ck_rmbUser").attr("checked",true);
			$("#uname").val($.cookie("uname"));
			$("#upwd").val($.cookie("upwd"));
		}
	});
	/*记住用户密码*/
	function save(){
		if($("#ck_rmbUser").attr("checked")){
			var str_uname = $("#uname").val();
			var str_upwd = $("#upwd").val();
			//存储一个带7天的cookie
			$.cookie("rmbUser","true",{express:7});
			$.cookie("#uname",str_uname,{express:7});
			$.cookie("#upwd",str_upwd,{express:7});
		}else{
			$.cookie("rmbUser","false",{express: -1 });
			$.cookie("#uname","",{express: -1 });
			$.cookie("#upwd","",{express: -1 });
		}
	}
})();