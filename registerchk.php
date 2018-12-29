<?php 
    header("Content-Type: text/html; charset=utf8");
    require('conn.php');
    if(!isset($_POST['submit'])){
        exit("错误执行");
    }
    $uname=$_POST['username'];
    $upass=$_POST['password'];
    $uemail=$_POST['email'];

    $sql="select * from user where uname='$uname'";
    $result = mysql_query($sql);
    $row=mysql_num_rows($result);
    if ($rows==1)
    {
        echo "账户已存在";
        exit;
    }
    $q="insert into user value('$uname','$upass','$uemail')";
    $reslut=mysql_query($q,$con);
    
    if (!$reslut){
        die('Error: ' . mysql_error());
    }else{
        echo "注册成功，即将反回登陆页面";
    }
    mysql_close($con);//关闭数据库
    echo 
        "<script>
        setTimeout(function(){window.location.href='login.html';},2000);
        </script>";
?>