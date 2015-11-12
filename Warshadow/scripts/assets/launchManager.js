define(["recording"], function(rec){

//autoLaunch starts minimized so if current window is minimized then it was autolaunched
//if autolaunched use the FPS listener to initiate window.
//else check if game is running, if true initiate recording, else use FPS listener method	


	var launch = {};
	
	(function initLaunch(){
		overwolf.windows.getCurrentWindow(function(data){
			launch.autoLaunch = !data.window.isVisible;
			checkRunningGame();
		});
		
		function checkRunningGame(){
			overwolf.games.getRunningGameInfo(function(data){
				if(data !== null){
					launch.focused = data.isInFocus;
					launch.playing = data.isRunning;
				}else{
					launch.playing = false;
					launch.focused = false;
				}
				continueLaunch();
			});
		}
	})();
	
	function continueLaunch(){
		alert(launch.autoLaunch);
		var alerted = false;		
		var scenario = "";
		
		// If user doesn't want app to autolaunch, and it autolaunched, close app.
		if(JSON.parse(localStorage.getItem("Settings")).autoLaunch == false && launch.autoLaunch === true)
			overwolf.windows.close(localStorage.getItem('MainID'));
	
		if(launch.autoLaunch === true){
			console.log("auto-launch");
			scenario = "auto";
		}else if(launch.autoLaunch === false && launch.playing === false){
			console.log("pre-launch");
			scenario = "pre";
		}else if(launch.playing === true){
			console.log("manual-launch")
			scenario = "manual";
		}
				
		switch(scenario){
			case "auto":
			case "pre":
				fpsLaunch();
				break;
			case "manual":
				if(!tryLaunch()){
					fpsLaunch();
				}
				break;
				
			default:
				tryLaunch();
				break;
		}
		
		function fpsLaunch(){
			overwolf.games.onMajorFrameRateChange.addListener(function(data){
				if(data.fps > 15 && data.fps_status == "Stable" && !alerted){
					//console.log("stable and over 15");
					tryLaunch();
				}
			});
		};
		
		function tryLaunch(){
			overwolf.games.getRunningGameInfo(function(value){
			//	console.log("focus callback", value.isInFocus);
				if(value.isInFocus === true && !alerted){
					if(JSON.parse(localStorage.getItem("Settings")).enableRecord){
						rec.turnOn(function(result){
							if(result.status == "success"){
								alerted = true;
								overwolf.windows.restore(localStorage.getItem('MainID'));
								return true;
							}else{
								console.log("error was", result.error);
								//return false;
							}
						});
					}
				}else{
					return false;
				}
			});
		};
	};
});