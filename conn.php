<?php
error_reporting(0);
$con = mysql_connect(LOCALHOST,root,root);
if(!$con)
{
   die('error'.mysql_error());
}
mysql_select_db("user")
?>