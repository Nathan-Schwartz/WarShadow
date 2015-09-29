define(['gearData'], function(gData) {

function addCOMP(id,message) {
	var obj = document.createElement("tr");
	obj.innerHTML = message;
	if(id == "Helmets"){
		document.querySelector('#sideHelm').appendChild(obj);
	}else if(id == 'Gloves'){
		document.querySelector('#sideGlove').appendChild(obj);
	}else if(id == 'Vests'){
		document.querySelector('#sideVest').appendChild(obj);
	}else if(id == 'Boots'){
		document.querySelector('#sideBoot').appendChild(obj);
	}else if(id == "Primary"){
		document.querySelector('#sidePrimary').appendChild(obj);
	}else if(id == "Secondary"){
		document.querySelector('#sideSecondary').appendChild(obj);
	}else if(id == "Knives"){
		document.querySelector('#sideKnife').appendChild(obj);
	}
};

function addHTML(id,message) {
	var obj = document.createElement("tr");
	obj.innerHTML = message;
	if(id == "Helmets"){
		document.querySelector('#Htable').appendChild(obj);
	}else if(id == 'Gloves'){
		document.querySelector('#Gtable').appendChild(obj);
	}else if(id == 'Vests'){
		document.querySelector('#Vtable').appendChild(obj);
	}else if(id == 'Boots'){
		document.querySelector('#Btable').appendChild(obj);
	}
};
	
function printTable(id, iter, gear){
	if(id == 'Helmets'){
		if(gear[iter].key != "npc")
			addHTML(id,"<tr class='alt'><td>" + gear[iter].key + "</td><td align='center'>"+ Math.round((1-gear[iter].Damage_reduc) * 100) + "%" + " </td><td align='center'>" + gear[iter].HP_regen + "</td><td align='center'>" + (gear[iter].Flash == "TRUE" ? "X" : "") +"</td><td align='center'>"+ (gear[iter].Mine == "TRUE" ? "X" : "") + /*"</td><td>" + gear[iter].Repair_num+ */"</td></tr>");

	}else if(id == 'Vests'){
		addHTML(id,"<tr class='alt'><td>" + gear[iter].key + "</td><td align='center'>"+ gear[iter].HP +"</td><td align='center'>"+ (gear[iter].RFProtection == "TRUE" ? "10" : "") + " </td><td align='center'>" + (gear[iter].Repel_shot == "TRUE" ? "X" : "")+ "</td><td align='center'>" + (gear[iter].Armor_per_sec == 0 ? "" : gear[iter].Armor_per_sec)+ "</td><td align='center'>" + (gear[iter].Explo_res== 0 ? "" : gear[iter].Explo_res*100 + "%" )+ "</td><td align='center'>" + (gear[iter].Melee_res== 0 ? "" : gear[iter].Melee_res*100 + "%" ) +"</td><td>" + (gear[iter].Special == "none" ? "" : gear[iter].Special) + /*"</td><td>" + gear[iter].Repair_num+*/ "</td></tr>");
	}else if(id == 'Gloves'){
		addHTML(id,"<tr class='alt'><td>" + gear[iter].key + "</td><td align='center'>"+ (Math.round(1-gear[iter].Damage_reduc) * 100 == 100? "" : Math.round((1-gear[iter].Damage_reduc) * 100) + "% ") + " </td><td align='center'>" + (gear[iter].Reload==0 ? "" : gear[iter].Reload) + "</td><td align='center'>" + (gear[iter].Swap_speed== 0 ? "" : gear[iter].Swap_speed) +"</td><td align='center'>" + (gear[iter].Melee_range== 0 ? "" : gear[iter].Melee_range) + "</td><td align='center'>" + (gear[iter].Melee_speed== 0 ? "" : gear[iter].Melee_speed) + "</td><td align='center'>" + (gear[iter].recoil_reduc== 0 ? "" : gear[iter].recoil_reduc) + "</td><td align='center'>" + (gear[iter].Spread_reduc== 0 ? "" : gear[iter].Spread_reduc) + "</td><td align='center'>" + (gear[iter].Knockdown == "TRUE" ? "X" : "") + /*"</td><td>" + gear[iter].Repair_num+ */ "</td></tr>");
	}else if(id == 'Boots'){
		addHTML(id,"<tr class='alt'><td>" + gear[iter].key + "</td><td align='center'>"+ (Math.round(1-gear[iter].Damage_reduc_perc) * 100 == 100 ? "": Math.round((1-gear[iter].Damage_reduc_perc) * 100) + "% ") + " </td><td align='center'>" + (gear[iter].Mine_delay == "TRUE" ? "X" : "") + "</td><td align='center'>" + (gear[iter].Silent == "TRUE" ? "X" : "") +"</td><td align='center'>" + (gear[iter].Sprint_speed== 0 ? "" : gear[iter].Sprint_speed) + "</td><td align='center'>" + (gear[iter].Sprint_dur== 0 ? "" : gear[iter].Sprint_dur) + "</td><td align='center'>" + (gear[iter].Slide_dist== 0 ? "" : gear[iter].Slide_dist) + "</td><td align='center'>" + (gear[iter].Crouch_speed== 0 ? "" : gear[iter].Crouch_speed + "%") + /*"</td><td>" + gear[iter].Repair_num+ */"</td></tr>");
	}
};	
	
function printComparison(id, iter, gear){
	if(id == 'Helmets'){
		if(gear[iter].key != "npc")
			addCOMP(id,"<tr class='alt'><td>" + gear[iter].key + "</td><td align='center'>"+  + gear[iter].Repair_num+ "</td></tr>");

	}else if(id == 'Vests'){
		addCOMP(id,"<tr class='alt'><td>" + gear[iter].key + "</td><td align='center'>"+gear[iter].Repair_num+ "</td></tr>");
	}else if(id == 'Gloves'){
		addCOMP(id,"<tr class='alt'><td>" + gear[iter].key + "</td><td align='center'>"+ gear[iter].Repair_num+  "</td></tr>");
	}else if(id == 'Boots'){
		addCOMP(id,"<tr class='alt'><td>" + gear[iter].key +"</td><td align='center'>"+ gear[iter].Repair_num+ "</td></tr>");
	}else if(id== 'Weapons'){
		if(gear[iter].Class == "A")
			addCOMP("Secondary","<tr class='alt'><td>" + gear[iter].key + "</td><td align='center'>"+  + gear[iter].Repair_num+ "</td></tr>");
		else
			addCOMP("Primary","<tr class='alt'><td>" + gear[iter].key + "</td><td align='center'>"+  + gear[iter].Repair_num+ "</td></tr>");
	}else if(id == 'Knives'){
		addCOMP(id,"<tr class='alt'><td>" + gear[iter].key + "</td><td align='center'>"+  + gear[iter].Repair_num+ "</td></tr>");
	}
}

function compPrinter(obj){
	for(var i = 0; i < obj[1].length; i++){
		printComparison(obj[0],i, obj[1]);
	}
}

function printer(obj){
	for(var i = 0; i < obj[1].length; i++){
		printTable(obj[0],i, obj[1]);
	}
};

	var charts = {
		Vests: ['Vests', gData.getVests()],
		Helmets: ['Helmets', gData.getHelmets()],
		Gloves: ['Gloves', gData.getGloves()],
		Boots: ['Boots', gData.getBoots()],
		Weapons: ['Weapons', gData.getWeapons()],
		Knives: ['Knives', gData.getKnives()]
		};
	
	printer(charts.Vests);
	printer(charts.Gloves);
	printer(charts.Boots);
	printer(charts.Helmets);
	compPrinter(charts.Vests);
	compPrinter(charts.Gloves);
	compPrinter(charts.Boots);
	compPrinter(charts.Helmets);
	compPrinter(charts.Weapons);
	compPrinter(charts.Knives);



});