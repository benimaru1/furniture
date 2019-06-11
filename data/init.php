<?php
	$db_host="127.0.0.1";
	$db_user="root";
	$db_password="";
	$db_database="furniture";
	$db_port=3306;
	$db_charset="UTF8";
	$conn=mysqli_connect($db_host,$db_user,$db_password,$db_database,$db_port);
	mysqli_query($conn,"SET NAMES $db_charset");
	function sql_excute($sql){
		global $conn;
		$result = mysqli_query($conn,$sql);
		if(!$result){
			return "查询执行失败！请检查SQL语法：$sql";
		}else{
			$row=mysqli_fetch_all($result,MYSQLI_ASSOC);
			if(stripos($sql,"select") === 0){
				return $row;
			}else{
				return $result;
			}
		}
	}
?>