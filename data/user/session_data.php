<?php
	/*
	*返回临时登录信息:
	*如:{"uid":10, "uname":"dingding"}
	*/
	header("Content-Type:application/json;charset=UTF-8");
	session_start();
	$output=[];
	@$output["uname"] = $_SESSION["loginUname"];
	@$output["uid"] = $_SESSION["loginUid"];
	echo json_encode($output);
?>