//吸顶设置
		function xd(){
    		var height = 0,mheight = 0;
      		height = $("#wrap-main").height();//获取搜索框当前位置。
      		mheight = $("#wrap-daytj").offset().top;//获取wrp-dayt距离窗口的距离
      		//console.log(mheight);
      		$(window).scroll(function() {
        		var w = $("body").scrollTop() || $(document).scrollTop();//获取滚动值
        		//console.log(w);
        		if(w<=height){        					$("#wrap-main").css({height:"90px",background:"#fff",position:"relative",top: "0px",borderBottom:"0",zIndex: "0"})
        			//$("#wrap-mainb").css("marginTop","120px")	
        		}
        		else if(w>height && w<mheight){
        			$("#wrap-main").css({height:"90px",background:"#fff",position:"relative",top: "0",zIndex: "0"})
        		}
        		else if(w > mheight) {//当滚动值大于mheight的时候，实现吸顶效果
				$("#wrap-main").css({height:"90px",background:"#fff",position:"fixed",top: "0",borderBottom:"2px solid #318700",zIndex: "1000"});
        		} 
      });
    }
    xd();
    
//楼层导航
$(window).scroll(function(){
	var lcheight = $(window).scrollTop();
	//console.log(lcheight);	
	if(lcheight <1000){
		$("#louc").css({display:"none"});
	}
	else{
		$("#louc").css({display:"block"});
	}
	if(lcheight >=1000 && lcheight<1650 ){
		$("#louc ul li:nth-child(1) .lc_wz").css({display:"block"});
	}
	else{
		$("#louc ul li:nth-child(1) .lc_wz").css({display:"none"});
	}
	if(lcheight >=1650 && lcheight < 2200){
		$("#louc ul li:nth-child(2) .lc_wz").css({display:"block"});
	}
	else{
		$("#louc ul li:nth-child(2) .lc_wz").css({display:"none"});
	}
	if(lcheight >=2200 && lcheight < 2800){
		$("#louc ul li:nth-child(3) .lc_wz").css({display:"block"});
	}
	else{
		$("#louc ul li:nth-child(3) .lc_wz").css({display:"none"});
	}
	if(lcheight >=2800 && lcheight < 3400){
		$("#louc ul li:nth-child(4) .lc_wz").css({display:"block"});
	}
	else{
		$("#louc ul li:nth-child(4) .lc_wz").css({display:"none"});
	}
	if(lcheight >=3400 && lcheight < 4000){
		$("#louc ul li:nth-child(5) .lc_wz").css({display:"block"});
	}
	else{
		$("#louc ul li:nth-child(5) .lc_wz").css({display:"none"});
	}
	if(lcheight >=4000 && lcheight < 4600){
		$("#louc ul li:nth-child(6) .lc_wz").css({display:"block"});
	}
	else{
		$("#louc ul li:nth-child(6) .lc_wz").css({display:"none"});
	}
	if(lcheight >=4600 && lcheight < 5200){
		$("#louc ul li:nth-child(7) .lc_wz").css({display:"block"});
	}
	else{
		$("#louc ul li:nth-child(7) .lc_wz").css({display:"none"});
	}
	if(lcheight >=5200 && lcheight < 5800){
		$("#louc ul li:nth-child(8) .lc_wz").css({display:"block"});
	}
	else{
		$("#louc ul li:nth-child(8) .lc_wz").css({display:"none"});
	}
	if(lcheight >=5800 && lcheight < 6400){
		$("#louc ul li:nth-child(9) .lc_wz").css({display:"block"});
	}
	else{
		$("#louc ul li:nth-child(9) .lc_wz").css({display:"none"});
	}
})
	function aclick(pxx){
		$('html, body').animate({scrollTop:pxx},1000);
	}
//产品推荐tab切换
//$("#cptj ul li").mouseover(function(){
//	$(this).addClass("xxx").siblings().removeClass("xxx");
//	$(this).parents("#cptj~.cplb")
//});


$("#cptj ul li:nth-child(1)").mouseover(function(){
	$("#cptj ul li:nth-child(1)").addClass("xxx")
	$("#cptj ul li:nth-child(2)").removeClass("xxx")
	$("#cptj ul li:nth-child(3)").removeClass("xxx")
	$(".cplb").css("display","block");
	$(".cplb-b").css("display","none");
	$(".cplb-a").css("display","none");
});
$("#cptj ul li:nth-child(2)").mouseover(function(){
	$("#cptj ul li:nth-child(2)").addClass("xxx")
	$("#cptj ul li:nth-child(3)").removeClass("xxx")
	$("#cptj ul li:nth-child(1)").removeClass("xxx")
	$(".cplb").css("display","none");
	$(".cplb-b").css("display","none");
	$(".cplb-a").css("display","block");
});

$("#cptj ul li:nth-child(3)").mouseover(function(){
	$("#cptj ul li:nth-child(3)").addClass("xxx")
	$("#cptj ul li:nth-child(2)").removeClass("xxx")
	$("#cptj ul li:nth-child(1)").removeClass("xxx")
	$(".cplb").css("display","none");
	$(".cplb-a").css("display","none");
	$(".cplb-b").css("display","block");
});

//添加到购物车
	$(function(){
			$("#addgwc_btn").click(function(e){
				var $fly = $("<img src='images/shoppingpeople.png' style='position:absolute;zIndex:3000'>"),
					cartOffset = $(".goucart").offset();

				$fly.fly({
					start : {
						top : e.pageY,
						left : e.pageX
					},
					end : {
						top : cartOffset.top,
						left : cartOffset.left,
						width : 10,
						height : 10
					}
				});
			})
		});






































