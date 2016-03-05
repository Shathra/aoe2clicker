function round(num){
	var text;
	if(num<2000)
			text = Math.floor(num);
	else if(1000000>num && num>=2000){
		num = Math.round(num);
		var bin = Math.floor(num/1000);
		num = num - 1000*bin;
		if(num == 0)
			text = bin + " Bin";
		else
			text = bin + " Bin " + num;
	}
	else if(1000000000>num && num>=1000000){
		num = Math.round(num/1000);
		num = num/1000;
		text = num + " Milyon";
	}
	else if(1000000000000>num && num>=1000000000){
		num = Math.round(num/1000000);
		num = num/1000;
		text = num + " Milyar";
	}
	else if(num<1000000000000000 && num>=1000000000000){
		num = Math.round(num/1000000000);
		num = num/1000;
		text = num + " Trilyon";
	}
	else if( num<1000000000000000000 && num>=1000000000000000){
		num = Math.round(num/1000000000000);
		num = num/1000;
		text = num + " Katrilyon";
	}
	else if( num<1000000000000000000000 && num>=1000000000000000000){
		num = Math.round(num/1000000000000000);
		num = num/1000;
		text = num + " Kentrilyon";
	}
	else if( num>=1000000000000000000000){
		num = Math.round(num/1000000000000000000);
		num = num/1000;
		text = num + " Seksilyon";
	}
	return text;
}


$(document).ready(function(){

	var interval = setInterval(function() {	
		increase("wood", wps/10);
		increase("clay", cps/10);
		increase("iron", ips/10);
		increase("gold", gps/10);
	}, 100);


});