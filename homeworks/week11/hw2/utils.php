<?php 
	require_once('./conn.php');
	function getUserFromUsername($username) {
		global $conn;
		$sql = "SELECT * FROM kaochihyu_blog_user WHERE username = '$username'";
		$result = $conn->query($sql);
		$row = $result->fetch_assoc();
		return $row;
	}

	function escape($str) {
		return htmlspecialchars($str, ENT_QUOTES);
	}
?>