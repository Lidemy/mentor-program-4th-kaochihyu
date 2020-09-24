<?php  
	session_start();
	require_once('./conn.php');

	if (empty($_POST['title']) || empty($_POST['content'])) {
		header('Location: update_article.php?errCode=1&id=' . $_POST['id']);
		die('資料不齊全');
	}

	$id = $_POST['id'];
	$title = $_POST['title'];
	$content = $_POST['content'];
	$page = $_POST['page'];

	$stmt = $conn->prepare("UPDATE kaochihyu_blog_article SET title=?, content=? WHERE id=?");
	$stmt->bind_param("ssi", $title, $content, $id);
	$result = $stmt->execute();
	// $result->get_result();

	if ($result) {
		header('Location: ' . $page);
	} else {
		die('Failed:' . $conn->error);
	}