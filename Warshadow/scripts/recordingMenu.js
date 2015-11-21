require(['windowCoreFunctions', 'jquery', 'jqueryUI', 'refreshHUD', 'recording'], function(wCore, $, jqueryUI, rHUD, rec){

	//document.getElementById("menu").style.background = "-webkit-linear-gradient(right bottom,"+  localStorage.getItem('color1') + "," + localStorage.getItem('color2') + ")";
	//document.getElementById("menu").style.backgroundClip = "padding-box";
	//document.getElementById("menu").style.borderImage = "url('../images/box.png') 40% 15% 50% 15% stretch round";

	$("#menu").fadeIn();
	
	$( document ).tooltip({
		track: true,
		show:{delay:1000},
		hide:false,
		/*open: function (event, ui) {
			ui.tooltip.css("max-width", "70px");
		},*/
		position:{ /*my: "left+3 bottom-3", of: event, */collision: "fit"}
	});
	
	//$(document).ready(function(){});
		window.addEventListener('storage', function( storageEvent ){
			console.log("storageEvent: ", storageEvent);
			
			if(storageEvent.key == "recordingOn"){
				console.log('recordingOn newvalue testing', typeof storageEvent.newValue, storageEvent.newValue);
				if(!JSON.parse(storageEvent.newValue)){
					document.getElementById("turnOn").style.backgroundImage = "url('../images/off.png')";
					$("#onceEnabled").hide();
				}else{
					document.getElementById("turnOn").style.backgroundImage = "url('../images/on.png')";
					$("#onceEnabled").fadeIn().css("display","inline-block");
				}
			}
		});
	
//		Menu Listeners

	//menu buttons
	$("#settingsWin").click(function(){
		localStorage.setItem('optionsCalledBy', "recording");
		rHUD.refreshHelper(true, 'Settings');
	});
	
	var recording = false;
	var enabled = false;
	var url = "";
	var res = {};
	res.success = false;
	
	JSON.parse(localStorage.getItem('recordingOn')) 
		? (function(){document.getElementById("turnOn").style.backgroundImage = "url('../images/on.png')"; $("#onceEnabled").fadeIn().css("display","inline-block");})()
		: document.getElementById("turnOn").style.backgroundImage = "url('../images/off.png')";
		
	var successHandler = {};
	successHandler.postCheckCallback = function(){};
	successHandler.successCheck = function(result){
		if(result.status == "success"){// || result.error == "Already turned on."){
			res.success = true;
			console.log("successcheck:status returned true");
			if(typeof successHandler.postCheckCallback == "function")
				successHandler.postCheckCallback();
			else
				console.log("successHandler.postCheckCallback is not a function")
		}
	};
	
	$("#turnOn").click(function(){
		if(JSON.parse(localStorage.getItem('recordingOn'))===true){
			successHandler.postCheckCallback = function(){
				document.getElementById("turnOn").style.backgroundImage = "url('../images/off.png')";
				$("#onceEnabled").hide();
			};
			rec.turnOff(successHandler.successCheck);
			
		}else if(JSON.parse(localStorage.getItem('recordingOn')) === false){
			successHandler.postCheckCallback = function(){
				document.getElementById("turnOn").style.backgroundImage = "url('../images/on.png')";
				$("#onceEnabled").fadeIn().css("display","inline-block");
			};
			//rec.turnOn(successHandler.successCheck);
			localStorage.setItem("proxyEnableRecordingRequest", true);
		}
	});
	
	$("#start").click(function(){
		if(!recording){
			successHandler.postCheckCallback = function(){
				document.getElementById("start").style.backgroundImage = "url('../images/pause.png')";
				recording = !recording;
			}
			rec.startCapture(successHandler.successCheck);
			
		}else{
			successHandler.postCheckCallback = function(){
				document.getElementById("start").style.backgroundImage = "url('../images/play.png')";
				recording = !recording;
			};
			rec.finishCapture(successHandler.successCheck);
		}
		
	});
	
	$("#menu").mousedown(wCore.dragMove);
	$("#replayWindow").click(function(){rHUD.refreshHelper(true,"Replay");/* rec.memScreen(); window.location.assign(localStorage.getItem("url"));*/});
	$("#capture").click(function(){
		rec.capture(parseInt(JSON.parse(localStorage.getItem("Settings")).Rgrab)*1000,1);
	});
	$("#close").click(wCore.closeWindow);
	
});