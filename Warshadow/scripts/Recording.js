define(function () {		

	function turnOn(){
		overwolf.media.replays.turnOn(
			{"settings": {
				"audio": {
					"mic": {
						"volume": 100,
						"enabled": true
					},
					"game": {
						"volume": 75,
						"enabled": true
					}
				},
				/*in absence of video settings here, recording will use setting config from overwolf capture settings.
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
				},*/
				"peripherals": {
					"capture_mouse_cursor": "both"
				}
			}}, 
			function(result) {
				console.log(result);
				if(result.status== "success"){
			
				}else{
					if(result.error != "Already turned on."){
						alert("I'm sorry, the background process for the capturing feature wasn't able to work properly. Overwolf says the error is: " + result.error);
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
		
function capture(before, after){
	
	if(after == -1){
		if(isNaN(parseInt(JSON.parse(localStorage.getItem("Settings")).Rgrab))){
			alert("you entered a bad value")
		}
		else{
			before = before + (parseInt(JSON.parse(localStorage.getItem("Settings")).Rgrab)*1000);
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
	}
	else{

		after = after + (parseInt(JSON.parse(localStorage.getItem("Settings")).Rcuddling)*1000); 
		before = before + (parseInt(JSON.parse(localStorage.getItem("Settings")).Rforeplay)*1000); 
	
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
		turnOn:turnOn
	};

});