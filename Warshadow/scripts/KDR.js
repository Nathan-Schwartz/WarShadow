require(['windowCoreFunctions', 'jquery','counters'], function(wCore, $,counters){
			
	function calcKD(){
		var KDRatio = Number(localStorage.getItem('kill')) / Number(localStorage.getItem('PVPDeaths'));
		KDRatio = Math.round( KDRatio * 100 ) / 100;

		return KDRatio;
	};
			
	window.addEventListener('storage', function( storageEvent ){
		document.getElementById("KD").innerHTML = calcKD() + " K/D";
	});
		
	$("#content").mousedown(function(){wCore.dragMove();});
});