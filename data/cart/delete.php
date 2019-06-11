<?php
	/*
	*删除购物车当前商品
	*/
	header("Content-Type:application/json;charset=UTF-8");
	@$cid = $_REQUEST["cid"] or die('{"code":401,"msg":"cid required"}');
	session_start();
	if(!$_SESSION["loginUid"]){
		die('{"code":300,"msg":"login required"}');
	}
	require_once("../init.php");
	$sql = "DELETE FROM f_shoppingcart_item WHERE cid=$cid";
	$result =mysqli_query($conn,$sql);
	if($result){
		echo '{"code":200,"msg":"delete succ"}';
	}else{
		echo '{"code":500,"msg":"delete err"}';
	}
?>