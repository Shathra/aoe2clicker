$(document).ready(function(){
	$(document).on('mousedown', ".click_resource", function(){
		$(this).find("img").css("height", "170px").css("width", "170px");
		$(this).find("img").css("margin", "20px 8px");
	});

	$(document).on("mouseup", ".click_resource", function(){
		$(this).find("img").css("height", "200px").css("width", "200px");
		$(this).find("img").css("margin","auto");
	});

	$(document).on("mouseover", ".click_resource", function(){
		$(this).find("img").css("height", "200px").css("width", "200px");
		$(this).find("img").css("margin","auto");
	});



});