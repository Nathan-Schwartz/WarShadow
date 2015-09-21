	
	define(['windowCoreFunctions'], function(wCore){
	
			
			function updatePOS(name) {
				overwolf.windows.obtainDeclaredWindow(name,
					function(results){
						var test = JSON.parse(localStorage.getItem("windowPOS"));
						test.hschains[0] = results.window.left;
						test.hschains[1] = results.window.top;
						localStorage.setItem("windowPOS", JSON.stringify(test));
					}
				);
			};
			

		
			function SetHSNPos(newState, ID) {
				setTimeout(function(){
					if(newState == -1){
						overwolf.windows.changePosition(ID, 
												JSON.parse(localStorage.getItem("windowPOS")).hschains[0], 
												JSON.parse(localStorage.getItem("windowPOS")).hschains[1]
												);
						overwolf.windows.changeSize(ID, 140, 50);
					}
				}, 300);
			};
		
			function avgChain(){
				var headshots = parseInt(localStorage.getItem("Headshots"));
				var twochain = parseInt(localStorage.getItem('TWWWOOOOCHAAAAAIIIIIIIINNNNNZZZZZ')); //sorry, had to.
				var threechain = parseInt(localStorage.getItem('3chain'));
				var fourchain = parseInt(localStorage.getItem('4chain'));
				var fivechain = parseInt(localStorage.getItem('5chain'));
				
				//Since we know how many headshots have happened (kept in localStorage), all we need to do is figure out how many individual chains there were.

				var NumberofChainsPRESINGLE = fivechain + (fourchain-fivechain) + (threechain - fourchain - fivechain) + (twochain - threechain - fourchain - fivechain); //since the triple headshots also triggers double headshot event, we need to weed out duplicates. Can't include singles cuz we don't know which ones were part of chains.
				var HSfromChains = (fivechain * 5) + ((fourchain - fivechain) * 4) + ((threechain - fourchain - fivechain) * 3) + ((twochain - threechain - fourchain - fivechain) * 2); //We need this to figure out how many headshots were singles
				var NumberofSingleHS = headshots - HSfromChains; //number of singles
				var NumberofChains = NumberofSingleHS + NumberofChainsPRESINGLE; //add the number of singles to the number of chains cuz we are counting them.
				
				AverageChainLength = headshots / NumberofChains;
				console.log(AverageChainLength);
				AverageChainLength = Math.round( AverageChainLength * 100 ) / 100; //round to .01
				
				return AverageChainLength;
			}
		
			SetHSNPos(-1, localStorage.getItem('HSChainsID'));
			
			window.addEventListener('storage', function( storageEvent ){
					document.getElementById("HSchains").innerHTML = avgChain() + " Avg";
			});
			
			document.getElementById("content").onmousedown = function(){wCore.dragMove();};
			document.getElementById("HSCimage").ondblclick = function(){updatePOS("HSChains");};

});