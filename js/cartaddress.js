//点击新增收货地址。打开遮罩层和填写框
$("#add-address").click(function(){
	$("#zcc").css("display","block");
	$("#cont_adress").css("display","block");
});
//点击关闭隐藏
$("#checkoffa").click(function(){
	$("#zcc").css("display","none");
	$("#cont_adress").css("display","none");
});
//点击取消隐藏
$(".checkorder-cancel").click(function(){
	$("#zcc").css("display","none");
	$("#cont_adress").css("display","none");
});

$(function(){
	//设置地址
// 保存所有地址的对象
	var addresses = {};
		/* 读取 address.json 中的所有省市区信息 */
			$.ajax("data/addresses.json").done(function(data){
				// console.log(data);
				var provinces = data.regions;
				provinces.forEach(function(province){
					addresses[province.name] = {}; // 保存省份下城市的对象
					var cities = province.regions || [];
					cities.forEach(function(city){
					addresses[province.name][city.name] = city.regions;
					});
				});

				// console.log(addresses);
				initProvince();
			});

			// 当省份选择改变时：
			$("#province").change(initCity);
			// 当城市选择改变时：
			$("#city").change(initDistrict);

			// 设置省份的显示信息
			function initProvince() {
				var html = "";
				for (var attr in addresses) {
					html += "<option value='"+attr+"'>"+attr+"</option>";
				}
				$("#province").append(html);

				initCity();
			}

			// 设置选中省份下的城市显示信息
			function initCity() {
				// 当前选中的省份
				var currProvince = $("#province").val();
				// 获取该省份的城市信息，并显示
				var cities = addresses[currProvince],
					html = "";
				for (var attr in cities) {
					html += "<option value='"+ attr +"'>"+ attr +"</option>";
				}
				$("#city").empty().append(html);

				initDistrict();
			}

			// 设置选中省份与城市下的区县信息
			function initDistrict() {
				// 当前选中的省份与城市
				var currProvince = $("#province").val(),
					currCity = $("#city").val(),
					html = "";

				// 显示该选中城市下的区县
				var districts = addresses[currProvince][currCity] || [];
				districts.forEach(function(district){
					html += "<option value='"+ district.name +"'>"+ district.name +"</option>";
				});

				$("#district").empty().append(html);
			}		
});
 //点击保存按钮修改默认收货信息
$("#bcbtn").click(function(){
			var shr_n = $("#shr").val(),
				Prov = $("#province").val(),
				Citi = $("#city").val(),
				distr = $("#district").val(),
				xad = $("#detailedaddress").val(),				
				xxad = Prov +"," + Citi +"," + distr +"," + xad,
				pnum = $("#cphone").val();
				 $("#shr_name").text(shr_n);
				 $("#shr_ad").text(xxad);
				 $("#shr_pnum").text(pnum);
				 
				 
			$("#zcc").css("display","none");
			$("#cont_adress").css("display","none");
			
			 //console.log(shr_n);
		});	
//点击编辑是，打开编辑框修改信息		
$(".bj").click(function(){
	$("#zcc").css("display","block");
	$("#cont_adress").css("display","block");
});
//点击删除时，清空信息
$(".shanc").click(function(){
	$("#shr_name").text("请编辑收货信息");
	$("#shr_ad").text("请编辑收货信息");
	$("#shr_pnum").text("请编辑收货信息");
});
//点击注销退出按钮
$(function(){
	$("#zxbtn").click(function(){
			//$.cookie("yhms","");
		$.removeCookie("yhms",{ path:"/"});
		var zxyh = "<a href='register.html'>注册</a><a href='login.html'>登录</a><span>万德商城欢迎您：请先登录</span>"
		$(".lg_re").html(zxyh);
	//console.log($.cookie("yhms"))
	});
});





















