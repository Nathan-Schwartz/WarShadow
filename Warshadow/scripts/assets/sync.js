define(['jquery','gearData'], function($,gData){

function plugin() {
        return document.querySelector('#plugin');
}
      
function testPlugin(){
	return (plugin() == null)? false : true;
};

function syncRepairs(status, data) {
			
            if (status !== "success") {
				console.log("failed");
			} else {
				var xmlDoc = $.parseXML(data);
				var newData = [];
				
				$(xmlDoc).children().children().each(function(){
					if( $(this).attr("durabilityPoints") == 36000){
					
						newData.push([$(this).attr("name"), JSON.parse($(this).attr("repair_cost"))]);
					}
				});
					console.log(newData);
				
					localStorage.setItem("xml", JSON.stringify(newData));
					console.log(JSON.parse(localStorage.getItem("xml")));
					
					arrWeap = gData.getWeapons();
					arrGlov = gData.getGloves();
					arrKniv = gData.getKnives();
					arrHelm = gData.getHelmets();
					arrVest = gData.getVests();
					arrBoot = gData.getBoots();

					for(var i = 0; i < newData.length; i++){
					
					
					//Check to see if the repair values in the xml file correlates to helmets
						for(var j1 = 0; j1 < arrHelm.length; j1++){
							if(arrHelm[j1].Shop_name == newData[i][0]){
								//console.log(arrHelm[j1].key);
								arrHelm[j1].Repair_num = Math.round(newData[i][1] / 10)*10;
								newData[i][1] = 0;
								break
							}
						}
			
					//Check weapons
						for(var j2 = 0; j2 < arrWeap.length; j2++){
							if(arrWeap[j2].Shop_name == newData[i][0]){
								//console.log(arrWeap[j2].key);
								arrWeap[j2].Repair_num = Math.round(newData[i][1] / 10)*10;
								newData[i][1] = 0;
								break
							}
						}
					
					//Check gloves
						for(var j3 = 0; j3 < arrGlov.length; j3++){
							if(arrGlov[j3].Shop_name == newData[i][0]){
								//console.log(arrGlov[j3].key);
								arrGlov[j3].Repair_num = Math.round(newData[i][1] / 10)*10;
								newData[i][1] = 0;
								break
							}
						}

					//Check vests
						for(var j4 = 0; j4 < arrVest.length; j4++){
							if(arrVest[j4].Shop_name == newData[i][0]){
								//console.log(arrVest[j4].key);
								arrVest[j4].Repair_num = Math.round(newData[i][1] / 10)*10;
								newData[i][1] = 0;
								break
							}
						}

					//Check boots
						for(var j5 = 0; j5 < arrBoot.length; j5++){
							if(arrBoot[j5].Shop_name == newData[i][0]){
								//console.log(arrBoot[j5].key);
								arrBoot[j5].Repair_num = Math.round(newData[i][1] / 10)*10;
								newData[i][1] = 0;
								break
							}
						}
					
					//Check knives
						for(var j6 = 0; j6 < arrKniv.length; j6++){
							if(arrKniv[j6].Shop_name == newData[i][0]){
								//console.log(arrKniv[j6].key);
								arrKniv[j6].Repair_num = Math.round(newData[i][1] / 10)*10;
								newData[i][1] = 0;
								break
							}
						}
					}
					
					//update current stats
					var leftout = [];
					for(var newiter = 0; newiter < newData.length; newiter++){
						if(newData[newiter][1] != 0)
							leftout.push(newData[newiter][0]);
					}
					console.log("leftout:");
					console.log(leftout);
					
					gData.setKnives(arrKniv);
					gData.setBoots(arrBoot);
					gData.setVests(arrVest);
					gData.setGloves(arrGlov);
					gData.setWeapons(arrWeap);
					gData.setHelmets(arrHelm);
					/*
					arrWeap = gData.getWeapons();
					arrGlov = gData.getGloves();
					arrKniv = gData.getKnives();
					arrHelm = gData.getHelmets();
					arrVest = gData.getVests();
					arrBoot = gData.getBoots();
					
					console.log(arrHelm);
					console.log(arrBoot);
					console.log(arrVest);
					console.log(arrWeap);
					console.log(arrGlov);
					console.log(arrKniv);*/
					
					console.log("sync completed");
					
			}
		};


    // !!! implemenent failsafes for user doesn't want to sync              put a copy of shop_get_offers.xml in the install folder just in case? Would have to figure out how to load it.

function getNewData(){
	plugin().fileExists(
		plugin().PROFILE + "/Saved Games/My Games/WarfaceWest/QueryCache/shop_get_offers.xml", 
		function(status) {
			if(status === true){
				file = true;
				plugin().getTextFile(
					plugin().PROFILE + 
					"/Saved Games/My Games/WarfaceWest/QueryCache/shop_get_offers.xml", 
					false, // not a widechars file (i.e. not ucs-2)
					function(status, data) {
						syncRepairs(status, data);
					}
				);
			} else{
				alert("I'm sorry, my app failed to update current repair costs. If you would like to sync repair costs, please make sure you have Warface installed. \n\nIf you do, please try launching the game again and then locate the get_shop_offers.xml file on your computer and move it to \n'Users/<your-name>/Saved Games/WarfaceWest/QueryCache/'. \n\nIt will be necessary to copy in a new shop_get_offers.xml whenever you want to update the data again. The game will update the file on each launch.");
			}
		});
};

	return{
		testPlugin: testPlugin,
		getNewData: getNewData
	};
	
});