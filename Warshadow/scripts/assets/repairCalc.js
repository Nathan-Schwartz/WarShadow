define(['gearData', 'gearDisplay'], function(gData, gDisplay){
//repairCalc calculates the cost of each item and outputs it in the div near the relevant drop down menu.
//rewardCalc does the same thing for rewards

//Both of the above call external methods to recalculate the comparison tab values

function repairCalc(){

	var duration = $( "#gameLengthSlider" ).slider( "value" ) * 60;
	var repair_mult = duration/36000; //since repair values are based on 10 hours of gameplay this is what we will multiply repair cost by to adjust for the session length

	function outputCosts(obj){
		if(obj.length == 3){
			if(document.getElementById(obj[1]).value == 'rental') document.getElementById(obj[2]).innerText = 0;
			for(var i = 0; i < obj[0].length; i++){
				if(document.getElementById(obj[1]).value == obj[0][i].key)
					document.getElementById(obj[2]).innerText = Math.ceil(repair_mult * parseInt(obj[0][i].Repair_num));
			}
		}else{
			if(document.getElementById(obj[1]).value == 'rental') document.getElementById(obj[2]).innerText = 0;
			if(document.getElementById(obj[3]).value == 'rental') document.getElementById(obj[4]).innerText = 0;
			for(var i = 0; i < obj[0].length; i++){
				if(document.getElementById(obj[1]).value == obj[0][i].key)
					document.getElementById(obj[2]).innerText = Math.ceil(repair_mult * parseInt(obj[0][i].Repair_num));
			
				if(document.getElementById(obj[3]).value == obj[0][i].key)
					document.getElementById(obj[4]).innerText = Math.ceil(repair_mult * parseInt(obj[0][i].Repair_num));
			}
		}
	}

	var charts = {
		Vests: [gData.getVests(), 'RCvest', 'vesCost'],
		Helmets: [gData.getHelmets(), 'RChelmet', 'helCost'],
		Gloves: [gData.getGloves(), 'RCgloves', 'gloCost'],
		Boots: [gData.getBoots(), 'RCboots', 'booCost'],
		Weapons: [gData.getWeapons(),'RCprimary', 'priCost', 'RCsecondary', 'secCost'],
		Knives: [gData.getKnives(), 'RCmelee', 'melCost']
	};

	outputCosts(charts.Vests);
	outputCosts(charts.Helmets);
	outputCosts(charts.Gloves);
	outputCosts(charts.Boots);
	outputCosts(charts.Weapons);
	outputCosts(charts.Knives);
	
	document.getElementById('totCost').innerText = (
		parseInt(document.getElementById('vesCost').innerText) +
		parseInt(document.getElementById('helCost').innerText) +
		parseInt(document.getElementById('gloCost').innerText) +
		parseInt(document.getElementById('booCost').innerText) +
		parseInt(document.getElementById('priCost').innerText) +
		parseInt(document.getElementById('secCost').innerText) +
		parseInt(document.getElementById('melCost').innerText)
	);	
	updateProfit();
	gDisplay.reprintCostComp();
};


function rewardCalc(){
	var booster = ($( "#boosterSlider" ).slider( "value" )+100)/100;
		
	if(document.getElementById('missionType').value == "Normal"){
		document.getElementById('income').innerText = parseInt(160*booster)
		document.getElementById('incomeFW').innerText = parseInt(400*booster)
		document.getElementById('incomeFWparent').style.display = "inline";  
		document.getElementById('netFWparent').style.display = "inline";
		
	}else if(document.getElementById('missionType').value == "Normal Africa"){
		document.getElementById('income').innerText = parseInt(232*booster)
		document.getElementById('incomeFW').innerText = parseInt(472*booster)
		document.getElementById('incomeFWparent').style.display = "inline";  
		document.getElementById('netFWparent').style.display = "inline";
		
	}else if(document.getElementById('missionType').value == "Hard"){
		document.getElementById('income').innerText = parseInt(256*booster)
		document.getElementById('incomeFW').innerText = parseInt(576*booster)
		document.getElementById('incomeFWparent').style.display = "inline";  
		document.getElementById('netFWparent').style.display = "inline";
		
	}else if(document.getElementById('missionType').value == "Hard Africa"){
		document.getElementById('income').innerText = parseInt(455*booster)
		document.getElementById('incomeFW').innerText = parseInt(775*booster)
		document.getElementById('incomeFWparent').style.display = "inline";  
		document.getElementById('netFWparent').style.display = "inline";
		
	}else if(document.getElementById('missionType').value == "Insane"){
		document.getElementById('income').innerText = parseInt(560*booster)
		document.getElementById('incomeFW').innerText = parseInt(960*booster)
		document.getElementById('incomeFWparent').style.display = "inline";  
		document.getElementById('netFWparent').style.display = "inline";
		
	}else if(document.getElementById('missionType').value == "Insane Africa"){
		document.getElementById('income').innerText = parseInt(647*booster)
		document.getElementById('incomeFW').innerText = parseInt(1047*booster)
		document.getElementById('incomeFWparent').style.display = "inline";  
		document.getElementById('netFWparent').style.display = "inline";
		
	}else if(document.getElementById('missionType').value == "Tower"){
		document.getElementById('income').innerText = parseInt(1760*booster)
		document.getElementById('incomeFWparent').style.display = "none";  
		document.getElementById('netFWparent').style.display = "none";
		
	}else if(document.getElementById('missionType').value == "Marathon"){
		document.getElementById('income').innerText = parseInt(4480*booster)
		document.getElementById('incomeFWparent').style.display = "none";  
		document.getElementById('netFWparent').style.display = "none";
		
	}
	updateProfit();
	gDisplay.reprintRewardComp();
};
	
function updateProfit(){
	document.getElementById('net').innerText = (parseInt(document.getElementById('income').innerText) - parseInt(document.getElementById('totCost').innerText));
	document.getElementById('netFW').innerText = (parseInt(document.getElementById('incomeFW').innerText) - parseInt(document.getElementById('totCost').innerText));
}

	return{
		rewardCalc:rewardCalc,
		repairCalc:repairCalc
	};
	
});