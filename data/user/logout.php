<?php
	/*
	*退出登录,清除临时对话存储信息
	*返回数据如 {"code":200,"msg":"logout succ"}
	*/
	header("Content-Type:application/json;charset=UTF-8");
	session_start();
	session_destroy();
	echo '{"code":200,"msg":"logout succ"}';
?>