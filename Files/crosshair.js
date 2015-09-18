
function dragMove(){
	overwolf.windows.getCurrentWindow(function(result){
		if (result.status=="success"){
			overwolf.windows.dragMove(result.window.id);
		}
	});
};

function updatePOS(name) {
	overwolf.windows.obtainDeclaredWindow(name,
		function(results){
			var test = JSON.parse(localStorage.getItem("windowPOS"));
				test.crosshair[0] = results.window.left;
				test.crosshair[1] = results.window.top;
				localStorage.setItem("windowPOS", JSON.stringify(test));
				//alert(test.hscounter[0]);
				//alert(results.window.left);
		}
	);
};


var reticle = " ";


function setXPreview(value){
	if (value == "scope"){
		document.getElementById("preview").innerHTML = "<img src='../crosshair1.png' id='cross' alt='Smoke-icon'>";
		reticle = "<img src='../crosshair1.png' id='cross' alt='Smoke-icon'>";
		document.getElementById('cross').style.visibility = "visible";
	}	
};

function setX(){
	document.getElementById("form").innerHTML = reticle;
	$( "#preview" ).remove();
};

function position(newState){
	setTimeout(function(){
		if(newState == -1){
			overwolf.windows.changePosition(
								localStorage.getItem('CrosshairID'), 
								JSON.parse(localStorage.getItem("windowPOS")).crosshair[0], 
								JSON.parse(localStorage.getItem("windowPOS")).crosshair[1]
								);
			overwolf.windows.changeSize(localStorage.getItem('CrosshairID'), 200, 200);
		}
	}, 1000);
};
	
position(-1);
document.getElementById("cross").style.visibility = "hidden";



document.getElementById("drop").onchange = function(){setXPreview(document.getElementById("drop").value);};
document.getElementById("content").onmousedown = function(){dragMove();};
document.getElementById("hide").onmousedown = function(){ setX();};    
document.getElementById("form").ondblclick = function(){updatePOS("Crosshair");};

