		
	define(['jquery','gameEvent', 'windowCoreFunctions', 'refreshHUD', 'recording'], function($ ,gEvent, wCore, rHUD, rec){ 
		
		
	
		
		
		
if(!localStorage.getItem('windowPOS')){ //If this is the first launch, initialize array that stores window position coordinates
	var windowPOS = {
		//pixels from top and left. [left,top]
		kdr:[0,0], 
		info:[0,0], 
		hspercent:[0,0],
		smoketimer:[0,0],
		hschains:[0,0],
		hscounter:[0,0],
		main:[0,0],
		crosshair:[0,0]
	};
	localStorage.setItem('windowPOS', JSON.stringify(windowPOS));
}

if(!localStorage.getItem('Settings')){
	var Settings = {
		Rforeplay: " ",
		Rcuddling: " ",
		Rgrab: " ",
		Rkill: false, 
		Rheadshot: 1, 
		Rnade: 1,
		Rmelee: 1,
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
		Rclose: true,
		/*windowPOS : {
		//pixels from top and left. [left,top]
		kdr:[0,0], 
		info:[0,0], 
		hspercent:[0,0],
		smoketimer:[0,0],
		hschains:[0,0],
		hscounter:[0,0],
		main:[0,0],
		crosshair:[0,0]
		}*/
	};
	localStorage.setItem('Settings', JSON.stringify(Settings));
	
	console.log("Settings: " + localStorage.getItem('Settings'));
}
		
/*
outputting
var test = JSON.parse(localStorage.getItem("windowPOS"));
	console.log(test.crosshair[0]); Rclose
*/
	
/*mutating values	
var test = JSON.parse(localStorage.getItem("windowPOS"));
	test.crosshair[0] = 2463572565;
	
	localStorage.setItem("windowPOS", JSON.stringify(test))
	console.log(JSON.parse(localStorage.getItem("windowPOS")));
*/

	localStorage.setItem('smallwindow', "false");
	localStorage.setItem('MainID', " ");
	localStorage.setItem('HSCounterID', " ");
	localStorage.setItem('HSChainsID', " ");
	localStorage.setItem('SmokeTimerID', " ");
	localStorage.setItem('HSPercentID', " ");
	localStorage.setItem('InfoID', " ");
	localStorage.setItem('KDRID', " ");
	localStorage.setItem('CrosshairID'," ");
	localStorage.setItem('SettingsID', " ");
	localStorage.setItem('StatCrackID', " ");
	
	

	function resetLocals(){
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


			
			
		function gear(){
			window.open("https://docs.google.com/spreadsheets/d/1IznIOkCVcsjEiZ3u3T_CRMMWZRd5V_35uvwkYSea-T8/edit#gid=1755591787"); //gear statistics
		};
			
		function tower(){
			window.open("https://steamcommunity.com/sharedfiles/filedetails/?id=299691346"); // tower
		};
			
		function cold(){
			window.open("https://steamcommunity.com/sharedfiles/filedetails/?id=352301863"); //coldpeak
		};

		
		function getWindowID(){
		//This function's only purpose is to do bug testing and it is not related to window ID at all
			var HS = localStorage.getItem('Headshots');
			var Kills = localStorage.getItem('Kills');
			
			HS++;
			Kills++;
			console.log(Kills);
			localStorage.setItem('Headshots', HS);
			localStorage.setItem('Kills', Kills);
			
			var test = JSON.parse(localStorage.getItem("Settings"));
			console.log(test);
		}


			/*
			var currentdate = new Date(); 
			var datetime = "Last Sync: " + currentdate.getDate() + "/"
                + (currentdate.getMonth()+1)  + "/" 
                + currentdate.getFullYear() + " @ "  
                + currentdate.getHours() + ":"  
                + currentdate.getMinutes() + ":" 
                + currentdate.getSeconds();
			
			alert(datetime);*/
		
		


			
			


		


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
	
		function showContent(){
			if(document.getElementById('contentbuttons').style.display != 'none'){
				document.getElementById('contentbuttons').style.display = 'none';
			} else {
				document.getElementById('contentbuttons').style.display = 'block';
			}
		};
	
		function showOptions(){
			if(document.getElementById('Roptions').style.display != 'none'){
				document.getElementById('Roptions').style.display = 'none';
			} else {
				document.getElementById('Roptions').style.display = 'block';
			}
		};
	
	
	
		function ResizeMain(){
		/*This function will trigger upon clicking the icon in the main windows top-left corner
			It resizes the window to be small enough to hide all buttons and text. 
			Toggling it again will make the window larger so that all features can be seen.
		*/
			if(localStorage.getItem("smallwindow") == "true"){
				overwolf.windows.changeSize(localStorage.getItem('MainID'), 160, 490);
				localStorage.setItem("smallwindow", "false");			
			}else if(localStorage.getItem("smallwindow") == "false"){
				overwolf.windows.changeSize(localStorage.getItem('MainID'), 50, 50);
				localStorage.setItem("smallwindow", "true");
			}else
				alert("Houston we have a problem");
		};

		function SetMainPos(newState) {
		//This function is in all window's files. It initializes size and position.
			setTimeout(function(){
				if(newState == -1){
					overwolf.windows.changeSize(localStorage.getItem('MainID'), 50, 50);
					overwolf.windows.changePosition(
											localStorage.getItem('MainID'), 
											JSON.parse(localStorage.getItem("windowPOS")).main[0], 
											JSON.parse(localStorage.getItem("windowPOS")).main[1]
											); 
					localStorage.setItem("smallwindow", "true");
				}
			}, 0); //200 ms as of 8/25 (before external .js) 1000 ms at 9/15 ()before modules) 0 ms at 9/21 (after modules)
		};
			
		
			
			
			//These were made for debugging
			/*overwolf.games.onGameInfoUpdated.addListener(
				function (value) {
				console.log('onGameInfoUpdated');
				console.log(value);
				}
			);
			
			overwolf.games.events.onInfoUpdates.addListener(
				function (value) {
				console.log('onInfoUpdates');
				console.log(value);
				}
			);
			
			overwolf.games.events.onNewEvents.addListener(
				function (value) {
				console.log('onNewEvents');
				console.log(value);
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

	
		
			resetLocals();
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
			$(document).ready(SetMainPos(-1)); // This triggers too early for it to work if I don't include the wait time. Hopefully the jQuery will trigger at a consistent point for different computers, gave it a buffer of 400 MS just in case.

			/*$("#flip").click(function(){
				$("#panel").slideToggle("fast");
			});*/
			
			document.getElementById('contentbuttons').style.display = 'none';
			document.getElementById('Roptions').style.display = 'none';		
			/*
			overwolf.settings.registerHotKey(
			"crosshair",
				function(result) {
					console.log(result);
					if (result.status == "success") {
						alert("This is my cool action!");
					}
					else{
						console.log(result);
					}
				}
			);*/
			
			
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
		document.getElementById("close").onclick = function(){wCore.closeWindow();};
		document.getElementById("SubmitVideo").onclick = function(){SubmitVideo();};
		document.getElementById("getWindowID").onclick = function(){getWindowID();};
		document.getElementById("cold").onclick = function(){cold();};
		document.getElementById("tower").onclick = function(){tower();};
		document.getElementById("gear").onclick = function(){gear();};
		document.getElementById("info").onclick = function(){rHUD.refreshHelper(true, 'Info', 'InfoID');};
		document.getElementById("record").onclick = function(){showOptions();};
		document.getElementById("showcontent").onclick = function(){showContent();};
		document.getElementById("settingsWin").onclick = function(){rHUD.refreshHelper(true, 'Settings', 'SettingsID');};
		
		
		//menu checkboxes
		document.getElementById("HSNum").onchange = function(){rHUD.refreshHUD();};
		document.getElementById("HSPerc").onchange = function(){rHUD.refreshHUD();};
		document.getElementById("HSChain").onchange = function(){rHUD.refreshHUD();};
		document.getElementById("STimer").onchange = function(){rHUD.refreshHUD();};
		document.getElementById("KDRate").onchange = function(){rHUD.refreshHUD();};
		document.getElementById("crosshair").onchange = function(){rHUD.refreshHUD();};
		document.getElementById("autoon").onchange = function(){rec.turnOn();};
		document.getElementById("Stats").onchange = function(){rHUD.refreshHelper(true,"StatCrack",'StatCrackID');};
		
		//replay testing
		document.getElementById("turnOff").onclick = function(){rec.turnOff();};
		document.getElementById("turnOn").onclick = function(){rec.turnOn();};
		document.getElementById("capture").onclick = function(){rec.capture(1,-1);};
		
		console.log(rec);
		
		//Restore all windows together
		overwolf.windows.onMainWindowRestored.addListener(
			function (value) {
				refreshHUD();
			}
		);
		
		//If game ends or changes close the program
		overwolf.games.onGameInfoUpdated.addListener(
			function(resultA){
				var test = JSON.parse(localStorage.getItem("Settings"));
		//		console.log(test);
				if(test.Rclose == true){
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
								if(resultC.id != 7784)
									overwolf.windows.close(localStorage.getItem('MainID'));//game closed
							}
						);
					}
					if(resultA.focusChanged == true){
						overwolf.games.getRunningGameInfo(
							function (resultD){
								if(resultD.isInFocus == true){
									//game is in focus!!!!!
									//restoring main window will trigger a rHUD.refreshHUD() call made above
								}else{
									//game is out of focus!!!!!
									//minimize all?
								}
							}
						);
					}
				}
			}
		);
			
});		
			
			