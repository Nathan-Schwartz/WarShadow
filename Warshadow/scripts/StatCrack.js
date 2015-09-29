define(['jquery','gearData','windowCoreFunctions', 'updateData', 'arrayData', 'sync', 'gearDisplay', 'htmlInjection'],function($, gData,wCore, upDat, arrayData, sync, gDisplay, inject){//implement wCore
			
		inject.injectHTML();
		gData.initStats();
		
			


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
	$("#sideHelm").show();
	$("#sideVest").hide();
	$("#sideGlove").hide();
	$("#sideBoot").hide();
	$("#sidePrimary").hide();
	$("#sideSecondary").hide();
	$("#sideKnife").hide();
});

$('#RCvest').mouseenter(function(){
	$('#sideHelm').hide();
	$("#sideVest").show();
	$("#sideGlove").hide();
	$("#sideBoot").hide();
	$("#sidePrimary").hide();
	$("#sideSecondary").hide();
	$("#sideKnife").hide();
});

$('#RCgloves').mouseenter(function(){
	$('#sideHelm').hide();
	$("#sideVest").hide();
	$("#sideGlove").show();
	$("#sideBoot").hide();
	$("#sidePrimary").hide();
	$("#sideSecondary").hide();
	$("#sideKnife").hide();
});

$('#RCboots').mouseenter(function(){
	$('#sideHelm').hide();
	$("#sideVest").hide();
	$("#sideGlove").hide();
	$("#sideBoot").show();
	$("#sidePrimary").hide();
	$("#sideSecondary").hide();
	$("#sideKnife").hide();
});

$('#RCprimary').mouseenter(function(){
	$('#sideHelm').hide();
	$("#sideVest").hide();
	$("#sideGlove").hide();
	$("#sideBoot").hide();
	$("#sidePrimary").show();
	$("#sideSecondary").hide();
	$("#sideKnife").hide();
});

$('#RCsecondary').mouseenter(function(){
	$('#sideHelm').hide();
	$("#sideVest").hide();
	$("#sideGlove").hide();
	$("#sideBoot").hide();
	$("#sidePrimary").hide();
	$("#sideSecondary").show();
	$("#sideKnife").hide();
});

$('#RCmelee').mouseenter(function(){
	$('#sideHelm').hide();
	$("#sideVest").hide();
	$("#sideGlove").hide();
	$("#sideBoot").hide();
	$("#sidePrimary").hide();
	$("#sideSecondary").hide();
	$("#sideKnife").show();
});


//document.getElementById("RChelmet").onmouseover = function() {document.getElementById("sideHelm").style.display = 'block';};
	
document.getElementById("weaponSelect1").onchange = function(){upDat.updateData(1); setTimeout(function(){$("#chart").slideDown(400);}, 100); };
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
	if(isNaN(parseFloat(document.getElementById("distance").value))){
		alert("You entered an invalid distance");
	}
	
	upDat.updateData(0);
};

});