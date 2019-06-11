<?php
	header("Content-Type:application/json;charset=UTF-8");
	@$uname = $_REQUEST["uname"] or die('{"code":401,"msg":"uname required"}');
	@$upwd = $_REQUEST["upwd"] or die('{"code":402,"msg":"upwd required"}');
	require_once("../init.php");
	$sql = "SELECT uid FROM f_user WHERE uname='$uname' AND upwd='$upwd'";
	$result = mysqli_query($conn,$sql);
	if(!$result){
		echo '{"code":500,"msg":"db execute err"}';
	}else{
		$row = mysqli_fetch_assoc($result);
		if(!$row){
			echo '{"code":201,"msg":"uname or upwd err"}';
		}else{
			session_start();
			$_SESSION["loginUname"]= $uname;
			$_SESSION["loginUid"] = $row["uid"];
//			$pageToJump = @$_SESSION["pageToJump"];
//			if($pageToJump==='cart.html' && @$_SESSION['toBuyLid']){
//				//完成购物车添加
//
//			}
			echo '{"code":200,"msg":"login success"}';
		}
	}
?>