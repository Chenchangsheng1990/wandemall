 var isExist = true;//设置用户名是否存在的变量，默认存在
//用户名的验证
function ChangeUseName(){
	var test2=/^1[34578]\d{9}$/;  
    var uname=$("#phonenum").val();
    if(!uname){ 
    	$("#phone_info").html("请输入手机号"); 
    	return false; 
    }else if(!test2.test($("#phonenum").val())){ 
    	$("#phone_info").html("输入的手机格式错误"); 
    	return false; 
	}else{
    	$.getJSON("user.php",{username:$("#phonenum").val()}).then(
    		function(data){
    		console.log(data);
    		if(data.status === 1){//改用户已经被注册
    			$("#phone_info").html("用户名已经被注册，请重新选择一个");
    			isExist = true;
    		}else{
    			$("#phone_info").html("用户名可用")
    			isExist = false;
    		}
    		}
    	);
    }     
}

//密码的验证
function ChangePwd() {
    var test=/^[a-zA-Z0-9]{6,16}$/;
    if($("#password_a").val()==''){ 
    	$("#password_info").html("请输入密码"); 
    	return false; 
    }else if(!test.test($("#password_a").val())){
    	$("#password_info").html("6-16位字母数字组合"); 
    	return false; 
    }else{ 
    	$("#password_info").html("密码正确，可以使用！");
    	return true; 
    }
			}
//密码确认验证
function ChangePwd2() {
    if($("#qpassword_b").val() == ''){
    	$("#password_q_info").html("请再次确认密码"); 
    	return false; 
    }else if($("#password_b").val() != $("#password_a").val()){ 
    	$("#password_q_info").html("两次输入不一致"); 
    	return false; 
    }else{ 
    	$("#password_q_info").html("密码一致"); 
    	return true; 
    }
		}
//验证码验证
var   Num = Math.floor(Math.random()*9000 + 1000);
	$(".sjyz").html(Num);
//	console.log($(".sjyz").text());
function Changeyzm() {
	if($("#yzm").val() == ""){
		alert("请输入验证码！")
		return false;
	}
	else if($("#yzm").val() != $(".sjyz").html()){
		alert("你输入的验证码错误，请重新输入！")
		return false;
	}
	else{
		return true;
	}
}

	//点击注册按钮验证
$("#register_btn").click(function(){
	if(!isExist){
	$.post("register.php",{username:$("#phonenum").val(),password:$("#password_a").val()},function(data){
		if(data.status ===1){
			window.location = "login.html";
			alert("请登录")
		}else{
			alert("注册失败，请重新注册！")
		}
		//console.log(data);
	},"json");
	}
	if($("#phonenum").val() ==""){
		$("#phone_info").html("你还没填写手机号！"); 
    	return false;
	}
	else if($("#password_a").val()==''){
		$("#password_info").html("你还没有设置登录密码！"); 
    	return false; 
	}
	else if($("#qpassword_b").val() == ''){
		$("#password_q_info").html("请再次设置登录密码"); 
    	return false; 
	}
	else if($("#password_b").val() != $("#password_a").val()){ 
    	$("#password_q_info").html("两次输入不一致！"); 
    	return false; 
    }
	else if($("#yzm").val() == ""){
		alert("请输入验证码！")
		return false;
	}
	else{
		alert("注册成功")
	}

})
