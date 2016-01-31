require(['jquery','windowCoreFunctions', 'settingHelper', 'counters', 'jqueryUI'], function($,wCore, settingH, counters, jqueryUI){

	if(localStorage.getItem('optionsCalledBy') == "recording"){
		window.location.hash = '#vidsetfield';
		localStorage.setItem('optionsCalledBy', "manual");
	}
	
	var dialogCounter = 1;
	
	$(function() {
		$( "#Xdialog" ).dialog({
			autoOpen: false,
			resizable: false,
			draggable: false,
			height:320,
			width: 175,
			modal: true,
			buttons: {
				Cancel:{
                    text: 'OK',
                    click : function() {
						$( this ).dialog( "close" );
					}
				}
			}
		});
	});

//Sliders
	//before slider
	$(function() {
		$( "#beforeSlider" ).slider({
			range: "min",
			value:5,
			min: 1,
			max: 90,
			change: function( event, ui ) {/*console.log("value", ui.value);*/ settingH.update();},
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
			change: function( event, ui ) {/*console.log("value", ui.value);*/ settingH.update();},
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
			max: 180,
			change: function( event, ui ) {/*console.log("value", ui.value);*/ settingH.update();},
			slide: function( event, ui ) {
				$( "#grabSliderValue" ).val( ui.value  + " seconds");
			}
		});
		$( "#grabSliderValue" ).val( $( "#grabSlider" ).slider( "value" )  + " seconds");
	});

//SelectMenu
	$("#HSlength").selectmenu({change: function( event, ui ) {settingH.updateHS(ui.item.value);}});
	$("#Grenlength").selectmenu({change: function( event, ui ) {settingH.updateGren(ui.item.value);}});
	$("#Meleelength").selectmenu({change: function( event, ui ) {settingH.updateMelee(ui.item.value);}});

	settingH.load();	// This will load current setting that were previously stored in localStorage

//		Menu Listeners

	//menu buttons
	$("#showfeatures").click(function(){
		$("#triggers").slideToggle(200);
		if(document.getElementById("showfeatures").innerHTML == "Hide Triggers")
			document.getElementById("showfeatures").innerHTML = "Choose Triggers";
		else
			document.getElementById("showfeatures").innerHTML = "Hide Triggers";
	});
	//$("#resetLS").click(function(){counters.resetCounters();});
	$("#openSettings").click(function(){window.location.assign('overwolf://settings/capture');});
	$("#openHotkeys").click(function(){window.location.assign('overwolf://settings/hotkeys');});

	//menu checkboxes //#enableRecord, 
	
	$("#autoLaunch, #minimizeOnTab, #restoreOnTab, #closeOnEnd, #kill, #doublekill, #triplekill, #perfkill, #flagkill, #screenshot, #achievevid, #severekill, #minekill, #defibkill, #allowSync").change(function(){settingH.update();});
	$("#useSecondary").click(function(){
		settingH.update(function(){localStorage.setItem("updateTheme", true);});
	});
	
	/*$("#noADS").change(function(){
		document.getElementById("noADS").checked
		? $("#ifADShides").fadeOut()
		: $("#ifADShides").fadeIn();
		settingH.update();
	});*/
	
	//$("#combokill").change(function(){settingH.update();});
	$("#slidekill").change(function(){settingH.update();});

	//Menu radio
	//$("#holdADS").change(function(){settingH.update();});
	//$("#toggleADS").change(function(){settingH.update();});
});