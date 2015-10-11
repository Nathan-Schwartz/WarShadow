
require(['windowCoreFunctions', 'counters'], function(wCore, counters){
			
	document.getElementById("HSperc").innerHTML = hsPercent() + "%";		
			
	function hsPercent(){
		headshots = counters.getHeadshot(1); //localStorage.getItem("headshot1");
		kills = counters.getKill(); //localStorage.getItem("kill");
		
		var percent = headshots/kills * 100;
		percent = Math.round( percent * 100 ) / 100;
			
		return percent;
	};
			
	window.addEventListener('storage', function( storageEvent ){
		document.getElementById("HSperc").innerHTML = hsPercent() + "%";
	});
			
	document.getElementById("content").onmousedown = function(){wCore.dragMove();};
});		