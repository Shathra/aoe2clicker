function construct_resource_stat(index){
	$("#stat_"+index).text(resources[index].number);
}

function construct_all_resource_stat(){
	for(resource in resources){
		construct_resource_stat(resource);
	}
}


function increase(index, dps){
	if(resources[index].number < resources[index].capacity){
		if(dps > resources[index].capacity - resources[index].number)
			dps = resources[index].capacity - resources[index].number;
		resources[index].number += dps;
		construct_resource_stat(index);
	}
}


$(document).ready(function(){
	$(document).on("click", ".click_resource", function(event){
		event.preventDefault();
		var index = $(this).attr('id').split("_")[1];
		increase(index, 1);
	});
});