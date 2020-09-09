<?php 
	session_start();
	require_once('./conn.php');
	require_once('./utils.php');

	$content = $_POST['content'];

	if (empty($content)) {
		header('Location: ./index.php?errCode=1');
		die('empty data');
	}

	$user = getUserFromUsername($_SESSION['username']);
	$nickname = $user['nickname'];

	$sql = "INSERT INTO my_comments(nickname, content) VALUES ('$nickname', '$content')";
	$result = $conn->query($sql);
	if ($result) {
		header('Location: ./index.php');
	} else {
		die('failed:' . $conn->error);
	}
 ?>
 