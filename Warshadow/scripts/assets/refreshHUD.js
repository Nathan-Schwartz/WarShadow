define(function () {	

	function refreshHelper(checked, name, ID){
		/*
			This function is responsible for opening subwindows when their elements are triggered.
		*/
			if (checked == true){
				overwolf.windows.getWindowState(localStorage.getItem(ID),
					function(value){
						if(value.window_state == "closed"){ //if it is closed we will open it
							overwolf.windows.obtainDeclaredWindow(name, 
								function(result){
									if (result.status == "success")
										overwolf.windows.restore(localStorage.getItem(ID));
									else
										console.log('refreshHUD failed');
								}
							);
						}
						else
							overwolf.windows.restore(localStorage.getItem(ID));
					}
				);
				overwolf.windows.restore(localStorage.getItem(ID)); //now that I know the window is running, open it.
			
			}else{
				overwolf.windows.close(localStorage.getItem(ID));
			}
		};

		function refreshHUD(){
		//This function makes sure that all HUD elements are in the state they should be.
		
			document.getElementById('HSNum').checked ? refreshHelper(true,"HSCounter",'HSCounterID') : refreshHelper(false,"HSCounter","HSCounterID");
			document.getElementById('HSChain').checked ? refreshHelper(true,"HSChains",'HSChainsID') : refreshHelper(false,"HSChains",'HSChainsID');
			document.getElementById('HSPerc').checked ? refreshHelper(true,"HSPercent",'HSPercentID') : refreshHelper(false,"HSPercent",'HSPercentID');
			document.getElementById('KDRate').checked ? refreshHelper(true,"KDR",'KDRID') : refreshHelper(false,"KDR",'KDRID');
		};
		
		return {
			refreshHUD:refreshHUD,
			refreshHelper:refreshHelper
		};
});