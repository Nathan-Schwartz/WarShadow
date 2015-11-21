require(['windowCoreFunctions', 'jquery','counters'], function(wCore, $, counters){
			
	document.getElementById("KPMcount").innerHTML = 0 + " K/m";

	(function killPerMinute(){
		var intervals = setInterval(function(){
			counters.incrementTime();
		}, 1000);
	})();

	window.addEventListener('storage', function( storageEvent ){
		if(storageEvent.key == "minutes" || storageEvent.key == "kill"){
			document.getElementById("KPMcount").innerHTML = Math.round((counters.getKill()*60*100)/counters.getTime())/100 + " K/m";
		}
	});

	$("#content").mousedown(wCore.dragMove);
});