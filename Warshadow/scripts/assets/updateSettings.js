
define(function () {

		function updateSettings(){//Update localStorage with newest settings
			var temp = JSON.parse(localStorage.getItem("Settings"));
			
			temp.Rgrab = document.getElementById("grablength").value;
			temp.Rcuddling = document.getElementById("Cuddling").value;
			temp.Rforeplay = document.getElementById("Foreplay").value;

			if(document.getElementById("closeOnEnd").checked == true)
				temp.Rclose = true;
			else
				temp.Rclose = false;
				
				
			if(document.getElementById("kill").checked){
				temp.Rkill = true;
			}else{
				temp.Rkill = false;
			}
				
			if(document.getElementById("defibkill").checked){
				temp.Rdefib = true;
			}else{
				temp.Rdefib = false;
			}
			
			if(document.getElementById("severekill").checked){
				temp.Rseverekill = true;
			}else{
				temp.Rseverekill = false;
			}
			
			if(document.getElementById("slidekill").checked){
				temp.Rslidekill = true;
			}else{
				temp.Rslidekill = false;
			}
			
			if(document.getElementById("perfkill").checked){
				temp.Rperfkill = true;
			}else{
				temp.Rperfkill = false;
			}
			
			if(document.getElementById("flagkill").checked){
				temp.Rflagkill = true;
			}else{
				temp.Rflagkill = false;
			}
			
			if(document.getElementById("minekill").checked){
				temp.Rminekill = true;
			}else{
				temp.Rminekill = false;
			}
			
			if(document.getElementById("HSlength").value == "none"){
				temp.Rheadshot = 0;
			}
			
			else if(document.getElementById("HSlength").value == "headshot"){
				temp.Rheadshot = 1;
			}
			
			else if(document.getElementById("HSlength").value == "twoheadshots"){
				temp.Rheadshot = 2;
			}
			
			else if(document.getElementById("HSlength").value == "threeheadshots"){
				temp.Rheadshot = 3;
			}
			
			else if(document.getElementById("HSlength").value == "fourheadshots"){
				temp.Rheadshot = 4;
			}
			
			else if(document.getElementById("HSlength").value == "fiveheadshots"){
				temp.Rheadshot = 5;
			}
			
			/*if(document.getElementById("combokill").checked){temp.Rcombokill = true;
			}else{temp.Rcombokill = false;
			}*/
			
			if(document.getElementById("doublekill").checked){
				temp.Rdoublekill = true;
			}else{
				temp.Rdoublekill = false;
			}
			
			if(document.getElementById("triplekill").checked){
				temp.Rtriplekill = true;
			}else{temp.Rtriplekill = false;
			}
			
			if(document.getElementById("Meleelength").value == "none"){
				temp.Rmelee = 0;
			}
			
			else if(document.getElementById("Meleelength").value == "meleekill"){
				temp.Rmelee = 1;
			}
			
			else if(document.getElementById("Meleelength").value == "meleeONEkill"){
				temp.Rmelee = 2;
			}
			
			else if(document.getElementById("Meleelength").value == "meleeTWOkill"){
				temp.Rmelee = 3;
			}
			
			else if(document.getElementById("Meleelength").value == "meleeTHREEkill"){
				temp.Rmelee = 5;
			}
			
			if(document.getElementById('screenshot').checked == true){
				temp.Rachievepic = true;
			}else{
				temp.Rachievepic = false;
			}
			
			if(document.getElementById('achievevid').checked == true){
				temp.Rachievevid = true;
			}else{
				temp.Rachievevid = false;
			}
			
			if(document.getElementById("Grenlength").value == "none"){
				temp.Rnade = 0;
			}
			
			else if(document.getElementById("Grenlength").value == "grenadekill"){
				temp.Rnade = 1;
			}
			
			else if(document.getElementById("Grenlength").value == "grenadeONEkill"){
				temp.Rnade = 2;
			}
			
			else if(document.getElementById("Grenlength").value == "grenadeTWOkill"){
				temp.Rnade = 3;
			}
			
			else if(document.getElementById("Grenlength").value == "grenadeTHREEkill"){
				temp.Rnade = 5;
			}
			
			localStorage.setItem("Settings", JSON.stringify(temp));
		};
		
		return {updateSettings : updateSettings};
});