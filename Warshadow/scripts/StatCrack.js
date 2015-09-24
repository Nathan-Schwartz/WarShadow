define(['jquery','gearData','windowCoreFunctions', 'updateData', 'arrayData', 'sync', 'gearDisplay'],function($, gData,wCore, upDat, arrayData, sync, gDisplay){//implement wCore
			
		



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
	
	
	arrayData.initializeArray();
	
			
			
document.getElementById("weaponSelect1").onchange = function(){upDat.updateData(1);};
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
	
	upDat.updateData(0);//needed?
};

	if(sync.testPlugin()){
		//sync.getText();
	}else
		console.log("failed to get plugin");
	gData.initStats();

});