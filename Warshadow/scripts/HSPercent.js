
	define(['windowCoreFunctions'], function(wCore){
			
			function updatePOS(name) {
				overwolf.windows.obtainDeclaredWindow(name,
					function(results){
						var test = JSON.parse(localStorage.getItem("windowPOS"));
						test.hspercent[0] = results.window.left;
						test.hspercent[1] = results.window.top;
						localStorage.setItem("windowPOS", JSON.stringify(test));
					}
				);
			};

		
			function SetHSNPos(newState, ID) {
				setTimeout(function(){
					if(newState == -1){
						overwolf.windows.changePosition(ID, 
												JSON.parse(localStorage.getItem("windowPOS")).hspercent[0], 
												JSON.parse(localStorage.getItem("windowPOS")).hspercent[1]
												);
						overwolf.windows.changeSize(ID, 140, 50);
					}
				}, 300);
			};
			
			function hsPercent(){
			
				headshots = localStorage.getItem("Headshots");
				kills = localStorage.getItem("Kills");
			
				var percent = headshots/kills * 100;
				percent = Math.round( percent * 100 ) / 100;
			
				return percent
			
			};
			
			SetHSNPos(-1, localStorage.getItem('HSPercentID'));
			
			window.addEventListener('storage', function( storageEvent ){
					document.getElementById("HSperc").innerHTML = hsPercent() + "%";
			});
			
			document.getElementById("HNimage").ondblclick = function(){updatePOS("HSPercent");};
			document.getElementById("content").onmousedown = function(){wCore.dragMove();};
			
});		