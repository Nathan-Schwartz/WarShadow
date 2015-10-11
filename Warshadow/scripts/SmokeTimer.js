
require(['windowCoreFunctions'], function(wCore){
			
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
		1000);// !!! blurring if i use 2nd weapon slot beofre first on graph. Also doesn't make line reappear when i reselect a text box even though it saves the weapon choice
	}

	startTimer(14);
		
	document.getElementById("content").onmousedown = function(){wCore.dragMove();};
	});
		