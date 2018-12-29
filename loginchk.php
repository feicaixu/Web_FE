<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title></title>
</head>
<body>

</body>
</html>
<?php
require('conn.php');
$uname=$_POST["username"];
$upass=$_POST["password"];

if ($uname&&$upass) {
	$sql = "select * from user where uname = '$uname' and upass='$upass'";
    $result = mysql_query($sql);
    $rows = mysql_num_rows($result);
    if($rows==1)
    {
        echo "<script>alert('登陆成功，点击确认返回主页')</script>";
        header("refresh:0;url=index.html");
        exit;
    }else{
            echo "用户名或密码错误";
            echo "
                <script>
                    setTimeout(function(){window.location.href='login.html';},2000);
                </script>
                ";
             }
}
?>