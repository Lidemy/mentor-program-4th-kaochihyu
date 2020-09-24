<?php
	session_start();
	require_once('./conn.php') ;
	require_once('./utils.php');

	$id = $_GET['id'];
	$sql = 'SELECT * FROM kaochihyu_blog_article WHERE id=?';
	$stmt = $conn->prepare($sql);
	$stmt->bind_param('i', $id);
	$stmt->execute();
	$result = $stmt->get_result();
	if (!$result) {
		die ('Failed:' . $conn->error);
	}
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
				<?php if(!empty($_SESSION['username'])) {
				?>
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
	<section class="entire_article">
		<div class="articles">
			<div class="article_card entire_article_card">
				<div class="space_between">
					<h3><?php echo escape($row['title']); ?></h3>
					<div>
						<?php 
							if(!empty($_SESSION['username'])) {
						?>
						<a class="edit_btn" href="./update_article.php?id=<?php echo $row['id']; ?>">編輯</a>
						<a class="edit_btn" href="./handle_delete_article.php?id=<?php echo $row['id']; ?>">刪除</a>	
						<?php } ?>
					</div>
				</div>
				<div class="time_area">
					<span><?php echo $row['created_at'] ?></span>
					<span>歷史公告</span>
				</div>
				<p class="content"><?php echo escape($row['content']); ?></p>
			</div>
		</div>
	</section>
	<footer class="footer">Copyright @ 2020 Who's Blog All Rights Reserved.</footer>
</body>
</html>