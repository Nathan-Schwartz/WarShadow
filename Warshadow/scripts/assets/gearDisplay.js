define(['gearData'], function(gData) {
// !!! figure out real purpose of gearDisplay vs repairCalc as far as outputs. Some functions should probably be encapsulated externally.

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
	}else if(id == 'Rewards'){
		document.querySelector('#sideRewards').appendChild(obj);
	}
	
};
	
function printTable(id, iter, gear){
	if(id == 'Helmets'){
		if(gear[iter].key != "npc")
			addHTML(id,"<tr class='alt'><td>" + gear[iter].key + "</td><td align='center'>"+ Math.round((1-gear[iter].Damage_reduc) * 100) + "%" + " </td><td align='center'>" + gear[iter].HP_regen + "</td><td align='center'>" + (gear[iter].Flash == "TRUE" ? "X" : "") +"</td><td align='center'>"+ (gear[iter].Mine == "TRUE" ? "X" : "") + /*"</td><td>" + gear[iter].Repair_num+ */"</td></tr>");

	}else if(id == 'Vests'){
		if(gear[iter].Shop_name != "none")
			addHTML(id,"<tr class='alt'><td>" + gear[iter].key + "</td><td align='center'>"+ gear[iter].HP +"</td><td align='center'>"+ (gear[iter].RFProtection == "TRUE" ? "10" : "") + " </td><td align='center'>" + (gear[iter].Repel_shot == "TRUE" ? "X" : "")+ "</td><td align='center'>" + (gear[iter].Armor_per_sec == 0 ? "" : gear[iter].Armor_per_sec)+ "</td><td align='center'>" + (gear[iter].Explo_res== 0 ? "" : gear[iter].Explo_res*100 + "%" )+ "</td><td align='center'>" + (gear[iter].Melee_res== 0 ? "" : gear[iter].Melee_res*100 + "%" ) +"</td><td>" + (gear[iter].Special == "none" ? "" : gear[iter].Special) + /*"</td><td>" + gear[iter].Repair_num+*/ "</td></tr>");
	}else if(id == 'Gloves'){
		addHTML(id,"<tr class='alt'><td>" + gear[iter].key + "</td><td align='center'>"+ (Math.round(1-gear[iter].Damage_reduc) * 100 == 100? "" : Math.round((1-gear[iter].Damage_reduc) * 100) + "% ") + " </td><td align='center'>" + (gear[iter].Reload==0 ? "" : gear[iter].Reload) + "</td><td align='center'>" + (gear[iter].Swap_speed== 0 ? "" : gear[iter].Swap_speed) +"</td><td align='center'>" + (gear[iter].Melee_range== 0 ? "" : gear[iter].Melee_range) + "</td><td align='center'>" + (gear[iter].Melee_speed== 0 ? "" : gear[iter].Melee_speed) + "</td><td align='center'>" + (gear[iter].recoil_reduc== 0 ? "" : gear[iter].recoil_reduc) + "</td><td align='center'>" + (gear[iter].Spread_reduc== 0 ? "" : gear[iter].Spread_reduc) + "</td><td align='center'>" + (gear[iter].Knockdown == "TRUE" ? "X" : "") + /*"</td><td>" + gear[iter].Repair_num+ */ "</td></tr>");
	}else if(id == 'Boots'){
		addHTML(id,"<tr class='alt'><td>" + gear[iter].key + "</td><td align='center'>"+ (Math.round(1-gear[iter].Damage_reduc_perc) * 100 == 100 ? "": Math.round((1-gear[iter].Damage_reduc_perc) * 100) + "% ") + " </td><td align='center'>" + (gear[iter].Mine_delay == "TRUE" ? "X" : "") + "</td><td align='center'>" + (gear[iter].Silent == "TRUE" ? "X" : "") +"</td><td align='center'>" + (gear[iter].Sprint_speed== 0 ? "" : gear[iter].Sprint_speed) + "</td><td align='center'>" + (gear[iter].Sprint_dur== 0 ? "" : gear[iter].Sprint_dur) + "</td><td align='center'>" + (gear[iter].Slide_dist== 0 ? "" : gear[iter].Slide_dist) + "</td><td align='center'>" + (gear[iter].Crouch_speed== 0 ? "" : gear[iter].Crouch_speed + "%") + /*"</td><td>" + gear[iter].Repair_num+ */"</td></tr>");
	}
};	
	
	
	
function printComparison(id, iter, gear){
	
	var durString = JSON.stringify(parseFloat(document.getElementById("duration").value));
	var durArr = durString.split("."); //if there is a decimal value enterred into the duration box split it into two strings.
	
	//turn the strings back into numbers
	for(var i = 0; i < durArr.length; i++){
		durArr[i] = parseInt(durArr[i]);
	}
	
	durArr[0] = durArr[0] * 60; //convert the integer section into seconds
	if(durArr.length > 1){
		durArr[0] = durArr[0] + durArr[1] * 60; //convert the decimal into seconds and add it to the other value
	}
	var duration = durArr[0]; //Seconds enterred by user
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

function printer(obj){
	for(var i = 0; i < obj[1].length; i++){ // !!!!do i need to shim?
		printTable(obj[0],i, obj[1]);
	}
};

// !!!! Look into Modal windows
// !!!! I removed the document.ready things for jQuery, do i need them still?
		
		
		
		function rewardCalc(){
			var booster = parseInt(document.getElementById("booster").value)/100;
		
			document.getElementById('sideRewards').innerHTML = "";
		
			addHTML("Rewards","<tr><th> Mission </th><th align='center'> Rewards  </th><th align='center'> First Win</th></tr>");
			addHTML("Rewards","<tr><td> Easy </td><td align='center'> "+parseInt(201*booster) + "  </td><td align='center'> "+ parseInt(400*booster)+ "  </td></tr>"); // !!!! put tested initiation rewards here too
			addHTML("Rewards","<tr><td> Normal </td><td align='center'> "+parseInt(160*booster) + "   </td><td align='center'> "+ parseInt(400*booster)+ "  </td></tr>");
			addHTML("Rewards","<tr><td> Normal Africa </td><td align='center'> "+parseInt(232*booster) + "    </td><td align='center'> "+ parseInt(472*booster)+ "  </td></tr>");
			addHTML("Rewards","<tr><td> Hard </td><td align='center'> "+ parseInt(256*booster)+ "   </td><td align='center'> "+ parseInt(576*booster)+ "  </td></tr>");
			addHTML("Rewards","<tr><td> Hard Africa </td><td align='center'> "+ parseInt(455*booster)+ "    </td><td align='center'> "+parseInt(775*booster) + "  </td></tr>");
			addHTML("Rewards","<tr><td> Insane </td><td align='center'> "+parseInt(560*booster) + "   </td><td align='center'> "+parseInt(960*booster) + "  </td></tr>");
			addHTML("Rewards","<tr><td> Insane Africa </td><td align='center'> "+ parseInt(647*booster)+ "    </td><td align='center'> "+parseInt(1047*booster) + "  </td></tr>");
			addHTML("Rewards","<tr><td> Tower HQ </td><td align='center'> "+parseInt(1760*booster) + "   </td></tr>");
			addHTML("Rewards","<tr><td> Marathon </td><td align='center'> "+parseInt(4480*booster) + "  </td></tr>");
			
				if(document.getElementById('missionType').value == "Easy"){
					document.getElementById('incomeFW').style.display = "inline";
					document.getElementById('netFW').style.display = "inline";
					document.getElementById('income').innerText = parseInt(160*booster)
					document.getElementById('incomeFW').innerText = parseInt(400*booster)
		
				}else if(document.getElementById('missionType').value == "Normal"){
					document.getElementById('incomeFW').style.display = "inline";
					document.getElementById('netFW').style.display = "inline";
					document.getElementById('income').innerText = parseInt(160*booster)
					document.getElementById('incomeFW').innerText = parseInt(400*booster)
		
				}else if(document.getElementById('missionType').value == "Normal Africa"){
					document.getElementById('incomeFW').style.display = "inline";
					document.getElementById('netFW').style.display = "inline";
					document.getElementById('income').innerText = parseInt(232*booster)
					document.getElementById('incomeFW').innerText = parseInt(472*booster)
		
				}else if(document.getElementById('missionType').value == "Hard"){
					document.getElementById('incomeFW').style.display = "inline";
					document.getElementById('netFW').style.display = "inline";
					document.getElementById('income').innerText = parseInt(256*booster)
					document.getElementById('incomeFW').innerText = parseInt(576*booster)
		
				}else if(document.getElementById('missionType').value == "Hard Africa"){
					document.getElementById('incomeFW').style.display = "inline";
					document.getElementById('netFW').style.display = "inline";
					document.getElementById('income').innerText = parseInt(455*booster)
					document.getElementById('incomeFW').innerText = parseInt(775*booster)
		
				}else if(document.getElementById('missionType').value == "Insane"){
					document.getElementById('incomeFW').style.display = "inline";
					document.getElementById('netFW').style.display = "inline";
					document.getElementById('income').innerText = parseInt(560*booster)
					document.getElementById('incomeFW').innerText = parseInt(960*booster)
		
				}else if(document.getElementById('missionType').value == "Insane Africa"){
					document.getElementById('incomeFW').style.display = "inline";
					document.getElementById('netFW').style.display = "inline";
					document.getElementById('income').innerText = parseInt(647*booster)
					document.getElementById('incomeFW').innerText = parseInt(1047*booster)
		
				}else if(document.getElementById('missionType').value == "Tower HQ"){
					document.getElementById('income').innerText = parseInt(1760*booster)
					document.getElementById('incomeFW').style.display = "none";
					document.getElementById('netFW').style.display = "none";
		
				}else if(document.getElementById('missionType').value == "Marathon"){
					document.getElementById('income').innerText = parseInt(4480*booster)
					document.getElementById('incomeFW').style.display = "none";
					document.getElementById('netFW').style.display = "none";
				}
				
				
			document.getElementById('net').innerText = parseInt(document.getElementById('income').innerText) - parseInt(document.getElementById('totCost').innerText);
			document.getElementById('netFW').innerText = parseInt(document.getElementById('incomeFW').innerText) - parseInt(document.getElementById('totCost').innerText);
			
		};
		
	function calc(){
		recalc();
		
		printer(charts.Vests);
		printer(charts.Gloves);
		printer(charts.Boots);
		printer(charts.Helmets);
		rewardCalc();
		
	}	
		
	function recalc(){
		
		clearOld();
		initializeLabels();
		compPrinter(charts.Vests);
		compPrinter(charts.Gloves);
		compPrinter(charts.Boots);
		compPrinter(charts.Helmets);
		compPrinter(charts.Knives);
		compPrinter(charts.Weapons);
	}
	
	return{
		recalc:recalc,
		rewardCalc:rewardCalc,
		calc:calc
		
	}
});

