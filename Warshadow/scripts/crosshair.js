	
require(['jquery', 'windowCoreFunctions'], function($, wCore){

// !!! directory pluging is image file

	var appPath = "";

	function plugin() {
        return document.querySelector('#plugin');
	}
	(plugin() == null) ? console.log("Plugin couldn't be loaded??") : getMyWebAppDirectory(getDirectory);

	function getDirectory(mypath, status){
		appPath = mypath;
		console.log(mypath);
	};
	
	function getMyWebAppDirectory(callback) {
		var mypath = plugin().LOCALAPPDATA + "\\Overwolf\\Extensions";

		var fallback = function() {
			var pluginStr = window.location.host;
			pluginStr = pluginStr.replace("Window_Extension_", "");

			var index = pluginStr.lastIndexOf("_");
			if (index != -1) {
				pluginStr = pluginStr.slice(0,index);
			}

			mypath += "\\" + pluginStr + "\\" + "1.0.0";
		}

		overwolf.extensions.current.getManifest(function(manifestObj) {
			if (typeof manifestObj === "undefined") {
				console.error("Could not get Manifest.");
				fallback();
			} else if (typeof manifestObj.UID === "undefined") {
				console.error("Manifest has no UID.");
				fallback();
			} else if (typeof manifestObj.meta === "undefined") {
				console.error("Manifest has no meta object.");
				fallback();
			} else {
				mypath += "\\" + manifestObj.UID + "\\" + manifestObj.meta.version;
			}

			plugin().isDirectory( 
				mypath, 
				function(status) {
					callback(mypath, status);
				}
			);
		});
	};

	(function(){
		appPath += "\\images\\";
		for(var i=0; i<10;i++){
			plugin().fileExists(appPath+"customX"+i+".png", function(status){
				if(status)
					document.getElementById("drop").innerHTML += "<option value='customX"+String(i)+"'> Custom X"+ String(i) +"</option>";// add file to list
			});
		}
		for(var i=0; i<10;i++){
			plugin().fileExists(plugin().DESKTOP + "/WarShadow/gitwarshadow/Warshadow/images/customX"+i+".png", function(status){
				if(status)
					document.getElementById("drop").innerHTML += "<option value='customX"+String(i)+"'> Custom X"+ String(i) +"</option>";// add file to list
			});
		}
	})();

var url = "";
function setXPreview(value, name){

	switch(value){
		case "scope":
			url = "<img src='../images/crosshair1.png' id='reticle'>";
			break;
		case "cyan":
			url = "<img src='../images/cyan.png' id='reticle'>";
			break;	
		case "customX0":
			url = "<img src='../images/customX0.png' id='reticle'>";
			break;
		case "customX1":
			url = "<img src='../images/customX1.png' id='reticle'>";
			break;
		case "customX2":
			url = "<img src='../images/customX2.png' id='reticle'>";
			break;
		case "customX3":
			url = "<img src='../images/customX3.png' id='reticle'>";
			break;
		case "customX4":
			url = "<img src='../images/customX4.png' id='reticle'>";
			break;
		case "customX5":
			url = "<img src='../images/customX5.png' id='reticle'>";
			break;
		case "customX6":
			url = "<img src='../images/customX6.png' id='reticle'>";
			break;
		case "customX7":
			url = "<img src='../images/customX7.png' id='reticle'>";
			break;
		case "customX8":
			url = "<img src='../images/customX8.png' id='reticle'>";
			break;
		case "customX9":
			url = "<img src='../images/customX9.png' id='reticle'>";
			break;			
	}	
	document.getElementById("preview").innerHTML += url;
};

function setX(){
	document.getElementById("form").innerHTML = url;
	$( "#preview" ).remove();
};
document.getElementById("content").style.borderImage = "url('../images/box.png') 40% 15% 50% 15% stretch round";
document.getElementById("drop").onchange = function(){setXPreview(document.getElementById("drop").value);};
document.getElementById("content").onmousedown = function(){wCore.dragMove();};
document.getElementById("hide").onmousedown = function(){
	setX(); document.getElementById("content").style.backgroundColor = 'transparent'; 
	document.getElementById("content").style.borderImageWidth = "0px";
	document.getElementById("form").style.left = "25px";
	document.getElementById("form").style.top = "50px";
};    


});

