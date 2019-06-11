<?php
	header("Content-Type:application/json;charset=UTF-8");
	require_once("../init.php");
	$sql="SELECT src,fname FROM f_banner";
	echo json_encode(sql_excute($sql));
?>