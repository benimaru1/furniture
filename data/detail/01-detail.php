<?php
	header("Content-Type:application/json;charset=UTF-8");
	require_once("../init.php");
	@$pid = $_REQUEST["pid"];
	if(!$pid) $pid=1;
	$output=[
		"imgs"=>null,
		"data"=>null
	];
	$sql = "SELECT sm,md,lg FROM f_product_pic WHERE pic_id=$pid";
	$output["imgs"]=sql_excute($sql);
	$sql = "SELECT pid,family_id,title,subtitle,price,promise,category,spec FROM f_product WHERE pid=$pid";
	$output["data"]=sql_excute($sql)[0];
	echo json_encode($output);
?>