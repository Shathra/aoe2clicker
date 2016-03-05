function construct_resource_stat(index){
	$("#stat_"+index).text(resources[index].number);
}

function construct_all_resource_stat(){
	for(resource in resources){
		construct_resource_stat(resource);
	}
}


$(document).ready(function(){
	$(document).on("click", ".click_resource", function(event){
		event.preventDefault();
		var index = $(this).attr('id').split("_")[1];
		if(resources[index].number < resources[index].capacity){
			resources[index].number += 1;
			construct_resource_stat(index);
		}
	});
});