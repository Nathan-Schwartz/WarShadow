require(['jquery','windowCoreFunctions', 'loadSettings','updateSettings', 'counters', 'jqueryUI'], function($,wCore, loadS, updateS, counters, jqueryUI){

	if(JSON.parse(localStorage.getItem('optionsCalledBy')) === true){
		window.location.hash = '#vidsetfield';
		localStorage.setItem('optionsCalledBy', false);
	}

	function plugin() {
        return document.querySelector('#plugin');
	}

	(plugin() == null) ? console.log("Plugin couldn't be loaded??") : console.log('yayyy');
	
	//OK so the plan here is to grab a button when the user wants one. After 1 button is pushed, make an indicator for when it is toggled again.
	function checkADS(){
		console.log("checkADS");
		var checked = false;
		plugin().onKeyDown = function (e) {
			var saved = parseInt(localStorage.getItem("ADSkey"));
			if(checked)
				plugin().onKeyDown = null;
			
			if(saved == e){
				document.getElementById('displayWhenADS').style.backgroundColor = "gray";
				setTimeout( function(){document.getElementById('displayWhenADS').style.backgroundColor = "white";}, 500);
				checked = true;
			}
		};
	};
	
	function grabADS(){
		console.log("ads called");
		plugin().onKeyDown = null;//end checkADS's listener in case it got called before.
		
		var set = false;
		plugin().onKeyDown = function (e) {
			console.log("key registered", e);
			if(set === false){
				localStorage.setItem("ADSkey", String(e));
				updateS.updateSettings();
				document.getElementById("grabADS").innerHTML = "Grab ADS";
			}
			set = true;
			checkADS();
		};
	};
	
	
	
	//before slider
	$(function() {
		$( "#beforeSlider" ).slider({
			range: "min",
			value:5,
			min: 1,
			max: 90,
			change: function( event, ui ) {console.log("value", ui.value); updateS.updateSettings();},
			slide: function( event, ui ) {
				$( "#beforeSliderValue" ).val( ui.value + " seconds");
			}
		});
		$( "#beforeSliderValue" ).val( $( "#beforeSlider" ).slider( "value" ) + " seconds");
	});
	
	//after slider
	$(function() {
		$( "#afterSlider" ).slider({
			range: "min",
			value:5,
			min: 1,
			max: 90,
			change: function( event, ui ) {console.log("value", ui.value); updateS.updateSettings();},
			slide: function( event, ui ) {
				$( "#afterSliderValue" ).val( ui.value + " seconds");
			}
		});
		$( "#afterSliderValue" ).val( $( "#afterSlider" ).slider( "value" ) + " seconds");
	});
		
	//grab slider
	$(function() {
		$( "#grabSlider" ).slider({
			range: "min",
			value:50,
			min: 1,
			max: 90,
			change: function( event, ui ) {console.log("value", ui.value); updateS.updateSettings();},
			slide: function( event, ui ) {
				$( "#grabSliderValue" ).val( ui.value  + " seconds");
			}
		});
		$( "#grabSliderValue" ).val( $( "#grabSlider" ).slider( "value" )  + " seconds");
	});
		

	loadS.loadSettings();	// This will load current setting that were previously stored in localStorage
			
//		Menu Listeners

	//menu buttons
	$("#showfeatures").click(function(){
			$("#triggers").slideToggle(200);
			if(document.getElementById("showfeatures").innerHTML == "Hide Triggers")
				document.getElementById("showfeatures").innerHTML = "Show Triggers";
			else
				document.getElementById("showfeatures").innerHTML = "Hide Triggers";
	});
	$("#resetLS").click(function(){counters.resetCounters();});
	$("#openSettings").click(function(){window.location.assign('overwolf://settings/capture');});
	$("#openHotkeys").click(function(){window.location.assign('overwolf://settings/hotkeys');});
	$("#grabADS").click(function(){
		document.getElementById("grabADS").innerHTML = "Waiting for button";
		grabADS();
	});
	
	//menu checkboxes //
	$("#enableRecord, #autoLaunch, #minimizeOnTab, #restoreOnTab, #closeOnEnd, #kill, #doublekill, #triplekill, #perfkill, #flagkill, #screenshot, #achievevid, #severekill, #HSlength, #Grenlength, #Meleelength, #minekill, #defibkill").change(function(){updateS.updateSettings();});
	$("#rightClickADS").change(function(){
		document.getElementById("rightClickADS").checked 
		? $("#inputADSContainer").fadeOut()
		: $("#inputADSContainer").fadeIn();
		updateS.updateSettings();
	});
	//$("#combokill").change(function(){updateS.updateSettings();});
	//$("#slidekill").change(function(){updateS.updateSettings();});

	//Menu radio
	$("#holdADS").change(function(){updateS.updateSettings();});
	$("#toggleADS").change(function(){updateS.updateSettings();});
		

});
			
			