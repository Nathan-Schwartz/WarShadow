require(['jquery', 'windowCoreFunctions'], function($, wCore){
	
	//overwolf.utils.openFilePicker("*", function(val){console.log(val);});
	
	if(JSON.parse(localStorage.getItem("firstLaunch"))){
		recenter();
	}
		
	function setTheme(){
		if(JSON.parse(localStorage.getItem("updateTheme")) === false){
			console.log("init theme");
			if(!JSON.parse(localStorage.getItem("Settings")).useLP){
				document.getElementById("content").style.borderImage = "url('../images/box.png') 40% 15% 50% 15% stretch round";
			}else{
				$('#recenter, #hide').toggleClass("orangeButton button");
			}
		}else{
			console.log("updating theme");
			$('#recenter, #hide').toggleClass("orangeButton button");
				
			if(!JSON.parse(localStorage.getItem("Settings")).useLP){
				console.log("should be decorative");
				document.getElementById("content").style.borderImage = "url('../images/box.png') 40% 15% 50% 15% stretch round";
				//	document.getElementById("content").style.backgroundClip = "padding-box";
			}else{
				console.log("low profile");
				document.getElementById("content").style.border = "5px solid transparent";
			}
		}
	}
	setTheme();
	
	
	window.addEventListener("storage", function(e){
		if(e.key == "updateTheme" && JSON.parse(e.newValue) === true)
			setTheme();
	});
	
	$("#content").fadeIn();
	
	var appPath = "";
	var selected = false;

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
			(function(j){
				plugin().fileExists(appPath+"customX"+i+".png", function(status, i){
					if(status){
						console.log("it found the file");
						document.getElementById("drop").innerHTML += "<option value='customX"+String(i)+"'> Custom X"+ String(i) +"</option>";// add file to list
					}
				});
			})(i);
		}
		/*for(var i=0; i<10;i++){
			(function(j){
				plugin().fileExists(plugin().DESKTOP + "/Crosshair/customX"+j+".png", function(status){
					if(status)
						document.getElementById("drop").innerHTML += "<option value='customX"+j+"'> Custom X"+ j +"</option>";// add file to list
				});
			})(i);
		}*/
	})();

	var url = "";
	function setXPreview(value, name){
		switch(value){
			case "default1":
				url = "<img src='../images/default1.png' id='reticle'>";
				break;
			case "default2":
				url = "<img src='../images/default2.png' id='reticle'>";
				break;
			case "default3":
				url = "<img src='../images/default3.png' id='reticle'>";
				break;
			case "default4":
				url = "<img src='../images/default4.png' id='reticle'>";
				break;
			case "default5":
				url = "<img src='../images/default5.png' id='reticle'>";
				break;
			case "default6":
				url = "<img src='../images/default6.png' id='reticle'>";
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
		document.getElementById("preview").innerHTML = url;
	};

	function setX(){
		document.getElementById("form").innerHTML = url;
		$( "#preview" ).remove();
	};
	
	$(document).ready(function(){setXPreview(document.getElementById("drop").value);});

	$("#drop").change(function(){setXPreview(document.getElementById("drop").value);});
	$("#hide").mousedown (function(){
		setX(); 
		document.getElementById("content").style.backgroundColor = 'transparent'; 
		document.getElementById("content").style.borderImageWidth = "0px";
		document.getElementById("form").style.left = "25px";
		document.getElementById("form").style.top = "52px";
		document.getElementById("leftAdjust").style.display = "none";
		document.getElementById("rightAdjust").style.display = "none";
		document.getElementById("downAdjust").style.display = "none";
		document.getElementById("upAdjust").style.display = "none";
		document.getElementById("recenter").style.display = "none";
		document.getElementById("adjustLabel").style.display = "none";
		selected = true;
	});

	$("#leftAdjust").click(function(){
		overwolf.windows.getCurrentWindow(function(results){
			console.log(results);
			overwolf.windows.changePosition(localStorage.getItem("CrosshairID"), results.window.left-1, results.window.top);
		});
	});
	$("#rightAdjust").click(function(){
		overwolf.windows.getCurrentWindow(function(results){
			overwolf.windows.changePosition(localStorage.getItem("CrosshairID"), results.window.left+1, results.window.top);
		});
	});
	$("#downAdjust").click(function(){
		overwolf.windows.getCurrentWindow(function(results){
			overwolf.windows.changePosition(localStorage.getItem("CrosshairID"), results.window.left, results.window.top+1);
		});
	});
	$("#upAdjust").click(function(){
		overwolf.windows.getCurrentWindow(function(results){
			overwolf.windows.changePosition(localStorage.getItem("CrosshairID"), results.window.left, results.window.top-1);
		});
	});
	
	$("#content").mousedown(function(e){
		if (!$(e.target).hasClass('noDrag') && !selected) 
			wCore.dragMove();
	});
	
	$("#recenter").click(function(){
		overwolf.games.getRunningGameInfo(function(result){
			overwolf.windows.changePosition(localStorage.getItem("CrosshairID"), (result.logicalWidth/2)-101, (result.logicalHeight/2)-133, function(result){console.log("move result", result);});
		});
	});
});

