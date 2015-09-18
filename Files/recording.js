
		function updateSettings(){
			var temp = JSON.parse(localStorage.getItem("Rsettings"));
			
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
			
			if(document.getElementById("combokill").checked){temp.Rcombokill = true;
			}else{temp.Rcombokill = false;
			}
			
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
			
			localStorage.setItem("Rsettings", JSON.stringify(temp));
		};


		function loadSettings(){
			var temp = JSON.parse(localStorage.getItem("Rsettings"));
			
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
			
			
			if(temp.Rcombokill == true){
				document.getElementById("combokill").checked = true;
			}else{
				document.getElementById("combokill").checked = false;
			}
			
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
		
		
		function SetWCMainPos(newState) {
		//This function is in all window's files. It initializes size and position.
			setTimeout(function(){
				if(newState == -1){
					overwolf.windows.changeSize(localStorage.getItem('WCMainID'), 400, 600);
					overwolf.windows.changePosition(localStorage.getItem('WCMainID'), 100, 100); 
				}
			}, 1000); //200 min as of 8/25 (before external .js)
		};



		function togglefeatures(){
			if(document.getElementById('features').style.display != 'block'){
				document.getElementById('features').style.display = 'block'; 
			}else if(document.getElementById('features').style.display == 'block') {
				document.getElementById('features').style.display = 'none'; 
			}
		};




			 document.getElementById('features').style.display = 'none'; //block
			 loadSettings();
			//$(document).ready(SetWCMainPos(-1)); //Hopefully the jQuery will trigger at a consistent point for different computers, gave it a buffer of 400 MS just in case.
			
			
			
//		Menu Listeners
		//resize and drag
		document.getElementById("resizeGripTopLeft").onmousedown = function(){('TopLeft');};
		document.getElementById("resizeGripTop").onmousedown = function(){dragResize('Top');};
		document.getElementById("resizeGripTopRight").onmousedown = function(){dragResize('TopRight');};
		document.getElementById("resizeGripRight").onmousedown = function(){dragResize('Right');};
		document.getElementById("resizeGripBottomRight").onmousedown = function(){dragResize('BottomRight');};
		document.getElementById("resizeGripBottom").onmousedown = function(){dragResize('Bottom');};
		document.getElementById("resizeGripBottomLeft").onmousedown = function(){dragResize('BottomLeft');};
		document.getElementById("resizeGripLeft").onmousedown = function(){dragResize('Left');};
	//	document.getElementById("content").onmousedown = function(){dragMove();};
		
		//menu buttons
	//	document.getElementById("resize").ondblclick = function(){ResizeMain();};
		//document.getElementById("close").onclick = function(){closeWindow();};
		document.getElementById("showfeatures").onclick = function(){togglefeatures();};
		
		//menu checkboxes //
	
		document.getElementById("closeOnEnd").onchange = function(){updateSettings();};
		document.getElementById("grablength").onchange = function(){updateSettings();};
		document.getElementById("kill").onchange = function(){updateSettings();};
		document.getElementById("doublekill").onchange = function(){updateSettings();};
		document.getElementById("triplekill").onchange = function(){updateSettings();};
		document.getElementById("slidekill").onchange = function(){updateSettings();};
		document.getElementById("perfkill").onchange = function(){updateSettings();};
		document.getElementById("flagkill").onchange = function(){updateSettings();};
		document.getElementById("screenshot").onchange = function(){updateSettings();};
		document.getElementById("achievevid").onchange = function(){updateSettings();};
		document.getElementById("severekill").onchange = function(){updateSettings();};
		document.getElementById("HSlength").onchange = function(){updateSettings();};
		document.getElementById("Grenlength").onchange = function(){updateSettings();};
		document.getElementById("Meleelength").onchange = function(){updateSettings();};
		document.getElementById("minekill").onchange = function(){updateSettings();};
		document.getElementById("defibkill").onchange = function(){updateSettings();};
		document.getElementById("combokill").onchange = function(){updateSettings();};
		document.getElementById("Cuddling").onchange = function(){updateSettings();};//alert(document.getElementById("Cuddling").value);};
		document.getElementById("Foreplay").onchange = function(){updateSettings();};//alert(document.getElementById("Foreplay").value);};
		
		//replay testing
	/*	document.getElementById("turnOff").onclick = function(){testTurnOff();}; //if(document.getElementById('turnOff').checked)
		document.getElementById("turnOn").onclick = function(){testTurnOn();}; //if(document.getElementById("turnOn").checked)
		document.getElementById("capture").onclick = function(){testCapture(15000,-1);};
		document.getElementById("getstate").onclick = function(){testGetState();};
		document.getElementById("start").onclick = function(){testStartCapture();};
		document.getElementById("finish").onclick = function(){testFinishCapture();};*/
			
			
			