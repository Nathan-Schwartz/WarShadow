define(['recording', 'counters'], function(rec, counters){
	
	function nameHandler(name){
	//The capture function is particular in that it can grab past recordings easily but it takes forever to grab future time (because it has to wait to record it) 
	//and it only allows one recording to grab footage at a time. For this reason its beneficial to only grab past time. I use the setTimeout function for this purpose.

		var temp = JSON.parse(localStorage.getItem("Settings"));
		var after = temp.Rafter*1000;
		var before = temp.Rbefore*1000;
		var checkCached = document.getElementById("autoon").checked;
		var layersCached = JSON.parse(localStorage.getItem("recordingLayers"));

		switch(name){
			case "kill":
				if((checkCached == true)&&(temp.Rkill == true)){
					localStorage.setItem("recordingLayers", layersCached+1);
					setTimeout(function(){
						before = before<6000?6000:before;
						after = after<3000?3000:after;
						rec.capture(before + after, 1);//
						localStorage.setItem("recordingLayers", layersCached-1);
					}, after);					
				}
				counters.incrementKill();
				break;
			case "kill_in_slide":
				if((checkCached == true)&&(temp.Rslidekill == true))&&(temp.Rkill == false)){
					localStorage.setItem("recordingLayers", layersCached+1);
					setTimeout(function(){
						before = before<6000?6000:before;
						after = after<3000?3000:after;
						rec.capture(before + after, 1);
						localStorage.setItem("recordingLayers", layersCached-1);
					}, after);
				}
				break;
			case "defibrillator_kill":
				if((checkCached == true)&&(temp.Rdefib == true))&&(temp.Rkill == false)){
					localStorage.setItem("recordingLayers", layersCached+1);
					setTimeout(function(){
						before = before<6000?6000:before;
						after = after<3000?3000:after;
						rec.capture(before + after, 1);
						localStorage.setItem("recordingLayers", layersCached-1);
					}, after);
				}
				break;
			case "kill_headshot":
				if((checkCached == true)&&(temp.Rheadshot == 1))&&(temp.Rkill == false)){
					localStorage.setItem("recordingLayers", layersCached+1);
					setTimeout(function(){
						before = before<6000?6000:before;
						after = after<3000?3000:after;
						rec.capture(before + after, 1);
						localStorage.setItem("recordingLayers", layersCached-1);
					}, after);
				}
				counters.incrementHeadshot(1);
				break;
			case "kill_melee":
				if((checkCached == true)&&(temp.Rmelee == 1))&&(temp.Rkill == false)){
					localStorage.setItem("recordingLayers", layersCached+1);
					setTimeout(function(){
						before = before<6000?6000:before;
						after = after<3000?3000:after;
						rec.capture(before + after, 1);
						localStorage.setItem("recordingLayers", layersCached-1);
					}, after);
				}
				break;
			case "pvp_flag_kill":
				if((checkCached == true)&&(temp.Rflagkill == true))&&(temp.Rkill == false)){
					localStorage.setItem("recordingLayers", layersCached+1);
					setTimeout(function(){
						before = before<6000?6000:before;
						after = after<3000?3000:after;
						rec.capture(before + after, 1);
						localStorage.setItem("recordingLayers", layersCached-1);
					}, after);
				}
				break;
			case "claymore_kill":
	/*special*/	if((checkCached == true)&&(temp.Rminekill == true)){
					localStorage.setItem("recordingLayers", layersCached+1);
					setTimeout(function(){
						before = before<10000?10000:before;
						after = after<3000?3000:after;
						rec.capture(before + after, 1);
						localStorage.setItem("recordingLayers", layersCached-1);
					}, after);
				}
				break;
			case "two_at_once_kill":
				if((checkCached == true)&&(temp.Rperfkill == true))&&(temp.Rkill == false)){
					localStorage.setItem("recordingLayers", layersCached+1);
					setTimeout(function(){
						before = before<6000?6000:before;
						after = after<3000?3000:after;
						rec.capture(before + after, 1);
						localStorage.setItem("recordingLayers", layersCached-1);
					}, after);
				}
				break;
			case "kill_grenade":
	/*special*/	if((checkCached == true)&&(temp.Rnade == 1))&&(temp.Rkill == false)){
					localStorage.setItem("recordingLayers", layersCached+1);
					setTimeout(function(){
						before = before<8000?8000:before;
						after = after<3000?3000:after;
						rec.capture(before + after, 1);
						localStorage.setItem("recordingLayers", layersCached-1);
					}, after);
				}
				break;
			case "grenade_kills_in_a_row_1":
	/*special*/	if((checkCached == true)&&(temp.Rnade == 2)){
					localStorage.setItem("recordingLayers", layersCached+1);
					setTimeout(function(){
						before = before<8000?8000:before;
						after = after<3000?3000:after;
						rec.capture(before + after, 1);
						localStorage.setItem("recordingLayers", layersCached-1);
					}, after);
				}
				break;
			case "grenade_kills_in_a_row_2":
	/*special*/ if((checkCached == true)&&(temp.Rnade == 3)){
					localStorage.setItem("recordingLayers", layersCached+1);
					setTimeout(function(){
						before = before<8000?8000:before;
						after = after<3000?3000:after;
						rec.capture(before + after, 1);
						localStorage.setItem("recordingLayers", layersCached-1);
					}, after);
				}
				break;
			case "grenade_kills_in_a_row_3":
	/*special*/	if((checkCached == true)&&(temp.Rnade == 5)){
					localStorage.setItem("recordingLayers", layersCached+1);
					setTimeout(function(){
						before = before<8000?8000:before;
						after = after<3000?3000:after;
						rec.capture(before + after, 1);
						localStorage.setItem("recordingLayers", layersCached-1);
					}, after);
				}
				break;
			case "in_knock_back_kill":
					if((checkCached == true)&&(temp.Rseverekill))&&(temp.Rkill == false)){
					localStorage.setItem("recordingLayers", layersCached+1);
					setTimeout(function(){
						before = before<12000?12000:before;
						after = after<3000?3000:after;
						rec.capture(before + after, 1);
						localStorage.setItem("recordingLayers", layersCached-1);
					}, after);
				}
				break;	
				
	//TWO
			case "headshots_in_a_row_2":
				if((checkCached == true)&&(temp.Rheadshot == 2)){
					localStorage.setItem("recordingLayers", layersCached+1);
					setTimeout(function(){
						before = before<9000?9000:before;
						after = after<3000?3000:after;
						rec.capture(before + after, 1);
						localStorage.setItem("recordingLayers", layersCached-1);
					}, after);
				}
				counters.incrementHeadshot(2);
				break;
			case "double_kill":
				if((checkCached == true)&&(temp.Rdoublekill == true)) {
					localStorage.setItem("recordingLayers", layersCached+1);
					setTimeout(function(){
						before = before<9000?9000:before;
						after = after<3000?3000:after;
						rec.capture(before + after, 1);
						localStorage.setItem("recordingLayers", layersCached-1);
					}, after);
				}
				break;
			case "melee_kills_in_a_row_1":
				if((checkCached == true)&&(temp.Rmelee == 2)){
					localStorage.setItem("recordingLayers", layersCached+1);					
					setTimeout(function(){
						before = before<9000?9000:before;
						after = after<3000?3000:after;
						rec.capture(before + after, 1);
						localStorage.setItem("recordingLayers", layersCached-1);
					}, after);
				}
				break;
	//THREE
			case "headshots_in_a_row_3":
				if((checkCached == true)&&(temp.Rheadshot == 3)) {
					localStorage.setItem("recordingLayers", layersCached+1);
					setTimeout(function(){
						before = before<12000?12000:before;
						after = after<5000?5000:after;
						rec.capture(before + after, 1);
						localStorage.setItem("recordingLayers", layersCached-1);
					}, after);
				}
				counters.incrementHeadshot(3);
				break;
			case "pvp_triple_kill":
				if((checkCached == true)&&(temp.Rtriplekill == true)) {
					localStorage.setItem("recordingLayers", layersCached+1);
					setTimeout(function(){
						before = before<12000?12000:before;
						after = after<5000?5000:after;
						rec.capture(before + after, 1);
						localStorage.setItem("recordingLayers", layersCached-1);
					}, after);
				}
				break;
			case "melee_kills_in_a_row_2":
				if((checkCached == true)&&(temp.Rmelee == 3)){
					localStorage.setItem("recordingLayers", layersCached+1);
					setTimeout(function(){
						before = before<12000?12000:before;
						after = after<5000?5000:after;
						rec.capture(before + after, 1);
						localStorage.setItem("recordingLayers", layersCached-1);
					}, after);
				}
				break;
	//FOUR
			case "headshots_in_a_row_4":
				if((checkCached == true)&&(temp.Rheadshot == 4)){
					localStorage.setItem("recordingLayers", layersCached+1);
					setTimeout(function(){
						before = before<15000?15000:before;
						after = after<5000?5000:after;
						rec.capture(before + after, 1);
						localStorage.setItem("recordingLayers", layersCached-1);
					}, after);
				}
				counters.incrementHeadshot(4);
				break;
	//FIVE
			case "headshots_in_a_row_5":
				if((checkCached == true)&&(temp.Rheadshot == 5)) {
					localStorage.setItem("recordingLayers", layersCached+1);
					setTimeout(function(){
						before = before<18000?18000:before;
						after = after<5000?5000:after;
						rec.capture(before + after, 1);
						localStorage.setItem("recordingLayers", layersCached-1);
					}, after);
				}				
				counters.incrementHeadshot(5);
				break;
			case "melee_kills_in_a_row_3":
				if((checkCached == true)&&(temp.Rmelee == 5)){
					localStorage.setItem("recordingLayers", layersCached+1);
					setTimeout(function(){
						before = before<18000?18000:before;
						after = after<5000?5000:after;
						rec.capture(before + after, 1);
						localStorage.setItem("recordingLayers", layersCached-1);
					}, after);
				}
				break;
	//MISC
			case "achievement_gained":																
				if((checkCached == true)&&(temp.Rachievepic == true)){
					var count = 0;
					var interval = setInterval( //The event is triggered before the achievement appears on the screen so we wait one second, then take a couple.
						function () {
							if(count=1)
								overwolf.media.takeScreenshot(
									function(result){
										if(result.status != "success"){
											console.log("Screenshot didn't work");
										}
									}
								);
							count++;
							console.log(count);
							if(count >= 2){
								clearInterval(interval);
							}
						}, 
					1000);
				}
				if((checkCached == true)&&(temp.Rachievevid == true)){
					localStorage.setItem("recordingLayers", layersCached+1);
					setTimeout(function(){
						rec.capture(60000,1);
						localStorage.setItem("recordingLayers", layersCached-1);
					}, 30000);
				}
				break;
			default:
			 console.log("default");
				break;
		}
		//combo kill Rcombokill: false
	};
	return{nameHandler:nameHandler};
});