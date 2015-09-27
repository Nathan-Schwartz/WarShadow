define(function () {

		function loadSettings(){//Load window with the most recent settings
		
			var temp = JSON.parse(localStorage.getItem("Settings"));
			
			document.getElementById("grablength").value = temp.Rgrab;
			document.getElementById("Cuddling").value = temp.Rcuddling;
			document.getElementById("Foreplay").value = temp.Rforeplay;
			
			
			
			if(temp.Rclose == true)
				document.getElementById("closeOnEnd").checked = true;
			else
				document.getElementById("closeOnEnd").checked = false;
			
			
			if(temp.Rkill == true){
				document.getElementById("kill").checked = true;
			}else{
				document.getElementById("kill").checked = false;
			}
			
			if(temp.Rdefib == true){
				document.getElementById("defibkill").checked = true;
			}else{
				document.getElementById("defibkill").checked = false;
			}
			
			
			if(temp.Rseverekill == true){
				document.getElementById("severekill").checked = true;
			}else{
				document.getElementById("severekill").checked = false;
			}
			
			
			if(temp.Rslidekill == true){
				document.getElementById("slidekill").checked = true;
			}else{
				document.getElementById("slidekill").checked = false;
			}
			
			
			if(temp.Rperfkill == true){
				document.getElementById("perfkill").checked = true;
			}else{
				document.getElementById("perfkill").checked = false;
			}
			
			
			if(temp.Rflagkill == true){
				document.getElementById("flagkill").checked = true;
			}else{
				document.getElementById("flagkill").checked = false;
			}
			
			
			if(temp.Rminekill == true){
				document.getElementById("minekill").checked = true;
			}else{
				document.getElementById("minekill").checked = false;
			}
			
			
			/*if(temp.Rcombokill == true){
				document.getElementById("combokill").checked = true;
			}else{
				document.getElementById("combokill").checked = false;
			}*/
			
			if(temp.Rdoublekill == true){
				document.getElementById("doublekill").checked = true;
			}else{
				document.getElementById("doublekill").checked = false;
			}
			
			if(temp.Rtriplekill == true){
				document.getElementById("triplekill").checked = true;
			}else{
				document.getElementById("triplekill").checked = false;
			}
			
			if(temp.Rachievepic == true){
				document.getElementById("screenshot").checked = true;
			}else{
				document.getElementById("screenshot").checked = false;
			}
			
			if(temp.Rachievevid == true){
				document.getElementById("achievevid").checked = true;
			}else{
				document.getElementById("achievevid").checked = false;
			}
			
			
			if(temp.Rachievevid == true){
				document.getElementById("achievevid").checked = true;
			}else{
				document.getElementById("achievevid").checked = false;
			}
			
			
			
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