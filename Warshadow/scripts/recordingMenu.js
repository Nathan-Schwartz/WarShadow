require(['windowCoreFunctions', 'jquery', 'jqueryUI', 'refreshHUD', 'recording'], function(wCore, $, jqueryUI, rHUD, rec){

	//document.getElementById("menu").style.background = "-webkit-linear-gradient(right bottom,"+  localStorage.getItem('color1') + "," + localStorage.getItem('color2') + ")";
	//document.getElementById("menu").style.backgroundClip = "padding-box";
	//document.getElementById("menu").style.borderImage = "url('../images/box.png') 40% 15% 50% 15% stretch round";

	$("#menu").fadeIn();
	
	$( document ).tooltip({
		track: true,
		show:{delay:200},
		hide:false,
		/*open: function (event, ui) {
			ui.tooltip.css("max-width", "70px");
		},*/
		position:{ /*my: "left+3 bottom-3", of: event, */collision: "fit"}
	});
	
	//$(document).ready(function(){});
		window.addEventListener('storage', function( storageEvent ){
			//console.log("storageEvent: ", storageEvent);
			
			if(storageEvent.key == "recordingOn"){
				if(!JSON.parse(storageEvent.newValue)){
					document.getElementById("turnOn").style.backgroundImage = "url('../images/off.png')";
					$("#onceEnabled").hide();
				}else{
					document.getElementById("turnOn").style.backgroundImage = "url('../images/on.png')";
					$("#onceEnabled").fadeIn().css("display","inline-block");
				}
			}
			if(storageEvent.key=="recordingLayers"){
				console.log("layers: ", storageEvent);
				localStorage.setItem("layersUsed", true);
				if(JSON.parse(localStorage.getItem("recordingLayers")) == 0 && document.getElementById("error").title == "You have pending recordings from Autocapture, please wait until they finish.")
					$("#error").hide();
			}
			
			if(storageEvent.key == "AutoRecActive"){
				if(document.getElementById("error").title == "Please turn off AutoRecord first.")
					$("#error").hide();
			}
		});
	
//		Menu Listeners

	//menu buttons
	$("#settingsWin").click(function(){
		localStorage.setItem('optionsCalledBy', "recording");
		rHUD.refreshHelper(true, 'Settings');
	});
	
	var enabled = false;
	var url = "";
	
	JSON.parse(localStorage.getItem('recordingOn')) 
		? (function(){
			document.getElementById("turnOn").style.backgroundImage = "url('../images/on.png')"; 
			$("#onceEnabled").fadeIn().css("display","inline-block");
			document.getElementById("turnOn").title = "Disable Recording";
		  })()
		: document.getElementById("turnOn").style.backgroundImage = "url('../images/off.png')";
		
	var successHandler = {};
	successHandler.postCheckCallback = function(){};
	successHandler.successCheck = function(result){
		if(result.status == "success"){// || result.error == "Already turned on."){
			if(typeof successHandler.postCheckCallback == "function")
				successHandler.postCheckCallback();
			else
				console.log("successHandler.postCheckCallback is not a function")
		}else{
			console.log("failed:", result);
		}
	};
	
	$("#turnOn").click(function(){
		if(JSON.parse(localStorage.getItem('recordingOn'))===true){
			successHandler.postCheckCallback = function(){
				document.getElementById("turnOn").style.backgroundImage = "url('../images/off.png')";
				document.getElementById("turnOn").title = "Enable Recording"
				$("#onceEnabled").hide();
			};
			rec.turnOff(successHandler.successCheck);
			
		}else if(JSON.parse(localStorage.getItem('recordingOn')) === false){
			successHandler.postCheckCallback = function(){
				document.getElementById("turnOn").style.backgroundImage = "url('../images/on.png')";
				document.getElementById("turnOn").title = "Disable Recording";
				$("#onceEnabled").fadeIn().css("display","inline-block");
			};
			rec.turnOn(successHandler.successCheck);
			
		}
	});
	
	$("#start").click(function(){
		if(!JSON.parse(localStorage.getItem("manualRecordingOn"))){
			successHandler.postCheckCallback = function(){
				document.getElementById("start").style.backgroundImage = "url('../images/pause.png')";
				document.getElementById("start").title = "Finish Recording";
				
				document.getElementById("unavailableButtons").style.display = "none";
				document.getElementById("moreButtons").style.display = "none";
						
				localStorage.setItem("manualRecordingOn", !JSON.parse(localStorage.getItem("manualRecordingOn")));
			}
			
			if(!JSON.parse(localStorage.getItem("AutoRecActive"))){
				if(JSON.parse(localStorage.getItem("recordingLayers")) == 0){
					if(JSON.parse(localStorage.getItem("layersUsed")) === true){
						rec.turnOff(function(){
							rec.turnOn(function(){
								rec.startCapture(successHandler.successCheck);
								$("#error").hide();
							});
						});
					}else{
						rec.startCapture(successHandler.successCheck);
						$("#error").hide();
					}
				}else{
				document.getElementById("error").title = "You have pending recordings from Autocapture, please wait until they finish.";
				flashError();
				}
			}else{
				document.getElementById("error").title = "Please turn off AutoRecord first.";
				flashError();
			}
		}else{
			successHandler.postCheckCallback = function(){
				document.getElementById("start").style.backgroundImage = "url('../images/play.png')";
				document.getElementById("start").title = "Start Recording";
				
				document.getElementById("unavailableButtons").style.display = "inline-block";
				document.getElementById("moreButtons").style.display = "inline-block";
				
				localStorage.setItem("manualRecordingOn", !JSON.parse(localStorage.getItem("manualRecordingOn")));
			};
			rec.finishCapture(successHandler.successCheck);
		}
	});
	
	$("#menu").mousedown(wCore.dragMove);
	//$("#replayWindow").click(function(){rHUD.refreshHelper(true,"Replay");/* rec.memScreen(); window.location.assign(localStorage.getItem("url"));*/});
	$("#capture").click(function(){
		rec.capture(parseInt(JSON.parse(localStorage.getItem("Settings")).Rgrab)*1000,1);
	});
	$("#close").click(function(){
		wCore.minimizeWindow();//closeWindow();
		localStorage.setItem("dontRestoreRecMenu", true); //don't restore recording window = true, set = false when the button is clicked
	});

	function flashError(){
		$("#error").show();
		var showing = false;
		var original = document.getElementById("error").style.background;
		$("#error").mouseenter(function(){
			clearInterval(loop);
			document.getElementById("error").style.background = original;
		});
		var loop = setInterval(function(){
			showing = !showing;
			if(showing){
				document.getElementById("error").style.background = "#323232";
				//console.log("was showing");
			}else{
				document.getElementById("error").style.background = original;
				//console.log("wasn't showing");
			}
		},200);
	}
});