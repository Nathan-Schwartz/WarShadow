
	define(['windowCoreFunctions'], function(wCore){

			
			function updatePOS(name) { //Updates window position as stored in localStorage
				overwolf.windows.obtainDeclaredWindow(name,
					function(results){
						var test = JSON.parse(localStorage.getItem("windowPOS"));
						test.smoketimer[0] = results.window.left;
						test.smoketimer[1] = results.window.top;
						localStorage.setItem("windowPOS", JSON.stringify(test));
					}
				);
			};
			
			
			function SetSTPos(newState, ID) {//initializes window position and size, called after short delay to allow for loading times. Not optimal way to choose wait time
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
				setInterval(
					function () {
						timer--;
						document.getElementById("smoke_content").innerHTML = timer-1;
				
						if (timer < 2) {
							document.getElementById("smoke_content").innerHTML = "<div id='smoke_alert' class='smoke'>NOW</div>";
							if(timer < 1)
								wCore.closeWindow();
						}
					}, 
				1000);
			}

			
	
		SetSTPos(-1, localStorage.getItem('SmokeTimerID'));
		startTimer(14);
		
		
		document.getElementById("smoke_image").ondblclick = function(){updatePOS("SmokeTimer");};
		document.getElementById("content").onmousedown = function(){wCore.dragMove();};
		
	});
		