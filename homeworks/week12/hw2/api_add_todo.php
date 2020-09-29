<?php 
  require_once('conn.php');
  header('Content-type:application/json;charset=utf-8');
  header('Access-Control-Allow-Origin: *');
  if (
    empty($_POST['todo'])) {
    $json = array(
      "ok" => false,
      "message" => "Please input missing fields"
    );

    $response = json_encode($json);
    echo $response;
    die();
  }

  $todo = $_POST['todo'];


  $sql = "INSERT INTO kaochihyu_todo_list(todo) VALUES (?)";
  $stmt = $conn->prepare($sql);
  $stmt->bind_param('s', $todo);
  $result = $stmt->execute();

  //沒資料
  if (!$result) {
    $json = array(
      "ok" => false,
      "message" => $conn->error
    );
    $response = json_encode($json);
    echo $response;
    die();
  }
  //成功時
  $json = array(
    "ok" => true,
    "message" => "success",
    "id" => $conn->insert_id
  );

  $response = json_encode($json);
  echo $response;
  die();
?>