$(function(){
	$.get("newtry.json",function(elem){
		var data={
			"list":elem
		};
		var html =template('cxlb',data);
		$('#prod').html(html);
	})
})
