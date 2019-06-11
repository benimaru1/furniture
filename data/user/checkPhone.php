<?php
	/*接收客户端提交的phone,验证此电话是否存在.
	*若不存在,则返回{"code":200,"msg":"non-exists"}
	*若存在,则返回{"code":201,"msg":"exists"}
	*/
	header("Content-Type:application/json;charset=UTF-8");
	@$phone = $_REQUEST["phone"] or die('{"code":401,"msg":"phone required"}');
	require_once("../init.php");
	$sql="SELECT uid FROM f_user WHERE phone='$phone'";
	$result = mysqli_query($conn,$sql);
	if(!$result){
		echo '{"code":500,"msg":"db execute err"}';
	}else{
		$row = mysqli_fetch_assoc($result);
		if(!$row){
			echo '{"code":200,"msg":"non-exists"}';
		}else{
			echo '{"code":201,"msg":"exists"}';
		}	
	}
?>