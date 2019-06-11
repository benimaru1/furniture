(()=>{
	$("#footer").load("footer.html");
	/*对用户名进行验证*/
	uname.onblur = function(){
		if(this.validity.valueMissing){
			this.nextElementSibling.innerHTML="用户名不能为空";
			this.nextElementSibling.className="msg-err";
		}else if(this.validity.tooShort){
			this.nextElementSibling.innerHTML="用户名不能少于3位";
			this.nextElementSibling.className="msg-err";
		}else{
			var that=this;
			if(!that.value){
				return;
			}
			$.ajax({
				url:"data/user/checkUname.php",
				data:{uname:that.value},
				success:function(result){
					if (result.code===201){
						that.nextElementSibling.innerHTML="用户名已被占用";
						that.nextElementSibling.className="msg-err";
					} else if(result.code===200){
						that.nextElementSibling.innerHTML="用户名可以使用";
						that.nextElementSibling.className="msg-success";
					} else{
						alert("验证用户名出错! 请稍后重试");
					}
				}
			})
		}
	}
	uname.onfocus=function(){
		this.nextElementSibling.innerHTML="用户名长度在3到9位之间";
		this.nextElementSibling.className="msg-default";
	}
	/*密码验证*/
	upwd.onfocus=function(){
		this.nextElementSibling.innerHTML="密码长度在6到12位之间";
		this.nextElementSibling.className="msg-default";
	}
	upwd.onblur = function(){
		if(this.validity.valueMissing){
			this.nextElementSibling.innerHTML="密码不能为空";
			this.nextElementSibling.className="msg-err";
		}else if(this.validity.tooShort){
			this.nextElementSibling.innerHTML="密码不能少于6位";
			this.nextElementSibling.className="msg-err";
		}else{
			this.nextElementSibling.innerHTML="密码格式正确";
			this.nextElementSibling.className="msg-success";
		}
	}
	/*确认密码验证*/
	upwd1.onfocus=function(){
		this.nextElementSibling.innerHTML="请再次输入密码";
		this.nextElementSibling.className="msg-default";
	}
	upwd1.onblur=function(){
		if(this.validity.valueMissing){
			this.nextElementSibling.innerHTML="确认密码不能为空";
			this.nextElementSibling.className="msg-err";
		}else if(upwd.value !== this.value){
			this.nextElementSibling.innerHTML="两次密码不一致";
			this.nextElementSibling.className="msg-err";
		}else{
			this.nextElementSibling.innerHTML="两次密码一致";
			this.nextElementSibling.className="msg-success";
		}
	}
	/*邮箱验证*/
	email.onblur = function(){
		if(this.validity.valueMissing){
			this.nextElementSibling.innerHTML="邮箱不能为空";
			this.nextElementSibling.className="msg-err";
		}else if(this.validity.typeMismatch){
			this.nextElementSibling.innerHTML="邮箱格式不正确";
			this.nextElementSibling.className="msg-err";
		}else{
			var that=this;
			if(!that.value){
				return;
			}
			$.ajax({
				url:"data/user/checkEmail.php",
				data:{email:that.value},
				success:function(result){
					if (result.code===201){
						that.nextElementSibling.innerHTML="邮箱已被注册";
						that.nextElementSibling.className="msg-err";
					} else if(result.code===200){
						that.nextElementSibling.innerHTML="邮箱可以使用";
						that.nextElementSibling.className="msg-success";
					} else{
						 alert('验证邮箱出错！请稍后重试。')
					}
				}
			})
		}
	}
	email.onfocus=function(){
		this.nextElementSibling.innerHTML="请输入邮箱";
		this.nextElementSibling.className="msg-default";
	}

	/*电话验证*/
	phone.onblur = function(){
		if(this.validity.valueMissing){
			this.nextElementSibling.innerHTML="手机号不能为空";
			this.nextElementSibling.className="msg-err";
		}else if(this.validity.patternMismatch){
			this.nextElementSibling.innerHTML="手机号格式不正确";
			this.nextElementSibling.className="msg-err";
		}else{
			var that=this;
			if(!that.value){
				return;
			}
			$.ajax({
				url:"data/user/checkPhone.php",
				data:{phone:that.value},
				success:function(result){
					if (result.code===201){
						that.nextElementSibling.innerHTML="电话已被注册";
						that.nextElementSibling.className="msg-err";
					} else if(result.code===200){
						that.nextElementSibling.innerHTML="电话可以使用";
						that.nextElementSibling.className="msg-success";
					} else{
						 alert('输入电话出错！请稍后重试。')
					}
				}
			})
		}
	}
	phone.onfocus=function(){
		this.nextElementSibling.innerHTML="请输入电话";
		this.nextElementSibling.className="msg-default";
	}
	/*注册按钮监听函数*/
	$("#btn").click(function(){
		var count =0;
		$(".form-group").each(function(){
			if($(this).find("span").hasClass("msg-success")){
				count++;
			}
		});
		if(count ==5){
			$.ajax({
				type:"POST",
				data:$("#form-register").serialize(),
				url:"data/user/register.php",
				success:function(result){
					if(result.code ===200){
						alert('<b>注册成功！</b><p>点击“确定”后将跳转到登录页</p>')
						location.href = 'login.html';
					}else{
						alert('<b>注册失败！</b><p>错误消息：'+result.msg+'</p>')	
					}
				}
			});
		}
	});
})();