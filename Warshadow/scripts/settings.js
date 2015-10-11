
	require(['jquery','windowCoreFunctions', 'loadSettings','updateSettings', 'counters'], function($,wCore, loadS, updateS, counters){

	//UI Slider js?
	loadS.loadSettings();	
	// line up game length repair tab, drop max 100 damage tab,  move over comparison tab on repair chart to allow greens to be on the same row as items
			
//		Menu Listeners

		//menu buttons
		document.getElementById("showfeatures").onclick = function(){togglefeatures();};
		$("#showfeatures").click(function(){
				$("#triggers").slideToggle(200);
				if(document.getElementById("showfeatures").innerHTML == "Hide Triggers")
					document.getElementById("showfeatures").innerHTML = "Show Triggers";
				else
					document.getElementById("showfeatures").innerHTML = "Hide Triggers";
			});
		document.getElementById("resetLS").onclick = function(){counters.resetCounters();};
		document.getElementById("openSettings").onclick = function(){window.location.assign('overwolf://settings/capture');};
		
		//menu checkboxes //
		document.getElementById("enableRecord").onchange = function(){updateS.updateSettings();};
		document.getElementById("autoLaunch").onchange = function(){updateS.updateSettings();};
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
			
			