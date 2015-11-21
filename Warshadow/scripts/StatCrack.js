require(['jquery','gearData','windowCoreFunctions', 'updateData', 'arrayData', 'sync', 'htmlInjection', 'repairCalc','jqueryUI', 'printArmorTab'],function($, gData, wCore, upDat, arrayData, sync, inject, rCalc, jqueryUI, armorTab){

	inject.injectHTML();// put lists into html drop down boxes
	sync.testPlugin() ? sync.getNewData(): console.log("failed to get plugin"); // sync repair costs with latest game price dump	
	armorTab.print();
	arrayData.initializeArray();
	//progress bar is here because the sliders load in late and it allows all elements to be functional immediately upon being visible.
	$(function(){
		var progressbar = $( "#progressbar" ),
		progressLabel = $( ".progress-label" );

		progressbar.progressbar({
			value: false,
			complete: function() {
				$('#progressbar').hide();
				$("#progressbar").progressbar( "destroy" );
				$(".StatContent").fadeIn();
				if(JSON.parse(localStorage.getItem("firstLaunch")))
					$("#directionsDialog" ).dialog( "open" );				
			}
		});
	 
		function progress() {
			var val = progressbar.progressbar( "value" ) || 0;
	 
			progressbar.progressbar( "value", val + 1 );
		  
			if ( val < 99 )
				setTimeout( progress, 2 );
		}
		
		progress();
	});
	

	$(function() {
		$( "#directionsDialog, #errorDialog" ).dialog({
			autoOpen: false,
			resizable: false,
			draggable: false,
			height:250,
			width: 200,
			modal: true,
			buttons: {
				Cancel:{
                    text: 'OK',
                    click : function() {
						$( this ).dialog( "close" );
					}
				}
			}
		});
	});


//Sliders
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
	$(function(){
		$( "#boosterSlider" ).slider({
			range: "min",
			value:0,
			min: 0,
			step: 5,
			max: 295,
			change: function( event, ui ) {console.log("value", ui.value); rCalc.rewardCalc();},
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
			change: function( event, ui ) {console.log("value", ui.value); rCalc.repairCalc();},
			slide: function( event, ui ) {
				$( "#gameLengthSliderValue" ).val( ui.value + " minutes" );
			}
		});
		$( "#gameLengthSliderValue" ).val( $( "#gameLengthSlider" ).slider( "value" ) + " minutes");
	});
	

//SelectMenus
	var repairReCalc = function( event, ui ) {rCalc.repairCalc(); rCalc.rewardCalc();};
	var currentTable = "#sideInstruct";
	function primaryCallback(callback){
		$(currentTable).hide();

		console.log('RCprimary value', document.getElementById("RCprimary").value);
		
		if((document.getElementById("RCprimary").value == "none")||(document.getElementById("RCprimary").value == "rental")){
			$("#sidePrimary").fadeIn();
			currentTable = '#sidePrimary';
		}else{
			var weapons = gData.getWeapons();
			var found = false;
			for(var i = 0, limit = weapons.length; i < limit; i ++){
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
		if(typeof callback == "function")
			callback();
		else
			console.log("Not a function");
	}
	
	$("#attachmentSelect1, #attachmentSelect2, #attachmentSelect3, #attachmentSelect4, #attachmentSelect5, #enemyVest1, #enemyHelmet1, #selectGData").selectmenu({change: function( event, ui ) {upDat.updateData(0);}});
	$("#weaponSelect1, #weaponSelect2, #weaponSelect3, #weaponSelect4, #weaponSelect5").selectmenu({change: function( event, ui ) {upDat.updateData(0); setTimeout(function(){$("#chart").slideDown();}, 100);}});
	
	$("#RCvest").selectmenu({
		change: repairReCalc,
		open: function( event, ui ) {$(currentTable).hide(); currentTable = '#sideVest'; $("#sideVest").fadeIn();}
	});
	$("#RCgloves").selectmenu({
		change: repairReCalc,
		open: function( event, ui ) {$(currentTable).hide(); currentTable = '#sideGlove'; $("#sideGlove").fadeIn();}
	});
	$("#RCboots").selectmenu({
		change: repairReCalc,
		open: function( event, ui ) {$(currentTable).hide(); currentTable = '#sideBoot'; $("#sideBoot").fadeIn();}
	});
	$("#RCmelee").selectmenu({
		change: repairReCalc,
		open: function( event, ui ) {$(currentTable).hide(); currentTable = '#sideKnife'; $("#sideKnife").fadeIn();}
	});
	$("#RCsecondary").selectmenu({
		change: repairReCalc,
		open: function( event, ui ) {$(currentTable).hide(); currentTable = '#sideSecondary'; $("#sideSecondary").fadeIn();}
	});
	$("#RCprimary").selectmenu({
		change: primaryCallback.bind(this, repairReCalc),
		open: function( event, ui ) {primaryCallback();}
	});
	$("#RChelmet").selectmenu({
		change: repairReCalc,
		open: function( event, ui ) {$(currentTable).hide(); currentTable = '#sideHelm'; $("#sideHelm").fadeIn();}
	});
	$("#missionType").selectmenu({
		change: repairReCalc,
		open: function( event, ui ) {$(currentTable).hide(); currentTable = '#sideRewards';	$("#sideRewards").fadeIn();}	
	});
	
	//Initialize calculators that are dependant on sliders
	rCalc.repairCalc();
	rCalc.rewardCalc();

	
	//listeners for showing more weapon slots on the graph when a checkbox is clicked
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
		}
		upDat.updateData(0);
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
		}
		upDat.updateData(0);
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
		}
		upDat.updateData(0);
	};

	document.getElementById("showfifth").onchange = function(){
		if(document.getElementById("showfifth").checked){
			document.getElementById('fifthweapon').style.display = 'block';
		}else{
			arrayData.initializeArray();
			document.getElementById('fifthweapon').style.display = 'none';
		}
		upDat.updateData(0);
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
	
	/*$("#content").mousedown(function(e){
		if (!$(e.target).hasClass('StatContent') && !$(e.target).hasClass('active') && !$(e.target).hasClass('tabs') && !$(e.target).hasClass('repair') && !$(e.target).hasClass('spacedR') && !$(e.target).hasClass('cost') && !$(e.target).hasClass('income') && !$(e.target).hasClass('net') && !$(e.target).hasClass('standard') && !$(e.target).hasClass('tab') && !$(e.target).hasClass('table') && !$(e.target).hasClass('tab-content')&& !$(e.target).hasClass('spaced')) 
			return;
	 
		wCore.dragMove();
	});*/
});