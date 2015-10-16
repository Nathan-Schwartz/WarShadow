define( function(){

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
	/*if (confirm("Welcome to WarShadow! Would you like to go on the '3-click' tour?") == true){
		alert("To collapse the main menu, simply double click on the Warface Logo.");
		alert("To automatically record your best moments, turn on Auto-Capture. Customize your recordings through Settings!");
		alert("Click on the 'info' button to learn more!"); // !!! These will need updating.
	}*/
}

localStorage.setItem('recordingOn', false); //This is a side effect of my turnOn() recording function. I use this to determine if recording is being used by another app or by me.
		
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
	
});