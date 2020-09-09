<?php 
	session_start();
	require_once('./conn.php');
	require_once('./utils.php');

	$username = $_POST['username'];
	$password = $_POST['password'];


	if (empty($username) || empty($password)) {
		header('Location: ./login.php?errCode=1');
		die('empty data');
	}

	// 從資料庫找到包含 username 跟 password 的資料
	$sql = "SELECT * FROM kaochihyu_users WHERE username = '$username' and password ='$password'";
	$result = $conn->query($sql);
	if (!$result) {
		die($conn->error);
	}

	// 如果有找到資料 num_rows=1，設定 session id
	if ($result->num_rows) {
		$_SESSION['username'] = $username;
		header('Location: ./index.php');
	} else {
		header('Location: ./login.php?errCode=2');
	}
?>
