$(function(){
			/* 读取已有商品信息，展示 */
			$.cookie.json = true; // 设置将字符串自动解析转换JS值
			var _products = $.cookie("products") || [];
			if (_products.length === 0) {
				// alert("购物车为空");
				// location = "product.html";
				$(".empty").show().next().hide();
				return;
			}

			// 显示购物车商品信息
			$.each(_products, function(index, element){
				var sjpr = element.price,
					sj_pr = sjpr.replace(/￥/,'');
				$(".product:last").clone(true) // 克隆节点
								  .data("product", element) // 将当前遍历到的商品缓存到对象中
								  .show()
								  .appendTo(".cart-body")
								  .children(".id").html("<img src=" + element.id + " />").end()
								  .children(".name").html(element.name).end()
								  .children(".price").html(element.price).end()
								  .find(".amount").val(element.amount).end()
								  .find(".sub").text((sj_pr * element.amount).toFixed(2));
//			console.log(data);
			});
//			/* 删除所在行数据 */
			$(".p_sc a").click(function(){
			// 获取待删除的商品对象
				var _product = $(this).parents(".product").data("product");
				// 获取删除的商品对象在数组中的索引
				var index = $.inArray(_product, _products);
				// 从数组中删除商品
				if (index !== -1) {
					_products.splice(index, 1);
					// 覆盖保存回cookie中
					$.cookie("products", _products, {expires:7, path:"/"});

					// 将页面当前行删除
					$(this).parents(".product").remove();
				}

				// 修改合计金额
				//calcTotal();

				return false; // 阻止事件冒泡与阻止默认行为
			});

			/* 全选 */
			$(".checkall").click(function(){
				// 获取“全选”复选框的选中状态
				var state = $(this).prop("checked");
				// 设置所有商品行前的复选框选中状态与“全选”保持一致
				$(".checksingel:not(:last)").prop("checked", state);
				var spsl = $(".checksingel:checked").length;
					//console.log(spsl);
				$(".spsl_sp").html(spsl);	
				// 计算合计
				calcTotal();
				// console.log(this.getAttribute("checked"));
				// console.log(this.checked);
				// console.log($(this).attr("checked")); // getAttribute()
				// console.log($(this).prop("checked")); // checked
			});
			
			/* 数量加 */
			$(".add").click(function(){
				var amount = $(this).prev().val();
				amount++;
				$(this).prev().val(amount);
				// 修改数组中当前商品数量信息
				$(this).parents(".product").data("product").amount = amount;	
				// 保存回cookie中
				$.cookie("products", _products, {expires:7, path:"/"});
				// 修改小计金额
				var subprice = $(this).parents(".product").data("product").price,
					sub_Price = subprice.replace(/￥/,'');
				$(this).parent().next().text((sub_Price * amount).toFixed(2));
				//console.log(sub_Price);
				// 修改合计金额
				calcTotal();				
			});			
			/* 数量减 */
			$(".min").click(function(){
				var amount = $(this).next().val();
				if (amount <= 1)
					return;
				amount--;
				// 页面显示修改后的数量
				$(this).next().val(amount);
				// 修改数组中当前商品数量信息
				$(this).parents(".product").data("product").amount = amount;
				// 保存回cookie中
				$.cookie("products", _products, {expires:7, path:"/"});
				// 修改小计金额
				var subprice = $(this).parents(".product").data("product").price,
					sub_Price = subprice.replace(/￥/,'');
				$(this).parent().next().text((sub_Price * amount).toFixed(2));
				// 修改合计金额
				calcTotal();
			});
			
			/* 输入修改数量 */
			$(".amount").blur(function(){
				var reg = /^[1-9]\d*$/
				if (!reg.test(this.value)){
					$(this).val($(this).parents(".product").data("product").amount);
					return;
				}
				// 修改数组中当前商品数量信息
				$(this).parents(".product").data("product").amount = this.value;
				// 保存回cookie中
				$.cookie("products", _products, {expires:7, path:"/"});
				// 修改小计金额
				var subprice = $(this).parents(".product").data("product").price,
					sub_Price = subprice.replace(/￥/,'');
				$(this).parent().next().text((sub_Price * this.value).toFixed(2));
				// 修改合计金额
				calcTotal();
			});

			// 计算选中行的合计
			$(".checksingel").click(function(){
				var spsl = $(".checksingel:checked").length;
					//console.log(spsl);
				$(".spsl_sp").html(spsl);
				calcTotal();
			});
			/* 计算合计金额 */
			function calcTotal() {				
				var sum = 0;
				$(".checksingel:not(:last)").each(function(index, element){
					if($(this).is(":checked")){						
						sum += parseFloat(($(element).parents(".product").find(".sub").text()));						
					}					
				});
				//console.log(sum);
				// 显示合计金额
				$(".spje_sp").text(sum);
			}
		});
//计算选择数量
//$(function(){
//	var spsl = $("input[type='checkbox']:checked").length;
//	console.log(spsl);
//});





//点击添加到购物车
$(function(){
	//点击加入购物车，获取父盒子中商品信息保存到cookie中
	$($(".btn")[0]).click(function(){
	//location.href="cart.html";
	var _cp = $(".cp_cp");
	//获取当中的商品信息
	var _id = $($("#yt_pic")[0]).attr("src"),
		_cpN = $($(".cp_name")[0]).text(),
		_prince = $($(".jiag")[0]).text();
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
	$($(".btn")[0]).click(function(){
		location.href="cart.html";
	});
});
//点击展开
$(function(){
	$(".zhank").click(function(){
		$(".addnew").animate({height:"328px"},1000);
	});
});
//点击结算
$(function(){
	$(".jsBtn").click(function(){
		var spsl = $(".checksingel:checked").length;
		if(spsl == 0){
			alert("请选择需要购买的产品！")
		}
		else{
			location.href="cartadress.html";
		}
		
	});
});

//
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
