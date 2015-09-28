		
	define(['jquery','gameEvent', 'windowCoreFunctions', 'refreshHUD', 'recording'], function($ ,gEvent, wCore, rHUD, rec){ 
		
		
	
		//overwolf.windows.changeSize(localStorage.getItem('MainID'), 2, 2);
		
localStorage.removeItem('windowPOS');

if(!localStorage.getItem('windowPOS')){ //If this is the first launch, initialize array that stores window position coordinates
	var windowPOS = {
		//pixels from top and left. [left,top]
		kdr:[50,150], 
		info:[250,200], 
		hspercent:[50,150],
		smoketimer:[50,150],
		hschains:[50,150],
		hscounter:[50,150],
		main:[50,200],
		crosshair:[50,150]
	};// !!!! I need to move this to 'Settings'
	localStorage.setItem('windowPOS', JSON.stringify(windowPOS));
	console.log("windowPOS: " + localStorage.getItem('windowPOS'));
}


//localStorage.removeItem('Settings');

if(!localStorage.getItem('Settings')){
	var Settings = {
		restoreOnTab: true,
		minimizeOnTab: false,
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
		windowPOS : {
		kdr:[50,200], 
		info:[50,200], 
		hspercent:[50,200],
		smoketimer:[50,200],
		hschains:[50,200],
		hscounter:[50,200],
		main:[50,200],
		crosshair:[50,200]
		}
	};
	localStorage.setItem('Settings', JSON.stringify(Settings));
	console.log("Settings: " + localStorage.getItem('Settings'));
	if (confirm("Welcome to WarShadow! Would you like to go on the exclusive, one-time-only '5-click' tour?") == false)
		alert("Too bad! It will be good for you. :)")// You get the 6-click tour.
	
	alert("To expand the main menu, simply double click on the Warface Logo.");
	alert("WarShadow will remember where you like your windows. All you have to do is double click the image in any window to save it as your preferred location!");
	alert("To automatically record your best moments, turn on Auto-Capture. Customize your recordings through Settings!");
	alert("If you want to calculate repairs, pick a loadout, or learn which weapon is best for you, check out StatCrack.");
	alert("Click on the 'info' button if you want a refresher or if you want to learn more!");
}
		
		/*var test = JSON.parse(localStorage.getItem("Settings"));
		console.log(test);
		console.log(test.windowPOS.main[0]);
		console.log(test.windowPOS.main[1]);*/
		
/*
outputting
var test = JSON.parse(localStorage.getItem("windowPOS"));
	console.log(test.crosshair[0]); Rclose
*/
	
/*
mutating values	
var test = JSON.parse(localStorage.getItem("windowPOS"));
	test.crosshair[0] = 2463572565;
	
	localStorage.setItem("windowPOS", JSON.stringify(test))
	console.log(JSON.parse(localStorage.getItem("windowPOS")));
*/

	localStorage.setItem('smallwindow', false); // !!!! since this is in a module I could store it in the "global namespace" without issue cuz it isn't really.

	
	

	function resetCounters(){
		localStorage.setItem('Kills', 0); 
		localStorage.setItem('Headshots', 0); 
		localStorage.setItem('Defibs', 0);
		localStorage.setItem('TWWWOOOOCHAAAAAIIIIIIIINNNNNZZZZZ',0);
		localStorage.setItem('3chain',0);
		localStorage.setItem('4chain',0);
		localStorage.setItem('5chain',0);
		localStorage.setItem('PVPKills',0);
		localStorage.setItem('PVPDeaths',0);
	};
	
		
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



		function updatePOS(name) {
		//This function is used in every window's file. It saves the x and y offset of the windows position from the top left corner.
			overwolf.windows.obtainDeclaredWindow(name,
				function(results){
					var test = JSON.parse(localStorage.getItem("windowPOS"));
					test.main[0] = results.window.left;
					test.main[1] = results.window.top;
					localStorage.setItem("windowPOS", JSON.stringify(test));
				}
			);
		};
	

	
		function ResizeMain(){
		/*
			This function will trigger upon clicking the icon in the main windows top-left corner
			It resizes the window to be small enough to hide all buttons and text. 
			Toggling it again will make the window larger so that all features can be seen.
		*/
			if(JSON.parse(localStorage.getItem("smallwindow")) === true){
				overwolf.windows.changeSize(localStorage.getItem('MainID'), 160, 460);
				localStorage.setItem("smallwindow", false);			
		}else if(JSON.parse(localStorage.getItem("smallwindow")) === false){
				overwolf.windows.changeSize(localStorage.getItem('MainID'), 50, 50);
				localStorage.setItem("smallwindow", true);
			}else
				alert("Houston we have a problem");
			
			
		};

		function SetMainPos() {
		//This function is in all window's files. It initializes size and position.
		
			overwolf.windows.changePosition(
					localStorage.getItem('MainID'), 
					JSON.parse(localStorage.getItem("windowPOS")).main[0], 
					JSON.parse(localStorage.getItem("windowPOS")).main[1]
			); 
				setTimeout(function(){
					overwolf.windows.changeSize(localStorage.getItem('MainID'), 50, 50);
					localStorage.setItem("smallwindow", "true");
				
				}, 100); //200 ms as of 8/25 (before external .js) 1000 ms at 9/15 ()before modules) 0 ms at 9/21 (after modules)
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

	
			resetCounters(); // !!!! I could just declare the counters in a seperate file and create increment and reset methods
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
			$(document).ready(SetMainPos()); // This triggers too early for it to work if I don't include the wait time. Hopefully the jQuery will trigger at a consistent point for different computers, gave it a buffer of 400 MS just in case.

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
		document.getElementById("resize").ondblclick = function(){updatePOS("MainWindow"); ResizeMain();};
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
		document.getElementById("crosshair").onchange = function(){document.getElementById('crosshair').checked ? rec.startCapture() : rec.finishCapture();};
		document.getElementById("autoon").onchange = function(){rec.turnOn();};// !!!!! only if checked?
		
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
					if(resultA.gameChanged == true){
						overwolf.games.getRunningGameInfo(
							function (resultC){
								//alert(resultC.id);
								if(resultC.id != 77844)
									overwolf.windows.close(localStorage.getItem('MainID'));//wrong game opened
							}
						);
					}
				}
				if(resultA.focusChanged == true){
					overwolf.games.getRunningGameInfo(
						function (resultD){
							if(resultD.isInFocus == true){
								if(test.restoreOnTab == true){
									//game is in focus!!!!!
									overwolf.windows.restore(localStorage.getItem('MainID'));
									rHUD.refreshHUD();
									 
									//console.log(overwolf.windows.getWindowState(localStorage.getItem('MainID'))); //!!!!!!!!!!!!!! returning undefined
								}
							}else{
								if(test.minimizeOnTab == true){
									//game is out of focus
									//minimize all
									
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
			
			