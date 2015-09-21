define(['jQuery','gearData','windowCoreFunctions', 'updateData'],function($,gData,wCore, upDat){//implement wCore
			
		document.getElementById("distance").onchange = function(){
			if(isNaN(parseFloat(document.getElementById("distance").value))){
				alert("You entered an invalid distance");
			}
			upDat.updateData(1, true);
			upDat.updateData(2, true);
			upDat.updateData(3, true);
			upDat.updateData(4, true);
			upDat.updateData(5, true);;
		};
		
		
		
		
		
		var myA = []; //LocalStorage!!!!!!!!!!!!
		for(var iter = 0; iter < 100; iter++){
			myA.push([]);
		}
		for(var iters = 0; iters < 100; iters++){
			myA[iters][0] = iters;
		}
		console.log(myA);


	google.load('visualization', '1', {packages: ['corechart', 'line']});

	
	
	
	
function repairCalc(){//barely started
	
	var vestsArr = gData.getVests();//{"key":"default","HP":225,"RFProtection":"FALSE","Repel_shot":"FALSE","Armor_per_sec":0,"Explo_res":0,"Melee_res":0,"Special":"none", Repair_num:},
	for(var i = 0; i < vestsArr.length; i++){
		if(vestsArr[i].key == document.getElementById("enemyVest1").value){
			
						
						
		}
	}
};
	

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
	
	//I am trying to make the checkbox menu intuitive, but to do so I need to pop all of the "extra" 2nd dimensional array elements because google charts is picky.
	//My newest idea is to make a "checked box" counter to figure out how many coordinates I need in the array and then just run the pop loop until that number is reached.
	
	
	
			document.getElementById('secondweapon').style.display = 'none';
			document.getElementById('thirdweapon').style.display = 'none';
			document.getElementById('fourthweapon').style.display = 'none';
			document.getElementById('fifthweapon').style.display = 'none';
			
			document.getElementById("showsecond").onchange = function(){
				if(document.getElementById('secondweapon').style.display == 'none'){
					document.getElementById('secondweapon').style.display = 'block';
					
				}else{
					document.getElementById('secondweapon').style.display = 'none';
					document.getElementById('thirdweapon').style.display = 'none';
					document.getElementById('fourthweapon').style.display = 'none';
					document.getElementById('fifthweapon').style.display = 'none';
					
					for(var iters = 0; iters < 100; iters++){
						
						do{
							myA[iters].pop();
						}while(myA[iters].length >2);
						
					}
				}
			};
			
			document.getElementById("showthird").onchange = function(){
				if(document.getElementById('thirdweapon').style.display == 'none'){
					document.getElementById('thirdweapon').style.display = 'block';
					
				}else{
					document.getElementById('thirdweapon').style.display = 'none';
					document.getElementById('showfourth').checked = false;
					document.getElementById('showfifth').checked = false;
					document.getElementById('fourthweapon').style.display = 'none';
					document.getElementById('fifthweapon').style.display = 'none';
					for(var iters = 0; iters < 100; iters++){
						
						do{
							myA[iters].pop();
						}while(myA[iters].length >3); 
						
					}
				}
			};
			
			
			
			document.getElementById("showfourth").onchange = function(){
				if(document.getElementById('fourthweapon').style.display == 'none'){
					document.getElementById('fourthweapon').style.display = 'block';
				
				}else{
					document.getElementById('fourthweapon').style.display = 'none';
					document.getElementById('showfifth').checked = false;
					document.getElementById('fifthweapon').style.display = 'none';
					for(var iters = 0; iters < 100; iters++){
						
						do{
							myA[iters].pop();
						}while(myA[iters].length >4);
						
					}
				}
			};
				
				
			document.getElementById("showfifth").onchange = function(){
				if(document.getElementById('fifthweapon').style.display == 'none')
					document.getElementById('fifthweapon').style.display = 'block';
				
				else{
					document.getElementById('fifthweapon').style.display = 'none';
					for(var iters = 0; iters < 100; iters++){
						myA[iters].pop();
					}
				}
			};
			
			
			
			
document.getElementById("weaponSelect1").onchange = function(){upDat.updateData(1,false);};
document.getElementById("weaponSelect2").onchange = function(){upDat.updateData(2,false);};
document.getElementById("weaponSelect3").onchange = function(){upDat.updateData(3,false);};
document.getElementById("weaponSelect4").onchange = function(){upDat.updateData(4,false);};
document.getElementById("weaponSelect5").onchange = function(){upDat.updateData(5,false);};


document.getElementById("attachmentSelect1").onchange = function(){upDat.updateData(1,false);};
document.getElementById("attachmentSelect2").onchange = function(){upDat.updateData(2,false);};
document.getElementById("attachmentSelect3").onchange = function(){upDat.updateData(3,false);};
document.getElementById("attachmentSelect4").onchange = function(){upDat.updateData(4,false);};
document.getElementById("attachmentSelect5").onchange = function(){upDat.updateData(5,false);};

document.getElementById("selectGData").onchange = function(){upDat.updateData(1, true);upDat.updateData(2, true);upDat.updateData(3, true);upDat.updateData(4, true);upDat.updateData(5, true);};
document.getElementById("enemyVest1").onchange = function(){upDat.updateData(1, true);upDat.updateData(2, true);upDat.updateData(3, true);upDat.updateData(4, true);upDat.updateData(5, true);};
document.getElementById("enemyHelmet1").onchange = function(){upDat.updateData(1, true);upDat.updateData(2, true);upDat.updateData(3, true);upDat.updateData(4, true);upDat.updateData(5, true);};
document.getElementById("distance").onchange = function(){upDat.updateData(1, true);upDat.updateData(2, true);upDat.updateData(3, true);upDat.updateData(4, true);upDat.updateData(5, true);};
			

document.getElementById("content").onmousedown = function(){wCore.dragMove();};


});
			