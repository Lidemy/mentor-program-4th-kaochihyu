<?php  
	session_start();
	require_once('./conn.php');
	require_once('./utils.php');


	//有一個沒填
	if (empty($_POST['username']) || empty($_POST['password'])) {
		header('Location: ./login.php?errCode=1');
		die('empty data');
	} 

	$username = escape($_POST['username']);
	$password = escape($_POST['password']);

	//看是否存在此 username
	$sql = 'select * from kaochihyu_blog_user where username=?';
	$stmt = $conn->prepare($sql);
	$stmt->bind_param('s', $username);
	$result = $stmt->execute();

	if (!$result) {
		die($conn->error);
	}

	//原本 query 執行有結果，現在沒有所以要把結果拿回來
	$result = $stmt->get_result();
	if ($result->num_rows === 0) {
		header('Location: ./login.php?errCode=2');
		exit();//記得要加，下面程式碼才不會被執行
	}

	//存在此 username 就確認密碼
	$row = $result->fetch_assoc();
	print_r($row);
	print_r($password);
	if (password_verify($password, password_hash($row['password'], PASSWORD_DEFAULT))) {
		$_SESSION['username'] = $username;
		header('Location: ./index.php');
	} else {
		header('Location: ./login.php?errCode=2');
	}
?>
