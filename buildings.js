function construct_building_stat(index){
	$("#"+index).find(".unit_count").text(buildings[index].number);
	for(var i=0; i<resources_names.length; i++){
		$("#"+index).find(".cost_"+resources_names[i]).text(buildings[index].cost[i]);
	}
}

function construct_all_building_stat(){
	for(building in buildings){
		construct_building_stat(building);
	}	
}


function is_building_cost_satisfied(index){
	var result = true;

	for(var i=0; i<resources_names.length; i++){
		if(resources[resources_names[i]].number < buildings[index].cost[i])
			result = false;
	}
	return result;
}

function buy_building(index){
	for(var i=0; i<resources_names.length; i++){
		resources[resources_names[i]].number -= buildings[index].cost[i];
	}	
}


$(document).ready(function(){
	construct_all_building_stat();

	$(document).on("click", ".building", function(){
		var index = $(this).attr('id');
		if(is_building_cost_satisfied(index)){
			buildings[index].number += 1;
			buy_building(index);
			construct_all_resource_stat();
			construct_building_stat(index);
		}
	});


});