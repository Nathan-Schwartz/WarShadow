define(['gearData'], function(gData) {
//recalculates and prints the tables for comparison on Tab 2 of Statcrack


var charts = {
		Vests: ['Vests', gData.getVests()],
		Helmets: ['Helmets', gData.getHelmets()],
		Gloves: ['Gloves', gData.getGloves()],
		Boots: ['Boots', gData.getBoots()],
		Weapons: ['Weapons', gData.getWeapons()],
		Knives: ['Knives', gData.getKnives()]
		};	
		
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
	}else if(id == "Medic"){
		document.querySelector('#sideShotgun').appendChild(obj);
	}else if(id == "Rifle"){
		document.querySelector('#sideRifle').appendChild(obj);
	}else if(id == "Engineer"){
		document.querySelector('#sideSMG').appendChild(obj);
	}else if(id == "Sniper"){
		document.querySelector('#sideSniper').appendChild(obj);
	}else if(id == 'Rewards'){
		document.querySelector('#sideRewards').appendChild(obj);
	}
};
	
function printComparison(id, iter, gear){
	
	var duration = $( "#gameLengthSlider" ).slider( "value" ) * 60;
	var mult = duration/36000;
	
	if(id == 'Helmets'){
		if(gear[iter].key != "npc")
			addCOMP(id,"<tr class='alt'><td>" + gear[iter].key + "</td><td align='center'>"+  + parseInt(gear[iter].Repair_num*mult)+ "</td></tr>");

	}else if(id == 'Vests'){
		if(gear[iter].Shop_name != "none")
			addCOMP(id,"<tr class='alt'><td>" + gear[iter].key + "</td><td align='center'>"+parseInt(gear[iter].Repair_num*mult)+ "</td></tr>");
	}else if(id == 'Gloves'){
		addCOMP(id,"<tr class='alt'><td>" + gear[iter].key + "</td><td align='center'>"+ parseInt(gear[iter].Repair_num*mult)+  "</td></tr>");
	}else if(id == 'Boots'){
		addCOMP(id,"<tr class='alt'><td>" + gear[iter].key +"</td><td align='center'>"+ parseInt(gear[iter].Repair_num*mult)+ "</td></tr>");
	}else if(id== 'Weapons'){
		if(gear[iter].Class == "A"){//secondary
			addCOMP("Secondary","<tr class='alt'><td>" + gear[iter].key + "</td><td align='center'>"+  + parseInt(gear[iter].Repair_num*mult)+ "</td></tr>");
		}else{//primary
			if(gear[iter].Class == "M"){
				addCOMP("Medic","<tr class='alt'><td>" + gear[iter].key + "</td><td align='center'>"+  + parseInt(gear[iter].Repair_num*mult)+ "</td></tr>");
			}else if(gear[iter].Class == "R"){
				addCOMP("Rifle","<tr class='alt'><td>" + gear[iter].key + "</td><td align='center'>"+  + parseInt(gear[iter].Repair_num*mult)+ "</td></tr>");
			}else if(gear[iter].Class == "E"){
				addCOMP("Engineer","<tr class='alt'><td>" + gear[iter].key + "</td><td align='center'>"+  + parseInt(gear[iter].Repair_num*mult)+ "</td></tr>");
			}else if(gear[iter].Class == "S"){
				addCOMP("Sniper","<tr class='alt'><td>" + gear[iter].key + "</td><td align='center'>"+  + parseInt(gear[iter].Repair_num*mult)+ "</td></tr>");
			}		
		addCOMP("Primary","<tr class='alt'><td>" + gear[iter].key + "</td><td align='center'>"+  + parseInt(gear[iter].Repair_num*mult)+ "</td></tr>");
			
		}
	}else if(id == 'Knives'){
		addCOMP(id,"<tr class='alt'><td>" + gear[iter].key + "</td><td align='center'>"+  + parseInt(gear[iter].Repair_num*mult)+ "</td></tr>");
	}
};

function initializeLabels(){
	addCOMP( "Helmets","<tr><th>Helmet Name</th> <th>Repairs</th></tr>");
	addCOMP( "Vests","<tr><th>Vest Name</th> <th>Repairs</th></tr>");
	addCOMP( "Gloves","<tr><th>Glove Name</th> <th>Repairs</th></tr>");
	addCOMP( "Boots","<tr><th>Boot Name</th> <th>Repairs</th></tr>");
	addCOMP( "Secondary","<tr><th>Pistol Name</th> <th>Repairs</th></tr>");
	addCOMP( "Medic","<tr><th>Shotgun Name</th> <th>Repairs</th></tr>");
	addCOMP( "Rifle","<tr><th>Rifle Name</th> <th>Repairs</th></tr>");
	addCOMP( "Engineer","<tr><th>SMG Name</th> <th>Repairs</th></tr>");
	addCOMP( "Sniper","<tr><th>Sniper Name</th> <th>Repairs</th></tr>");
	addCOMP( "Primary","<tr><th>Primary Name</th> <th>Repairs</th></tr>");
	addCOMP( "Knives","<tr><th>Knife Name</th> <th>Repairs</th></tr>");
};

function clearOld(){
	document.getElementById('sideHelm').innerHTML = "";
	document.getElementById('sideGlove').innerHTML = "";
	document.getElementById('sideVest').innerHTML = "";
	document.getElementById('sideBoot').innerHTML = "";
	document.getElementById('sidePrimary').innerHTML = "";
	document.getElementById('sideSecondary').innerHTML = "";
	document.getElementById('sideKnife').innerHTML = "";
	document.getElementById('sideShotgun').innerHTML = "";
	document.getElementById('sideRifle').innerHTML = "";
	document.getElementById('sideSMG').innerHTML = "";
	document.getElementById('sideSniper').innerHTML = "";
};

function compPrinter(obj){
	for(var i = 0; i < obj[1].length; i++){
		printComparison(obj[0],i, obj[1]);
	}
}
		
function reprintCostComp(){
	clearOld();
	initializeLabels();
	compPrinter(charts.Vests);
	compPrinter(charts.Gloves);
	compPrinter(charts.Boots);
	compPrinter(charts.Helmets);
	compPrinter(charts.Knives);
	compPrinter(charts.Weapons);
}
	
function reprintRewardComp(){
	
	var booster = ($( "#boosterSlider" ).slider( "value" )+100)/100;
		
	document.getElementById('sideRewards').innnerHTML = "";
		
	addCOMP("Rewards","<tr><th> Mission </th><th align='center'> Rewards  </th><th align='center'> First Win</th></tr>");
	addCOMP("Rewards","<tr><td> Normal </td><td align='center'> "+parseInt(160*booster) + "   </td><td align='center'> "+ parseInt(400*booster)+ "  </td></tr>");
	addCOMP("Rewards","<tr><td> Normal Africa </td><td align='center'> "+parseInt(232*booster) + "    </td><td align='center'> "+ parseInt(472*booster)+ "  </td></tr>");
	addCOMP("Rewards","<tr><td> Hard </td><td align='center'> "+ parseInt(256*booster)+ "   </td><td align='center'> "+ parseInt(576*booster)+ "  </td></tr>");
	addCOMP("Rewards","<tr><td> Hard Africa </td><td align='center'> "+ parseInt(455*booster)+ "    </td><td align='center'> "+parseInt(775*booster) + "  </td></tr>");
	addCOMP("Rewards","<tr><td> Insane </td><td align='center'> "+parseInt(560*booster) + "   </td><td align='center'> "+parseInt(960*booster) + "  </td></tr>");
	addCOMP("Rewards","<tr><td> Insane Africa </td><td align='center'> "+ parseInt(647*booster)+ "    </td><td align='center'> "+parseInt(1047*booster) + "  </td></tr>");
	addCOMP("Rewards","<tr><td> Tower HQ </td><td align='center'> "+parseInt(1760*booster) + "   </td></tr>");
	addCOMP("Rewards","<tr><td> Marathon </td><td align='center'> "+parseInt(4480*booster) + "  </td></tr>");
}		
	
	
	return{
		reprintCostComp:reprintCostComp,
		reprintRewardComp:reprintRewardComp
	}
});

