define(['gearData'], function(gData){

function repairCalc(){
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
	var repair_mult = duration/36000; //since repair values are based on 10 hours of gameplay this is what we will multiply repair cost by to adjust for the session length
	//localStorage.setItem('repairMult', repair_mult);
	
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
	
	document.getElementById('net').innerText = (parseInt(document.getElementById('income').innerText) - parseInt(document.getElementById('totCost').innerText));
	document.getElementById('netFW').innerText = (parseInt(document.getElementById('incomeFW').innerText) - parseInt(document.getElementById('totCost').innerText));
	
};

	return{
		repairCalc:repairCalc
	};
	
});