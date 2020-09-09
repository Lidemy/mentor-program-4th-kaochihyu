<?php
	session_start();
	require_once('./conn.php');
	require_once('./utils.php');
	//確認 cookie 裡面有沒有東西
	$username = NULL;
	if (!empty($_SESSION['username'])) {
		$username = $_SESSION['username'];
	}

	$result = $conn->query("SELECT * FROM my_comments ORDER BY id DESC");
	if (!$result) {
		die('Error:' . $conn->error);
	}
?>

<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8">
	<title>留言板</title>
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="stylesheet" href="./style.css">
	<link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@500;600;700&display=swap" rel="stylesheet">
</head>
<body>
	<header class="warning">注意！本站為練習用網站，因教學用途刻意忽略資安的實作，註冊時請勿使用任何真實的帳號或密碼。</header>
	<main class="board">
		<?php if (!$username) { ?>
			<a class="change_page_btn" href="./register.php">註冊</a>
			<a class="change_page_btn" href="./login.php">登入</a>
		<?php } else { ?>
			<a class="change_page_btn" href="./logout.php">登出</a>
		<?php } ?>
		<h1 class="board_title">Comments</h1>
		<?php 
			if (!empty($_GET['errCode'])) {
				$code = $_GET['errCode'];
				$msg = 'Error';
				if ($code === '1') {
					$msg = '資料不齊全';
				}
				echo '<h3 class="error">' . $msg . '</h3>';
			}
		?>
		<form class="board_new_comment" method="POST" action="./handle_add_comment.php">
			<h3>你好！<?php echo $username; ?></h3>
			<textarea class="comments_area" name="content" rows="3"></textarea>
			<?php if ($username) { ?>
				<input class="board_submit_btn" type="submit" />
			<?php } else { ?>
				<h3>請登入發布留言！</h3>
			<?php } ?>
		</form>
		<div class="board_line"></div>
		<section class="comments">
			<?php 
				while($row = $result->fetch_assoc()) {
			?>
				<div class="card">
					<div class="card_avatar"></div>
					<div class="card_body">
						<div class="card_info">
							<span class="card_author"><?php echo $row['nickname'] ?></span>
							<span class="card_time"><?php echo $row['created_at'] ?></span>
							<div class="card_content"><?php echo $row['content'] ?></div>
						</div>
					</div>
				</div>
			<?php } ?>
		</section>
	</main>
</body>
</html>
