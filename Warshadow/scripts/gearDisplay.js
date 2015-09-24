define(function() {

function addHTML(message) {
	var obj = document.createElement("tr");
	obj.innerHTML = message;
	document.querySelector('#table').appendChild(obj);
}
	
function printTable(iter, gear){
	if(iter%2 == 1)
		addHTML("<tr><td>" + gear[iter].key + "</td><td>"+ gear[iter].Damage_reduc + "</td><td>" + gear[iter].HP_regen + "</td></tr>");
	else
		addHTML("<tr class='alt'><td>" + gear[iter].key + "</td><td>"+ gear[iter].Damage_reduc + "</td><td>" + gear[iter].HP_regen + "</td></tr>");
}
	
	
	for(var i = 0; i < gData.getHelmets().length; i++){
		printTable(i, gData.getHelmets());
	}
	

});