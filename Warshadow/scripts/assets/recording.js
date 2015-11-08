define(["refreshHUD"], function(rHUD){

	overwolf.media.onScreenshotTaken.addListener(function(){
		//localStorage.setItem('message', "alertScreenshot");
		//rHUD.refreshHelper(true,"popup");
	});

	function turnOn(){
		overwolf.media.replays.turnOn(
			{}, 
			function(result) {
				console.log(result);
				if(result.status== "success"){
					localStorage.setItem('recordingOn', true);
					localStorage.setItem('message', "alertEnabled");
					rHUD.refreshHelper(true,"popup");
				}else{
					if(result.error == "Already turned on." && JSON.parse(localStorage.getItem('recordingOn')) === false){
						alert("Another app hijacked the recording feature!! I can't believe you have another recording app, I thought what we had was special :( \n\n This problem happens because only 1 recording can happen at a time. To fix this problem open up the other program and turn off the recording. To prevent this issue in the future you could prevent it from auto-launching with each game (assuming it has this option). If you really don't want to use my awesome auto-recording feature, I have made it easy to disable it in settings.");
						document.getElementById("autoon").checked = false;
					}else if(result.error != "Already turned on."){
						alert("I'm sorry, the recording feature wasn't able to start properly. Overwolf says the error is: " + result.error);
						document.getElementById("autoon").checked = false;
					}
				}
			}
		);
	};

	function turnOff(){
		overwolf.media.replays.turnOff(
			function(result) {
				console.log(result);
				if(result.status== "success"){
					localStorage.setItem('message', "alertDisabled");
				}else
					console.log(result.error);
			}
		);
		localStorage.setItem('recordingOn', false);
	};
		
	var url = "";	
		
	function startCapture(){
		overwolf.media.replays.startCapture(1, // !!!This was just used for testing. The startCapture function is broken (confirmed by Overwolf, should be patched in next dev platform update)
			function(result){
				console.log(result);
				url = result.url;
			}
		);
	};

	function finishCapture(){
		overwolf.media.replays.finishCapture(url, function(result){console.log(result);});
	};
			
	function capture(before, after){
		if(after < 2){ //I call this function with a -1 every time for "manual capture" 
			after=2;
			180000
			//overwolf.media.replays.capture(parseInt(JSON.parse(localStorage.getItem("Settings")).Rgrab)*1000
			, after, // !!! I just took out the 'before+' that was before getting Rgrab
			function(result){console.log("first",result); localStorage.setItem('message', "alertVideo"); rHUD.refreshHelper(true,"popup");},
			function(results){
				console.log("second",results);
				if(results.status== "success"){
					localStorage.setItem("url", results.url);
					overwolf.media.replays.finishCapture(results.url,
						function(results){
							console.log("finish capture: ", results);
							if(results.status== "success"){
							}else{
							}
						}	
					);				
				}
			}
		}else{
			overwolf.media.replays.capture(before, after,
				function(result){if(result) console.log("first",result);},
				function(results){
					console.log("second",results);
					if(results.status== "success"){
						localStorage.setItem("url", results.url);
						overwolf.media.replays.finishCapture(results.url,
							function(results){
								console.log(results);
								if(results.status== "success"){
								}else{
								}
							}
						);			
					}
				}
			);
		}
	};

	return{
		capture:capture,
		turnOff:turnOff,
		turnOn:turnOn,
		startCapture:startCapture,
		finishCapture:finishCapture,
	};
});