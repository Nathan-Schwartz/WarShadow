require(['windowCoreFunctions', 'jquery', 'jqueryUI', 'refreshHUD', 'recording'], function(wCore, $, jqueryUI, rHUD, rec){

	document.getElementById("menu").style.background = "-webkit-linear-gradient(right bottom,"+  localStorage.getItem('color1') + "," + localStorage.getItem('color2') + ")";
	document.getElementById("menu").style.backgroundClip = "padding-box";
	document.getElementById("menu").style.borderImage = "url('../images/box.png') 40% 15% 50% 15% stretch round";

	//before slider
	$(function() {
		$( "#beforeSlider" ).slider({
			range: "min",
			value:5,
			min: 1,
			max: 90,
			change: function( event, ui ) {console.log("value", ui.value); updateS.updateSettings(true);},
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
			change: function( event, ui ) {console.log("value", ui.value); updateS.updateSettings(true);},
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
			change: function( event, ui ) {console.log("value", ui.value); updateS.updateSettings(true);},
			slide: function( event, ui ) {
				$( "#grabSliderValue" ).val( ui.value  + " seconds");
			}
		});
		$( "#grabSliderValue" ).val( $( "#grabSlider" ).slider( "value" )  + " seconds");
	});

	$("#menu").fadeIn();
	
	
//		Menu Listeners

	//menu buttons
	$("#settingsWin").click(function(){ localStorage.setItem('optionsCalledBy', true); rHUD.refreshHelper(true, 'Settings');});
	
	var recording = false;
	var enabled = false;
	
	JSON.parse(localStorage.getItem('recordingOn')) ? (function(){document.getElementById("turnOn").innerHTML = "Disable Recording"; $("#onceEnabled").fadeIn();})() : document.getElementById("turnOn").innerHTML = "Enable Recording";
	
	var url = "";	
		
	function startCapture(){
		overwolf.media.replays.startCapture(1, // !!!This was just used for testing. The startCapture function is broken (confirmed by Overwolf, should be patched in next dev platform update)
			function(result){
				console.log(result);
				url = result.url;
				localStorage.setItem("url", results.url);
			}
		);
	};

	function finishCapture(){
		overwolf.media.replays.finishCapture(url, function(result){console.log(result);});
	};
	
	$("#turnOn").click(function(){
		enabled = JSON.parse(localStorage.getItem('recordingOn'));
		if(enabled===true){
			overwolf.media.replays.turnOff(function(result){
				if(result.status== "success"){
					localStorage.setItem('message', "alertDisabled");
					localStorage.setItem('recordingOn', false);
					rHUD.refreshHelper(true,"popup");
					document.getElementById("turnOn").innerHTML = "Enable Recording";
					$("#onceEnabled").hide();
				}
			});
		}else{
			overwolf.media.replays.turnOn({},function(result){
				if(result.status== "success"){
					localStorage.setItem('recordingOn', true);
					localStorage.setItem('message', "alertEnabled");
					rHUD.refreshHelper(true,"popup");
					document.getElementById("turnOn").innerHTML = "Disable Recording";
					$("#onceEnabled").fadeIn();
				}
			});
		}
	});
	
	
	$("#start").click(function(){
		if(!recording){
			rec.startCapture();
			document.getElementById("start").innerHTML = "End Recording";
		} else {
			rec.finishCapture();
			document.getElementById("start").innerHTML = "Start Recording";
		}
		recording = !recording;
	});
	
	$("#menu").mousedown(function(){wCore.dragMove();});
	$("#replayWindow").click(function(){rHUD.refreshHelper(true,"Replay");});
	$("#capture").click(function(){
		rec.capture(1,parseInt(JSON.parse(localStorage.getItem("Settings")).Rgrab)*1000);
	});
});