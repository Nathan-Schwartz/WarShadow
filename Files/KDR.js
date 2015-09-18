
			function dragMove(){
			//alert("tried to dragmove");
				overwolf.windows.getCurrentWindow(function(result){
					if (result.status=="success"){
						overwolf.windows.dragMove(result.window.id);
					}
				});
			};
			
			
			function closeWindow(){
				overwolf.windows.getCurrentWindow(
					function(result){
						if (result.status=="success"){
							overwolf.windows.close(result.window.id);
						}
					}
				);
			};
			
			function updatePOS(name) {
				overwolf.windows.obtainDeclaredWindow(name,
					function(results){
						var test = JSON.parse(localStorage.getItem("windowPOS"));
						test.kdr[0] = results.window.left;
						test.kdr[1] = results.window.top;
						localStorage.setItem("windowPOS", JSON.stringify(test));
						//alert(test.hscounter[0]);
						//alert(results.window.left);
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
				var KDRatio = localStorage.getItem('PVPKills')*1 / localStorage.getItem('PVPDeaths')*1;
				KDRatio = Math.round( KDRatio * 100 ) / 100;
				if (KDRatio == "NaN")
					return 0;
					
				return KDRatio;
			};
			
			SetHSNPos(-1, localStorage.getItem('KDRID'));
			
			window.addEventListener('storage', function( storageEvent ){
					document.getElementById("KD").innerHTML = calcKD() + " K/D";
			});
			
			document.getElementById("KDRimage").ondblclick = function(){updatePOS("KDR");};
			document.getElementById("content").onmousedown = function(){dragMove();};
			//document.getElementById("close").onclick = function(){closeWindow();};
			