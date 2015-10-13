require(['jquery','gearData','windowCoreFunctions', 'updateData', 'arrayData', 'sync', 'gearDisplay', 'htmlInjection', 'repairCalc','jqueryUI'],function($, gData, wCore, upDat, arrayData, sync, gDisplay, inject, rCalc, jqueryUI){//implement wCore

	inject.injectHTML();// put lists into html drop down boxes
	sync.testPlugin() ? sync.getNewData(): console.log("failed to get plugin"); // sync repair costs with latest game price dump	

	// !!! blurring if i use 2nd weapon slot beofre first on graph. Also doesn't make line reappear when i reselect a text box even though it saves the weapon choice
	//initialize sliders !!! could be exported, its spaghetti
		//Distance slider
		$(function() {
			$( "#distSlider" ).slider({
				range: "min",
				value:50,
				min: 1,
				max: 100,
				change: function( event, ui ) {console.log("value", ui.value); upDat.updateData(0);},
				slide: function( event, ui ) {
					$( "#distSliderValue" ).val( ui.value );
				}
			});
			$( "#distSliderValue" ).val( $( "#distSlider" ).slider( "value" ) );
		});
		
		//Booster slider
		$(function() {
			$( "#boosterSlider" ).slider({
				range: "min",
				value:0,
				min: 0,
				step: 5,
				max: 295,
				change: function( event, ui ) {console.log("value", ui.value); gDisplay.rewardCalc();},
				slide: function( event, ui ) {
					$( "#boosterSliderValue" ).val( ui.value + "%");
				}
			});
			$( "#boosterSliderValue" ).val( $( "#boosterSlider" ).slider( "value" ) + "%");
		});
		
		//Duration slider
		$(function() {
			$( "#gameLengthSlider" ).slider({
				range: "min",
				value:10,
				min: 1,
				max: 120,
				change: function( event, ui ) {console.log("value", ui.value); rCalc.repairCalc(); gDisplay.recalc()},
				slide: function( event, ui ) {
					$( "#gameLengthSliderValue" ).val( ui.value + " minutes" );
				}
			});
			$( "#gameLengthSliderValue" ).val( $( "#gameLengthSlider" ).slider( "value" ) + " minutes");
		});
		
//finish initializing
	gData.initStats();
	rCalc.repairCalc();
	gDisplay.calc();
	arrayData.initializeArray();
	
	//jQuery for showing more weapon slots on the graph when a checkbox is clicked
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
	

//jQuery spaghetti for displaying comparison charts
	var currentTable = "#sideInstruct";
	
$('#RChelmet').mousedown(function(){
	$(currentTable).hide();
	currentTable = '#sideHelm';
	$("#sideHelm").fadeIn();
});

$('#RCvest').mousedown(function(){
	$(currentTable).hide();
	currentTable = '#sideVest';
	$("#sideVest").fadeIn();
});

$('#RCgloves').mousedown(function(){
	$(currentTable).hide();
	currentTable = '#sideGlove';
	$("#sideGlove").fadeIn();
});

$('#RCboots').mousedown(function(){
	$(currentTable).hide();
	currentTable = '#sideBoot';
	$("#sideBoot").fadeIn();
});

$('#RCprimary').mousedown(function(){
	$(currentTable).hide();

	if((document.getElementById("RCprimary").value == "none")||(document.getElementById("RCprimary").value == "rental")){
		$("#sidePrimary").fadeIn();
		currentTable = '#sidePrimary';
	}else{
		var weapons = gData.getWeapons();
		var found = false;
		for(var i = 0; i < weapons.length; i ++){
			if(weapons[i].key == document.getElementById("RCprimary").value){
				if(weapons[i].Class == "M"){
					$("#sideShotgun").fadeIn();
					currentTable = '#sideShotgun';
				}else if(weapons[i].Class == "E"){
					$("#sideSMG").fadeIn();
					currentTable = '#sideSMG';
				}else if(weapons[i].Class == "R"){
					$("#sideRifle").fadeIn();
					currentTable = '#sideRifle';
				}else if(weapons[i].Class == "S"){
					$("#sideSniper").fadeIn();
					currentTable = '#sideSniper';
				}
				found = true;
				break;
			}
		}
		if(!found){ //just in case there is a weird value; It would be almost impossible though.
			$("#sidePrimary").fadeIn();
			currentTable = '#sidePrimary';
		}
	}
});

$('#RCprimary').change(function(){ // !!! I could encapsulate the callback so i don't have to copy paste it for change and mouseover
	$(currentTable).hide();

	if((document.getElementById("RCprimary").value == "none")||(document.getElementById("RCprimary").value == "rental")){
		$("#sidePrimary").fadeIn();
		currentTable = '#sidePrimary';
	}else{
		var weapons = gData.getWeapons();
		var found = false;
		for(var i = 0; i < weapons.length; i ++){
			if(weapons[i].key == document.getElementById("RCprimary").value){
				if(weapons[i].Class == "M"){
					$("#sideShotgun").fadeIn();
					currentTable = '#sideShotgun';
				}else if(weapons[i].Class == "E"){
					$("#sideSMG").fadeIn();
					currentTable = '#sideSMG';
				}else if(weapons[i].Class == "R"){
					$("#sideRifle").fadeIn();
					currentTable = '#sideRifle';
				}else if(weapons[i].Class == "S"){
					$("#sideSniper").fadeIn();
					currentTable = '#sideSniper';
				}
				found = true;
				break;
			}
		}
		if(!found){ //just in case there is a weird value; It would be almost impossible though.
			$("#sidePrimary").fadeIn();
			currentTable = '#sidePrimary';
		}
	}
});

$('#RCsecondary').mousedown(function(){
	$(currentTable).hide();
	currentTable = '#sideSecondary';
	$("#sideSecondary").fadeIn();
});

$('#RCmelee').mousedown(function(){
	$(currentTable).hide();
	currentTable = '#sideKnife';
	$("#sideKnife").fadeIn();
});

//Jquery for variables that change repair costs or rewards
$('#missionType').mousedown(function(){
	$(currentTable).hide();
	currentTable = '#sideRewards';
	$("#sideRewards").fadeIn();
});



$('#missionType').change(function(){
	gDisplay.rewardCalc();
});
		
$('#RChelmet, #RCvest, #RCgloves, #RCboots, #RCprimary, #RCsecondary, #RCmelee').change(function(){
	rCalc.repairCalc();
	gDisplay.recalc()
});



//jQuery for changing variables that affect individual weapons
$("#weaponSelect1").change(function(){upDat.updateData(1); setTimeout(function(){$("#chart").slideDown();}, 100);});
$("#weaponSelect2").change(function(){upDat.updateData(2); setTimeout(function(){$("#chart").slideDown();}, 100);});
$("#weaponSelect3").change(function(){upDat.updateData(3); setTimeout(function(){$("#chart").slideDown();}, 100);});
$("#weaponSelect4").change(function(){upDat.updateData(4); setTimeout(function(){$("#chart").slideDown();}, 100);});
$("#weaponSelect5").change(function(){upDat.updateData(5); setTimeout(function(){$("#chart").slideDown();}, 100);});

$("#attachmentSelect1").change(function(){upDat.updateData(1);});
$("#attachmentSelect2").change(function(){upDat.updateData(2);});
$("#attachmentSelect3").change(function(){upDat.updateData(3);});
$("#attachmentSelect4").change(function(){upDat.updateData(4);});
$("#attachmentSelect5").change(function(){upDat.updateData(5);});

//Jquery for changing variables that all weapons in graph calculations.
$("#selectGData").change(function(){upDat.updateData(0);});
$("#enemyVest1").change(function(){upDat.updateData(0);});
$("#enemyHelmet1").change(function(){upDat.updateData(0);});

});