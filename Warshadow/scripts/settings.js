
	define(['jquery','windowCoreFunctions', 'loadSettings','updateSettings'], function($,wCore, loadS, updateS){

	function resetLS(){ // !!!! its time to make these stored in a module with accessors and mutators.
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

	loadS.loadSettings();	
			
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
		//document.getElementById("slidekill").onchange = function(){updateS.updateSettings();};
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
			
			