require(['jquery','windowCoreFunctions', 'settingHelper', 'counters', 'jqueryUI'], function($,wCore, settingH, counters, jqueryUI){

	if(localStorage.getItem('optionsCalledBy') == "recording"){
		window.location.hash = '#vidsetfield';
		localStorage.setItem('optionsCalledBy', "manual");
	}

	function plugin() {
        return document.querySelector('#plugin');
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
	

	(plugin() == null) ? console.log("Plugin couldn't be loaded??") : console.log('Plugin was loaded.');

	//OK so the plan here is to grab a button when the user wants one. After 1 button is pushed, make an indicator for when it is toggled again.
	function checkADS(){
		console.log("checkADS");
		var checked = 0;
		plugin().onKeyDown = function (e) {
			checked++;
			var saved = parseInt(localStorage.getItem("ADSkey"));
			if(checked > 3){
				//do nothing
			}else if(checked == 1){
				$( "#Xdialog" ).dialog( "open" );
			}else{
				if(saved == e){
					document.getElementById('displayWhenADS').style.backgroundColor = "gray";
					setTimeout( function(){document.getElementById('displayWhenADS').style.backgroundColor = "white";}, 500);
				}
			}
		};
	};

	function grabADS(){
		console.log("ads called and the starting value was:", localStorage.getItem("ADSkey"));
		//plugin().onKeyDown = null;//end checkADS's listener in case it got called before.

		var set = false;
		plugin().onKeyDown = function(e){
			console.log("key registered", e);
			if(set === false){
				localStorage.setItem("ADSkey", String(e));
				settingH.update();
				document.getElementById("grabADS").innerHTML = "Grab ADS";
			}
			set = true;
			checkADS();
		};
	};

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
	$("#resetLS").click(function(){counters.resetCounters();});
	$("#openSettings").click(function(){window.location.assign('overwolf://settings/capture');});
	$("#openHotkeys").click(function(){window.location.assign('overwolf://settings/hotkeys');});
	$("#grabADS").click(function(){
		document.getElementById("grabADS").innerHTML = "Waiting for button";
		grabADS();
	});

	//menu checkboxes //
	$("#enableRecord, #autoLaunch, #minimizeOnTab, #useLP, #restoreOnTab, #closeOnEnd, #kill, #doublekill, #triplekill, #perfkill, #flagkill, #screenshot, #achievevid, #severekill, #minekill, #defibkill, #allowSync").change(function(){settingH.update();});
	$("#rightClickADS").change(function(){
		document.getElementById("rightClickADS").checked
		? $("#inputADSContainer").fadeOut()
		: $("#inputADSContainer").fadeIn();
		settingH.update();
	});
	
	$("#noADS").change(function(){
		document.getElementById("noADS").checked
		? $("#ifADShides").fadeOut()
		: $("#ifADShides").fadeIn();
		settingH.update();
	});
	
	//$("#combokill").change(function(){settingH.update();});
	$("#slidekill").change(function(){settingH.update();});

	//Menu radio
	$("#holdADS").change(function(){settingH.update();});
	$("#toggleADS").change(function(){settingH.update();});
});