define(['jquery','gearData','windowCoreFunctions', 'updateData', 'arrayData', 'sync', 'gearDisplay', 'htmlInjection', 'repairCalc'],function($, gData,wCore, upDat, arrayData, sync, gDisplay, inject, rCalc){//implement wCore
			
	inject.injectHTML();
	gData.initStats();
	rCalc.repairCalc();
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
	
			
$('#RChelmet').mouseenter(function(){
	$("#sideVest").hide();
	$("#sideGlove").hide();
	$("#sideBoot").hide();
	$("#sidePrimary").hide();
	$("#sideSecondary").hide();
	$("#sideKnife").hide();
	$("#sideHelm").show();
	$("#sideShotgun").hide();
	$("#sideRifle").hide();
	$("#sideSMG").hide();
	$("#sideSniper").hide();
});

$('#RCvest').mouseenter(function(){
	$('#sideHelm').hide();
	$("#sideGlove").hide();
	$("#sideBoot").hide();
	$("#sidePrimary").hide();
	$("#sideSecondary").hide();
	$("#sideKnife").hide();
	$("#sideVest").show();
	$("#sideShotgun").hide();
	$("#sideRifle").hide();
	$("#sideSMG").hide();
	$("#sideSniper").hide();
});

$('#RCgloves').mouseenter(function(){
	$('#sideHelm').hide();
	$("#sideVest").hide();
	$("#sideBoot").hide();
	$("#sidePrimary").hide();
	$("#sideSecondary").hide();
	$("#sideKnife").hide();
	$("#sideGlove").show();
	$("#sideShotgun").hide();
	$("#sideRifle").hide();
	$("#sideSMG").hide();
	$("#sideSniper").hide();
});

$('#RCboots').mouseenter(function(){
	$('#sideHelm').hide();
	$("#sideVest").hide();
	$("#sideGlove").hide();
	$("#sidePrimary").hide();
	$("#sideSecondary").hide();
	$("#sideKnife").hide();
	$("#sideBoot").show();
	$("#sideShotgun").hide();
	$("#sideRifle").hide();
	$("#sideSMG").hide();
	$("#sideSniper").hide();
});

$('#RCprimary').mouseenter(function(){
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

$('#RCprimary').change(function(){
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

$('#RCsecondary').mouseenter(function(){
	$('#sideHelm').hide();
	$("#sideVest").hide();
	$("#sideGlove").hide();
	$("#sideBoot").hide();
	$("#sidePrimary").hide();
	$("#sideKnife").hide();
	$("#sideSecondary").show();
	$("#sideShotgun").hide();
	$("#sideRifle").hide();
	$("#sideSMG").hide();
	$("#sideSniper").hide();
});

$('#RCmelee').mouseenter(function(){
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



		
$('#RChelmet, #RCvest, #RCgloves, #RCboots, #RCprimary, #RCsecondary, #RCmelee, #duration').change(function(){
	//alert("changed");
	rCalc.repairCalc();
});

document.getElementById("weaponSelect1").onchange = function(){upDat.updateData(1); setTimeout(function(){$("#chart").show();}, 100); };
document.getElementById("weaponSelect2").onchange = function(){upDat.updateData(2);};
document.getElementById("weaponSelect3").onchange = function(){upDat.updateData(3);};
document.getElementById("weaponSelect4").onchange = function(){upDat.updateData(4);};
document.getElementById("weaponSelect5").onchange = function(){upDat.updateData(5);};


document.getElementById("attachmentSelect1").onchange = function(){upDat.updateData(1);};
document.getElementById("attachmentSelect2").onchange = function(){upDat.updateData(2);};
document.getElementById("attachmentSelect3").onchange = function(){upDat.updateData(3);};
document.getElementById("attachmentSelect4").onchange = function(){upDat.updateData(4);};
document.getElementById("attachmentSelect5").onchange = function(){upDat.updateData(5);};

document.getElementById("selectGData").onchange = function(){upDat.updateData(0);};//upDat.updateData(1, true);upDat.updateData(2, true);upDat.updateData(3, true);upDat.updateData(4, true);upDat.updateData(5, true);};
document.getElementById("enemyVest1").onchange = function(){upDat.updateData(0);};//upDat.updateData(1, true);upDat.updateData(2, true);upDat.updateData(3, true);upDat.updateData(4, true);upDat.updateData(5, true);};
document.getElementById("enemyHelmet1").onchange = function(){upDat.updateData(0);};//upDat.updateData(1, true);upDat.updateData(2, true);upDat.updateData(3, true);upDat.updateData(4, true);upDat.updateData(5, true);};
document.getElementById("distance").onchange = function(){
	if(isNaN(parseInt(document.getElementById("distance").value)) || parseInt(document.getElementById("distance").value) > 100 || parseInt(document.getElementById("distance").value) <= 0)
			alert("You entered an invalid distance");
	
	upDat.updateData(0);
};

});