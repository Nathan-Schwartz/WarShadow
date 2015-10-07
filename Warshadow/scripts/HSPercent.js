
	define(['windowCoreFunctions'], function(wCore){
			
			function hsPercent(){
			
				headshots = localStorage.getItem("Headshots");
				kills = localStorage.getItem("Kills");
			
				var percent = headshots/kills * 100;
				percent = Math.round( percent * 100 ) / 100;
			
				return percent
			
			};
			
			window.addEventListener('storage', function( storageEvent ){
					document.getElementById("HSperc").innerHTML = hsPercent() + "%";
			});
			
			document.getElementById("content").onmousedown = function(){wCore.dragMove();};
			
});		