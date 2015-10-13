	
	define(['recording', 'counters'], function(rec, counters){
	
	function nameHandler(name){
		
		/*The capture function is particular in that it can grab past recordings easily but it takes forever to grab future time (because it has to wait to record it) 
		and it only allows one recording to grab footage at a time. For this reason its beneficial to only grab past time. I use the setTimeout function for this purpose.
		*/
		
			var temp = JSON.parse(localStorage.getItem("Settings"));
			
			var after = temp.Rbefore*1000; 
			var before = temp.Rafter*1000; 
	
				if (name == "kill"){
					if((document.getElementById("autoon").checked == true)&&(temp.Rkill == true)){
					//alert("Kill works");
					setTimeout(function(){
							console.log("single");
							rec.capture(6000+ before + after, 1);
						}, 3000 + after);					
					}
				
					counters.incrementKill();
					
				}else if (name == "defibrillator_kill"){
					if((document.getElementById("autoon").checked == true)&&(temp.Rdefib == true)){
						//alert("defib works");
						setTimeout(function(){
							console.log("single");
							rec.capture(7000+ before + after, 1);
						}, 3000 + after);
					}
					
				}else if (name == "kill_headshot"){
					if((document.getElementById("autoon").checked == true)&&(temp.Rheadshot == 1)){
						//alert("single headshot works");
						setTimeout(function(){
							console.log("single");
							rec.capture(6000+ before + after, 1);
						}, 3000 + after);
					}
					
					counters.incrementHeadshot(1);
				
				}else if (name == "kill_melee"){
					if((document.getElementById("autoon").checked == true)&&(temp.Rmelee == 1)){
						//alert("single melee works");
						setTimeout(function(){
							console.log("single");
							rec.capture(6000+ before + after, 1);
						}, 3000 + after);
					}
					
				}else if (name == "headshots_in_a_row_2"){
					if((document.getElementById("autoon").checked == true)&&(temp.Rheadshot == 2)){
						//alert("double melee/2 chain works");
						setTimeout(function(){
							console.log("single");
							rec.capture(9000+ before + after, 1);
						}, 3000 + after);
					}
					
					counters.incrementHeadshot(2);
				}else if(name == "double_kill"){
					if((document.getElementById("autoon").checked == true)&&(temp.Rdoublekill == true)) {
						//alert("double kill works");
						setTimeout(function(){
							console.log("single");
							rec.capture(9000+ before + after, 1);
						}, 3000 + after);
					}
					
				}else if (name == "melee_kills_in_a_row_1"){
					if((document.getElementById("autoon").checked == true)&&(temp.Rmelee == 2)){					
						//alert("butcher works");
						setTimeout(function(){
							console.log("single");
							rec.capture(9000+ before + after, 1);
						}, 3000 + after);
					}
		
				
				}else if (name == "headshots_in_a_row_3"){
					if((document.getElementById("autoon").checked == true)&&(temp.Rheadshot == 3)) {
						//alert("3chain works"); 
						setTimeout(function(){
							console.log("single");
							rec.capture(12000+ before + after, 1);
						}, 5000 + after);
					}
					
					counters.incrementHeadshot(3);
					
				}else if (name == "pvp_triple_kill") { 
					if((document.getElementById("autoon").checked == true)&&(temp.Rtriplekill == true)&&(temp.Rdoublekill == false)) {	
						//alert("triple kill works");
						setTimeout(function(){
							console.log("single");
							rec.capture(12000+ before + after, 1);
						}, 5000 + after);
					}
				
				}else if(name == "melee_kills_in_a_row_2"){ 
					if((document.getElementById("autoon").checked == true)&&(temp.Rmelee == 3)){
						//alert("bloody butcher works");
						setTimeout(function(){
							console.log("single");
							rec.capture(12000+ before + after, 1);
						}, 3000 + after);
					}
					
				}else if(name == "headshots_in_a_row_4"){ 
					if((document.getElementById("autoon").checked == true)&&(temp.Rheadshot == 4)){
						//alert("4 chain works");
						setTimeout(function(){
							console.log("single");
							rec.capture(15000+ before + after, 1);
						}, 3000 + after);
					}
					
					counters.incrementHeadshot(4);
				}else if (name == "headshots_in_a_row_5"){ 
					if((document.getElementById("autoon").checked == true)&&(temp.Rheadshot == 5)) { 
						//alert("annhilator works");
						setTimeout(function(){
							console.log("single");
							rec.capture(18000+ before + after, 1);
						}, 3000 + after);
					}				
					
					counters.incrementHeadshot(5);
					
				}else if (name == "melee_kills_in_a_row_3"){ 
					if((document.getElementById("autoon").checked == true)&&(temp.Rmelee == 5)){
						//alert("hellbutcher works");
						setTimeout(function(){
							console.log("single");
							rec.capture(18000+ before + after, 1);
						}, 3000 + after);
					}
				
				}else if (name == "achievement_gained"){
					if((document.getElementById("autoon").checked == true)&&(temp.Rachievepic == true)){
						var count = 0;
						var interval = setInterval( //The event is triggered before the achievement appears on the screen so we wait one second, then take a couple.
							function () {
								if(count=1)
									overwolf.media.takeScreenshot(
										function(result){
											if(result.status != "success"){
												alert("Screenshot didn't work");
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
					if((document.getElementById("autoon").checked == true)&&(temp.Rachievevid == true)){
						rec.capture(30000,30000);
					}

				}else if (name == "pvp_flag_kill"){	
					if((document.getElementById("autoon").checked == true)&&(temp.Rflagkill == true)){
						setTimeout(function(){
							console.log("single");
							rec.capture(6000+ before + after, 1);
						}, 3000 + after);
					}
				}else if (name == "claymore_kill"){ 
					if((document.getElementById("autoon").checked == true)&&(temp.Rminekill == true)){
						//alert("mine kills works");
						setTimeout(function(){
							console.log("single");
							rec.capture(10000+ before + after, 1);
						}, 3000 + after);
					}
				}else if (name == "two_at_once_kill"){
					if((document.getElementById("autoon").checked == true)&&(temp.Rperfkill == true)){
						//alert("Perf works");
						setTimeout(function(){
							console.log("single");
							rec.capture(8000+ before + after, 1);
						}, 3000 + after);
					}
	
				}else if (name == "kill_grenade"){
					if((document.getElementById("autoon").checked == true)&&(temp.Rnade == 1)){
						//alert("single grenade works");
						setTimeout(function(){
							console.log("single");
							rec.capture(8000+ before + after, 1);
						}, 3000 + after);
					}
					
				}else if (name == "grenade_kills_in_a_row_1"){
					if((document.getElementById("autoon").checked == true)&&(temp.Rnade == 2)){
						//alert("grenadier works");
						setTimeout(function(){
							console.log("single");
							rec.capture(8000+ before + after, 1);
						}, 3000 + after);
					}
				}else if (name == "grenade_kills_in_a_row_2"){ 
					if((document.getElementById("autoon").checked == true)&&(temp.Rnade == 3)){
						//alert("mega grenadier works");
						setTimeout(function(){
							console.log("single");
							rec.capture(8000+ before + after, 1);
						}, 3000 + after);
					}
				}else if (name == "grenade_kills_in_a_row_3"){ 
					if((document.getElementById("autoon").checked == true)&&(temp.Rnade == 5)){
						//alert("ubergrenadier works");
						setTimeout(function(){
							console.log("single");
							rec.capture(8000+ before + after, 1);
						}, 3000 + after);
					}
				}else if (name == "in_knock_back_kill"){ 
					if((document.getElementById("autoon").checked == true)&&(temp.Rseverekill)){	
						//alert("severe works");
						setTimeout(function(){
							console.log("single");
							rec.capture(12000+ before + after, 1);
						}, 3000 + after);
					}
				}
				/*
					combo kill Rcombokill: false
					kill_in_slide Rslidekill: false,
				*/
			};
		return{nameHandler:nameHandler};
	});