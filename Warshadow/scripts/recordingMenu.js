require(['windowCoreFunctions', 'jquery', 'jqueryUI', 'refreshHUD', 'recording'], function(wCore, $, jqueryUI, rHUD, rec){

	document.getElementById("menu").style.background = "-webkit-linear-gradient(right bottom,"+  localStorage.getItem('color1') + "," + localStorage.getItem('color2') + ")";
	document.getElementById("menu").style.backgroundClip = "padding-box";
	document.getElementById("menu").style.borderImage = "url('../images/box.png') 40% 15% 50% 15% stretch round";

	$("#menu").fadeIn();
	
	
//		Menu Listeners

	//menu buttons
	$("#settingsWin").click(function(){ localStorage.setItem('optionsCalledBy', true); rHUD.refreshHelper(true, 'Settings');});
	
	var recording = false;
	var enabled = false;
	var url = "";
	var res = {};
	res.success = false;
	
	JSON.parse(localStorage.getItem('recordingOn')) ? (function(){document.getElementById("turnOn").style.backgroundImage = "url('../images/on.png')"; $("#onceEnabled").fadeIn();})() : document.getElementById("turnOn").style.backgroundImage = "url('../images/off.png')";;
		
	var successHandler = {};
	successHandler.postCheckCallback = function(){};
	successHandler.successCheck = function(result){
		if(result.status == "success"){
			res.success = true;
			console.log("successcheck:status returned true");
			if(typeof successHandler.postCheckCallback == "function")
				successHandler.postCheckCallback();
			else
				console.log("successHandler.postCheckCallback is not a function")
		}
	};
	
	$("#turnOn").click(function(){
		enabled = JSON.parse(localStorage.getItem('recordingOn'));
		if(enabled===true){
			successHandler.postCheckCallback = function(){
				//alert("successcheck Callback executed");
				document.getElementById("turnOn").style.backgroundImage = "url('../images/off.png')";
				$("#onceEnabled").hide();
			};
			rec.turnOff(successHandler.successCheck);
			
		}else{
			successHandler.postCheckCallback = function(){
				//alert("successcheck Callback executed");
				document.getElementById("turnOn").style.backgroundImage = "url('../images/on.png')";
				$("#onceEnabled").fadeIn();
			};
			rec.turnOn(successHandler.successCheck);
		}
	});
	
	
	$("#start").click(function(){
		if(!recording){
			successHandler.postCheckCallback = function(){
				document.getElementById("start").style.backgroundImage = "url('../images/play.png')";
				recording = !recording;
			}
			rec.startCapture(successHandler.successCheck);
			
		} else {
			successHandler.postCheckCallback = function(){
				document.getElementById("start").style.backgroundImage = "url('../images/pause.png')";
				recording = !recording;
			};
			rec.finishCapture(successHandler.successCheck);
		}
		
	});
	
	$("#menu").mousedown(function(){wCore.dragMove();});
	$("#replayWindow").click(function(){/*rHUD.refreshHelper(true,"Replay");*/ rec.memScreen(); window.location.assign(localStorage.getItem("url"));});
	$("#capture").click(function(){
		rec.capture(1,parseInt(JSON.parse(localStorage.getItem("Settings")).Rgrab)*1000);
	});
});