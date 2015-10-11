define(function () {

		function loadSettings(){//Load window with the most recent settings
		
			var temp = JSON.parse(localStorage.getItem("Settings"));
			
				document.getElementById('enableRecord').checked = (temp.enableRecord?true: false);
				document.getElementById('autoLaunch').checked = (temp.autoLaunch?true: false);
				document.getElementById('restoreOnTab').checked = (temp.restoreOnTab?true: false);
				document.getElementById('minimizeOnTab').checked = (temp.minimizeOnTab?true:false);
				document.getElementById('closeOnEnd').checked = (temp.restoreOnTab?true:false);
				document.getElementById("kill").checked = (temp.Rkill?true:false);
				document.getElementById("defibkill").checked = (temp.Rdefib?true:false);
				document.getElementById("severekill").checked = (temp.Rseverekill?true:false);
				//document.getElementById("slidekill").checked = (temp.Rslidekill?true:false);
				document.getElementById("perfkill").checked = (temp.Rperfkill?true:false);
				document.getElementById("flagkill").checked = (temp.Rflagkill?true:false);
				document.getElementById("minekill").checked = (temp.Rminekill?true:false);
				document.getElementById("doublekill").checked = (temp.Rdoublekill?true:false);
				document.getElementById("triplekill").checked = (temp.Rtriplekill?true:false);
				document.getElementById("screenshot").checked = (temp.Rachievepic?true:false);
				document.getElementById("achievevid").checked = (temp.Rachievevid?true:false);
				document.getElementById("achievevid").checked = (temp.Rachievevid?true:false);
				//document.getElementById("combokill").checked = (temp.Rcombokill?true:false);
			
			document.getElementById("grablength").value = temp.Rgrab;
			document.getElementById("Cuddling").value = temp.Rcuddling;
			document.getElementById("Foreplay").value = temp.Rforeplay;
			
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