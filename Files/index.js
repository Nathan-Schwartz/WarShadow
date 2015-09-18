		
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

if(!localStorage.getItem('Rsettings')){
	var Rsettings = {
		Rforeplay: " ",
		Rcuddling: " ",
		Rgrab: " ", //parseint( , 10);
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
		Rclose: true
	};
	localStorage.setItem('Rsettings', JSON.stringify(Rsettings));
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

	var smallwindow = false; //This will keep track of the state of the Main window

	localStorage.setItem('MainID', " ");
	localStorage.setItem('HSCounterID', " ");
	localStorage.setItem('HSChainsID', " ");
	localStorage.setItem('SmokeTimerID', " ");
	localStorage.setItem('HSPercentID', " ");
	localStorage.setItem('InfoID', " ");
	localStorage.setItem('KDRID', " ");
	localStorage.setItem('CrosshairID'," ");
	localStorage.setItem('RecordingID', " ");
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

		function dragResize(edge){
			overwolf.windows.getCurrentWindow(function(result){
				if (result.status=="success"){
					overwolf.windows.dragResize(result.window.id, edge);
				}
			});
		};
		
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
					overwolf.windows.minimize(result.window.id); //should really be close, but this might prevent game crashes when i close it.
				}
			});
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
		//This function's only purpose is to do bug testing
			var HS = localStorage.getItem('Headshots');
			var Kills = localStorage.getItem('Kills');
			
			HS++;
			Kills++;
			console.log(Kills);
			localStorage.setItem('Headshots', HS);
			localStorage.setItem('Kills', Kills);
			
			var test = JSON.parse(localStorage.getItem("Rsettings"));
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
		
		
		function refreshHelper(checked, name, ID){
		/*
			This function is responsible for opening subwindows when their elements are triggered.
		*/
			if (checked == true){
				overwolf.windows.getWindowState(localStorage.getItem(ID),
					function(value){
						if(value.window_state == "closed"){ //if it is closed we will open it
							overwolf.windows.obtainDeclaredWindow(name, 
								function(result){
									if (result.status != "success") //if opening it doesn't work, alert me
										alert("obtain window failed in refreshHelper");
									else
										overwolf.windows.restore(localStorage.getItem(ID));
								}
							);
						}
						else
							overwolf.windows.restore(localStorage.getItem(ID));
					}
				);
				overwolf.windows.restore(localStorage.getItem(ID)); //now that I know the window is running, open it.
			
			}else{
				overwolf.windows.getWindowState(localStorage.getItem(ID), 
					function(value){
						//console.log(value);
						if(name == "Crosshair") //this is here so that if I bind the crosshair window to a hotkey and set the hotkey to ADS it can open/close faster
							if(value.window_state != "minimized")
								overwolf.windows.minimize(localStorage.getItem(ID));
						else		
							if(value.window_state != "closed")
								overwolf.windows.close(localStorage.getItem(ID));
					}
				);
			}
		};

		function refreshHUD(){
		//This function makes sure that all HUD elements are in the state they should be.
			if (document.getElementById('HSNum').checked)
				refreshHelper(true,"HSCounter","HSCounterID");	
				
			else
				refreshHelper(false,"HSCounter","HSCounterID");
		
						
			if (document.getElementById('HSChain').checked)
				refreshHelper(true,"HSChains",'HSChainsID');
				
			else
				refreshHelper(false,"HSChains",'HSChainsID');
					
			if (document.getElementById('HSPerc').checked)
				refreshHelper(true,"HSPercent",'HSPercentID');	
			
			else
				refreshHelper(false,"HSPercent",'HSPercentID');
			

			if (document.getElementById('STimer').checked)
				refreshHelper(true,"SmokeTimer",'SmokeTimerID');
					
			else
				refreshHelper(false,"SmokeTimer",'SmokeTimerID');

			if (document.getElementById('Stat').checked)
				refreshHelper(true,"StatCrack",'StatCrackID');

			else
				refreshHelper(false,"StatCrack",'StatCrackID');
				
			if (document.getElementById('KDRate').checked)
				refreshHelper(true,"KDR",'KDRID');

			else
				refreshHelper(false,"KDR",'KDRID');
				
			if (document.getElementById('crosshair').checked)
				refreshHelper(true, 'Crosshair', 'CrosshairID');
			else
				refreshHelper(false, 'Crosshair', 'CrosshairID');
				
			/*if (document.getElementById('record').checked)
				refreshHelper(true, 'Recording', 'RecordingID');
			else
				refreshHelper(false, 'Recording', 'RecordingID');*/
		};

		
		/*

		function SubmitVideo(){
		//wasted space at the moment
			overwolf.windows.getOpenWindows(function(result){
				console.log(result); 
			});
		};
*/

			
			function nameHandler(name){
			
				//	var temp = JSON.parse(localStorage.getItem("Rsettings"));

				if (name == "kill"){
					if((document.getElementById("autoon").checked == true)&&(JSON.parse(localStorage.getItem("Rsettings")).Rkill == true)){
					alert("Kill works");
					//testCapture(12000, 3000);
					//testCapture(6000, -1);
					}
				
					var Kills = localStorage.getItem('Kills');
					Kills++;
					localStorage.setItem('Kills', Kills);
					
				}else if (name == "defibrillator_kill"){
					if((document.getElementById("autoon").checked == true)&&(JSON.parse(localStorage.getItem("Rsettings")).Rdefib == true)){
					//testCapture(12000, 3000);
					alert("defib works");
					}
					
					var Defibs = localStorage.getItem('Defibs');
					Defibs++;
					localStorage.setItem('Defibs', Defibs);
					
				}else if (name == "kill_headshot"){
					if((document.getElementById("autoon").checked == true)&&(JSON.parse(localStorage.getItem("Rsettings")).Rheadshot == 1)){
						//alert("single headshot works");
						var count = 0;
						var interval = setInterval( //The event is triggered before the achievement appears on the screen so we wait one second, then take a couple.
							function () {
								if(count=1)
									console.log("single");
									testCapture(6000, 1);
								count++;
								console.log(count);
								if(count >1){
									clearInterval(interval);
								}
							}, 
						3000);
					}
					
					var Headshots = localStorage.getItem('Headshots');
					Headshots++;
					localStorage.setItem('Headshots', Headshots);
					
					
					
					
				
				}else if (name == "kill_melee"){
					if((document.getElementById("autoon").checked == true)&&(JSON.parse(localStorage.getItem("Rsettings")).Rmelee == 1)){
						alert("single melee works");
					}
					
				}else if (name == "headshots_in_a_row_2"){
					if((document.getElementById("autoon").checked == true)&&(JSON.parse(localStorage.getItem("Rsettings")).Rheadshot == 2)){
						alert("double melee/2 chain works");
					}
					
					var TwoHeadshots = localStorage.getItem('TWWWOOOOCHAAAAAIIIIIIIINNNNNZZZZZ');
					TwoHeadshots++;
					localStorage.setItem('TWWWOOOOCHAAAAAIIIIIIIINNNNNZZZZZ', TwoHeadshots);
				
				}else if(name == "double_kill"){
					if((document.getElementById("autoon").checked == true)&&(JSON.parse(localStorage.getItem("Rsettings")).Rdoublekill == true)) {
						alert("double kill works");
					}
					
				}else if (name == "melee_kills_in_a_row_1"){
					if((document.getElementById("autoon").checked == true)&&(JSON.parse(localStorage.getItem("Rsettings")).Rmelee == 2)){					
						alert("butcher works");
					}
					/*var count = 0;
					var interval = setInterval( //The event is triggered before the achievement appears on the screen so we wait one second, then take a couple.
						function () {
							if(count=1)
								console.log("2 hs");
								testCapture(10000, -1);
							count++;
							console.log(count);
							if(count >1){
								clearInterval(interval);
							}
						}, 
					2000);*/
				
				}else if (name == "headshots_in_a_row_3"){
					if((document.getElementById("autoon").checked == true)&&(JSON.parse(localStorage.getItem("Rsettings")).Rheadshot == 3)) {
						alert("3chain works"); 
					}
				//testCapture(12000, 18000);
					//testCapture(12000,-1);
					
					var ThreeHeadshots = localStorage.getItem('3chain');
					ThreeHeadshots++;
					localStorage.setItem('3chain', ThreeHeadshots);
					
				}else if (name == "pvp_triple_kill") { 
					if((document.getElementById("autoon").checked == true)&&(JSON.parse(localStorage.getItem("Rsettings")).Rtriplekill == true)&&(JSON.parse(localStorage.getItem("Rsettings")).Rdoublekill == false)) {	
						alert("triple kill works");
					}
				
				}else if(name == "melee_kills_in_a_row_2"){ 
					if((document.getElementById("autoon").checked == true)&&(JSON.parse(localStorage.getItem("Rsettings")).Rmelee == 3)){
						alert("bloody butcher works");
					}
					
				}else if(name == "headshots_in_a_row_4"){ 
					if((document.getElementById("autoon").checked == true)&&(JSON.parse(localStorage.getItem("Rsettings")).Rheadshot == 4)){
						alert("4 chain works");
					}
					//testCapture(16000, 160000);
					//testCapture(15000, -1);
					
					var TwoHeadshots = localStorage.getItem('4chain');
					FourHeadshots++;
					localStorage.setItem('4chain', FourHeadshots);
					
				}else if (name == "headshots_in_a_row_5"){ 
					if((document.getElementById("autoon").checked == true)&&(JSON.parse(localStorage.getItem("Rsettings")).Rheadshot == 5)) { 
						alert("annhilator works");
					}
					//testCapture(20000,14000);
					//testCapture(20000, -1);
					
					
					var TwoHeadshots = localStorage.getItem('5chain');
					FiveHeadshots++;
					localStorage.setItem('5chain', FiveHeadshots);
					
					
				}else if (name == "melee_kills_in_a_row_3"){ 
					if((document.getElementById("autoon").checked == true)&&(JSON.parse(localStorage.getItem("Rsettings")).Rmelee == 5)){
						alert("hellbutcher works");
					}
				
				}else if (name == "achievement_gained"){
					if((document.getElementById("autoon").checked == true)&&(JSON.parse(localStorage.getItem("Rsettings")).Rachievepic == true)){
						var count = 0;
						var interval = setInterval( //The event is triggered before the achievement appears on the screen so we wait one second, then take a couple.
							function () {
								if(count=1)
									overwolf.media.takeScreenshot(
										function(result){
											if(result.status != "success"){
												alert("Screenshot didn't work");
											}
										}
									);
								count++;
								console.log(count);
								if(count >= 2){
									clearInterval(interval);
								}
							}, 
						1000);
					}
					if((document.getElementById("autoon").checked == true)&&(JSON.parse(localStorage.getItem("Rsettings")).Rachievevid == true)){
						testCapture(30000,30000);
					}

				}else if (name == "pvp_flag_kill"){	
					if((document.getElementById("autoon").checked == true)&&(JSON.parse(localStorage.getItem("Rsettings")).Rflagkill == true)){
					}
				}else if (name == "claymore_kill"){ 
					if((document.getElementById("autoon").checked == true)&&(JSON.parse(localStorage.getItem("Rsettings")).Rminekill == true)){
						alert("mine kills works");
					}
					//testCapture(12000, 1000);
				}else if (name == "two_at_once_kill"){
					if((document.getElementById("autoon").checked == true)&&(JSON.parse(localStorage.getItem("Rsettings")).Rperfkill == true)){
						alert("Perf works");
					}
					//testCapture(12000, 5000);
				}else if (name == "kill_grenade"){
					if((document.getElementById("autoon").checked == true)&&(JSON.parse(localStorage.getItem("Rsettings")).Rnade == 1)){
						alert("single grenade works");
					}
					
				}else if (name == "grenade_kills_in_a_row_1"){
					if((document.getElementById("autoon").checked == true)&&(JSON.parse(localStorage.getItem("Rsettings")).Rnade == 2)){
						alert("grenadier works");
					}
				}else if (name == "grenade_kills_in_a_row_2"){ 
					if((document.getElementById("autoon").checked == true)&&(JSON.parse(localStorage.getItem("Rsettings")).Rnade == 3)){
						alert("mega grenadier works");
					}
				}else if (name == "grenade_kills_in_a_row_3"){ 
					if((document.getElementById("autoon").checked == true)&&(JSON.parse(localStorage.getItem("Rsettings")).Rnade == 5)){
						alert("ubergrenadier works");
					}
				}else if (name == "in_knock_back_kill"){ 
					if((document.getElementById("autoon").checked == true)&&(JSON.parse(localStorage.getItem("Rsettings")).Rseverekill)){	
						alert("severe works");
					}
				}
				/*
					combo kill Rcombokill: false
		
					kill_in_slide Rslidekill: false,
				*/
			};


		


		function updatePOS(name) {
		//This function is used in every window's file. It saves the x and y offset of the windows position from the top left corner.
			overwolf.windows.obtainDeclaredWindow(name,
				function(results){
					var test = JSON.parse(localStorage.getItem("windowPOS"));
					test.main[0] = results.window.left;
					test.main[1] = results.window.top;
					localStorage.setItem("windowPOS", JSON.stringify(test));
					//alert(test.hscounter[0]);
					//alert(results.window.left);
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
			if(smallwindow == true){
				overwolf.windows.changeSize(localStorage.getItem('MainID'), 160, 490);
				smallwindow = false;			
			}else if(smallwindow == false){
				overwolf.windows.changeSize(localStorage.getItem('MainID'), 50, 50);
				smallwindow = true;
			}else
				alert("Wtf");
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
					smallwindow = true;
				}
			}, 1000); //200 min as of 8/25 (before external .js)
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
		

		
		
		
		
		
	function testTurnOn(){
		overwolf.media.replays.turnOn(
			{"settings": {
				"audio": {
					"mic": {
						"volume": 100,
						"enabled": true
					},
					"game": {
						"volume": 75,
						"enabled": true
					}
				},
				//in absence of video settings here, recording will use setting config from overwolf capture settings.
				"video": {
					//"auto_calc_kbps": false,
					"fps": 30,
					"width": 1280,
					"height": 720,
					/*"max_kbps": 1500,
					"encoder": {
						"name": "overwolf.streaming.enums.StreamEncoder.X264",
						"config": {
							"preset": "overwolf.streaming.enums.StreamEncoderPreset_x264.ULTRAFAST",
							"rate_control": "overwolf.streaming.enums.StreamEncoderRateControl_x264.RC_CBR",
							"keyframe_interval": 2
						}
					}*/
				},
				"peripherals": {
					"capture_mouse_cursor": "both"
				}
			}}, 
			function(result) {
				console.log(result);
				if(result.status== "success"){
			
				}else{
					if(result.error != "Already turned on."){
						alert("I'm sorry, the background process for the capturing feature wasn't able to work properly. Overwolf says the error is: " + result.error);
					}
				}
			}	
		);
	};	
		
		
	function testTurnOff(){
		overwolf.media.replays.turnOff(
			function(result) {
				console.log(result);
				if(result.status== "success"){}
					//alert("success");
				else
					alert(result.error);
			}
		);
	};	
		
function testCapture(before, after){
	
	if(after == -1){
		if(isNaN(parseInt(JSON.parse(localStorage.getItem("Rsettings")).Rgrab))){
			alert("you entered a bad value")
		}
		else{
			before = before + (parseInt(JSON.parse(localStorage.getItem("Rsettings")).Rgrab)*1000);
			overwolf.media.replays.capture(before, after, 
				function(result){if(result) console.log(result);},
				function(results){
					console.log(results);
					if(results.status== "success"){
						overwolf.media.replays.finishCapture(results.url, //try to send the whole object next time if this isn't working 100%
							function(results){
								console.log(results);
								if(results.status== "success"){
									//alert("success");
								}else{
									//alert(results.error);
								}
							}	
						);				
					}
				}
			);
		}
	}
	else{

		after = after + (parseInt(JSON.parse(localStorage.getItem("Rsettings")).Rcuddling)*1000); 
		before = before + (parseInt(JSON.parse(localStorage.getItem("Rsettings")).Rforeplay)*1000); 
	
		overwolf.media.replays.capture(before, after, 
			function(result){if(result) console.log(result);},
			function(results){
				console.log(results);
				if(results.status== "success"){
					overwolf.media.replays.finishCapture(results.url, //try to send the whole object next time if this isn't working 100%
						function(results){
							console.log(results);
							if(results.status== "success"){
								//alert("success");
							}else{
								//alert(results.error);
							}
						}	
					);				
				}
			}
		);
	}	
};
		
		

	
		
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
				getWinID("Recording",'RecordingID');
				getWinID("StatCrack",'StatCrackID');
			$(document).ready(SetMainPos(-1)); //Hopefully the jQuery will trigger at a consistent point for different computers, gave it a buffer of 400 MS just in case.
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
		document.getElementById("resizeGripTop").onmousedown = function(){dragResize('Top');};
		document.getElementById("resizeGripTopRight").onmousedown = function(){dragResize('TopRight');};
		document.getElementById("resizeGripRight").onmousedown = function(){dragResize('Right');};
		document.getElementById("resizeGripBottomRight").onmousedown = function(){dragResize('BottomRight');};
		document.getElementById("resizeGripBottom").onmousedown = function(){dragResize('Bottom');};
		document.getElementById("resizeGripBottomLeft").onmousedown = function(){dragResize('BottomLeft');};
		document.getElementById("resizeGripLeft").onmousedown = function(){dragResize('Left');};
		document.getElementById("content").onmousedown = function(){dragMove();};
		
		//menu buttons
		document.getElementById("resize").ondblclick = function(){updatePOS("MainWindow"); ResizeMain();};
		document.getElementById("close").onclick = function(){closeWindow();};
		document.getElementById("SubmitVideo").onclick = function(){SubmitVideo();};
		document.getElementById("getWindowID").onclick = function(){getWindowID();};
		document.getElementById("cold").onclick = function(){cold();};
		document.getElementById("tower").onclick = function(){tower();};
		document.getElementById("gear").onclick = function(){gear();};
		document.getElementById("info").onclick = function(){refreshHelper(true, 'Info', 'InfoID');};
		document.getElementById("record").onclick = function(){showOptions();};
		document.getElementById("RsettingWin").onclick = function(){refreshHelper(true, 'Recording', 'RecordingID');};
		document.getElementById("showcontent").onclick = function(){showContent();};
		
		//menu checkboxes
		document.getElementById("HSNum").onchange = function(){refreshHUD();};
		document.getElementById("HSPerc").onchange = function(){refreshHUD();};
		document.getElementById("HSChain").onchange = function(){refreshHUD();};
		document.getElementById("STimer").onchange = function(){refreshHUD();};
		document.getElementById("KDRate").onchange = function(){refreshHUD();};
		document.getElementById("crosshair").onchange = function(){refreshHUD();};
		document.getElementById("autoon").onchange = function(){testTurnOn();};
		document.getElementById("Stats").onchange = function(){refreshHelper(true,"StatCrack",'StatCrackID');};
		
		//replay testing
		document.getElementById("turnOff").onclick = function(){testTurnOff();}; //if(document.getElementById('turnOff').checked)
		document.getElementById("turnOn").onclick = function(){testTurnOn();}; //if(document.getElementById("turnOn").checked)
		document.getElementById("capture").onclick = function(){testCapture(1,-1);};
		
		
		
		//Restore all windows together
		overwolf.windows.onMainWindowRestored.addListener(
			function (value) {
				refreshHUD();
			}
		);
		
		//If game ends or changes close the program
		
	
		overwolf.games.onGameInfoUpdated.addListener(
			function(resultA){
				var test = JSON.parse(localStorage.getItem("Rsettings"));
				console.log(test);
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
									//restoring main window will trigger a refreshHUD() call made above
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
			
			
//		Game Events
		overwolf.games.events.onNewEvents.addListener(
			function (value) {
				var i = 0;
				for(; i < value.events.length; i++){
					console.log("Event: " + value.events[i].name);
					nameHandler(value.events[i].name);
				}
			}
		);

		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		

	/*

	
	function TestWriteFileToDesktop() {
			var myJSON = {
				"best": true,
				"test": "true",
				"test3": false
			}
			var myString = JSON.stringify(myJSON, null, '\t');
			var fileName = plugin().DESKTOP + "\\" + "TestFile.json";
			plugin().setFile(fileName, myString, function(result) {
			});
		}
	
3. getTextFile - reads a file's contents and returns as text.
Use the second parameter to indicate if the file is in UCS-2 (2 bytes per char) and
it will automatically do the UTF8 conversion.  Otherwise, returns in UTF8

```
plugin().getTextFile(
  plugin().PROGRAMFILES + "/overwolf/Overwolf.exe.config", 
  false, // not a UCS-2 file
  function(status, data) {
          
  if (!status) {
    console.log("failed to get Overwolf.exe.config contents");
  } else {
    console.log(data);
  }
});
```
        
function TestWriteFileToDesktop() {
			var myJSON = {
				"best": true,
				"test": "true",
				"test3": false
			}
			var myString = JSON.stringify(myJSON, null, '\t');
			var fileName = plugin().DESKTOP + "\\" + "TestFile.json";
			plugin().setFile(fileName, myString, function(result) {
				addMessage("Set File Test: " + result);
			});
		}
	
	
	
	*/
			
			
			
			
			