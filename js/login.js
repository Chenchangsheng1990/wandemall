//点击登录按钮验证
$(function(){
	$("#login_btn").click(function(){
	$.post("login.php", {username:$("#phonenum").val(),password:$("#password").val()}, function(data){			
	//console.log(data);
	if (data.status === 1) { // 登录成功
						alert("登录成功，点击跳转首页！")
						$.cookie.json = true;
						var yhmN = data.userinfo;
						$.cookie("yhms",yhmN, {expires:7, path:"/"});						
						//console.log(yhmname);
						var _yhmc = $.cookie("yhms") || {};
						//console.log(_yhmc);
						window.location.href="index.html";
					} else {
						$("#phone_info").html("用户名或密码错误...");
					}
	},"json");

});

});
//用户名验证
$(function(){
	$("#phonenum").blur(function(){
		var reg=/^1[34578]\d{9}$/;  
    var uname=$("#phonenum").val();
    if(!uname){ 
    	$("#phone_info").html("请输入手机号"); 
    	return false; 
    }
    else if(!reg.test($("#phonenum").val())){
    	$("#phone_info").html("用户名格式错误"); 
    	$("#phonenum").val('');
    	return false; 
    }
    else{
    	$("#phone_info").html("用户名正确");
    	return true;
    }
	});
});
 //密码验证
 $(function(){
 	$("#password").blur(function(){
 		var psd = $("#password").val(),
   		reg = /^[a-zA-Z0-9]{6,16}$/;
   	if(!psd){
		$("#password_info").html("请输入密码"); 
    	return false;
   	}
   	else if(!reg.test($("#password_a").val())){
    	$("#password_info").html("6-16位字母数字组合"); 
    	$("#password").val('');
    	return false; 
    }
   	else{
   		$("#password_info").html("");
   		return true;
   	}
 	});
 });
