<h2>网站主题：信息安全</h2>   

<h3>1、摘要：</h3>    
较之前上台展示之后，修改了整个首页，课程改为轮播图，添加二级菜单，然后在用户输入的地方利用js进行判断跟过滤。已经上传服务器，链接：[期末项目](http://saylovetoling.me)，由于服务器配置的php为7.x，需要使用PDO，需要改写后台，暂时还没弄，所以账号不能注册登陆。

<h3>2、布局</h3>
首页(index.html)采用网格布局，其余采用相对定位跟绝对定位。
网格定位部分代码如下：   

``` 
#index_container{
	display: grid;
	grid-template-rows:50px auto 100px;
	grid-template-columns: 350px auto 200px;
	min-height: 100vh;	
}
.index_header{
	grid-row:1/2;
	grid-column:1/4 ;
	background: #4A4B48;
	position: relative;
}
```
<h3>3、部分核心代码</h3>
3.1:用户邮箱输入判定   
>获取用户输入的email之后，利用正则验证是否满足邮箱的长度跟格式，
>当不满足的时候显示格式错误。当不满足的时候点击提交，弹出警告框。
>除此之外，在登陆注册处添加onkeyup跟onpaste两个事件来过滤输入   

```
var struemail=document.getElementById("email");
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
	if(checkemail()==false)
	{	
		alert("请按照格式输入账号密码!");
		return false;
	}
	else
	{
		return true;
	}
}

onkeyup="this.value=this.value.replace(/[^\w]/g,'')" onpaste="this.value=this.value.replace(/[^\w]/g,'')"

```

3.2:主页二级菜单
>利用jquery(位于/js/jquert-3.3.1.min.js),编写函数来调用jquery中的方法，利用show()跟hide()来显示跟隐藏二级菜单。  

```   
$(document).ready(function(){
   $(".firstMenu").hover(function(){
         $(this).next().show();
   },function(){
         $(this).next().hide();
    });

    $(".secondMenu").hover(function(){
          $(this).show();
    },function(){
          $(this).hide();
     });   
});   

```   
3.3:json请求
>简单的请求Github上存放的数据,显示到页面中去。

```
var requestURL = 'https://raw.githubusercontent.com/feicaixu/cdujson/master/cdu.json';
var request = new XMLHttpRequest();
request.open('GET',requestURL);
request.responseType = 'json';
request.send();
request.onload = function(){
	 var JSONObject = request.response;
	 document.getElementById('map_name').innerHTML=JSONObject.name;
	 document.getElementById('map_adress').innerHTML=JSONObject.address;
	 document.getElementById('map_time').innerHTML=JSONObject.time;
	 document.getElementById('map_area').innerHTML=JSONObject.area;
	 document.getElementById('map_site').innerHTML=JSONObject.site;
	}   
```

3.4:自制的画廊
>通过控制图片的位置变化，来达到画廊的作用。

```
//核心css代码
.wrap ul li.on{
	width: 600px;
	height: 400px;
	margin-top: 0;
	opacity: 1;
}

//js代码
var oUl = document.getElementsByTagName('ul')[0];
var aLi = document.getElementsByTagName('li');
var num = 0;
//循环遍历图片
for(var i=0;i<9;i++){
	aLi[i].index=i;
	aLi[i].onclick=function() {
		num=this.index; 
		for (var j=0;j<9;j++) {
			aLi[j].className='';
		}
		this.className='on';
		//点击时图片移动的距离
		oUl.style.marginLeft=-(num*100+200)+'px';
	}
}

```

3.5:利用bootstrap制作的画廊

```
//引用bootstrap
<link rel="stylesheet" href="https://cdn.staticfile.org/twitter-bootstrap/3.3.7/css/bootstrap.min.css">
<script src="https://cdn.staticfile.org/jquery/2.1.1/jquery.min.js"></script>
<script src="https://cdn.staticfile.org/twitter-bootstrap/3.3.7/js/bootstrap.min.js"></script>

//画廊实现
<div class="index_main2">
	<div class="lunbo_position">
		<div id="myCarousel" class="carousel slide">
			<!-- 轮播（Carousel）指标 -->
			<ol class="carousel-indicators">
				<li data-target="#myCarousel" data-slide-to="0" class="active"></li>
				<li data-target="#myCarousel" data-slide-to="1"></li>
				<li data-target="#myCarousel" data-slide-to="2"></li>
			</ol>   
			<!-- 轮播（Carousel）项目 -->
		<div class="carousel-inner">
			<div class="item active">
				<img src="img/class_1.jpg" alt="First slide">
				<div class="carousel-caption">Struts-2</div>
			</div>
			<div class="item">
				<img src="img/class_2.jpg" alt="Second slide">
				<div class="carousel-caption">windows内核提权</div>
			</div>
			<div class="item">
				<img src="img/class_3.jpg" alt="Third slide">
				<div class="carousel-caption">密码学</div>
			</div>
		</div>
		<!-- 轮播（Carousel）导航 -->
		<a class="left carousel-control" href="#myCarousel" role="button" data-slide="prev">
		    <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
		    <span class="sr-only">Previous</span>
		</a>
		<a class="right carousel-control" href="#myCarousel" role="button" data-slide="next">
		    <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
		    <span class="sr-only">Next</span>
		</a>
		</div>
	</div>
</div>
```

<h3>4、总结</h3>
在这一学期的前端学习中，收获颇多。掌握了html，js，css的基础，很高兴的是学习了js，理解了DOM，在挖掘xss漏洞的时候给我提供了很大的帮助。
