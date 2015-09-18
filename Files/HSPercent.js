
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
						test.hspercent[0] = results.window.left;
						test.hspercent[1] = results.window.top;
						localStorage.setItem("windowPOS", JSON.stringify(test));
						//alert(test.hscounter[0]);
						//alert(results.window.left);
						//console.log(JSON.parse(localStorage.getItem("windowPOS")));
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
			document.getElementById("content").onmousedown = function(){dragMove();};
			//document.getElementById("close").onclick = function(){closeWindow();};
			