require(['windowCoreFunctions', 'jquery', 'jqueryUI', 'recording', 'refreshHUD'], function(wCore, $, jqueryUI, rec, rHUD){

	document.getElementById("Replay").style.background = "-webkit-linear-gradient(right bottom,"+  localStorage.getItem('color1') + "," + localStorage.getItem('color2') + ")";
	document.getElementById("Replay").style.backgroundClip = "padding-box";
	document.getElementById("Replay").style.borderImage = "url('../images/box.png') 40% 15% 50% 15% stretch round";

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

	$("#Replay").fadeIn();
	
	
//		Menu Listeners

	//menu buttons
	$("#showSettings").click(function(){$("#appSettings").fadeToggle();});
	$("#settingsWin").click(function(){rHUD.refreshHelper(true, 'Settings');});
	
	var recording = false;
	var enabled = false;
	
	JSON.parse(localStorage.getItem('recordingOn')) ? (function(){document.getElementById("turnOn").innerHTML = "Disable Recording"; $("#onceEnabled").fadeIn();})() : document.getElementById("turnOn").innerHTML = "Enable Recording";
	
	$("#turnOn").click(function(){
		enabled = JSON.parse(localStorage.getItem('recordingOn'));
		if(enabled===true){
			rec.turnOff();
			document.getElementById("turnOn").innerHTML = "Enable Recording";
			$("#onceEnabled").hide();
		}else{
			rec.turnOn();
			document.getElementById("turnOn").innerHTML = "Disable Recording";
			$("#onceEnabled").fadeIn();
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
	
	$("#Replay").mousedown(function(){wCore.dragMove();});
	$("#replayWindow").click(function(){rHUD.refreshHelper(true,"Replay");});
	$("#capture").click(function(){
		rec.capture(1,-1);
	});
});