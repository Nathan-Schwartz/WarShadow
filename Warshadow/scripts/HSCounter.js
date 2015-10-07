
	define(['windowCoreFunctions'], function(wCore){

			window.addEventListener('storage', function( storageEvent ){
					document.getElementById("HScount").innerHTML = localStorage.getItem('Headshots') + " Hs";
			});
		
			document.getElementById("content").onmousedown = function(){wCore.dragMove();};
			
});		