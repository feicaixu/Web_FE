var struname=document.getElementById("username");
var strcode=document.getElementById("code");
var struemail=document.getElementById("email");

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
function checkcode(){
	var check=/^\d{6}$/;
	if(!check.test(strcode.value))
	{
		document.getElementById("warringbox2").innerHTML="格式错误！";
		return false;
	}else{
		document.getElementById("warringbox2").innerHTML="";
	}
}
function checkemail(){
	var check=/^[0-9a-zA-Z]\w{5,17}@[0-9a-zA-Z]+\.\w+$/;
	if(!check.test(struemail.value))
	{
		document.getElementById("warringbox3").innerHTML="格式错误！";
		return false;
	}else{
		document.getElementById("warringbox3").innerHTML="";
	}
}
function checkuser(){
	if(checkuname()==false||checkcode()==false||checkemail()==false)
	{	
		alert("请按照格式输入账号密码!");
		return false;
	}
	else
	{
		return true;
	}
}