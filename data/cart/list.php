<?php
	/*
	*获取用户登录状态下的订单列表
	*公共返回 {"code":200,"data":$list}
	*/
	header("Content-Type:application/json;charset=UTF-8");
	require_once("../init.php");
	session_start();
	if(!@$_SESSION["loginUid"]){
		$_SESSION["pageToJump"] = 'cart.html';
		die('{"code":300, "msg":"logon required"}');
	}
	//获取总记录数
	$sql = "SELECT i.pid,cid,title,spec,href,price,count FROM f_product p, f_shoppingcart_item i WHERE p.pid=i.pid AND uid=$_SESSION[loginUid]";
	$list = sql_excute($sql);
	//查询每个商品的第一个图片
	foreach($list as $i=>$p){
		$sql = "SELECT sm FROM f_product_pic WHERE pic_id=$p[pid] LIMIT 1";
		$result = mysqli_query($conn,$sql);
		$row = mysqli_fetch_row($result);
		$list[$i]["pic"] = $row[0];
	}
	$output = [
		"code"=>200,
		"data"=>$list
	];
	echo json_encode($output);
?>