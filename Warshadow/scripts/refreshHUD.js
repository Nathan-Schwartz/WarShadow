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
									if (result.status != "success") //if opening it doesn't work, alert me
										alert("obtain window failed in refreshHelper");
									else
										overwolf.windows.restore(localStorage.getItem(ID));
								}
							);
						}
						else
							overwolf.windows.restore(localStorage.getItem(ID));
					}
				);
				overwolf.windows.restore(localStorage.getItem(ID)); //now that I know the window is running, open it.
			
			}else{
				if(name == "Crosshair") //this is here so that if I bind the crosshair window to a hotkey and set the hotkey to ADS it can open/close faster
					overwolf.windows.minimize(localStorage.getItem(ID));
				
				else{		
					overwolf.windows.close(localStorage.getItem(ID));
				}
			}
		};

		function refreshHUD(){
		//This function makes sure that all HUD elements are in the state they should be.
		//There is no way this is the most efficient method but i don't know what that would be yet. Switches seem unlikely
			if (document.getElementById('HSNum').checked)
				refreshHelper(true,"HSCounter","HSCounterID");	
				
			else if (!document.getElementById('HSNum').checked)
				refreshHelper(false,"HSCounter","HSCounterID");
		
						
			if (document.getElementById('HSChain').checked)
				refreshHelper(true,"HSChains",'HSChainsID');
				
			else if (!document.getElementById('HSChain').checked)
				refreshHelper(false,"HSChains",'HSChainsID');
					
			if (document.getElementById('HSPerc').checked)
				refreshHelper(true,"HSPercent",'HSPercentID');	
			
			else if (!document.getElementById('HSPerc').checked)
				refreshHelper(false,"HSPercent",'HSPercentID');
			

			if (document.getElementById('STimer').checked)
				refreshHelper(true,"SmokeTimer",'SmokeTimerID');
					
			else if (!document.getElementById('STimer').checked)
				refreshHelper(false,"SmokeTimer",'SmokeTimerID');

			if (document.getElementById('Stats').checked)
				refreshHelper(true,"StatCrack",'StatCrackID');

			else if (!document.getElementById('Stats').checked)
				refreshHelper(false,"StatCrack",'StatCrackID');
				
			if (document.getElementById('KDRate').checked)
				refreshHelper(true,"KDR",'KDRID');

			else if (!document.getElementById('KDRate').checked)
				refreshHelper(false,"KDR",'KDRID');
				
			if (document.getElementById('crosshair').checked)
				refreshHelper(true, 'Crosshair', 'CrosshairID');
			else if (!document.getElementById('crosshair').checked)
				refreshHelper(false, 'Crosshair', 'CrosshairID');
		};
		
		return {
			refreshHUD:refreshHUD,
			refreshHelper:refreshHelper
		};
});