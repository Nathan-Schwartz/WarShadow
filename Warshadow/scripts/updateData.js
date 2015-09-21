define(['gearData', 'calcData', 'graph'], function(gData, cData, graph){

function updateData(elementNum, rec){

	var weapon = " ";
	var attach = " ";
	var arrnum = elementNum;

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
	}
	
	//get values from other objects
	var RFP = false;
	var vestHP = 0;
	var Repelshot = false;
	var Hdamage_reduc = 0;
				
	var vestsArr = gData.getVests();//format {"key":"default","HP":225,"RFProtection":"FALSE","Repel_shot":"FALSE","Armor_per_sec":0,"Explo_res":0,"Melee_res":0,"Special":"none"},
	for(var i = 0; i < vestsArr.length; i++){
		if(vestsArr[i].key == document.getElementById("enemyVest1").value){
			//console.log(vestsArr[i].key); //.name
			if(vestsArr[i].RFProtection == "TRUE")
				RFP = true;
			if(vestsArr[i].Repel_shot == "TRUE")
				Repelshot = true;
			vestHP = parseFloat(vestsArr[i].HP);
		}
	}
				
	var helmsArr = gData.getHelmets(); //format {"key":"Advanced","HP_regen":0,"Damage_reduc":20,"Mine":"FALSE","Flash":"FALSE"},
	for(var i = 0; i < helmsArr.length; i++){
		if(helmsArr[i].key == document.getElementById("enemyHelmet1").value){
			console.log(helmsArr[i].key); //name
			Hdamage_reduc = helmsArr[i].Damage_reduc;
			console.log("Helmet resistance = " + Hdamage_reduc);			
		}
	}
	
	
	if((rec == false)&&(document.getElementById(weapon).value == "none")){
		alert("Please select a valid weapon");
	}else{
		var weaponArr = gData.getWeapons();
		for(var i = 0; i < weaponArr.length; i++){
			if(weaponArr[i].key == document.getElementById(weapon).value){
			//	console.log(weaponArr[i].key); //.name				
				for(var iters = 0; iters < 100; iters++){
					
					if(document.getElementById("selectGData").value == "Ddamage"){
						myA[iters][arrnum] = cData.damageCalc(parseFloat(weaponArr[i].Damage), parseFloat(weaponArr[i].Min_damage), document.getElementById(attach).value, RFP, iters,parseFloat(weaponArr[i].Min_range), weaponArr[i].Class, parseFloat(weaponArr[i].Damage_reduc));
						
					}else if(document.getElementById("selectGData").value == "DttkH"){
						myA[iters][arrnum] = cData.TTKhead(parseFloat(weaponArr[i].Damage), parseFloat(weaponArr[i].Min_damage), document.getElementById(attach).value, RFP, iters,parseFloat(weaponArr[i].Min_range), weaponArr[i].Class, parseFloat(weaponArr[i].Damage_reduc), vestHP, Hdamage_reduc, weaponArr[i].Archetype, parseFloat(weaponArr[i].RPM));
					
					}else if(document.getElementById("selectGData").value == "DntkH"){
						myA[iters][arrnum] = cData.NTKhead(parseFloat(weaponArr[i].Damage), parseFloat(weaponArr[i].Min_damage), document.getElementById(attach).value, RFP, iters,parseFloat(weaponArr[i].Min_range), weaponArr[i].Class, parseFloat(weaponArr[i].Damage_reduc), vestHP, Hdamage_reduc, weaponArr[i].Archetype);					
					
					}else if(document.getElementById("selectGData").value == "DttkV"){
						myA[iters][arrnum] = cData.TTKvest(parseFloat(weaponArr[i].Damage), parseFloat(weaponArr[i].Min_damage), document.getElementById(attach).value, RFP, iters,parseFloat(weaponArr[i].Min_range), weaponArr[i].Class, parseFloat(weaponArr[i].Damage_reduc), vestHP, Repelshot, parseFloat(weaponArr[i].RPM));
					
					}else if(document.getElementById("selectGData").value == "DntkV"){
						myA[iters][arrnum] = cData.NTKvest(parseFloat(weaponArr[i].Damage), parseFloat(weaponArr[i].Min_damage), document.getElementById(attach).value, RFP, iters,parseFloat(weaponArr[i].Min_range), weaponArr[i].Class, parseFloat(weaponArr[i].Damage_reduc), vestHP, Repelshot);
				
					}else{
						console.log("incorrect value caught by selectGData: " + document.getElementById("selectGData").value );
					}
				}
			}
		}
	console.log(myA);
	graph.graphIT();
	}
};

	return { updateData : updateData};

});