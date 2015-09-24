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
	if(gear[iter].key == "npc"){
		//exclude
	}else{
		addHTML(id,"<tr class='alt'><td>" + gear[iter].key + "</td><td>"+ Math.round((1-gear[iter].Damage_reduc) * 100) + " % " + " </td><td>" + gear[iter].HP_regen + "</td><td>" + gear[iter].Flash +"</td><td>"+ gear[iter].Mine + "</td></tr>");
	}
};
	
	
	for(var i = 0; i < gData.getHelmets().length; i++){
		printTable('Helmets',i, gData.getHelmets());
	}
	

	for(var i = 0; i < gData.getVests().length; i++){
		printTable('Vests',i, gData.getVests());
	}
	
});