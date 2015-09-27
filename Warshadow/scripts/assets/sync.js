define(['gearData'], function(gData){

function plugin() {
        return document.querySelector('#plugin');
}
      
function testPlugin(){
	return (plugin() == null)? false : true;
};


/*
      plugin().fileExists(
        plugin().PROGRAMFILES + "/overwolf/Overwolf.exe.config", 
        function(status) {
        
          if (status === true) {
            addMessage(
              plugin().PROGRAMFILES + 
              "/overwolf/Overwolf.exe.config" + 
              " exists on disk!");
          } else {
            addMessage(
              plugin().PROGRAMFILES + 
              "/overwolf/Overwolf.exe.config" + 
              " does NOT exist on disk!");
          }
        });*/
    
    /*  plugin().isDirectory(
        plugin().PROFILE + "/Saved Games/My Games/WarfaceWest/QueryCache", 
        function(status) {
			addMessage(plugin().PROFILE + "/queryCache" + ((status===true)?" exists and is a directory":" is not a directory or does NOT exist!"));
			
			plugin().listDirectoryContents(plugin().PROGRAMFILES + ((status===true)?"/overwolf":""), function(status, data) {
				addMessage("listDirectoryContents: " + ((status===true)?"success":"failed"));
				if (status===true)
					addMessage(JSON.stringify(JSON.parse(data), null, '\t'));	// JSON compat test
			});
        });*/


function getText(){// !!!!!! implemenent failsafes for A) not a directory     B) not a file    C) user doesn't want to sync    D) user wants to pick custom location 
	plugin().getTextFile(
			plugin().PROFILE + 
			"/Saved Games/My Games/WarfaceWest/QueryCache/shop_get_offers.xml", 
			false, // not a widechars file (i.e. not ucs-2)
			function(status, data) {
          
            if (status !== "success") {
				console.log("failed");
			} else {
				var res = data.split("durabilityPoints=\"36000\" repair_cost=\"");//I only care about data that represents items that can be repaired since I am only updating repair costs.
				//console.log(res);
			  
				var newData = [];//going to be storing the repair values from the xml here
				for(var i = 1; i < res.length; i++){//we are using offsetting the iter by 1 because the zero index is a garbage value
					newData.push(["",0]);
					var helperString = res[i].substr(6+res[i].search("name=\""), 30); //find location of "name"
					 newData[i-1][0] = helperString.substring(0, helperString.indexOf("\""));//only grab the name value
					 newData[i-1][1] = parseInt(res[i]); //Grab value and truncate the rest
				}
					//console.log(newData);
					
					
					
					arrWeap = gData.getWeapons();
					arrGlov = gData.getGloves();
					arrKniv = gData.getKnives();
					arrHelm = gData.getHelmets();
					arrVest = gData.getVests();
					arrBoot = gData.getBoots();

					for(var i = 0; i < newData.length; i++){   // !!!!!! make a change log?
					
					
					//Check to see if the repair values in the xml file correlates to helmets
						for(var j1 = 0; j1 < arrHelm.length; j1++){
							if(arrHelm[j1].Shop_name == newData[i][0]){
								console.log(arrHelm[j1].key);
								console.log(arrHelm[j1].Repair_num); 
								console.log(newData[i][1]);
								arrHelm[j1].Repair_num = Number(newData[i][1]);
								//newData[i][1] = 0;
								break
							}
						}
					
					 
					
					//Check to see if the repair values in the xml file correlates to weapons
						for(var j2 = 0; j2 < arrWeap.length; j2++){
							if(arrWeap[j2].Shop_name == newData[i][0]){
								console.log(arrWeap[j2].key);
								console.log(arrWeap[j2].Repair_num);
								console.log(newData[i][1]);
								arrWeap[j2].Repair_num = Number(newData[i][1]);
								//newData[i][1] = 0;
								break
							}
						}
					
					
					
					//Check to see if the repair values in the xml file correlates to gloves
						for(var j3 = 0; j3 < arrGlov.length; j3++){
							if(arrGlov[j3].Shop_name == newData[i][0]){
								console.log(arrGlov[j3].key);
								console.log(arrGlov[j3].Repair_num);
								console.log(newData[i][1]);
								arrGlov[j3].Repair_num = Number(newData[i][1]);
								//newData[i][1] = 0;
								break
							}
						}
					
					

					//Check to see if the repair values in the xml file correlates to vests
						for(var j4 = 0; j4 < arrVest.length; j4++){
							if(arrVest[j4].Shop_name == newData[i][0]){
								console.log(arrVest[j4].key);
								console.log(arrVest[j4].Repair_num);
								console.log(newData[i][1]);
								arrVest[j4].Repair_num = Number(newData[i][1]);
								//newData[i][1] = 0;
								break
							}
						}

					
					//Check to see if the repair values in the xml file correlates to boots
						for(var j5 = 0; j5 < arrBoot.length; j5++){
							if(arrBoot[j5].Shop_name == newData[i][0]){
								console.log(arrBoot[j5].key);
								console.log(arrBoot[j5].Repair_num);
								console.log(newData[i][1]);
								arrBoot[j5].Repair_num = Number(newData[i][1]);
								//newData[i][1] = 0;
								break
							}
						}
					
					
					//Check to see if the repair values in the xml file correlates to knives
						for(var j6 = 0; j6 < arrKniv.length; j6++){
							if(arrKniv[j6].Shop_name == newData[i][0]){
								console.log(arrKniv[j6].key);
								console.log(arrKniv[j6].Repair_num);
								console.log(newData[i][1]);
								arrKniv[j6].Repair_num = Number(newData[i][1]);
								//newData[i][1] = 0;
								break
							}
						}
					}
					//update current stats
					/*var leftout = [];
					for(var newiter = 0; newiter < newData.length; newiter++){
						if(newData[newiter][1] != 0)
							leftout.push(newData[newiter]);
					}
					console.log(leftout);
					*/
					console.log(arrHelm);
					console.log(arrBoot);
					console.log(arrVest);
					console.log(arrWeap);
					
					/*
					gData.setKnives(arrKniv);
					gData.setBoots(arrBoot);
					gData.setVests(arrVest);
					gData.setGloves(arrGlov);
					gData.setWeapons(arrWeap);
					gData.setHelmets(arrHelm);
					*/
			}
        });
}
	
	return{
		testPlugin: testPlugin,
		getText: getText
	};
	
});