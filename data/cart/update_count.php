<?php
	/*
	*修改购物车商品数量
	*/
	header("Content-Type:application/json;charset=UTF-8");
	@$cid =$_REQUEST["cid"] or die('{"code":401,"msg":"cid required"}');
	@$count = $_REQUEST["count"] or die('{"code":402,"msg":"count required"}');
	session_start();
	if(!$_SESSION["loginUid"]){
		die('{"code":300,"msg":"login required"}');
	}
	require_once("../init.php");
	$sql = "UPDATE f_shoppingcart_item SET count=$count WHERE cid=$cid";
	$result = mysqli_query($conn,$sql);
	if($result){
		echo '{"code":200,"msg":"update succ"}';
	}else{
		echo '{"code":500,"msg":"update err"}';
	}
?>