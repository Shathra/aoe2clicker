$(document).ready(function(){

	var interval = setInterval(function() {	
		increase("wood", wps);
		increase("clay", cps);
		increase("iron", ips);
		increase("gold", gps);
	}, 1000);


});