define(["jquery", "jqueryUI"], function ($) {

		function loadSettings(){//Load window with the most recent settings
		
			var temp = JSON.parse(localStorage.getItem("Settings"));
			

				document.getElementById('toggleADS').checked = temp.toggleADS;
				document.getElementById('holdADS').checked = !temp.toggleADS;
				
				document.getElementById('rightClickADS').checked = temp.rightClickADS;
				if(!document.getElementById('rightClickADS').checked)
					$("#inputADSContainer").fadeIn();// altering the value doesn't trigger "changed" so we have to manually display it.
				
				document.getElementById('enableRecord').checked = temp.enableRecord;
				document.getElementById('autoLaunch').checked = temp.autoLaunch;
				document.getElementById('restoreOnTab').checked = temp.restoreOnTab;
				document.getElementById('minimizeOnTab').checked = temp.minimizeOnTab;
				document.getElementById('closeOnEnd').checked = temp.closeOnEnd;
				document.getElementById("kill").checked = temp.Rkill;
				document.getElementById("defibkill").checked = temp.Rdefib;
				document.getElementById("severekill").checked = temp.Rseverekill;
				document.getElementById("perfkill").checked = temp.Rperfkill;
				document.getElementById("flagkill").checked = temp.Rflagkill;
				document.getElementById("minekill").checked = temp.Rminekill;
				document.getElementById("doublekill").checked = temp.Rdoublekill;
				document.getElementById("triplekill").checked = temp.Rtriplekill;
				document.getElementById("screenshot").checked = temp.Rachievepic;
				document.getElementById("achievevid").checked = temp.Rachievevid;
				//document.getElementById("slidekill").checked = (temp.Rslidekill?true:false);
				//document.getElementById("combokill").checked = (temp.Rcombokill?true:false);
			
			$( "#grabSlider" ).slider( "value", parseInt(temp.Rgrab));
			$( "#grabSliderValue" ).val( $( "#grabSlider" ).slider( "value" ) + " seconds");
			
			$( "#afterSlider" ).slider( "value", parseInt(temp.Rafter));
			$( "#afterSliderValue" ).val( $( "#afterSlider" ).slider( "value" ) + " seconds");
			$( "#beforeSlider" ).slider( "value", parseInt(temp.Rbefore));
			$( "#beforeSliderValue" ).val( $( "#beforeSlider" ).slider( "value" ) + " seconds");
			
			if(temp.Rheadshot == 1){
				document.getElementById("HSlength").value = "headshot";
			}else if(temp.Rheadshot == 2){
				document.getElementById("HSlength").value = "twoheadshots";
			}else if(temp.Rheadshot == 3){
				document.getElementById("HSlength").value = "threeheadshots";
			}else if(temp.Rheadshot == 4){
				document.getElementById("HSlength").value = "fourheadshots";
			}else if(temp.Rheadshot == 5){
				document.getElementById("HSlength").value = "fiveheadshots";
			}
			
			if(temp.Rmelee == 1){
				document.getElementById("Meleelength").value = "meleekill";
			}else if(temp.Rheadshot == 2){
				document.getElementById("Meleelength").value = "meleeONEkill";
			}else if(temp.Rheadshot == 3){
				document.getElementById("Meleelength").value = "meleeTWOkill";
			}else if(temp.Rheadshot == 5){
				document.getElementById("Meleelength").value = "meleeTHREEkill";
			}
			
			if(temp.Rnade == 1){
				document.getElementById("Grenlength").value = "grenadekill";
			}else if(temp.Rheadshot == 2){
				document.getElementById("Grenlength").value = "grenadeONEkill";
			}else if(temp.Rheadshot == 3){
				document.getElementById("Grenlength").value = "grenadeTWOkill";
			}else if(temp.Rheadshot == 5){
				document.getElementById("Grenlength").value = "grenadeTHREEkill";
			}
		};
	
	return {loadSettings : loadSettings};
	
});