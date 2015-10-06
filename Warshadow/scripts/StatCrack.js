define(['jquery','gearData','windowCoreFunctions', 'updateData', 'arrayData', 'sync', 'gearDisplay', 'htmlInjection', 'repairCalc'],function($, gData,wCore, upDat, arrayData, sync, gDisplay, inject, rCalc){//implement wCore
			
	inject.injectHTML();
	gData.initStats();
	rCalc.repairCalc();;
	gDisplay.recalc(); //used to be dependant on rCalc's localstorage set. Might be more efficient that way
			
			
			document.getElementById("showsecond").onchange = function(){
				
				if(document.getElementById("showsecond").checked){
					document.getElementById('secondweapon').style.display = 'block';
					
				}else{
					arrayData.initializeArray();
					document.getElementById('secondweapon').style.display = 'none';
					document.getElementById('thirdweapon').style.display = 'none';
					document.getElementById("weaponSelect3").value == "none";
					document.getElementById("showthird").checked = false;
					document.getElementById('fourthweapon').style.display = 'none';
					document.getElementById("weaponSelect4").value == "none";
					document.getElementById("showfourth").checked = false;
					document.getElementById('fifthweapon').style.display = 'none';
					document.getElementById("weaponSelect5").value == "none";
					document.getElementById("showfifth").checked = false;
					upDat.updateData(0);
				}
			};
			
			document.getElementById("showthird").onchange = function(){
				if(document.getElementById("showthird").checked){
					document.getElementById('thirdweapon').style.display = 'block';
					
				}else{
					arrayData.initializeArray();
					document.getElementById('thirdweapon').style.display = 'none';
					document.getElementById('fourthweapon').style.display = 'none';
					document.getElementById("weaponSelect4").value == "none";
					document.getElementById("showfourth").checked = false;
					document.getElementById('fifthweapon').style.display = 'none';
					document.getElementById("weaponSelect5").value == "none";
					document.getElementById("showfifth").checked = false;
					upDat.updateData(0);
				}
			};
			
			
			
			document.getElementById("showfourth").onchange = function(){
				if(document.getElementById("showfourth").checked){
					document.getElementById('fourthweapon').style.display = 'block';
				
				}else{
					arrayData.initializeArray();
					document.getElementById('fourthweapon').style.display = 'none';
					document.getElementById('fifthweapon').style.display = 'none';
					document.getElementById("weaponSelect5").value == "none";
					document.getElementById("showfifth").checked = false;
					upDat.updateData(0);
				}
			};
				
				
			document.getElementById("showfifth").onchange = function(){
				if(document.getElementById("showfifth").checked)
					document.getElementById('fifthweapon').style.display = 'block';
				
				else{
					arrayData.initializeArray();
					document.getElementById('fifthweapon').style.display = 'none';
					upDat.updateData(0);
				}
			};
			
	//jQuery for tab implementation		
	$(document).ready(function() {
		$('.tabs .tab-links a').on('click', function(e)  {
			var currentAttrValue = $(this).attr('href');
 
			// Show/Hide Tabs
			$('.tabs ' + currentAttrValue).show().siblings().hide();
 
			// Change/remove current tab to active
			$(this).parent('li').addClass('active').siblings().removeClass('active');
	
			e.preventDefault();
		});
	});
	
	sync.testPlugin() ? sync.getText(): console.log("failed to get plugin");
	
	arrayData.initializeArray();
	
			
$('#RChelmet').mousedown(function(){
	$("#sideRewards").hide();
	$("#sideVest").hide();
	$("#sideGlove").hide();
	$("#sideBoot").hide();
	$("#sidePrimary").hide();
	$("#sideSecondary").hide();
	$("#sideKnife").hide();
	$("#sideShotgun").hide();
	$("#sideRifle").hide();
	$("#sideSMG").hide();
	$("#sideSniper").hide();
	$("#sideHelm").show();
});

$('#RCvest').mousedown(function(){
	$("#sideRewards").hide();
	$('#sideHelm').hide();
	$("#sideGlove").hide();
	$("#sideBoot").hide();
	$("#sidePrimary").hide();
	$("#sideSecondary").hide();
	$("#sideKnife").hide();
	$("#sideShotgun").hide();
	$("#sideRifle").hide();
	$("#sideSMG").hide();
	$("#sideSniper").hide();
	$("#sideVest").show();
});

$('#RCgloves').mousedown(function(){
	$("#sideRewards").hide();
	$('#sideHelm').hide();
	$("#sideVest").hide();
	$("#sideBoot").hide();
	$("#sidePrimary").hide();
	$("#sideSecondary").hide();
	$("#sideKnife").hide();
	$("#sideShotgun").hide();
	$("#sideRifle").hide();
	$("#sideSMG").hide();
	$("#sideSniper").hide();
	$("#sideGlove").show();
});

$('#RCboots').mousedown(function(){
	$("#sideRewards").hide();
	$('#sideHelm').hide();
	$("#sideVest").hide();
	$("#sideGlove").hide();
	$("#sidePrimary").hide();
	$("#sideSecondary").hide();
	$("#sideKnife").hide();
	$("#sideShotgun").hide();
	$("#sideRifle").hide();
	$("#sideSMG").hide();
	$("#sideSniper").hide();
	$("#sideBoot").show();
});

$('#RCprimary').mousedown(function(){
	$("#sideRewards").hide();
	$('#sideHelm').hide();
	$("#sideVest").hide();
	$("#sideGlove").hide();
	$("#sideBoot").hide();
	$("#sideSecondary").hide();
	$("#sideKnife").hide();
	$("#sideShotgun").hide();
	$("#sideRifle").hide();
	$("#sideSMG").hide();
	$("#sideSniper").hide();
	$("#sidePrimary").hide();

	if((document.getElementById("RCprimary").value == "none")||(document.getElementById("RCprimary").value == "rental")){
		$("#sidePrimary").show();
	}else{
		var weapons = gData.getWeapons();
		var found = false;
		for(var i = 0; i < weapons.length; i ++){
			if(weapons[i].key == document.getElementById("RCprimary").value){
				if(weapons[i].Class == "M"){
					$("#sideShotgun").show();
				}else if(weapons[i].Class == "E"){
					$("#sideSMG").show();
				}else if(weapons[i].Class == "R"){
					$("#sideRifle").show();
				}else if(weapons[i].Class == "S"){
					$("#sideSniper").show();
				}
				found = true;
				break;
			}
		}
		if(!found) //just in case there is a weird value; It would be almost impossible though.
			$("#sidePrimary").show();
	}
});

$('#RCprimary').change(function(){ // !!! I could encapsulate the callback so i don't have to copy paste it for change and mouseover
	$("#sideRewards").hide();
	$('#sideHelm').hide();
	$("#sideVest").hide();
	$("#sideGlove").hide();
	$("#sideBoot").hide();
	$("#sideSecondary").hide();
	$("#sideKnife").hide();
	$("#sideShotgun").hide();
	$("#sideRifle").hide();
	$("#sideSMG").hide();
	$("#sideSniper").hide();
	$("#sidePrimary").hide();

	if((document.getElementById("RCprimary").value == "none")||(document.getElementById("RCprimary").value == "rental")){
		$("#sidePrimary").show();
	}else{
		var weapons = gData.getWeapons();
		var found = false;
		for(var i = 0; i < weapons.length; i ++){
			if(weapons[i].key == document.getElementById("RCprimary").value){
				if(weapons[i].Class == "M"){
					$("#sideShotgun").show();
				}else if(weapons[i].Class == "E"){
					$("#sideSMG").show();
				}else if(weapons[i].Class == "R"){
					$("#sideRifle").show();
				}else if(weapons[i].Class == "S"){
					$("#sideSniper").show();
				}
				found = true;
				break;
			}
		}
		if(!found) //just in case there is a weird value; It would be almost impossible though.
			$("#sidePrimary").show();
	}
});

$('#RCsecondary').mousedown(function(){
	$("#sideRewards").hide();
	$('#sideHelm').hide();
	$("#sideVest").hide();
	$("#sideGlove").hide();
	$("#sideBoot").hide();
	$("#sidePrimary").hide();
	$("#sideKnife").hide();
	$("#sideSecondary").show();//~!!!!
	$("#sideShotgun").hide();
	$("#sideRifle").hide();
	$("#sideSMG").hide();
	$("#sideSniper").hide();
});

$('#RCmelee').mousedown(function(){
	$("#sideRewards").hide();
	$('#sideHelm').hide();
	$("#sideVest").hide();
	$("#sideGlove").hide();
	$("#sideBoot").hide();
	$("#sidePrimary").hide();
	$("#sideSecondary").hide();
	$("#sideKnife").show();
	$("#sideShotgun").hide();
	$("#sideRifle").hide();
	$("#sideSMG").hide();
	$("#sideSniper").hide();
});

$('#missionType').mousedown(function(){
	$('#sideHelm').hide();
	$("#sideVest").hide();
	$("#sideGlove").hide();
	$("#sideBoot").hide();
	$("#sidePrimary").hide();
	$("#sideSecondary").hide();
	$("#sideKnife").hide();
	$("#sideShotgun").hide();
	$("#sideRifle").hide();
	$("#sideSMG").hide();
	$("#sideSniper").hide();
	$("#sideRewards").show();
});


$("#distance").change(function(){
	if(isNaN(parseInt(document.getElementById("distance").value)) || parseInt(document.getElementById("distance").value) > 100 || parseInt(document.getElementById("distance").value) <= 0)
			alert("You entered an invalid distance");
	
	upDat.updateData(0);
});

$("#booster").change(function(){
	if(isNaN(parseInt(document.getElementById("booster").value)) || parseInt(document.getElementById("booster").value) < 100)
		alert("You entered an invalid booster value. 100% is normal. 175% is normal VIP");
	else
		gDisplay.rewardCalc();
});

$('#missionType').change(function(){
	gDisplay.rewardCalc();
});

$("#duration").change(function(){
	if(isNaN(parseFloat(document.getElementById("duration").value)) || parseInt(document.getElementById("duration").value) < .1){
		alert("You entered an invalid distance");
	}else{
		rCalc.repairCalc();
		gDisplay.recalc()
	}
});

// !!! calc profit where i output total cost and rewards
		
$('#RChelmet, #RCvest, #RCgloves, #RCboots, #RCprimary, #RCsecondary, #RCmelee').change(function(){
	//alert("changed");
	
	rCalc.repairCalc();
	gDisplay.recalc()
});


$("#weaponSelect1").change(function(){upDat.updateData(1); setTimeout(function(){$("#chart").show();}, 100); });
$("#weaponSelect2").change(function(){upDat.updateData(2);});
$("#weaponSelect3").change(function(){upDat.updateData(3);});
$("#weaponSelect4").change(function(){upDat.updateData(4);});
$("#weaponSelect5").change(function(){upDat.updateData(5);});


$("#attachmentSelect1").change(function(){upDat.updateData(1);});
$("#attachmentSelect2").change(function(){upDat.updateData(2);});
$("#attachmentSelect3").change(function(){upDat.updateData(3);});
$("#attachmentSelect4").change(function(){upDat.updateData(4);});
$("#attachmentSelect5").change(function(){upDat.updateData(5);});

$("#selectGData").change(function(){upDat.updateData(0);});
$("#enemyVest1").change(function(){upDat.updateData(0);});
$("#enemyHelmet1").change(function(){upDat.updateData(0);});


});