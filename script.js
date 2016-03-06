function round(num){
	var text;
	if(num<2000)
			text = Math.floor(num);
	else if(1000000>num && num>=2000){
		num = Math.round(num/100);
		num = num/10;
		text = num + "K";
	}
	else if(1000000000>num && num>=1000000){
		num = Math.round(num/1000);
		num = num/1000;
		text = num + "M";
	}
	else if(1000000000000>num && num>=1000000000){
		num = Math.round(num/1000000);
		num = num/1000;
		text = num + "B";
	}
	else if(num<1000000000000000 && num>=1000000000000){
		num = Math.round(num/1000000000);
		num = num/1000;
		text = num + "T";
	}
	else if( num<1000000000000000000 && num>=1000000000000000){
		num = Math.round(num/1000000000000);
		num = num/1000;
		text = num + "P";
	}
	else if( num<1000000000000000000000 && num>=1000000000000000000){
		num = Math.round(num/1000000000000000);
		num = num/1000;
		text = num + "E";
	}
	else if( num>=1000000000000000000000){
		num = Math.round(num/1000000000000000000);
		num = num/1000;
		text = num + "Z";
	}
	return text;
}

function xxxx(){
	wps += 100000;
	cps += 100000;
	ips += 100000;
	gps += 100000;

	var interval = setInterval(function() {	
		buy_unit("gold_storage");
		buy_unit("wood_storage");
		buy_unit("iron_storage");
		buy_unit("clay_storage");
		buy_unit("house");
		buy_unit("merchant");
	}, 1);
}



$(document).ready(function(){

	var interval = setInterval(function() {	
		increase("wood", wps/10);
		increase("clay", cps/10);
		increase("iron", ips/10);
		increase("gold", gps/10);
	}, 100);


});