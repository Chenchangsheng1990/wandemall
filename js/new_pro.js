//移动更换

$(".g_l ul li").mouseover(function(){
	$(this).css("border","1px solid #318700").siblings().css("border","0");
	//更换图片
	$(".goods_big img").attr('src',$(this).find("img").attr("src"));
	//$("#pic_a").attr('rel',$(this).find("img").attr("big"));
	//console.log()
	
});
//放大镜
$(".goods_big img").elevateZoom({
			lensShape : "square",
			zoomType : "lens",
			cursor: "crosshair",
			borderColour:"#318700",
	});	
//$("#pic_a").elevateZoom({
//			lensShape : "square",
//			zoomType : "lens",
//			cursor: "crosshair",
//			borderColour:"#318700",
//	});	
//$("#pic_b").elevateZoom({
//			lensShape : "square",
//			zoomType : "lens",
//			cursor: "crosshair",
//			borderColour:"#318700",
//	});	
//$("#pic_c").elevateZoom({
//			lensShape : "square",
//			zoomType : "lens",
//			cursor: "crosshair",
//			borderColour:"#318700",
//	});	

/* 数量加 */
$(".addgoods").click(function(){
	var amount = $(this).prev().val();
	amount++;
	$(this).prev().val(amount);
});
/* 数量减 */
$(".min_good").click(function(){
	var amount = $(this).next().val();
	if (amount <= 1)
		return
	amount--;
	$(this).next().val(amount);
});


//点击添加到购物车
$(function(){
	//点击加入购物车，获取父盒子中商品信息保存到cookie中
	$(".onbtn").click(function(){
	//location.href="cart.html";
	var _cp = $(".g_r");
	//获取当中的商品信息
	var _id = $("#pic_a_s img").attr("src"),
		_cpN = $(".cpName").text(),
		_prince = $(".itroprice b").text();
		//将当前选的商品保存到cookie中
		//配置读取或保存cookie时使用JSON格式
		$.cookie.json = true;
		// 先从cookie中读取保存选购商品的存储结构
		var _products = $.cookie("products") || [];
		//console.log(_prince);
		//console.log(_products);
		// 获取当前选购商品在数组中的索引
		var index = exists(_id, _products);
				if (index === -1) // 以前未购买，将当前选购商品保存到数组结构中
					_products.push({id:_id, name:_cpN, amount:1, price:_prince});
				else // 已购买
					_products[index].amount++;
				// 将数组结构存入cookie
				$.cookie("products", _products, {expires:7, path:"/"});
				console.log(_products);
		});
			// 查找_id指定的商品在array数组中是否存在
			// 如果存在，则返回其在数组中的索引，否则返回-1
			function exists(_id, array) {
				for (var i = 0, len = array.length; i < len; i++) {
					if (array[i].id === _id) {
						return i;
					}
				}
				return -1;
			}
				
});
//点解跳转到购物车结算页面
$(function(){
	$(".jiesbtn").click(function(){
		location.href="cart.html";
	});
});





































