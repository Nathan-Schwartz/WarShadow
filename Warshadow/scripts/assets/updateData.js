define(['gearData', 'calcData', 'graph', 'arrayData'], function(gData, cData, graph, arrayData){



	function updateData(elementNum){

		var weapon = "";
		var attach = "";
		var arrnum = elementNum;
		var myA = arrayData.getArray();
		var dataLimit = 2; 
		
		//This will stop the function from trying to enter too much data into the array. Google Charts is very strict about how much is in the array.
		if(document.getElementById("showsecond").checked == true){
			dataLimit++;
			if(document.getElementById("showthird").checked == true){
				dataLimit++;
				if(document.getElementById("showfourth").checked == true){
					dataLimit++;
					if(document.getElementById("showfifth").checked == true)
						dataLimit++;
				}
			}
		}
		
		//if the weapon being updated is unselected don't let it graph data or update array
		if(dataLimit <= arrnum){
			return;
		}
		
		//figure out which weapon's data to update
		if(elementNum == 1){
			weapon = "weaponSelect1";
			attach = "attachmentSelect1";
		}else if(elementNum == 2){
			weapon = "weaponSelect2";
			attach = "attachmentSelect2";
		}else if(elementNum == 3){
			weapon = "weaponSelect3";
			attach = "attachmentSelect3";
		}else if(elementNum == 4){
			weapon = "weaponSelect4";
			attach = "attachmentSelect4";
		}else if(elementNum == 5){
			weapon = "weaponSelect5";
			attach = "attachmentSelect5";
		}else if(elementNum == 0){ //update all recursively (used for change in distance/vest/etc)
			updateData(1);
			updateData(2);
			updateData(3);
			updateData(4);
			updateData(5);
			//alert("updated all");
			return; //we don't need to finish the code if we are just using the recursive shortcut
		}
			
	
		//values to get from other objects
		var RFP = false;
		var vestHP = 0;
		var Repelshot = false;
		var Hdamage_reduc = 0;
				
		var vestsArr = gData.getVests();//format {"key":"default","HP":225,"RFProtection":"FALSE","Repel_shot":"FALSE","Armor_per_sec":0,"Explo_res":0,"Melee_res":0,"Special":"none"},
		for(var i = 0; i < vestsArr.length; i++){
		//	console.log(document.getElementById("enemyVest1").value);
			if(vestsArr[i].key == document.getElementById("enemyVest1").value){
				if(vestsArr[i].RFProtection == "TRUE")
					RFP = true;
				if(vestsArr[i].Repel_shot == "TRUE")
					Repelshot = true;
				vestHP = parseInt(vestsArr[i].HP);
			}
		}
				
		var helmsArr = gData.getHelmets(); //format {"key":"Advanced","HP_regen":0,"Damage_reduc":20,"Mine":"FALSE","Flash":"FALSE"},
		for(var i = 0; i < helmsArr.length; i++){
			if(helmsArr[i].key == document.getElementById("enemyHelmet1").value){
				Hdamage_reduc = helmsArr[i].Damage_reduc;		
			}
		}
	
		//This is where the number crunching for the graph data happens
		var weaponArr = gData.getWeapons();
		for(var i = 0; i < weaponArr.length; i++){
			if((weaponArr[i].key == document.getElementById(weapon).value) || document.getElementById(weapon).value == "none"){			
				for(var iters = 0; iters < myA.length; iters++){
					
					if(document.getElementById(weapon).value == "none")
						myA[iters][arrnum] = 0;
					
					else{
						if(document.getElementById("selectGData").value == "Ddamage"){
							myA[iters][arrnum] = cData.damageCalc(parseFloat(weaponArr[i].Damage), parseFloat(weaponArr[i].Min_damage), document.getElementById(attach).value, RFP, iters,parseFloat(weaponArr[i].Min_range), weaponArr[i].Class, parseFloat(weaponArr[i].Damage_reduc), weaponArr[i].Class == 'M' ? parseInt(weaponArr[i].Pellets) : 1);
						
						}else if(document.getElementById("selectGData").value == "DttkH"){
							myA[iters][arrnum] = cData.TTKhead(parseFloat(weaponArr[i].Damage), parseFloat(weaponArr[i].Min_damage), document.getElementById(attach).value, RFP, iters,parseFloat(weaponArr[i].Min_range), weaponArr[i].Class, parseFloat(weaponArr[i].Damage_reduc), vestHP, Hdamage_reduc, weaponArr[i].Archetype, parseFloat(weaponArr[i].RPM));
					
						}else if(document.getElementById("selectGData").value == "DntkH"){
							myA[iters][arrnum] = cData.NTKhead(parseFloat(weaponArr[i].Damage), parseFloat(weaponArr[i].Min_damage), document.getElementById(attach).value, RFP, iters,parseFloat(weaponArr[i].Min_range), weaponArr[i].Class, parseFloat(weaponArr[i].Damage_reduc), vestHP, Hdamage_reduc, weaponArr[i].Archetype, weaponArr[i].Class == 'M' ? parseInt(weaponArr[i].Pellets) : 1);					
					
						}else if(document.getElementById("selectGData").value == "DttkV"){
							myA[iters][arrnum] = cData.TTKvest(parseFloat(weaponArr[i].Damage), parseFloat(weaponArr[i].Min_damage), document.getElementById(attach).value, RFP, iters,parseFloat(weaponArr[i].Min_range), weaponArr[i].Class, parseFloat(weaponArr[i].Damage_reduc), vestHP, Repelshot, parseFloat(weaponArr[i].RPM));
					
						}else if(document.getElementById("selectGData").value == "DntkV"){
							myA[iters][arrnum] = cData.NTKvest(parseFloat(weaponArr[i].Damage), parseFloat(weaponArr[i].Min_damage), document.getElementById(attach).value, RFP, iters,parseFloat(weaponArr[i].Min_range), weaponArr[i].Class, parseFloat(weaponArr[i].Damage_reduc), vestHP, Repelshot, weaponArr[i].Class == 'M' ? parseInt(weaponArr[i].Pellets) : 1);
				
						}else{
							console.log("incorrect value caught by selectGData: " + document.getElementById("selectGData").value );
						}
					}
				}
			}
		}
	arrayData.sendArray(myA);
	graph.graphIT(myA);
};

	return { updateData : updateData};

});