<?php
	session_start();
	require_once('./conn.php');
	require_once('./checked_permission.php');

	$id = $_GET['id'];

	$stmt = $conn->prepare(
		"SELECT * FROM kaochihyu_blog_article WHERE id=?"
	);
	$stmt->bind_param("i", $id);
	$result = $stmt->execute();
	if (!$result) {
		die('Error' . $conn->error);
	}
	$result = $stmt->get_result();
	$row = $result->fetch_assoc();
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
	<nav class="navbar">
		<div class="blog_title"><a href="./index.php">Who's Blog</a></div>
		<div class="nav_item_wrap">
			<ul class="nav_items">
				<li class="nav_item"><a href="./list_article.php">文章列表</a></li>
				<li class="nav_item"><a href="">分類專區</a></li>
				<li class="nav_item"><a href="">關於我</a></li>
			</ul>
			<ul class="nav_items">
				<li class="nav_item"><a href="./add_article.php">新增文章</a></li>
				<li class="nav_item"><a href="./logout.php">登出</a></li>
			</ul>
		</div>
	</nav>
	<div class="section_title">
		<h2>存放技術之地</h2>
		<p>Welcome to my Blog</p>
	</div>
	<section class="add_article">
		<div class="articles">
			<div class="article_card add_article_card">
				<h3>編輯文章：</h3>
				<?php  
					if (!empty($_GET['errCode'])) {
						$code = $_GET['errCode'];
						$msg = 'Error';
						if ($code === '1') {
							$msg = '資料不齊全';
						}
						echo '<h3 class="error">' . $msg . '</h3>';
					};
				?>
				<form class="add_article_form" method="POST" action="./handle_update_article.php">
					<div class="input_area">
						<input type="text" name="title" placeholder="請輸入文章標題..." value="<?php echo $row['title']; ?>" />
						<!-- <input type="text" name="category" placeholder="請輸入文章分類..." value="" /> -->
						<textarea name="content" cols="30" rows="20"><?php echo $row['content']; ?></textarea>
						<input type="hidden" name="id" value="<?php echo $row['id']; ?>" />
						<input type="hidden" name="page" value="<?php echo $_SERVER['HTTP_REFERER']; ?>">
					</div>
					<input class="add_article_btn" type="submit" value="送出文章" />
				</form>
			</div>
		</div>
	</section>
	<footer class="footer">Copyright @ 2020 Who's Blog All Rights Reserved.</footer>
</body>
</html>