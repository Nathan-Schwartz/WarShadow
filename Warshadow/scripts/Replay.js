require(['windowCoreFunctions', 'jquery', 'jqueryUI'], function(wCore, $,counters, jqueryUI){
			
	document.getElementById("Replay").style.borderImage = "url('../images/box.png') 30% 15% 50% 15% stretch round";
	
	overwolf.windows.mediaPlayerElement.create(18,18,600,370,function(status){
		console.log(status);// 'success'
	});
	
	overwolf.windows.mediaPlayerElement.setVideo(localStorage.getItem("url"), function(status){
		console.log("setVideoStatus", status);
	});
	
	overwolf.windows.mediaPlayerElement.play(function(status){
		console.log("playStatus", status);
	});
		
	$("#Replay").mousedown(function(){wCore.dragMove();});
});