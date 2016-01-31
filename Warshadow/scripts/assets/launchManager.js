define(["recording"], function(rec){

	var alerted = false;
	location.search.indexOf('source=gamelaunchevent') >= 0 ? fpsLaunch() : tryLaunch();

	function fpsLaunch(){
		overwolf.games.onMajorFrameRateChange.addListener(function(data){
			if(data.fps > 15 && data.fps_status == "Stable" && !alerted){
				tryLaunch();
			}
		});
	};
			
	function tryLaunch(){
		overwolf.windows.restore(localStorage.getItem('MainID'));
		alerted = true;
	};
});