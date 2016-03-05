
function construct_stat(index){
	$("#stat_"+index).text(resources[index].number);
}




$(document).ready(function(){




	$(document).on("click", ".click_resource", function(){
		var index = $(this).attr('id').split("_")[1];
		if(resources[index].number < resources[index].capacity){
			resources[index].number += 1;
			construct_stat(index);
		}
	});
});