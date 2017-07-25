module.exports = function (){
	var input = $(".writerform .control-group input");
	var label = $(".writerform .control-group label")

	label.on('click',function(){
		$(this).parent().find("input").focus();
	});


	input.on('focus',function(){
		$(this).parent().find("label").addClass("active");	
	});
	input.on('blur',function(){
		if($(this).val().length == 0){
		$(this).parent().find("label").removeClass("active");	
		}
	});	

	
}