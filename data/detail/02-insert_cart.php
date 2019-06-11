<?php
	/*
	*添加当前商品到购物车
	*/
	header("Content-Type:application/json;charset=UTF-8");
	@$pid = $_REQUEST["pid"];
	@$count = $_REQUEST["count"] or die('{"code":301,"msg":"count required"}');
	if(!$pid){
		$pid = 1;
	}
	session_start();
	if(!$_SESSION["loginUid"]){
		die('{"code":300,"msg":"login required"}');
	}
	require_once("../init.php");
	$sql = "SELECT * FROM f_shoppingcart_item WHERE uid=$_SESSION[loginUid] AND pid=$pid";
	if(sql_excute($sql)){
		$sql = "UPDATE f_shoppingcart_item SET count=count+$count WHERE uid=$_SESSION[loginUid] AND pid=$pid";
		$result =mysqli_query($conn,$sql);
		if($result){
			echo '{"code":200,"msg":"insert succ"}';
		}else{
			echo '{"code":500,"msg":"insert err"}';
		}
	}else{
		$sql = "INSERT INTO f_shoppingcart_item(uid,pid,count,is_checked) VALUES($_SESSION[loginUid],$pid,$count,0)";
		$result =mysqli_query($conn,$sql);
		if($result){
			echo '{"code":200,"msg":"insert succ"}';
		}else{
			echo '{"code":500,"msg":"insert err"}';
		}
	}
?>