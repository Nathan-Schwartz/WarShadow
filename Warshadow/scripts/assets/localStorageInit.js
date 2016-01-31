define( ["jquery","jqueryUI","gearData"], function($, ui, gData){

	//	clearAll();

	function clearAll(){
		gData.clearStats();
		localStorage.removeItem("url");
		localStorage.removeItem("message");
		localStorage.removeItem('ADSkey');
		localStorage.removeItem('color1');
		localStorage.removeItem('color2');
		localStorage.removeItem('Settings');
	}	

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
	
	localStorage.setItem("layersUsed", false);
	
	//tracks the number of recordings that have not yet been finished
	localStorage.setItem("recordingLayers", 0);
	
	localStorage.setItem("manualRecordingOn", false);
	
	//for requesting theme change from settings page
	localStorage.setItem("updateTheme", false);
	
	if(!localStorage.getItem("url"))
		localStorage.setItem("url","sampleurl");
	
	if(!localStorage.getItem("message"))
		localStorage.setItem("message","alertEnabled");
	
	//gData.clearStats();
	if(!localStorage.getItem('vests'))
		gData.initStats();

	//localStorage.removeItem('ADSkey');
	if(!localStorage.getItem("ADSkey")){
		localStorage.setItem("ADSkey", "221");
	}	

	//localStorage.removeItem('color1');
	if(!localStorage.getItem('color1')){
		localStorage.setItem('color1', 'rgba(80, 106, 104, 0.95)');
	}

	//localStorage.removeItem('color2');
	if(!localStorage.getItem('color2')){
		localStorage.setItem('color2', 'rgba(36, 220, 143, 0.3)');
	}

	//instead of closing to prevent errors
	localStorage.setItem("dontRestoreRecMenu",false);

	localStorage.setItem("firstLaunch", false);

	//localStorage.removeItem('Settings');
	if(!localStorage.getItem('Settings')){
		var Settings = {
			useLP: true,
			allowSync: true,
			noADS: true,
			toggleADS : true,
			rightClickADS : true,
			//enableRecord: false,
			autoLaunch: true,
			restoreOnTab: true,
			minimizeOnTab: true,
			closeOnEnd: true,
			Rbefore: "5",
			Rafter: "5",
			Rgrab: "60",
			Rkill: false, 
			Rheadshot: 0, 
			Rnade: 0,
			Rmelee: 0,
			Rdoublekill: false,
			Rtriplekill: true,
			Rminekill: false,
			Rdefib: false,
			Rflagkill: false,
			Rseverekill: false,
			Rperfkill: false,
			Rslidekill: false,
			Rachievevid: true,
			Rachievepic: true,
			Rcombokill: false,
		};
		localStorage.setItem('Settings', JSON.stringify(Settings));
		console.log("Settings: " + localStorage.getItem('Settings'));
		setTimeout( function(){$( "#dialog" ).dialog( "open" );}, 100);//I would use a callback but none was provided.
		localStorage.setItem("firstLaunch", true);
	}

	//for counting recordings
	localStorage.setItem("recordingCount",0);
	
	//for detecting if another app stole recording feature
	localStorage.setItem('recordingOn', false); //This is a side effect of my turnOn() recording function. I use this to determine if recording is being used by another app or by me.

	//duh
	localStorage.setItem("AutoRecActive", false);
	
	//for determining where to focus in settings page
	localStorage.setItem('optionsCalledBy', "manual");
	
	//for counters.js
	localStorage.setItem("kill", 0);
	localStorage.setItem("headshot1" ,0);
	localStorage.setItem("headshot2" ,0);
	localStorage.setItem("headshot3" ,0);
	localStorage.setItem("headshot4" ,0);
	localStorage.setItem("headshot5" ,0);
	localStorage.setItem("minutes" ,0);
	
	//Get ID's of each window. No longer used cuz the window name works on most windows
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
		getWinID("popup", 'popupID');
});