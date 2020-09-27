<?php
	session_start();
	require_once('./conn.php');

	$sql = 'SELECT * FROM kaochihyu_blog_article WHERE is_deleted is NULL ORDER BY id DESC';
	$stmt = $conn->prepare($sql);
	$result = $stmt->execute();
	if (!$result) {
		die('Error' . $conn->error);
	}
	$result = $stmt->get_result();
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
				<?php if (!empty($_SESSION['username'])) { ?>
					<li class="nav_item"><a href="./admin.php">管理後臺</a></li>
					<li class="nav_item"><a href="./add_article.php">新增文章</a></li>
					<li class="nav_item"><a href="./logout.php">登出</a></li>
				<?php } else { ?>
					<li class="nav_item"><a href="./login.php">登入</a></li>
				<?php } ?>
			</ul>
		</div>
	</nav>
	<div class="section_title">
		<h2>存放技術之地</h2>
		<p>Welcome to my Blog</p>
	</div>
	<section class="show_article_list">
		<div class="articles">
			<div class="article_card article_list_board">
				<?php 
					while($row = $result->fetch_assoc()) {; 
				?>
				<div class="article_list_card space_between">
					<h3><a href="one_article.php?id=<?php echo $row['id']; ?>"><?php echo $row['title'] ?></a></h3>
					<span class="created_time float_right"><?php echo $row['created_at']; ?></span>
				</div>
				<?php }; ?>
			</div>
		</div>
	</section>
	<footer class="footer">Copyright @ 2020 Who's Blog All Rights Reserved.</footer>
</body>
</html>