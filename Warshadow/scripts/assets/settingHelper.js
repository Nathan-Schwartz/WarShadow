define(["jquery", "jqueryUI"], function ($) {

	function load(){//Load window with the most recent settings
		var temp = JSON.parse(localStorage.getItem("Settings"));
		
		document.getElementById('toggleADS').checked = temp.toggleADS;
		document.getElementById('holdADS').checked = !temp.toggleADS;
		document.getElementById('rightClickADS').checked = temp.rightClickADS;
		if(!document.getElementById('rightClickADS').checked)
			$("#inputADSContainer").fadeIn();// altering the value doesn't trigger "changed" so we have to manually display it.

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
		//document.getElementById("slidekill").checked = (temp.Rslidekill?true:false);
		//document.getElementById("combokill").checked = (temp.Rcombokill?true:false);
	
		$( "#grabSlider" ).slider( "value", parseInt(temp.Rgrab));
		$( "#grabSliderValue" ).val( $( "#grabSlider" ).slider( "value" ) + " seconds");
		$( "#afterSlider" ).slider( "value", parseInt(temp.Rafter));
		$( "#afterSliderValue" ).val( $( "#afterSlider" ).slider( "value" ) + " seconds");
		$( "#beforeSlider" ).slider( "value", parseInt(temp.Rbefore));
		$( "#beforeSliderValue" ).val( $( "#beforeSlider" ).slider( "value" ) + " seconds");
		
		if(temp.Rheadshot == 1)
			document.getElementById("HSlength").value = "headshot";
		else if(temp.Rheadshot == 2)
			document.getElementById("HSlength").value = "twoheadshots";
		else if(temp.Rheadshot == 3)
			document.getElementById("HSlength").value = "threeheadshots";
		else if(temp.Rheadshot == 4)
			document.getElementById("HSlength").value = "fourheadshots";
		else if(temp.Rheadshot == 5)
			document.getElementById("HSlength").value = "fiveheadshots";
		
		if(temp.Rmelee == 1)
			document.getElementById("Meleelength").value = "meleekill";
		else if(temp.Rheadshot == 2)
			document.getElementById("Meleelength").value = "meleeONEkill";
		else if(temp.Rheadshot == 3)
			document.getElementById("Meleelength").value = "meleeTWOkill";
		else if(temp.Rheadshot == 5)
			document.getElementById("Meleelength").value = "meleeTHREEkill";
		
		if(temp.Rnade == 1)
			document.getElementById("Grenlength").value = "grenadekill";
		else if(temp.Rheadshot == 2)
			document.getElementById("Grenlength").value = "grenadeONEkill";
		else if(temp.Rheadshot == 3)
			document.getElementById("Grenlength").value = "grenadeTWOkill";
		else if(temp.Rheadshot == 5)
			document.getElementById("Grenlength").value = "grenadeTHREEkill";
	};
	
	function update(){//Update localStorage with newest settings
		var temp = JSON.parse(localStorage.getItem("Settings"));
	
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
		//temp.Rslidekill = (document.getElementById("slidekill").checked?true:false);
		//temp.Rcombokill = (document.getElementById("combokill").checked?true:false);

		if(document.getElementById("HSlength").value == "none")
			temp.Rheadshot = 0;
		else if(document.getElementById("HSlength").value == "headshot")
			temp.Rheadshot = 1;
		else if(document.getElementById("HSlength").value == "twoheadshots")
			temp.Rheadshot = 2;
		else if(document.getElementById("HSlength").value == "threeheadshots")
			temp.Rheadshot = 3;
		else if(document.getElementById("HSlength").value == "fourheadshots")
			temp.Rheadshot = 4;
		else if(document.getElementById("HSlength").value == "fiveheadshots")
			temp.Rheadshot = 5;

		if(document.getElementById("Meleelength").value == "none")
			temp.Rmelee = 0;
		else if(document.getElementById("Meleelength").value == "meleekill")
			temp.Rmelee = 1;
		else if(document.getElementById("Meleelength").value == "meleeONEkill")
			temp.Rmelee = 2;
		else if(document.getElementById("Meleelength").value == "meleeTWOkill")
			temp.Rmelee = 3;
		else if(document.getElementById("Meleelength").value == "meleeTHREEkill")
			temp.Rmelee = 5;

		if(document.getElementById("Grenlength").value == "none")
			temp.Rnade = 0;
		else if(document.getElementById("Grenlength").value == "grenadekill")
			temp.Rnade = 1;
		else if(document.getElementById("Grenlength").value == "grenadeONEkill")
			temp.Rnade = 2;
		else if(document.getElementById("Grenlength").value == "grenadeTWOkill")
			temp.Rnade = 3;
		else if(document.getElementById("Grenlength").value == "grenadeTHREEkill")
			temp.Rnade = 5;

		temp.Rgrab = $( "#grabSlider" ).slider( "value" );
		temp.Rafter = $( "#afterSlider" ).slider( "value" );
		temp.Rbefore = $( "#beforeSlider" ).slider( "value" );

		localStorage.setItem("Settings", JSON.stringify(temp));
	};
		
	return {update : update,
			load : load};
});