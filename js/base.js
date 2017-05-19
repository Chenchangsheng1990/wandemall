//显示用户名
//读取到用户名
$(function(){
	$.cookie.json = true; // 设置将字符串自动解析转换JS值
	var _yhmc = $.cookie("yhms").username;
	var dlyh = "<a href='register.html'>注册</a><a href='javascript:;' class='zhuxiao'>注销</a><span>万德商城欢迎您：" + _yhmc + "</span>"
	$(".lg_re").html(dlyh);
});
$(function(){
	$(".zhuxiao").click(function(){
		//$.cookie("yhms","");
		$.removeCookie("yhms",{ path:"/"});
		var zxyh = "<a href='register.html'>注册</a><a href='login.html'>登录</a><span>万德商城欢迎您：请先登录</span>"
		$(".lg_re").html(zxyh);
	//console.log($.cookie("yhms"))
	});
});
