
			function dragMove(){
			//alert("tried to dragmove");
				overwolf.windows.getCurrentWindow(function(result){
					if (result.status=="success"){
						overwolf.windows.dragMove(result.window.id);
					}
				});
			};
			
			function updatePOS(name) {
				
				overwolf.windows.obtainDeclaredWindow(name,
					function(results){
						var test = JSON.parse(localStorage.getItem("windowPOS"));
						test.hscounter[0] = results.window.left;
						test.hscounter[1] = results.window.top;
						localStorage.setItem("windowPOS", JSON.stringify(test));
						//alert(test.hscounter[0]);
						//alert(results.window.left);
					}
				);
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
		
			function SetHSNPos(newState, ID) {
				setTimeout(function(){
					if(newState == -1){
						overwolf.windows.changePosition(ID, 
										JSON.parse(localStorage.getItem("windowPOS")).hscounter[0], 
										JSON.parse(localStorage.getItem("windowPOS")).hscounter[1]
										);
						overwolf.windows.changeSize(ID, 140, 50);
					}
				}, 300);
			};
			
			
			
			SetHSNPos(-1, localStorage.getItem('HSCounterID'));
			window.addEventListener('storage', function( storageEvent ){
					document.getElementById("HScount").innerHTML = localStorage.getItem('Headshots') + " Hs";
			});
			
			document.getElementById("HNimage").ondblclick = function(){updatePOS("HSCounter");};
			document.getElementById("content").onmousedown = function(){dragMove();};
			//document.getElementById("close").onclick = function(){closeWindow();};
			