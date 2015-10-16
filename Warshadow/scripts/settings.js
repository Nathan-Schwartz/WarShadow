
	require(['jquery','windowCoreFunctions', 'loadSettings','updateSettings', 'counters', 'jqueryUI'], function($,wCore, loadS, updateS, counters, jqueryUI){

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
		
		//menu checkboxes //
		$("#enableRecord").change(function(){updateS.updateSettings();});
		$("#autoLaunch").change(function(){updateS.updateSettings();});
		$("#minimizeOnTab").change(function(){updateS.updateSettings();});
		$("#restoreOnTab").change(function(){updateS.updateSettings();});
		$("#closeOnEnd").change(function(){updateS.updateSettings();});
		$("#kill").change(function(){updateS.updateSettings();});
		$("#doublekill").change(function(){updateS.updateSettings();});
		$("#triplekill").change(function(){updateS.updateSettings();});
		$("#perfkill").change(function(){updateS.updateSettings();});
		$("#flagkill").change(function(){updateS.updateSettings();});
		$("#screenshot").change(function(){updateS.updateSettings();});
		$("#achievevid").change(function(){updateS.updateSettings();});
		$("#severekill").change(function(){updateS.updateSettings();});
		$("#HSlength").change(function(){updateS.updateSettings();});
		$("#Grenlength").change(function(){updateS.updateSettings();});
		$("#Meleelength").change(function(){updateS.updateSettings();});
		$("#minekill").change(function(){updateS.updateSettings();});
		$("#defibkill").change(function(){updateS.updateSettings();});
		//$("#combokill").change(function(){updateS.updateSettings();});
		//$("#slidekill").change(function(){updateS.updateSettings();});


});
			
			