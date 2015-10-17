
require(['windowCoreFunctions', 'jquery'], function(wCore, $){
			
	function startTimer(timer) {
		setInterval(
			function () {
				timer--;
				document.getElementById("smoke_content").innerHTML = timer-1;
				
				if (timer < 2) {
					document.getElementById("smoke_content").innerHTML = "<div id='smoke_alert' class='smoke'>NOW</div>";
					if(timer < 1)
						wCore.closeWindow();
				}
			}, 
		1000);
	}

	startTimer(15);
	document.getElementById("smoke_content").innerHTML = 14;
	$("#content").mousedown(function(){wCore.dragMove();});
	});
		