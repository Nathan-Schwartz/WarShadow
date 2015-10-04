define(function () {		

	function turnOn(){
		overwolf.media.replays.turnOn(
			{/*"settings": {
				"audio": {
					"mic": {
						"volume": 100
						
					},
					"game": {
						"volume": 75
						// !!!! Why doesn't sound work
					}
				},
				//in absence of video settings here, recording will use setting config from overwolf capture settings.
				"video": {
					"auto_calc_kbps": false,
					"fps": 30,
					"width": 1280,
					"height": 720,
					"max_kbps": 1500,
					"encoder": {
						"name": "overwolf.streaming.enums.StreamEncoder.X264",
						"config": {
							"preset": "overwolf.streaming.enums.StreamEncoderPreset_x264.ULTRAFAST",
							"rate_control": "overwolf.streaming.enums.StreamEncoderRateControl_x264.RC_CBR",
							"keyframe_interval": 2
						}
					}
				},
				"peripherals": {
					"capture_mouse_cursor": "both"
				}*/
			}, 
			function(result) {
				console.log(result);
				if(result.status== "success"){
			
				}else{
					if(result.error != "Already turned on."){
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
				if(result.status== "success"){}
					//alert("success");
				else
					alert(result.error);
			}
		);
	};	
	
var url = "";	
	
function startCapture(){
	overwolf.media.replays.startCapture(500000, 
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
	
	if(after == -1){ //I call this function with a -1 every time for "manual capture" 
		if(isNaN(parseInt(JSON.parse(localStorage.getItem("Settings")).Rgrab))){
			alert("You entered an invalid Capture duration");
		}
		else{
			overwolf.media.replays.capture(before + (parseInt(JSON.parse(localStorage.getItem("Settings")).Rgrab)*1000), after, 
				function(result){if(result) console.log(result);},
				function(results){
					//console.log(results);
					if(results.status== "success"){
						overwolf.media.replays.finishCapture(results.url,
							function(results){
								//console.log(results);
								if(results.status== "success"){
									//alert("success");
								}else{
									//alert(results.error);
								}
							}	
						);				
					}
				}
			);
		}
	}
	else{
		overwolf.media.replays.capture(before, after,
			function(result){if(result) console.log(result);},
			function(results){
				console.log(results);
				if(results.status== "success"){
					overwolf.media.replays.finishCapture(results.url,
						function(results){
							console.log(results);
							if(results.status== "success"){
								//alert("success");
							}else{
								//alert(results.error);
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