
require(['windowCoreFunctions', 'jquery','counters'], function(wCore, $, counters){
			
	document.getElementById("HSperc").innerHTML = hsPercent() + "%";		
			
	function hsPercent(){
		headshots = counters.getHeadshot(1);
		kills = counters.getKill();
		
		var percent = headshots/kills * 100;
		percent = Math.round( percent * 100 ) / 100;
			
		return percent;
	};
			
	window.addEventListener('storage', function( storageEvent ){
		document.getElementById("HSperc").innerHTML = hsPercent() + "%";
	});
			
	$("#content").mousedown(function(){wCore.dragMove();});
});		