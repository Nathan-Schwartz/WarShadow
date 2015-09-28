
	define(['jquery','windowCoreFunctions', 'loadSettings','updateSettings'], function($,wCore, loadS, updateS){

	function resetLS(){
		localStorage.setItem('Kills', 0); 
		localStorage.setItem('Headshots', 0); 
		localStorage.setItem('Defibs', 0);
		localStorage.setItem('TWWWOOOOCHAAAAAIIIIIIIINNNNNZZZZZ',0);
		localStorage.setItem('3chain',0);
		localStorage.setItem('4chain',0);
		localStorage.setItem('5chain',0);
		localStorage.setItem('PVPKills',0);
		localStorage.setItem('PVPDeaths',0);
		
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
		};
		localStorage.setItem('windowPOS', JSON.stringify(windowPOS));
	};


		
		
		function SetWCMainPos(newState) {
		//This function is in all window's files. It initializes size and position.
			setTimeout(function(){
				if(newState == -1){
					overwolf.windows.changeSize(localStorage.getItem('SettingsID'), 400, 600);
					overwolf.windows.changePosition(localStorage.getItem('SettingsID'), 200,100); 
				}
			}, 1000); //200 min as of 8/25 (before external .js)
		};


			 loadS.loadSettings();
			$(document).ready(SetWCMainPos(-1)); //Hopefully the jQuery will trigger at a consistent point for different computers, gave it a buffer of 400 MS just in case.
			
			
			
//		Menu Listeners

		//menu buttons
		document.getElementById("showfeatures").onclick = function(){togglefeatures();};
		$("#showfeatures").click(function(){
				$("#triggers").slideToggle(200);
				$("#showfeatures").slideToggle(200)
			});
		document.getElementById("resetLS").onclick = function(){resetLS();};
		
		//menu checkboxes //
		document.getElementById("minimizeOnTab").onchange = function(){updateS.updateSettings();};
		document.getElementById("restoreOnTab").onchange = function(){updateS.updateSettings();};
		document.getElementById("closeOnEnd").onchange = function(){updateS.updateSettings();};
		document.getElementById("grablength").onchange = function(){updateS.updateSettings();};
		document.getElementById("kill").onchange = function(){updateS.updateSettings();};
		document.getElementById("doublekill").onchange = function(){updateS.updateSettings();};
		document.getElementById("triplekill").onchange = function(){updateS.updateSettings();};
		document.getElementById("slidekill").onchange = function(){updateS.updateSettings();};
		document.getElementById("perfkill").onchange = function(){updateS.updateSettings();};
		document.getElementById("flagkill").onchange = function(){updateS.updateSettings();};
		document.getElementById("screenshot").onchange = function(){updateS.updateSettings();};
		document.getElementById("achievevid").onchange = function(){updateS.updateSettings();};
		document.getElementById("severekill").onchange = function(){updateS.updateSettings();};
		document.getElementById("HSlength").onchange = function(){updateS.updateSettings();};
		document.getElementById("Grenlength").onchange = function(){updateS.updateSettings();};
		document.getElementById("Meleelength").onchange = function(){updateS.updateSettings();};
		document.getElementById("minekill").onchange = function(){updateS.updateSettings();};
		document.getElementById("defibkill").onchange = function(){updateS.updateSettings();};
		//document.getElementById("combokill").onchange = function(){updateS.updateSettings();};
		document.getElementById("Cuddling").onchange = function(){updateS.updateSettings();};
		document.getElementById("Foreplay").onchange = function(){updateS.updateSettings();};
		

});
			
			