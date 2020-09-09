<?php 
	require_once('./conn.php');

	$nickname = $_POST['nickname'];
	$username = $_POST['username'];
	$password = $_POST['password'];

	if (empty($nickname) || empty($username) || empty($password)) {
		header('Location: ./register.php?errCode=1');
		die('empty data');
	}

	$sql = "INSERT INTO users(nickname, username, password) VALUES ('$nickname', '$username', '$password')";
	$result = $conn->query($sql);
	if (!$result) {
		$code = $conn->errno;//
		if ($code === 1062) {//duplicate entry 雙重輸入
			header('Location: ./register.php?errCode=2');
		}
		die('failed:' . $conn->error);
	}
	header('Location: ./index.php');
 ?>
 