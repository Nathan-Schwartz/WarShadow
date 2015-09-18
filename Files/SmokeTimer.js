			function dragMove(){
				overwolf.windows.getCurrentWindow(function(result){
					if (result.status=="success"){
						overwolf.windows.dragMove(result.window.id);
					}
				});
			};
			
			function closeWindow(){
				overwolf.windows.getCurrentWindow(function(result){
					if (result.status=="success"){
						overwolf.windows.close(result.window.id);
					}
				});
			};
			
			function updatePOS(name) {
				overwolf.windows.obtainDeclaredWindow(name,
					function(results){
						var test = JSON.parse(localStorage.getItem("windowPOS"));
						test.smoketimer[0] = results.window.left;
						test.smoketimer[1] = results.window.top;
						localStorage.setItem("windowPOS", JSON.stringify(test));
						//alert(test.hscounter[0]);
						//alert(results.window.left);
					}
				);
			};
			
			
			function SetSTPos(newState, ID) {
				setTimeout(function(){
					if(newState == -1){
						overwolf.windows.changePosition(ID, 
												JSON.parse(localStorage.getItem("windowPOS")).smoketimer[0], 
												JSON.parse(localStorage.getItem("windowPOS")).smoketimer[1]
												);
						overwolf.windows.changeSize(ID, 100, 60);
					}
				}, 1000);
			};
			
	
			
			
			function startTimer(timer) {
				//var timer = 15;
				setInterval(
					function () {
						timer--;
						document.getElementById("moresmoke").innerHTML = timer-1;
				
						if (timer < 2) {
							document.getElementById("moresmoke").innerHTML = "<div id='evenmoresmoke' class='smoke'>NOW</div>";
							if(timer < 1)
								closeWindow();
						}
					}, 
				1000);
			}

			
	
		SetSTPos(-1, localStorage.getItem('SmokeTimerID'));
		startTimer(15);
		
		
		document.getElementById("Smoke").ondblclick = function(){updatePOS("SmokeTimer");};
		document.getElementById("content").onmousedown = function(){dragMove();};