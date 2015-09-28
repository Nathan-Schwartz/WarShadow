
define(function () {

		function updateSettings(){//Update localStorage with newest settings
			var temp = JSON.parse(localStorage.getItem("Settings"));
			
			temp.Rgrab = document.getElementById("grablength").value;
			temp.Rcuddling = document.getElementById("Cuddling").value;
			temp.Rforeplay = document.getElementById("Foreplay").value;

			temp.closeOnEnd = (document.getElementById("closeOnEnd").checked?true:false);
			temp.restoreOnTab = (document.getElementById('restoreOnTab').checked?true:false);
			temp.minimizeOnTab = (document.getElementById('minimizeOnTab').checked?true:false);
			temp.Rkill = (document.getElementById("kill").checked?true:false);
			temp.Rdefib = (document.getElementById("defibkill").checked?true:false);
			temp.Rseverekill = (document.getElementById("severekill").checked?true:false);
			temp.Rslidekill = (document.getElementById("slidekill").checked?true:false);
			temp.Rperfkill = (document.getElementById("perfkill").checked?true:false);
			temp.Rflagkill = (document.getElementById("flagkill").checked?true:false);
			temp.Rminekill = (document.getElementById("minekill").checked?true:false);
			temp.Rdoublekill = (document.getElementById("doublekill").checked?true:false);
			temp.Rtriplekill = (document.getElementById("triplekill").checked?true:false);
			temp.Rachievepic = (document.getElementById('screenshot').checked?true:false);
			temp.Rachievevid = (document.getElementById('achievevid').checked?true:false);
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