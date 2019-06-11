<?php
	header("Content-Type:application/json;charset=UTF-8");
	require_once("../init.php");
	@$kw = $_REQUEST["kw"];
	@$pno = $_REQUEST["pno"];
	$output =[
		"recordCount"=>0,
		"pageSize"=>9,
		"pno"=>1,
		"pageCount"=>0,
		"data"=>null
	];
	if(!$kw){
		$count = "SELECT count(*) FROM f_product";
		$sql = "SELECT href,src,title,price,category,spec,details,see_count FROM f_product";
	}else{
		$count = "SELECT count(*) FROM f_product WHERE title LIKE '%".$kw."%'";
		$sql = "SELECT href,src,title,price,category,spec,details,see_count FROM f_product WHERE title LIKE '%".$kw."%'";
	}
	$output["recordCount"] =sql_excute($count)[0]["count(*)"];
	$output["pageCount"] =ceil($output["recordCount"]/$output["pageSize"]);
	if($pno){
		$output["pno"] = $pno;
	}
	$start = $output["pageSize"]*($output["pno"]-1);
	$sql = $sql." LIMIT $start,".$output["pageSize"];
	$output["data"] = sql_excute($sql);
	echo json_encode($output);
?>