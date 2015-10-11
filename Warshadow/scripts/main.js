		
require(['jquery','gameEvent', 'windowCoreFunctions', 'refreshHUD', 'recording', 'counters'], function($ ,gEvent, wCore, rHUD, rec, counters){ 
		
			
//localStorage.removeItem('Settings');
// !!! I should make before/after user text box input
if(!localStorage.getItem('Settings')){
	var Settings = {
		enableRecord: true,
		autoLaunch: true,
		restoreOnTab: true,
		minimizeOnTab: true,
		closeOnEnd: true,
		Rforeplay: "5",
		Rcuddling: "5",
		Rgrab: "60",
		Rkill: false, 
		Rheadshot: 0, 
		Rnade: 0,
		Rmelee: 0,
		Rdoublekill: false,
		Rtriplekill: false,
		Rminekill: false,
		Rdefib: false,
		Rflagkill: false,
		Rseverekill: false,
		Rperfkill: false,
		Rslidekill: false,
		Rachievevid: false,
		Rachievepic: false,
		Rcombokill: false,
	};
	localStorage.setItem('Settings', JSON.stringify(Settings));
	console.log("Settings: " + localStorage.getItem('Settings'));
	if (confirm("Welcome to WarShadow! Would you like to go on the '3-click' tour?") == true){
		alert("To collapse the main menu, simply double click on the Warface Logo.");
		alert("To automatically record your best moments, turn on Auto-Capture. Customize your recordings through Settings!");
		alert("Click on the 'info' button to learn more!"); // !!! These will need updating.
	}
}

localStorage.setItem('recordingOn', false); //This is a side effect of my turnOn() recording function. I use this to determine if recording is being used by another app or by me.
		
		
		
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
		launchData.TEST = 1;
	});
	return launchData;
};


/*var launch = (function(){
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
		launchData.TEST = 1;
	});
	return launchData;
})();*/

		

	var smallwindow = true;

	// !!!! Don't allow invalid user input
	// !!!! don't allow text highlighting
	// !!!!! launch_events & in_game_only & ignore_keyboard_events in manifest? permissions and dependancies?
	
		
		function getWinID(name, ID){
		//Start the process of the window named, retrieve and save its ID, and then end the process if it is not the main window.
			overwolf.windows.obtainDeclaredWindow(name, 
				function(result){
					if (result.status == "success"){
						localStorage.setItem(ID, result.window.id);
						
						if(name != "MainWindow")
							overwolf.windows.close(result.window.id);
					}
				}
			);
		};			
			
		function tower(){
			window.open("https://steamcommunity.com/sharedfiles/filedetails/?id=299691346"); // tower
		};
			
		function cold(){
			window.open("https://steamcommunity.com/sharedfiles/filedetails/?id=352301863"); //coldpeak		
		};

	
		function ResizeMain(){
		/*
			This function will trigger upon clicking the icon in the main windows top-left corner
			It resizes the window to be small enough to hide all buttons and text. 
			Toggling it again will make the window larger so that all features can be seen.
*/
		
			if(smallwindow === true){
				overwolf.windows.changeSize(localStorage.getItem('MainID'), 160, 460);
				smallwindow=false;			
		}else if(smallwindow === false){
				overwolf.windows.changeSize(localStorage.getItem('MainID'), 50, 50);
				smallwindow=true;
			}else
				alert("Houston we have a problem");
			
			
		};
	
//		Game Events Listener
		overwolf.games.events.onNewEvents.addListener(
			function (value) {
				var i = 0;
				for(; i < value.events.length; i++){
					console.log("Event: " + value.events[i].name);
					gEvent.nameHandler(value.events[i].name);
				}
			}
		);

			$(document).ready(function(){

var launch = launchData();
console.log("launch", launch);
console.log("autolaunch", launch.autoLaunch, typeof launch.autoLaunch);//these are returning undefined for some reason.
console.log("playing", launch.playing, typeof launch.playing);
console.log("TEST", launch.TEST, typeof launch.TEST);

if(launch.autoLaunch == true || (launch.autoLaunch == false && launch.playing == false)){
	console.log("auto or prelaunch");
	var alerted = false;
	overwolf.games.onMajorFrameRateChange.addListener(function(data){
		console.log("frame rate change data", data);

		if(JSON.parse(localStorage.getItem("Settings")).autoLaunch == false && launch.autoLaunch == true)// !!! if they change it in settings and then there is a FPS spike it would close.
			overwolf.windows.close(localStorage.getItem('MainID'));

		if(data.fps > 15 && data.fps_status == "Stable" && !alerted){
			// !!! won't work if not in focus
			if(JSON.parse(localStorage.getItem("Settings")).enableRecord){
				rec.turnOn();
			}
			alerted = true;
			overwolf.windows.restore(localStorage.getItem('MainID'));
		}
	});

}else if(launch.playing == true){
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
// !!! The above should be in a launchController module
	
	
});
				//Get ID's of each window
				getWinID("MainWindow",'MainID');
				getWinID("HSCounter",'HSCounterID');
				getWinID("HSPercent",'HSPercentID');
				getWinID("HSChains",'HSChainsID');
				getWinID("SmokeTimer",'SmokeTimerID');
				getWinID("Info",'InfoID');
				getWinID("KDR",'KDRID');
				getWinID("StatCrack",'StatCrackID');
				getWinID("Crosshair",'CrosshairID');
				getWinID("Settings",'SettingsID');
				getWinID("StatCrack",'StatCrackID');
			
			// !!!! Either make the height of the window change with the sliders, or make it not slide.
			
			//Slider for recording
			$("#record").click(function(){
				$("#Roptions").slideToggle(200);
			});
			
			//Slider for content
			$("#showcontent").click(function(){
				$("#contentbuttons").slideToggle(200);
			});
			
//		Menu Listeners
		//resize and drag
		document.getElementById("resizeGripTopLeft").onmousedown = function(){('TopLeft');};
		document.getElementById("resizeGripTop").onmousedown = function(){wCore.dragResize('Top');};
		document.getElementById("resizeGripTopRight").onmousedown = function(){wCore.dragResize('TopRight');};
		document.getElementById("resizeGripRight").onmousedown = function(){wCore.dragResize('Right');};
		document.getElementById("resizeGripBottomRight").onmousedown = function(){wCore.dragResize('BottomRight');};
		document.getElementById("resizeGripBottom").onmousedown = function(){wCore.dragResize('Bottom');};
		document.getElementById("resizeGripBottomLeft").onmousedown = function(){wCore.dragResize('BottomLeft');};
		document.getElementById("resizeGripLeft").onmousedown = function(){wCore.dragResize('Left');};
		document.getElementById("content").onmousedown = function(){wCore.dragMove();};
		
		//menu buttons
		document.getElementById("resize").ondblclick = function(){ResizeMain();};
		document.getElementById("close").onclick = function(){wCore.minimizeWindow();};
	//	document.getElementById("SubmitVideo").onclick = function(){SubmitVideo();};
		document.getElementById("cold").onclick = function(){cold();};
		document.getElementById("tower").onclick = function(){tower();};
		document.getElementById("info").onclick = function(){rHUD.refreshHelper(true, 'Info', 'InfoID');};
		document.getElementById("settingsWin").onclick = function(){rHUD.refreshHelper(true, 'Settings', 'SettingsID');};
		document.getElementById("Stats").onclick = function(){rHUD.refreshHelper(true,"StatCrack",'StatCrackID');};
		document.getElementById("STimer").onclick = function(){rHUD.refreshHelper(true,"SmokeTimer",'SmokeTimerID');};
		
		//menu checkboxes
		document.getElementById("HSNum").onchange = function(){rHUD.refreshHUD();};
		document.getElementById("HSPerc").onchange = function(){rHUD.refreshHUD();};
		document.getElementById("HSChain").onchange = function(){rHUD.refreshHUD();};
		
		document.getElementById("KDRate").onchange = function(){rHUD.refreshHUD();};
	//	document.getElementById("crosshair").onchange = function(){document.getElementById('crosshair').checked ? rec.startCapture() : rec.finishCapture();};
		document.getElementById("autoon").onchange = function(){rec.turnOn();};
		
		//replay testing
		document.getElementById("turnOff").onclick = function(){rec.turnOff();};
		document.getElementById("turnOn").onclick = function(){rec.turnOn();};
		document.getElementById("capture").onclick = function(){rec.capture(1,-1);};

		
		//Restore all windows together
		overwolf.windows.onMainWindowRestored.addListener(
			function (value) {
				rHUD.refreshHUD();
			}
		);
		
		
		//If game ends or changes close the program
		overwolf.games.onGameInfoUpdated.addListener(
			function(resultA){
				var test = JSON.parse(localStorage.getItem("Settings"));
		//		console.log(test);
				if(test.closeOnEnd == true){
					if(resultA.runningChanged == true){
						overwolf.games.getRunningGameInfo(
							function (resultB){
								if (resultB == null)
									overwolf.windows.close(localStorage.getItem('MainID'));//game closed
							}
						);
					}
				}
				if(resultA.focusChanged == true){
					overwolf.games.getRunningGameInfo(
						function (resultD){
							if(resultD.isInFocus == true){
								if(test.restoreOnTab == true){
									//game is in focus so restore all except settings and statcrack
									overwolf.windows.restore(localStorage.getItem('MainID'));
									rHUD.refreshHUD();
								}
							}else{
								if(test.minimizeOnTab == true){
									//game is out of focus so minimize all
									
									overwolf.windows.minimize(localStorage.getItem('SmokeTimerID'));
									overwolf.windows.minimize(localStorage.getItem('HSCounterID'));
									overwolf.windows.minimize(localStorage.getItem('HSChainsID'));
									overwolf.windows.minimize(localStorage.getItem('HSPercentID'));
									overwolf.windows.minimize(localStorage.getItem('KDRID'));
									overwolf.windows.minimize(localStorage.getItem('InfoID'));
									overwolf.windows.minimize(localStorage.getItem('MainID'));
									overwolf.windows.minimize(localStorage.getItem('SettingsID'));
									overwolf.windows.minimize(localStorage.getItem('StatCrackID'));
								}
							}
						}
					);
				}
			}
		);
			
});
			
			