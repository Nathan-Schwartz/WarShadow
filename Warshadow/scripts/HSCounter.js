
require(['windowCoreFunctions', 'jquery','counters'], function(wCore, $,counters){

	document.getElementById("HScount").innerHTML = counters.getHeadshot(1) + " Hs";

	window.addEventListener('storage', function( storageEvent ){
		document.getElementById("HScount").innerHTML = counters.getHeadshot(1) + " Hs";
	});

	$("#content").mousedown(function(){wCore.dragMove();});
});		