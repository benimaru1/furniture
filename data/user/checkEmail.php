<?php
	header("Content-Type:application/json;charset=UTF-8");
	@$email = $_REQUEST["email"] or die('{"code":403,"msg":"email required"}');
	require_once("../init.php");
	$sql="SELECT uid FROM f_user WHERE email='$email' LIMIT 1";
	$result = mysqli_query($conn,$sql);
	if(!$result){  //SQL语句执行失败
		echo '{"code":500,"msg":"db execute err"}';
	}else{
		$row = mysqli_fetch_assoc($result);
		if(!$row){  //用户名不存在
			echo '{"code":200,"msg":"non-exists"}';
		}else{  //用户名存在
			echo '{"code":201,"msg":"exists"}';
		}
	}
?>