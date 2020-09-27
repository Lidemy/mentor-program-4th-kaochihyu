<?php 
	require_once('./conn.php');
	require_once('./utils.php');
?>
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8">
	<title>Blog</title>
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="stylesheet" href="./style.css">
</head>
<body>
	<div class="login_panel">
		<h1>Log In</h1>
		<?php 
			if(!empty($_GET['errCode'])) {
				$errCode = $_GET['errCode'];
				$msg = 'Error';
				if ($errCode === '1') {
					$msg = '資料不齊全';
				}
				if ($errCode === '2') {
					$msg = '帳號密碼有誤';
				}
				echo '<h3 class="error">' . $msg . '</h3>';
			} 
		?>
		<form class="login_panel_form" method="POST" action="./handle_login.php">
			<label for="username">USERNAME</label>
			<input type="text" name="username" value="">
			<label for="password">PASSWORD</label>
			<input type="password" name="password" value="">
			<input class="login_submit_btn" type="submit" name="login" value="SIGN IN">
		</form>
		
	</div>
</body>
</html>
