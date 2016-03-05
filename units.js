function construct_unit_stat(index){
	$("#"+index).find(".unit_count").text(units[index].number);
	for(var i=0; i<resources_names.length; i++){
		$("#"+index).find(".cost_"+resources_names[i]).text(units[index].cost[i]);
	}
}

function construct_all_unit_stat(){
	for(unit in units){
		construct_unit_stat(unit);
	}	
}

function is_unit_cost_satisfied(index){
	var result = true;

	for(var i=0; i<resources_names.length; i++){
		if(resources[resources_names[i]].number < units[index].cost[i])
			result = false;
	}
	return result;
}

function buy_unit(index){
	for(var i=0; i<resources_names.length; i++){
		resources[resources_names[i]].number -= units[index].cost[i];
	}	
}

$(document).ready(function(){
	construct_all_unit_stat();

	$(document).on("click", ".unit", function(event){
		event.preventDefault();
		var index = $(this).attr('id');
		if(is_unit_cost_satisfied(index)){
			units[index].number += 1;
			buy_unit(index);
			construct_all_resource_stat();
			construct_unit_stat(index);
		}
	});


});