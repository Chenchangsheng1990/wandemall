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
	$sql = "SELECT * from users WHERE username='$username' AND password='$password'";
	$result = mysql_query($sql, $conn);
	// 处理结果
	if ($row = mysql_fetch_array($result, MYSQL_ASSOC)) 
		echo '{"status":1, "message":"success", "userinfo":'. json_encode($row) .'}';
	else
		echo '{"status":0, "message":"用户名或密码错误"}';

	// 关闭数据库连接
	mysql_close($conn);
?>