<?php  
	require_once('./conn.php');
	require_once('./utils.php');

	$title = $_POST['title'];
	$content = $_POST['content'];

	if (empty($title || $content)) {
		header('Location: ./add_article.php?errCode=1');
		die('資料不齊全');
	}

	$sql = 'INSERT INTO kaochihyu_blog_article(title, content) VALUES(?, ?)';
	$stmt = $conn->prepare($sql);
	$stmt->bind_param('ss', $title, $content);
	$result = $stmt->execute();

	if ($result) {
		header('Location: ./index.php');
	} else {
		die('Failed:' . $conn->error);
	}
?>