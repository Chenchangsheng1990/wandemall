<?php
	// 获取 POST 请求中提交的用户信息
	$username = $_POST["username"];
	$password = $_POST["password"];
	// 数据库连接
	$conn = mysql_connect("localhost:3306", "root", "");
	if (!$conn)
		die ("数据库连接失败");
	mysql_select_db("wandemall");
	// 发送数据插入
	$sql = "INSERT INTO users VALUES(NULL, '$username', '$password')";
	$result = mysql_query($sql, $conn);
	// 处理结果
	if ($result) 
		echo '{"status":1, "message":"success"}';
	else
		echo '{"status":0, "message":"'. mysql_error() .'"}';
	
	// 关闭数据库连接
	mysql_close($conn);
?>