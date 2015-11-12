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
		
			localStorage.setItem("xml", JSON.stringify(newData));

			var arrData = {};
			arrData.arrWeap = gData.getWeapons();
			arrData.arrGlov = gData.getGloves();
			arrData.arrKniv = gData.getKnives();
			arrData.arrHelm = gData.getHelmets();
			arrData.arrVest = gData.getVests();
			arrData.arrBoot = gData.getBoots();

			for(var i = 0, limit = newData.length; i < limit; i++){
				
				for(key in arrData){
					for(var j = 0; j < arrData[key].length; j++){
						if(arrData[key][j].Shop_name == newData[i][0]){
							arrData[key][j].Repair_num = Math.round(newData[i][1] / 10)*10;
							newData[i][1] = 0;
							break
						}
					}
				}
			}
			
			//update current stats
			var leftout = [];
			for(var newiter = 0, limit = newData.length; newiter < limit; newiter++){
				if(newData[newiter][1] != 0)
					leftout.push(newData[newiter][0]);
			}
			console.log("leftout:",leftout);

			gData.setKnives(arrData.arrKniv);
			gData.setBoots(arrData.arrBoot);
			gData.setVests(arrData.arrVest);
			gData.setGloves(arrData.arrGlov);
			gData.setWeapons(arrData.arrWeap);
			gData.setHelmets(arrData.arrHelm);

			console.log("sync completed");
		}
	};

	function getNewData(){
		if(JSON.parse(localStorage.getItem("Settings")).allowSync == false)
			return false;
		
		plugin().fileExists(
			plugin().PROFILE + "/Saved Games/My Games/WarfaceWest/QueryCache/shop_get_offers.xml", 
			function(status) {
				if(status === true){
					file = true;
					plugin().getTextFile(
						plugin().PROFILE + 
						"/Saved Games/My Games/WarfaceWest/QueryCache/shop_get_offers.xml", 
						false,
						function(status, data) {
							syncRepairs(status, data);
						}
					);
				} else{
					alert("I'm sorry, my app failed to update current repair costs. If you would like to sync repair costs, please make sure you have Warface installed. \n\nIf you do, please try launching the game again and then locate the get_shop_offers.xml file on your computer and move it to \n'Users/<your-name>/Saved Games/WarfaceWest/QueryCache/'. \n\nIt will be necessary to copy in a new shop_get_offers.xml whenever you want to update the data again. The game will update the file on each launch.");// !!!!its an alert
				}
			}
		);
	};

	return{
		testPlugin: testPlugin,
		getNewData: getNewData
	};
});