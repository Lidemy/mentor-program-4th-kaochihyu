<?php 
//用 username 去取 user
	require_once('./conn.php');
	function getUserFromUsername($username) {
		global $conn;
		$sql = "SELECT * FROM kaochihyu_users WHERE username = '$username'";
		$result = $conn->query($sql);
		$row = $result->fetch_assoc();
		return $row;
	}
?>
