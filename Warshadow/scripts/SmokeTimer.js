require(['windowCoreFunctions', 'jquery'], function(wCore, $){
			
	function startTimer(timer) {
		setInterval(function(){
			timer--;
			document.getElementById("smoke_content").innerHTML = timer-1;

			if(timer < 2){
				document.getElementById("smoke_content").innerHTML = "<div id='smoke_alert' class='smoke'>NOW</div>";
				var show = true;
				setInterval(function(){
					document.getElementById("smoke_content").innerHTML = show?"":"<div id='smoke_alert' class='smoke'>NOW</div>";
					show = !show;
				},100);
				
				if(timer < 1)
					wCore.closeWindow();
			}
		}, 1000);
	}

	startTimer(13);
	document.getElementById("smoke_content").innerHTML = 12;
	$("#content").mousedown(wCore.dragMove);
});