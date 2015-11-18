define( ["jquery","jqueryUI","gearData"], function($, ui, gData){

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

	//for counters.js
	localStorage.setItem("kill", 0);
	localStorage.setItem("headshot1" ,0);
	localStorage.setItem("headshot2" ,0);
	localStorage.setItem("headshot3" ,0);
	localStorage.setItem("headshot4" ,0);
	localStorage.setItem("headshot5" ,0);
	localStorage.setItem("minutes" ,0);
	
	if(!localStorage.getItem("url"))
		localStorage.setItem("url","sampleurl");
	
	if(!localStorage.getItem("message"))
		localStorage.setItem("url","alertEnabled");
	
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

	//localStorage.removeItem('Settings');
	if(!localStorage.getItem('Settings')){
		var Settings = {
			allowSync: true,
			toggleADS : true,
			rightClickADS : true,
			enableRecord: false,
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
		setTimeout( function(){$( "#dialog" ).dialog( "open" );}, 100);// !!!I would use a callback but none was provided.
	}
	localStorage.setItem('recordingOn', false); //This is a side effect of my turnOn() recording function. I use this to determine if recording is being used by another app or by me.
	localStorage.setItem('optionsCalledBy', false);
	
	localStorage.setItem("pingADS",0);
	
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