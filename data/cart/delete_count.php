<?php
	/*
	*删除勾选的购物车当前商品
	*/
	header("Content-Type:application/json;charset=UTF-8");
	@$str = $_REQUEST["str"] or die('{"code":401,"msg":"str required"}');
	session_start();
	if(!$_SESSION["loginUid"]){
		die('{"code":300,"msg":"login required"}');
	}
	require_once("../init.php");
	foreach($str as $i=>$p){
		$sql = "DELETE FROM f_shoppingcart_item WHERE cid=$p";
		$result =mysqli_query($conn,$sql);
		return $result;
	}
	if($result){
		echo '{"code":200,"msg":"delete succ"}';
	}else{
		echo '{"code":500,"msg":"delete err"}';
	}
?>