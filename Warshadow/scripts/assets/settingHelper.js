define(["jquery", "jqueryUI"], function ($) {

	function load(){//Load window with the most recent settings
		var temp = JSON.parse(localStorage.getItem("Settings"));
		
		document.getElementById('toggleADS').checked = temp.toggleADS;
		document.getElementById('holdADS').checked = !temp.toggleADS;
		document.getElementById('rightClickADS').checked = temp.rightClickADS;
		if(!document.getElementById('rightClickADS').checked)
			$("#inputADSContainer").fadeIn();// altering the value doesn't trigger "changed" so we have to manually display it.

		document.getElementById('noADS').checked = temp.noADS;
		if(document.getElementById('noADS').checked)
			document.getElementById('ifADShides').style.display = "none";
		document.getElementById('useLP').checked = temp.useLP;
		document.getElementById('allowSync').checked = temp.allowSync;
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
		document.getElementById("slidekill").checked = temp.Rslidekill;
		//document.getElementById("combokill").checked = (temp.Rcombokill?true:false);
	
		$( "#grabSlider" ).slider( "value", parseInt(temp.Rgrab));
		$( "#grabSliderValue" ).val( $( "#grabSlider" ).slider( "value" ) + " seconds");
		$( "#afterSlider" ).slider( "value", parseInt(temp.Rafter));
		$( "#afterSliderValue" ).val( $( "#afterSlider" ).slider( "value" ) + " seconds");
		$( "#beforeSlider" ).slider( "value", parseInt(temp.Rbefore));
		$( "#beforeSliderValue" ).val( $( "#beforeSlider" ).slider( "value" ) + " seconds");
		
		function returnHS(){
			if(temp.Rheadshot == 0)
				return "none";
			else if(temp.Rheadshot == 1)
				return "headshot";
			else if(temp.Rheadshot == 2)
				return "twoheadshots";
			else if(temp.Rheadshot == 3)
				return "threeheadshots";
			else if(temp.Rheadshot == 4)
				return "fourheadshots";
			else if(temp.Rheadshot == 5)
				return "fiveheadshots";
		}
			
		$('#HSlength').val(returnHS());
		$("#HSlength").selectmenu("refresh");
		
		function returnMelee(){
			if(temp.Rmelee == 0)
				return "none";
			else if(temp.Rmelee == 1)
				return "meleekill";
			else if(temp.Rmelee == 2)
				return "meleeONEkill";
			else if(temp.Rmelee == 3)
				return "meleeTWOkill";
			else if(temp.Rmelee == 5)
				return "meleeTHREEkill";
		}
		
		$('#Meleelength').val(returnMelee());
		$("#Meleelength").selectmenu("refresh");
		
		function returnNade(){
			if(temp.Rnade == 0)
				return "none";
			else if(temp.Rnade == 1)
				return "grenadekill";
			else if(temp.Rnade == 2)
				return "grenadeONEkill";
			else if(temp.Rnade == 3)
				return "grenadeTWOkill";
			else if(temp.Rnade == 5)
				return "grenadeTHREEkill";
		}
		
		$('#Grenlength').val(returnNade());
		$("#Grenlength").selectmenu("refresh");
	};
	
	function update(callback){//Update localStorage with newest settings
		var temp = JSON.parse(localStorage.getItem("Settings"));
	
		temp.useLP = document.getElementById('useLP').checked;
		temp.noADS = document.getElementById('noADS').checked;
		temp.allowSync = document.getElementById('allowSync').checked;
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
		temp.Rslidekill = document.getElementById("slidekill").checked;
		//temp.Rcombokill = (document.getElementById("combokill").checked?true:false);

		temp.Rgrab = $( "#grabSlider" ).slider( "value" );
		temp.Rafter = $( "#afterSlider" ).slider( "value" );
		temp.Rbefore = $( "#beforeSlider" ).slider( "value" );

		localStorage.setItem("Settings", JSON.stringify(temp));
		
		if(typeof callback == "function")
			callback();
	};
	
	function updateHS(val){
		var temp = JSON.parse(localStorage.getItem("Settings"));
		
		if(val == "none")
			temp.Rheadshot = 0;
		else if(val == "headshot")
			temp.Rheadshot = 1;
		else if(val == "twoheadshots")
			temp.Rheadshot = 2;
		else if(val == "threeheadshots")
			temp.Rheadshot = 3;
		else if(val == "fourheadshots")
			temp.Rheadshot = 4;
		else if(val == "fiveheadshots")
			temp.Rheadshot = 5;
		
		localStorage.setItem("Settings", JSON.stringify(temp));
	}

	function updateMelee(val){
		var temp = JSON.parse(localStorage.getItem("Settings"));
		
		if(val == "none")
			temp.Rmelee = 0;
		else if(val == "meleekill")
			temp.Rmelee = 1;
		else if(val == "meleeONEkill")
			temp.Rmelee = 2;
		else if(val == "meleeTWOkill")
			temp.Rmelee = 3;
		else if(val == "meleeTHREEkill")
			temp.Rmelee = 5;
		
		localStorage.setItem("Settings", JSON.stringify(temp));
	}

	function updateGren(val){
		var temp = JSON.parse(localStorage.getItem("Settings"));
		
		if(val == "none")
			temp.Rnade = 0;
		else if(val == "grenadekill")
			temp.Rnade = 1;
		else if(val == "grenadeONEkill")
			temp.Rnade = 2;
		else if(val == "grenadeTWOkill")
			temp.Rnade = 3;
		else if(val == "grenadeTHREEkill")
			temp.Rnade = 5;
		
		localStorage.setItem("Settings", JSON.stringify(temp));
	}

	return {update : update,
			load : load,
			updateGren: updateGren,
			updateMelee: updateMelee,
			updateHS: updateHS};
});