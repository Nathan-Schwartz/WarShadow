		
require(['jquery','gameEvent', 'windowCoreFunctions', 'refreshHUD', 'recording', 'counters', "launchManager", "localStorageInit"], function($ ,gEvent, wCore, rHUD, rec, counters, launcher, localStorageInit){ 

	var smallwindow = true;
	// !!!  in_game_only in manifest? permissions and dependancies?
	// !!! before submitting app for contest, search for all alerts that haven't been cleaned up yet		
			
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

		

/*		
overwolf.benchmarking.requestHardwareInfo(500, function(value){ console.log("hardware info requested", value);}); //if status = "success" stop requesting
overwolf.benchmarking.onHardwareInfoReady.addListener(
	function(value){
		console.log("HWinfoready listener",value);
		//overwolf.benchmarking.stopRequesting();
	}
);*/		
/*
overwolf.benchmarking.requestFpsInfo(500, function(value){ console.log("fps info requested", value);}); //if status = "success" stop requesting
overwolf.benchmarking.onFpsInfoReady.addListener(
	function(value){
		console.log("fpsinfoready listener",value);
		//overwolf.benchmarking.stopRequesting();
	}
);*/
	
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

//$(document).ready(function(){});
			
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
		$("#resizeGripTopLeft").mousedown(function(){('TopLeft');});
		$("#resizeGripTop").mousedown(function(){wCore.dragResize('Top');});
		$("#resizeGripTopRight").mousedown(function(){wCore.dragResize('TopRight');});
		$("#resizeGripRight").mousedown(function(){wCore.dragResize('Right');});
		$("#resizeGripBottomRight").mousedown(function(){wCore.dragResize('BottomRight');});
		$("#resizeGripBottom").mousedown(function(){wCore.dragResize('Bottom');});
		$("#resizeGripBottomLeft").mousedown(function(){wCore.dragResize('BottomLeft');});
		$("#resizeGripLeft").mousedown(function(){wCore.dragResize('Left');});
		$("#content").mousedown(function(){wCore.dragMove();});
		
		//menu buttons
		$("#resize").dblclick(function(){ResizeMain();});
		$("#close").click(function(){wCore.minimizeWindow();});
		$("#cold").click(function(){cold();});
		$("#tower").click(function(){tower();});
		$("#info").click(function(){rHUD.refreshHelper(true, 'Info', 'InfoID');});
		$("#settingsWin").click(function(){rHUD.refreshHelper(true, 'Settings', 'SettingsID');});
		$("#Stats").click(function(){rHUD.refreshHelper(true,"StatCrack",'StatCrackID');});
		$("#STimer").click(function(){rHUD.refreshHelper(true,"SmokeTimer",'SmokeTimerID');});
		
		//menu checkboxes
		$("#HSNum").change(function(){rHUD.refreshHUD();});
		$("#HSPerc").change(function(){rHUD.refreshHUD();});
		$("#HSChain").change(function(){rHUD.refreshHUD();});
		
		$("#KDRate").change(function(){rHUD.refreshHUD();});
		$("#autoon").change(function(){rec.turnOn();});
		
		//replay testing
		$("#turnOff").click(function(){rec.turnOff();});
		$("#turnOn").click(function(){rec.turnOn();});
		$("#capture").click(function(){rec.capture(1,-1);});

		
		//Restore all windows together
		overwolf.windows.onMainWindowRestored.addListener(
			function (value) {
				rHUD.refreshHUD();
			}
		);
		
		
		//If game ends close the program, focus change manager
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
				if(resultA.focusChanged === true){ // if open and minimize are disabled, app can disapear behind other apps when tabbed out, and will open in game if not minimized. 
					overwolf.games.getRunningGameInfo( // !!! This is actually returned as a property from the onGameInfoUpdated function
						function (resultD){
							if(resultD.isInFocus === true){
								if(test.restoreOnTab === true){
									//game is in focus so restore all except settings and statcrack
									overwolf.windows.restore(localStorage.getItem('MainID'));
									rHUD.refreshHUD();
								}
							}else{
								if(test.minimizeOnTab === true){
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
			
			