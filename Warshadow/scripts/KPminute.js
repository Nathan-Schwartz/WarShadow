require(['windowCoreFunctions', 'jquery','counters'], function(wCore, $, counters){
			
	document.getElementById("KPMcount").innerHTML = 0 + " K/min";
	
	(function killPerMinute(){
		kills = counters.getKill();
		var minCounter = 0;
		var minutes = setInterval(function(){
			minCounter++;
			document.getElementById("KPMcount").innerHTML = Math.round((kills/minCounter)*100)/100 + " K/min";
		}, 60000);
	})();
		
	$("#content").mousedown(function(){wCore.dragMove();});
});