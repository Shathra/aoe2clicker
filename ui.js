$(document).ready(function(){
	$(document).on('mousedown', ".click_resource", function(){
		$(this).children().css("height", "140px").css("width", "140px");
		$(this).children().css("margin", "20px 8px");

	});
	$(document).on("mouseup", ".click_resource", function(){
		$(this).children().css("height", "200px").css("width", "200px");
		$(this).children().css("margin","auto");
	});





});