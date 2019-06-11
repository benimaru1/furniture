<?php
	header("Content-Type:application/json;charset=UTF-8");
	require_once("../init.php");
	@$pno = $_REQUEST["pno"];
	@$family_id = $_REQUEST["family_id"];
	$output=[
		"recordCount"=>0,
		"pageSize"=>9,
		"pageCount"=>0,
		"pno"=>1,
		"data"=>null
	];
	if(!$family_id){
		$count = "SELECT count(*) FROM f_product";
		$sql = "SELECT href,src,title,price,category,spec,details,see_count FROM f_product";
	}else{
		$count = "SELECT count(*) FROM f_product WHERE family_id=$family_id";
		$sql = "SELECT href,src,title,price,category,spec,details,see_count FROM f_product WHERE family_id=$family_id";
	}
	$output["recordCount"]=sql_excute($count)[0]["count(*)"];
	$output["pageCount"]=ceil($output["recordCount"]/$output["pageSize"]);
	if($pno){
		$output["pno"]=$pno;
	}
	$start=$output["pageSize"]*($output["pno"]-1);
	$sql=$sql." LIMIT $start,".$output["pageSize"];
	$output["data"]=sql_excute($sql);
	echo json_encode($output);
?>