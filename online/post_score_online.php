<?php
	include("../include/config.php");
	
	$stud_id = $_POST["fb_id"];
	$total_score = $_POST["total_score"];
	$top_score = $_POST["top_score"];
	$check_topscore = "";
	
	$query1 = "SELECT * FROM tbl_leaderboard where user_id ='$stud_id'";
	$result = mysqli_query($conn,$query1) or die (mysqli_error($conn));
	$row = mysqli_fetch_array($result);
	$check_topscore = $row['user_score'];
	if($check_topscore > $top_score){
		$query = "UPDATE tbl_leaderboard SET total_score = total_score+'" .$total_score. "' WHERE user_id='" .$stud_id. "'";
	}else{
		$query = "UPDATE tbl_leaderboard SET total_score = total_score+'" .$total_score. "', user_score='" .$top_score. "'  WHERE user_id='" .$stud_id. "'";
	}
	
	
	//$result = mysqli_query($conn,$query) or die (mysqli_error($conn));
	if($result){
		$return = "success";
	}else{
		$return = "not";
	}
	
	echo ($return);
	
	
?>	