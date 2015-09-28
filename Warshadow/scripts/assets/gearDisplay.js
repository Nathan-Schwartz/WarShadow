define(['gearData'], function(gData) {

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
			addHTML(id,"<tr class='alt'><td>" + gear[iter].key + "</td><td>"+ Math.round((1-gear[iter].Damage_reduc) * 100) + "%" + " </td><td>" + gear[iter].HP_regen + "</td><td>" + (gear[iter].Flash == "TRUE" ? "X" : "") +"</td><td>"+ (gear[iter].Mine == "TRUE" ? "X" : "") + "</td><td>" + gear[iter].Repair_num+ "</td></tr>");

	}else if(id == 'Vests'){
		addHTML(id,"<tr class='alt'><td>" + gear[iter].key + "</td><td>"+ gear[iter].HP +"</td><td>"+ (gear[iter].RFProtection == "TRUE" ? "10" : "") + " </td><td>" + (gear[iter].Repel_shot == "TRUE" ? "X" : "")+ "</td><td>" + (gear[iter].Armor_per_sec == 0 ? "" : gear[iter].Armor_per_sec)+ "</td><td>" + (gear[iter].Explo_res== 0 ? "" : gear[iter].Explo_res*100 + "%" )+ "</td><td>" + (gear[iter].Melee_res== 0 ? "" : gear[iter].Melee_res*100 + "%" ) +"</td><td>" + (gear[iter].Special == "none" ? "" : gear[iter].Special) + "</td><td>" + gear[iter].Repair_num+ "</td></tr>");
	}else if(id == 'Gloves'){
		addHTML(id,"<tr class='alt'><td>" + gear[iter].key + "</td><td>"+ (Math.round(1-gear[iter].Damage_reduc) * 100 == 100? "" : Math.round((1-gear[iter].Damage_reduc) * 100) + "% ") + " </td><td>" + (gear[iter].Reload==0 ? "" : gear[iter].Reload) + "</td><td>" + (gear[iter].Swap_speed== 0 ? "" : gear[iter].Swap_speed) +"</td><td>" + (gear[iter].Melee_range== 0 ? "" : gear[iter].Melee_range) + "</td><td>" + (gear[iter].Melee_speed== 0 ? "" : gear[iter].Melee_speed) + "</td><td>" + (gear[iter].recoil_reduc== 0 ? "" : gear[iter].recoil_reduc) + "</td><td>" + (gear[iter].Spread_reduc== 0 ? "" : gear[iter].Spread_reduc) + "</td><td>" + (gear[iter].Knockdown == "TRUE" ? "X" : "") + "</td><td>" + gear[iter].Repair_num+  "</td></tr>");
	}else if(id == 'Boots'){
		addHTML(id,"<tr class='alt'><td>" + gear[iter].key + "</td><td>"+ (Math.round(1-gear[iter].Damage_reduc_perc) * 100 == 100 ? "": Math.round((1-gear[iter].Damage_reduc_perc) * 100) + "% ") + " </td><td>" + (gear[iter].Mine_delay == "TRUE" ? "X" : "") + "</td><td>" + (gear[iter].Silent == "TRUE" ? "X" : "") +"</td><td>" + (gear[iter].Sprint_speed== 0 ? "" : gear[iter].Sprint_speed) + "</td><td>" + (gear[iter].Sprint_dur== 0 ? "" : gear[iter].Sprint_dur) + "</td><td>" + (gear[iter].Slide_dist== 0 ? "" : gear[iter].Slide_dist) + "</td><td>" + (gear[iter].Crouch_speed== 0 ? "" : gear[iter].Crouch_speed + "%") + "</td><td>" + gear[iter].Repair_num+ "</td></tr>");
	}
};

function printer(obj){
	for(var i = 0; i < obj[1].length; i++){
		printTable(obj[0],i, obj[1]);
	}
};


	var charts = {
		Vests: ['Vests', gData.getVests()],
		Helmets: ['Helmets', gData.getHelmets()],
		Gloves: ['Gloves', gData.getGloves()],
		Boots: ['Boots', gData.getBoots()]
		};
	
	printer(charts.Vests);
	printer(charts.Gloves);
	printer(charts.Boots);
	printer(charts.Helmets);

	
});