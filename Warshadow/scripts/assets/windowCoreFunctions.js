define(function () {

function dragMove(){
	overwolf.windows.getCurrentWindow(
		function(result){
			if (result.status=="success"){
				overwolf.windows.dragMove(result.window.id);
			}
		}
	);
};

function closeWindow(){
	overwolf.windows.getCurrentWindow(
		function(result){
			if (result.status=="success"){
				overwolf.windows.close(result.window.id);
			}
		}
	);
};

function minimizeWindow(){
	overwolf.windows.getCurrentWindow(
		function(result){
			if (result.status=="success"){
				overwolf.windows.minimize(result.window.id);
			}
		}
	);
};

function dragResize(edge){
	overwolf.windows.getCurrentWindow(
		function(result){
			if (result.status=="success"){
				overwolf.windows.dragResize(result.window.id, edge);
			}
		}
	);
};

	return{
		dragResize : dragResize,
		closeWindow : closeWindow,
		dragMove : dragMove,
		minimizeWindow:minimizeWindow
	};
		
});