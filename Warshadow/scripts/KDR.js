
	define(['windowCoreFunctions'], function(wCore){
			
			function updatePOS(name) {
				overwolf.windows.obtainDeclaredWindow(name,
					function(results){
						var test = JSON.parse(localStorage.getItem("windowPOS"));
						test.kdr[0] = results.window.left;
						test.kdr[1] = results.window.top;
						localStorage.setItem("windowPOS", JSON.stringify(test));
					}
				);
			};
		
			function SetHSNPos(newState, ID) {
				setTimeout(function(){
					if(newState == -1){
						overwolf.windows.changePosition(ID, 
												JSON.parse(localStorage.getItem("windowPOS")).kdr[0], 
												JSON.parse(localStorage.getItem("windowPOS")).kdr[1]
												);
						overwolf.windows.changeSize(ID, 140, 50);
					}
				}, 300);
			};
			
			
			function calcKD(){
				var KDRatio = Number(localStorage.getItem('PVPKills')) / Number(localStorage.getItem('PVPDeaths'));
				KDRatio = Math.round( KDRatio * 100 ) / 100;
				if (KDRatio == "NaN")
					console.log("KD was NaN");
					
				return KDRatio;
			};
			
			SetHSNPos(-1, localStorage.getItem('KDRID'));
			
			window.addEventListener('storage', function( storageEvent ){
					document.getElementById("KD").innerHTML = calcKD() + " K/D";
			});
			
			document.getElementById("KDRimage").ondblclick = function(){updatePOS("KDR");};
			document.getElementById("content").onmousedown = function(){wCore.dragMove();};

});