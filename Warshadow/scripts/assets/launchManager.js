define(["recording"], function(rec){

// !!! This file needs a loooot of testing still.


//autoLaunch starts minimized so if current window is minimized then it was autolaunched
//if autolaunched use the FPS listener to initiate window.
//else check if game is running, if true initiate recording, else use FPS listener method	

function launchData(){
	var launchData = new Object;
	
	overwolf.windows.getCurrentWindow(function(data){
		console.log('currentwindow', data);
		launchData.autoLaunch = !data.window.isVisible;
	});
	
	overwolf.games.getRunningGameInfo(function(data){
		console.log("runningGameInfo",data);
		if(data !== null){
			launchData.focused = data.isInFocus;

			launchData.playing = data.isRunning;
		}else{
			launchData.playing = false;
			launchData.focused = false;
		}
	});
	return launchData;
};


var launch = launchData();
	
setTimeout(function(){ //all properties of launch were returning as undefined until i delayed using them.
	console.log("launch", launch);

	if(launch.autoLaunch === true || (launch.autoLaunch === false && launch.playing === false)){
		console.log("auto or prelaunch");
		var alerted = false;

		if(JSON.parse(localStorage.getItem("Settings")).autoLaunch == false && launch.autoLaunch === true)// If they don't want it to autolaunch, and it autolaunched, close it.
			overwolf.windows.close(localStorage.getItem('MainID'));
	
		overwolf.games.onMajorFrameRateChange.addListener(function(data){
			console.log("frame rate change data", data);

			if(data.fps > 15 && data.fps_status == "Stable"){
			
				overwolf.games.getRunningGameInfo(function(value){
				
					console.log("focus callback", value.isInFocus);
			
					if(value.isInFocus === false){
						console.log('out of focus');
						overwolf.games.onGameInfoUpdated.addListener(function(data){ // !!! This method of delaying the enabling of recording hasn't been verified yet
							if(data.focusChanged === true && !alerted){
								console.log("trying rec");
								if(JSON.parse(localStorage.getItem("Settings")).enableRecord){
									rec.turnOn();
								}
								alerted = true;
								overwolf.windows.restore(localStorage.getItem('MainID'));
							}
						});
					}else if(value.isInFocus === true && !alerted){
						console.log("tracker");
						if(JSON.parse(localStorage.getItem("Settings")).enableRecord){
							rec.turnOn();
						}
						alerted = true;
						overwolf.windows.restore(localStorage.getItem('MainID'));
					}
				});
			}
		});

	}else if(launch.playing === true){
		console.log("manual launch in game");
		if(JSON.parse(localStorage.getItem("Settings")).enableRecord){
			rec.turnOn();
		}
	
	}else{
		console.log("else");
		if(JSON.parse(localStorage.getItem("Settings")).enableRecord){
			rec.turnOn(); 
		}
		overwolf.windows.restore(localStorage.getItem('MainID')); 
	}

}, 1000);


 });