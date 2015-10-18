
define(["jquery", "jqueryUI"], function ($) {

		function updateSettings(){//Update localStorage with newest settings
			var temp = JSON.parse(localStorage.getItem("Settings"));

			
			temp.Rgrab = $( "#grabSlider" ).slider( "value" );
			temp.Rafter = $( "#afterSlider" ).slider( "value" );
			temp.Rbefore = $( "#beforeSlider" ).slider( "value" );
		
			
			temp.toggleADS = document.getElementById('toggleADS').checked;
			temp.rightClickADS = document.getElementById('rightClickADS').checked;
			
			temp.enableRecord = document.getElementById("enableRecord").checked;
			temp.autoLaunch = document.getElementById("autoLaunch").checked;
			temp.closeOnEnd = document.getElementById("closeOnEnd").checked;
			temp.restoreOnTab = document.getElementById('restoreOnTab').checked;
			temp.minimizeOnTab = document.getElementById('minimizeOnTab').checked;
			temp.Rkill = document.getElementById("kill").checked;
			temp.Rdefib = document.getElementById("defibkill").checked;
			temp.Rseverekill = document.getElementById("severekill").checked;
			temp.Rperfkill = document.getElementById("perfkill").checked;
			temp.Rflagkill = document.getElementById("flagkill").checked;
			temp.Rminekill = document.getElementById("minekill").checked;
			temp.Rdoublekill = document.getElementById("doublekill").checked;
			temp.Rtriplekill = document.getElementById("triplekill").checked;
			temp.Rachievepic = document.getElementById('screenshot').checked;
			temp.Rachievevid = document.getElementById('achievevid').checked;
			//temp.Rslidekill = (document.getElementById("slidekill").checked?true:false);
			//temp.Rcombokill = (document.getElementById("combokill").checked?true:false);
			
				
			if(document.getElementById("HSlength").value == "none"){
				temp.Rheadshot = 0;
			}else if(document.getElementById("HSlength").value == "headshot"){
				temp.Rheadshot = 1;
			}else if(document.getElementById("HSlength").value == "twoheadshots"){
				temp.Rheadshot = 2;
			}else if(document.getElementById("HSlength").value == "threeheadshots"){
				temp.Rheadshot = 3;
			}else if(document.getElementById("HSlength").value == "fourheadshots"){
				temp.Rheadshot = 4;
			}else if(document.getElementById("HSlength").value == "fiveheadshots"){
				temp.Rheadshot = 5;
			}
			
			if(document.getElementById("Meleelength").value == "none"){
				temp.Rmelee = 0;
			}else if(document.getElementById("Meleelength").value == "meleekill"){
				temp.Rmelee = 1;
			}else if(document.getElementById("Meleelength").value == "meleeONEkill"){
				temp.Rmelee = 2;
			}else if(document.getElementById("Meleelength").value == "meleeTWOkill"){
				temp.Rmelee = 3;
			}else if(document.getElementById("Meleelength").value == "meleeTHREEkill"){
				temp.Rmelee = 5;
			}
			
			if(document.getElementById("Grenlength").value == "none"){
				temp.Rnade = 0;
			}else if(document.getElementById("Grenlength").value == "grenadekill"){
				temp.Rnade = 1;
			}else if(document.getElementById("Grenlength").value == "grenadeONEkill"){
				temp.Rnade = 2;
			}else if(document.getElementById("Grenlength").value == "grenadeTWOkill"){
				temp.Rnade = 3;
			}else if(document.getElementById("Grenlength").value == "grenadeTHREEkill"){
				temp.Rnade = 5;
			}
			
			localStorage.setItem("Settings", JSON.stringify(temp));
		};
		
		return {updateSettings : updateSettings};
});