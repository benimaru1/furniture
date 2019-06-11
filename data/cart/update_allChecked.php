<?php
/*
*修改购物车全选条目是否勾选
*/
header("Content-Type:application/json;charset=UTF-8");
@$checked = $_REQUEST["checked"];
if($checked !=="0" && !$checked){
	die('{"code":401,"msg":"checked required"}');
}
session_start();
if(!$_SESSION["loginUid"]){
	die('{"code":300,"msg":"login required"}');
}
require_once("../init.php");
$sql = "UPDATE f_shoppingcart_item SET is_checked=$checked WHERE uid=$_SESSION[loginUid]";
$result = mysqli_query($conn,$sql);
if($result){
	echo '{"code":200,"msg":"update succ"}';
}else{
	echo '{"code":500,"msg":"update err"}';
}
?>