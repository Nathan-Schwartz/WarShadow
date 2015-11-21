require(['windowCoreFunctions', 'jquery','counters'], function(wCore, $,counters){

	document.getElementById("recCount").innerHTML = localStorage.getItem("recordingCount") + " vids";

	window.addEventListener('storage', function( storageEvent ){
		document.getElementById("recCount").innerHTML = localStorage.getItem("recordingCount") + " vids";
	});
	
	$("#content").mousedown(wCore.dragMove);
});