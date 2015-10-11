
require(['windowCoreFunctions', 'counters'], function(wCore, counters){

	document.getElementById("HScount").innerHTML = counters.getHeadshot(1) + " Hs";

	window.addEventListener('storage', function( storageEvent ){
		document.getElementById("HScount").innerHTML = counters.getHeadshot(1) + " Hs";
	});

	document.getElementById("content").onmousedown = function(){wCore.dragMove();};

});		