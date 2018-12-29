var struname=document.getElementById("username");
var strupass=document.getElementById("password");

function checkuname(){
	var check=/^\w{6,20}$/;
	if(!check.test(struname.value))
	{
		document.getElementById("warringbox1").innerHTML="格式错误！";
		return false;
	}else{
		document.getElementById("warringbox1").innerHTML="";
	}
}
function checkupass(){
	var check=/^\w{6,20}$/;
	if(!check.test(strupass.value))
	{
		document.getElementById("warringbox2").innerHTML="格式错误！";
		return false;
	}else{
		document.getElementById("warringbox2").innerHTML="";
	}
}
function checkuser(){
	if(checkuname()==false||checkupass()==false)
	{	
		alert("请按照格式输入账号密码!");
		return false;
	}
	else
	{
		return true;
	}
}
