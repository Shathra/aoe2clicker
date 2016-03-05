$(document).ready(function(){
	$(document).on('mousedown', ".click_resource", function(){
		$(this).find("img").css("height", "190px").css("width", "190px");
		$(this).find("img").css("padding", "4px 4px");
	});

	$(document).on("mouseup", ".click_resource", function(){
		$(this).find("img").css("height", "200px").css("width", "200px");
		$(this).find("img").css("padding","0px 0px");
	});

	$(document).on("mouseover", ".click_resource", function(){
		$(this).find("img").css("height", "200px").css("width", "200px");
		$(this).find("img").css("padding","0px 0px");
	});



});