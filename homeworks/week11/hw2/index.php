<?php
	session_start();
	require_once('./conn.php') ;
	require_once('./utils.php');

	$username = NULL;
	$user = NULL;
	if (!empty($_SESSION['username'])) {
		$username = $_SESSION['username'];
		$user = getUserFromUsername($username);
	}

	$page = 1 ;
	if (!empty($_GET['page'])) {
		$page = $_GET['page'];
	}

	$items_per_page = 5;
	$offset = ($page - 1) * $items_per_page;

	$stmt = $conn->prepare(
		"SELECT * FROM kaochihyu_blog_article WHERE is_deleted is NULL ORDER BY id DESC LIMIT ? OFFSET ?"
	);
	$stmt->bind_param('ii', $items_per_page, $offset);
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
				<?php if (!$username) {?>
					<li class="nav_item"><a href="./login.php">登入</a></li>
				<?php } else { ?>
					<li class="nav_item"><a href="./admin.php">管理後臺</a></li>
					<li class="nav_item"><a href="./logout.php">登出</a></li>
				<?php } ?>
			</ul>
		</div>
	</nav>
	<div class="section_title">
		<h2>存放技術之地</h2>
		<p>Welcome to my Blog</p>
	</div>
	<section class="show_article">
		<div class="articles">
			<?php 
				while($row = $result->fetch_assoc()) {
			?>
				<div class="article_card">
					<div class="space_between">
						<h3><?php echo escape($row['title']); ?></h3>
						<?php if ($username) { ?>
							<div>
								<a class="edit_btn float_right" href="./update_article.php?id=<?php echo $row['id']; ?>">編輯</a>
							</div>							
						<?php } ?>
					</div>
					<div class="time_area">
						<img src="./image/watch-later.png" alt="">
						<span><?php echo $row['created_at']; ?></span>
						<img src="./image/folder.png" alt="">
						<span>歷史公告</span>
					</div>
					<p class="index_content"><?php echo escape($row['content']); ?></p>
					<div class="readmore_btn"><a href="./one_article.php?id=<?php echo $row['id']; ?>">READ MORE</a></div>
				</div>
			<?php }; ?>
		</div>
	</section>
	<div class="page_info">
		<?php 
			$stmt = $conn->prepare("SELECT count(id) AS count FROM kaochihyu_blog_article WHERE is_deleted is NULL");
			$stmt->execute();
			$result = $stmt->get_result();
			$row = $result->fetch_assoc();
			$count = $row['count'];
			$total_page = ceil($count / $items_per_page);
		?>
		<span>總共有篇 <?php echo $count; ?> 文章，頁數：</span>
		<span><?php echo $page; ?> / <?php echo $total_page; ?></span>
	</div>
	<div class="pagination">
		<?php if ($page != 1) {; ?>
			<a href="./index.php?page=1">首頁</a>
			<a href="./index.php?page=<?php echo $page - 1; ?>">上一頁</a>
		<?php }; ?>
		<?php if ($page != $total_page) {; ?>
			<a href="./index.php?page=<?php echo $page + 1; ?>">下一頁</a>
			<a href="./index.php?page=<?php echo $total_page; ?>">最後一頁</a>
		<?php }; ?>
	</div>
	<footer class="footer">Copyright @ 2020 Who's Blog All Rights Reserved.</footer>
</body>
</html>