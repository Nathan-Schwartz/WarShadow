
	define(['windowCoreFunctions'], function(wCore){
			
			function calcKD(){
				var KDRatio = Number(localStorage.getItem('PVPKills')) / Number(localStorage.getItem('PVPDeaths'));
				KDRatio = Math.round( KDRatio * 100 ) / 100;
				if (KDRatio == "NaN")
					console.log("KD was NaN");
					
				return KDRatio;
			};
			
			window.addEventListener('storage', function( storageEvent ){
					document.getElementById("KD").innerHTML = calcKD() + " K/D";
			});
		
			document.getElementById("content").onmousedown = function(){wCore.dragMove();};
});