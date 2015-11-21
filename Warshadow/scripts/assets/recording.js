define(["refreshHUD"], function(rHUD){

	overwolf.media.onScreenshotTaken.addListener(function(){
		localStorage.setItem('message', "alertScreenshot");
		rHUD.refreshHelper(true,"popup");
	});

	function isFunction(arg){
		if(typeof arg == "function")
			return true;
		
		return false;
	};

	function turnOn(callback){
		overwolf.media.replays.turnOn(
			{}, 
			function(result) {

				console.log(result);
				if(result.status== "success"){
					localStorage.setItem('recordingOn', true);
					localStorage.setItem('message', "alertEnabled");
					rHUD.refreshHelper(true,"popup");
				}else{
					if(result.error != "Already turned on."){
						//var myArr = JSON.parse(localStorage.getItem("errorList"));
						//var myError = "Enable Recording Error:" + result.error;
						//myArr.push(myError);
						//localStorage.setItem("errorList", JSON.stringify(myArr));
						alert("I'm sorry, the recording feature wasn't able to start properly. Overwolf says the error is: " + result.error + "\n \nLook at the Info page to learn more.");
					}else if(result.error == "Already turned on." && JSON.parse(localStorage.getItem('recordingOn')) === false){
						alert("Another app hijacked the recording feature!! \n\n You probably have another Overwolf recording/streaming app. If thats not the case you may have ShadowPlay.\n\n If you have ShadowPlay, you may need to turn off or disable it and then restart your computer. \n\n Learn more in the Info page");
					}
				}
				if(isFunction(callback))
					callback(result);
			}
		);
	};

	function turnOff(callback){
		overwolf.media.replays.turnOff(
			function(result) {
				console.log(result);
				if(isFunction(callback))
					callback(result);
				
				if(result.status== "success"){
					localStorage.setItem('message', "alertDisabled");
					localStorage.setItem('recordingOn', false);
					rHUD.refreshHelper(true,"popup");
				}else
					console.log(result.error);
			}
		);
	};

	var url = "";	

	function startCapture(callback){
		overwolf.media.replays.startCapture(1,
			function(result){
				if(isFunction(callback))
					callback(result);
				
				console.log(result);
				url = result.url;
				localStorage.setItem("url", result.url);
			}
		);
	};

	function finishCapture(callback){
		overwolf.media.replays.finishCapture(url, function(result){
			if(isFunction(callback))
				callback(result);
			
			if(result.status== "success"){
				localStorage.setItem("recordingCount", JSON.parse(localStorage.getItem("recordingCount")) + 1);
				console.log("it should have updated recCounter in finishCapture");
			}
		});
	};

	function capture(before, after, callback){
		overwolf.media.replays.capture(before, after,
			function(result){
				console.log("finishEnded",result);
				if(result.status== "success"){
					localStorage.setItem("recordingCount", JSON.parse(localStorage.getItem("recordingCount")) + 1);
					console.log("it should have updated recCounter in finishEnded");
				}
				if(isFunction(callback))
					callback(result);
				
			},
			function(result){
				console.log("prefinish",result);
				if(result.status== "success"){
					localStorage.setItem("url", result.url);
					overwolf.media.replays.finishCapture(result.url,
						function(result){
							console.log('finishCalled',result);
						}
					);
				}
			}
		);
	};

	function memScreen(){
		overwolf.media.getScreenshotUrl(
			{
				/*
				//Optional - Crop the screen (happens before the rescale, if both are used).
				//Positive values are absolute, negative values are relative (-1.0 - 0)
				crop: {
					x: -0.5, //Start cropping at the middle of the screen
					y: 0,
					width: 400,
					height: -1.0 //Use 100% of the height
				},
				//Optional - Rescale the final image to these dimensions
				rescale: {
					width: 1920,
					height: -0.4
				}*/
			},
			function(result) {
				if (result.status == "success"){
					localStorage.setItem("url", result.url)
					console.log("Screenshot URL result", result.url);
				}
			}
		);
	};

	return{
		memScreen:memScreen,
		capture:capture,
		turnOff:turnOff,
		turnOn:turnOn,
		startCapture:startCapture,
		finishCapture:finishCapture,
	};
});