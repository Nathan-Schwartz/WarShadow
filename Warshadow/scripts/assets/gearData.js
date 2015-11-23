define(function () {

/*
changelog cuz this is gonna get stupid

Helmets
-inverted damage_reduc

Gloves
-inverted



*/


	function initStats(){
		var helmets = [{"key":"Warlord","HP_regen":8,"Damage_reduc":0.6,"Mine":"FALSE","Flash":"FALSE","Repair_num":500,"Shop_name":"medic_helmet_07","File_name":"@medic_helmet_07_shop_name"},
	{"key":"Elite Crown","HP_regen":8,"Damage_reduc":0.3,"Mine":"FALSE","Flash":"TRUE","Repair_num":1170,"Shop_name":"medic_helmet_crown_02","File_name":"@medic_helmet_crown_02_shop_name"},
	{"key":"Dread mask","HP_regen":0,"Damage_reduc":0.55,"Mine":"FALSE","Flash":"TRUE","Repair_num":1430,"Shop_name":"shared_helmet_hlw_03","File_name":"@shared_helmet_hlw_03_shop_name"},
	{"key":"Tactical","HP_regen":0,"Damage_reduc":0.8,"Mine":"FALSE","Flash":"TRUE","Repair_num":819,"Shop_name":"medic_helmet_02","File_name":"@medic_helmet_02_shop_name"},
	{"key":"Sapper","HP_regen":0,"Damage_reduc":0.8,"Mine":"TRUE","Flash":"FALSE","Repair_num":1430,"Shop_name":"medic_helmet_05","File_name":"@medic_helmet_05_shop_name"},
	{"key":"Advanced","HP_regen":0,"Damage_reduc":0.8,"Mine":"FALSE","Flash":"FALSE","Repair_num":624,"Shop_name":"medic_helmet_03","File_name":"@medic_helmet_03_shop_name"},
	{"key":"Default","HP_regen":0,"Damage_reduc":0.9,"Mine":"FALSE","Flash":"FALSE","Repair_num":0,"Shop_name":"medic_helmet_01","File_name":"@medic_helmet_01_shop_name"},
	{"key":"npc","HP_regen":0,"Damage_reduc":1,"Mine":"FALSE","Flash":"FALSE","Repair_num":0,"Shop_name":"none","File_name":"none"}];
		localStorage.setItem('helmets', JSON.stringify(helmets));

		var gloves = [{"key":"Knockdown Gloves","recoil_reduc":0,"Knockdown":"TRUE","Damage_reduc":0,"Reload":0,"Melee_range":0,"Melee_speed":0,"Swap_speed":0,"Spread_reduc":0,"Repair_num":532,"Shop_name":"soldier_hands_01","File_name":"@soldier_hands_01_shop_name"},
	{"key":"Engineer Gloves","recoil_reduc":0,"Knockdown":"FALSE","Damage_reduc":0,"Reload":0.8,"Melee_range":0,"Melee_speed":0,"Swap_speed":0,"Spread_reduc":0,"Repair_num":1700,"Shop_name":"engineer_hands_01","File_name":"@engineer_hands_01_shop_name"},
	{"key":"Mobility Gloves","recoil_reduc":0,"Knockdown":"FALSE","Damage_reduc":0,"Reload":0.8,"Melee_range":0,"Melee_speed":0,"Swap_speed":1.2,"Spread_reduc":0,"Repair_num":1700,"Shop_name":"soldier_hands_03","File_name":"@soldier_hands_03_shop_name"},
	{"key":"Multipurpose Gloves","recoil_reduc":0,"Knockdown":"FALSE","Damage_reduc":0,"Reload":0.8,"Melee_range":0,"Melee_speed":0,"Swap_speed":1.2,"Spread_reduc":0,"Repair_num":1700,"Shop_name":"sniper_hands_01","File_name":"@sniper_hands_01_shop_name"},
	{"key":"Christmas Gloves","recoil_reduc":0,"Knockdown":"FALSE","Damage_reduc":0,"Reload":0.8,"Melee_range":0,"Melee_speed":0,"Swap_speed":0,"Spread_reduc":0,"Repair_num":624,"Shop_name":"shared_hands_xmas_01","File_name":"@shared_hands_xmas_01_shop_name"},
	{"key":"Special Edition Gloves","recoil_reduc":0,"Knockdown":"FALSE","Damage_reduc":0,"Reload":0,"Melee_range":0,"Melee_speed":0,"Swap_speed":0,"Spread_reduc":0,"Repair_num":0,"Shop_name":"shared_hands_promo_01","File_name":"@shared_hands_promo_01_shop_name"},
	{"key":"Elite Crown Gloves","recoil_reduc":0,"Knockdown":"FALSE","Damage_reduc":0.8,"Reload":0.8,"Melee_range":0,"Melee_speed":0,"Swap_speed":1.2,"Spread_reduc":0.85,"Repair_num":1700,"Shop_name":"shared_hands_crown_02","File_name":"@shared_hands_crown_02_shop_name"},
	{"key":"Assault Gloves","recoil_reduc":0,"Knockdown":"FALSE","Damage_reduc":0,"Reload":0,"Melee_range":0,"Melee_speed":0,"Swap_speed":1.2,"Spread_reduc":0,"Repair_num":532,"Shop_name":"shared_hands_06","File_name":"@shared_hands_06_shop_name"},
	{"key":"Carbon Fibre Gloves","recoil_reduc":0,"Knockdown":"FALSE","Damage_reduc":0,"Reload":0.8,"Melee_range":1.2,"Melee_speed":1.35,"Swap_speed":0,"Spread_reduc":0,"Repair_num":930,"Shop_name":"shared_hands_05","File_name":"@shared_hands_05_shop_name"},
	{"key":"Combat Gloves","recoil_reduc":0,"Knockdown":"TRUE","Damage_reduc":0,"Reload":0.8,"Melee_range":0,"Melee_speed":0,"Swap_speed":0,"Spread_reduc":0,"Repair_num":658,"Shop_name":"shared_hands_04","File_name":"@shared_hands_04_shop_name"},
	{"key":"Melee hit Gloves","recoil_reduc":0,"Knockdown":"FALSE","Damage_reduc":0,"Reload":0,"Melee_range":1.2,"Melee_speed":1.35,"Swap_speed":0,"Spread_reduc":0,"Repair_num":760,"Shop_name":"shared_hands_03","File_name":"@shared_hands_03_shop_name"},
	{"key":"Protective Gloves","recoil_reduc":0,"Knockdown":"FALSE","Damage_reduc":0.8,"Reload":0,"Melee_range":0,"Melee_speed":0,"Swap_speed":0,"Spread_reduc":0,"Repair_num":405,"Shop_name":"shared_hands_02","File_name":"@shared_hands_02_shop_name"},
	{"key":"Default Gloves","recoil_reduc":0,"Knockdown":"FALSE","Damage_reduc":0,"Reload":0,"Melee_range":0,"Melee_speed":0,"Swap_speed":0,"Spread_reduc":0,"Repair_num":0,"Shop_name":"shared_hands_01","File_name":"@shared_hands_01_shop_name"},
	{"key":"Light Gloves","recoil_reduc":0,"Knockdown":"FALSE","Damage_reduc":0,"Reload":0.8,"Melee_range":0,"Melee_speed":0,"Swap_speed":0,"Spread_reduc":0,"Repair_num":1700,"Shop_name":"medic_hands_01","File_name":"@medic_hands_01_shop_name"},
	{"key":"Warlord Gloves","recoil_reduc":0.85,"Knockdown":"FALSE","Damage_reduc":0,"Reload":0.85,"Melee_range":0,"Melee_speed":0,"Swap_speed":1.25,"Spread_reduc":0,"Repair_num":6010,"Shop_name":"shared_hands_07","File_name":"@shared_hands_07_shop_name"}];
		localStorage.setItem('gloves', JSON.stringify(gloves));

		var boots = [{"key":"Fast Anti-directional Mine Shoes","Damage_reduc_perc":0.8,"Mine_delay":"TRUE","Crouch_speed":0,"Sprint_speed":0,"Sprint_dur":0,"Slide_dist":0,"Silent":"FALSE","Repair_num":2040,"Shop_name":"engineer_shoes_01","File_name":"@engineer_shoes_01_shop_name"},
	{"key":"Gumboots","Damage_reduc_perc":0.8,"Mine_delay":"TRUE","Crouch_speed":0,"Sprint_speed":0,"Sprint_dur":0,"Slide_dist":0,"Silent":"FALSE","Repair_num":1622,"Shop_name":"soldier_shoes_02","File_name":"@soldier_shoes_02_shop_name"},
	{"key":"Sapper Shoes","Damage_reduc_perc":0.8,"Mine_delay":"TRUE","Crouch_speed":0,"Sprint_speed":0,"Sprint_dur":0,"Slide_dist":0,"Silent":"FALSE","Repair_num":2040,"Shop_name":"sniper_shoes_01","File_name":"@sniper_shoes_01_shop_name"},
	{"key":"Default Boots","Damage_reduc_perc":0,"Mine_delay":"FALSE","Crouch_speed":0,"Sprint_speed":0,"Sprint_dur":0,"Slide_dist":0,"Silent":"FALSE","Repair_num":0,"Shop_name":"shared_shoes_01","File_name":"@shared_shoes_01_shop_name"},
	{"key":"Fast Shoes","Damage_reduc_perc":0,"Mine_delay":"FALSE","Crouch_speed":20,"Sprint_speed":1.25,"Sprint_dur":0,"Slide_dist":0,"Silent":"FALSE","Repair_num":2040,"Shop_name":"shared_shoes_02","File_name":"@shared_shoes_02_shop_name"},
	{"key":"Protective Boots","Damage_reduc_perc":0.8,"Mine_delay":"FALSE","Crouch_speed":0,"Sprint_speed":0,"Sprint_dur":0,"Slide_dist":0,"Silent":"FALSE","Repair_num":355,"Shop_name":"shared_shoes_03","File_name":"@shared_shoes_03_shop_name"},
	{"key":"Sprint Shoes","Damage_reduc_perc":0,"Mine_delay":"FALSE","Crouch_speed":0,"Sprint_speed":0,"Sprint_dur":1.5,"Slide_dist":0,"Silent":"FALSE","Repair_num":930,"Shop_name":"shared_shoes_04","File_name":"@shared_shoes_04_shop_name"},
	{"key":"Light Boots","Damage_reduc_perc":0,"Mine_delay":"FALSE","Crouch_speed":0,"Sprint_speed":1.25,"Sprint_dur":0,"Slide_dist":0,"Silent":"FALSE","Repair_num":1622,"Shop_name":"shared_shoes_05","File_name":"@shared_shoes_05_shop_name"},
	{"key":"Silent Boots","Damage_reduc_perc":0,"Mine_delay":"FALSE","Crouch_speed":0,"Sprint_speed":0,"Sprint_dur":0,"Slide_dist":0,"Silent":"TRUE","Repair_num":845,"Shop_name":"shared_shoes_06","File_name":"@shared_shoes_06_shop_name"},
	{"key":"Spy Shoes","Damage_reduc_perc":0,"Mine_delay":"FALSE","Crouch_speed":0,"Sprint_speed":0,"Sprint_dur":1.5,"Slide_dist":0,"Silent":"TRUE","Repair_num":2040,"Shop_name":"shared_shoes_07","File_name":"@shared_shoes_07_shop_name"},
	{"key":"Sliding Boots","Damage_reduc_perc":0,"Mine_delay":"FALSE","Crouch_speed":0,"Sprint_speed":1.15,"Sprint_dur":1.1,"Slide_dist":1.3,"Silent":"FALSE","Repair_num":1622,"Shop_name":"shared_shoes_08","File_name":"@shared_shoes_08_shop_name"},
	{"key":"Crown Boots","Damage_reduc_perc":0,"Mine_delay":"TRUE","Crouch_speed":0,"Sprint_speed":1.25,"Sprint_dur":1.1,"Slide_dist":0,"Silent":"FALSE","Repair_num":1622,"Shop_name":"shared_shoes_crown_02","File_name":"@shared_shoes_crown_02_shop_name"},
	{"key":"Christmas Boots","Damage_reduc_perc":0,"Mine_delay":"FALSE","Crouch_speed":0,"Sprint_speed":1.2,"Sprint_dur":0,"Slide_dist":0,"Silent":"FALSE","Repair_num":1622,"Shop_name":"shared_shoes_xmas_01","File_name":"@shared_shoes_xmas_01_shop_name"},
	{"key":"Anti-directional Mine Boots","Damage_reduc_perc":0.8,"Mine_delay":"TRUE","Crouch_speed":0,"Sprint_speed":0,"Sprint_dur":0,"Slide_dist":0,"Silent":"FALSE","Repair_num":1622,"Shop_name":"soldier_shoes_02","File_name":"@soldier_shoes_02_shop_name"},
	{"key":"Warlord Boots","Damage_reduc_perc":0.5,"Mine_delay":"FALSE","Crouch_speed":0,"Sprint_speed":1.2,"Sprint_dur":1.35,"Slide_dist":0,"Silent":"FALSE","Repair_num":1248,"Shop_name":"shared_shoes_09","File_name":"@shared_shoes_09_shop_name"}];
		localStorage.setItem('boots', JSON.stringify(boots));

		var knives = [{"key":"Executor knife","Repair_num":0,"Shop_name":"kn01_default"},
	{"key":"Ultra Marine","Repair_num":448,"Shop_name":"kn02"},
	{"key":"NY Ultra Marine","Repair_num":442,"Shop_name":"kn02_cny01_shop"},
	{"key":"Icicle Knife","Repair_num":442,"Shop_name":"kn02_xmas_shop"},
	{"key":"Black Hawk","Repair_num":5200,"Shop_name":"kn03"},
	{"key":"Candy Knife","Repair_num":800,"Shop_name":"kn03_xmas_shop"},
	{"key":"Black Hawk Spec Ops Mk01","Repair_num":800,"Shop_name":"kn03_zsd01_shop"},
	{"key":"Army Knife","Repair_num":800,"Shop_name":"kn04"},
	{"key":"Army Knife Halloween","Repair_num":800,"Shop_name":"kn04_hlw01_shop"},
	{"key":"Sapper shovel","Repair_num":2184,"Shop_name":"kn05"},
	{"key":"Sapper shovel Winter Camo","Repair_num":3900,"Shop_name":"kn05_camo02_shop"},
	{"key":"Utility Knife","Repair_num":800,"Shop_name":"kn06"},
	{"key":"Kukri Machete","Repair_num":4000,"Shop_name":"kn07"},
	{"key":"Neck Knife","Repair_num":800,"Shop_name":"kn08"},
	{"key":"Survival Tanto Knife","Repair_num":600,"Shop_name":"kn10"},
	{"key":"Katana","Repair_num":5400,"Shop_name":"kn13"},
	{"key":"Katana Special","Repair_num":800,"Shop_name":"kn13_zsd01_shop"},
	{"key":"Katana Mk.60 Mod","Repair_num":800,"Shop_name":"kn13_zsd02_shop"},
	{"key":"ICE-AXE","Repair_num":800,"Shop_name":"kn14"},
	{"key":"Sickle","Repair_num":442,"Shop_name":"kn41_ww2_default"},
	{"key":"Wooden Hammer","Repair_num":442,"Shop_name":"kn42_viet_shop"},
	{"key":"Hammer","Repair_num":442,"Shop_name":"kn42_ww2_shop"},
	{"key":"Classic Soviet Knife","Repair_num":600,"Shop_name":"kn43_vdv_shop"},
	{"key":"Digger of Doom","Repair_num":2184,"Shop_name":"kn44_fld01_shop"}];
		localStorage.setItem('knives', JSON.stringify(knives));

		var weapons = [{"key":"Exar-L PDW Gold","Damage":80,"RPM":730,"Damage_reduc":3,"Repair_num":5100,"Min_damage":35,"Min_range":10.5,"Class":"E","Archetype":"R","Shop_name":"smg31_gold01_shop","File_name":"@smg31_gold01_shop_name"},
	{"key":"Exar-L PDW","Damage":80,"RPM":730,"Damage_reduc":3,"Repair_num":5100,"Min_damage":35,"Min_range":9.5,"Class":"E","Archetype":"R","Shop_name":"smg31_shop","File_name":"@smg31_shop_name"},
	{"key":"Karkom SMG","Damage":75,"RPM":840,"Damage_reduc":3,"Repair_num":6990,"Min_damage":38,"Min_range":11,"Class":"E","Archetype":"E","Shop_name":"smg10_shop","File_name":"@smg10_shop_name"},
	{"key":"Micro Oren","Damage":61,"RPM":1000,"Damage_reduc":3.6,"Repair_num":6240,"Min_damage":31,"Min_range":6.5,"Class":"E","Archetype":"E","Shop_name":"smg02_shop","File_name":"@smg02_shop_name"},
	{"key":"AC7 SMG","Damage":78,"RPM":780,"Damage_reduc":3.1,"Repair_num":5400,"Min_damage":33,"Min_range":12,"Class":"E","Archetype":"E","Shop_name":"smg08_shop","File_name":"@smg08_shop_name"},
	{"key":"MP .38","Damage":59,"RPM":1000,"Damage_reduc":3.7,"Repair_num":3510,"Min_damage":32,"Min_range":6.5,"Class":"E","Archetype":"E","Shop_name":"smg15_shop","File_name":"@smg15_shop_name"},
	{"key":"CCR CQB","Damage":70,"RPM":830,"Damage_reduc":3,"Repair_num":6990,"Min_damage":32,"Min_range":10.5,"Class":"E","Archetype":"E","Shop_name":"smg25_shop","File_name":"@smg25_shop_name"},
	{"key":"ZX84 UMP","Damage":85,"RPM":700,"Damage_reduc":3.1,"Repair_num":6990,"Min_damage":38,"Min_range":9,"Class":"E","Archetype":"E","Shop_name":"smg17_shop","File_name":"@smg17_shop_name"},
	{"key":"Metasoma 83","Damage":70,"RPM":800,"Damage_reduc":3.6,"Repair_num":5400,"Min_damage":28,"Min_range":7,"Class":"E","Archetype":"E","Shop_name":"smg16_shop","File_name":"@smg16_shop_name"},
	{"key":"MT-19","Damage":60,"RPM":900,"Damage_reduc":3,"Repair_num":6240,"Min_damage":28,"Min_range":9,"Class":"E","Archetype":"E","Shop_name":"smg24_shop","File_name":"@smg24_shop_name"},
	{"key":"M99AS","Damage":60,"RPM":900,"Damage_reduc":3.1,"Repair_num":3510,"Min_damage":38,"Min_range":9,"Class":"E","Archetype":"E","Shop_name":"smg05_shop","File_name":"@smg05_shop_name"},
	{"key":"Vec 5","Damage":65,"RPM":770,"Damage_reduc":3,"Repair_num":6240,"Min_damage":32,"Min_range":10.5,"Class":"E","Archetype":"E","Shop_name":"smg03_default","File_name":"@smg03_default_name"},
	{"key":"GU7","Damage":55,"RPM":950,"Damage_reduc":3.1,"Repair_num":5400,"Min_damage":32,"Min_range":8.5,"Class":"E","Archetype":"E","Shop_name":"smg14_shop","File_name":"@smg14_shop_name"},
	{"key":"MM28","Damage":60,"RPM":860,"Damage_reduc":3,"Repair_num":3510,"Min_damage":32,"Min_range":9.5,"Class":"E","Archetype":"E","Shop_name":"smg01_shop","File_name":"@smg01_shop_name"},
	{"key":"A3 9mm","Damage":62,"RPM":830,"Damage_reduc":3.1,"Repair_num":3510,"Min_damage":32,"Min_range":9.5,"Class":"E","Archetype":"E","Shop_name":"smg11_shop","File_name":"@smg11_shop_name"},
	{"key":"FY9","Damage":70,"RPM":720,"Damage_reduc":3.1,"Repair_num":3510,"Min_damage":38,"Min_range":11,"Class":"E","Archetype":"E","Shop_name":"smg06_shop","File_name":"@smg06_shop_name"},
	{"key":"Ch 9mm","Damage":62,"RPM":800,"Damage_reduc":3.1,"Repair_num":3510,"Min_damage":32,"Min_range":10,"Class":"E","Archetype":"E","Shop_name":"smg30_shop","File_name":"@smg30_shop_name"},
	{"key":"MX4 Storm","Damage":64,"RPM":805,"Damage_reduc":1.4,"Repair_num":5100,"Min_damage":33,"Min_range":10,"Class":"E","Archetype":"E","Shop_name":"smg26_shop","File_name":"@smg26_shop_name"},
	{"key":"AY 552","Damage":63,"RPM":750,"Damage_reduc":3.1,"Repair_num":3510,"Min_damage":38,"Min_range":9,"Class":"E","Archetype":"E","Shop_name":"smg23_shop","File_name":"@smg23_shop_name"},
	{"key":"PDW 19","Damage":60,"RPM":750,"Damage_reduc":3,"Repair_num":3510,"Min_damage":38,"Min_range":8.5,"Class":"E","Archetype":"E","Shop_name":"smg09_shop","File_name":"@smg09_shop_name"},
	{"key":"ZX84C","Damage":57,"RPM":750,"Damage_reduc":2.8,"Repair_num":2184,"Min_damage":38,"Min_range":8.3,"Class":"E","Archetype":"E","Shop_name":"smg07_shop","File_name":"@smg07_shop_name"},
	{"key":"SMG-19 Wisent","Damage":66,"RPM":725,"Damage_reduc":3,"Repair_num":24960,"Min_damage":32,"Min_range":10,"Class":"E","Archetype":"E","Shop_name":"smg18_shop","File_name":"@smg18_shop_name"},
	{"key":"R4 CQB","Damage":55,"RPM":840,"Damage_reduc":2.8,"Repair_num":1872,"Min_damage":38,"Min_range":8,"Class":"E","Archetype":"E","Shop_name":"smg13_shop","File_name":"@smg13_shop_name"},
	{"key":"GU1","Damage":60,"RPM":670,"Damage_reduc":2.9,"Repair_num":2184,"Min_damage":38,"Min_range":8.5,"Class":"E","Archetype":"E","Shop_name":"smg12_shop","File_name":"@smg12_shop_name"},
	{"key":"ZX84 SMG","Damage":50,"RPM":800,"Damage_reduc":2.8,"Repair_num":0,"Min_damage":38,"Min_range":8,"Class":"E","Archetype":"E","Shop_name":"smg04_shop","File_name":"@smg04_shop_name"},
	{"key":"F2000","Damage":68,"RPM":850,"Damage_reduc":2,"Repair_num":3510,"Min_damage":41,"Min_range":14,"Class":"R","Archetype":"R","Shop_name":"ar10_shop","File_name":"@ar10_shop_name"},
	{"key":"Exar-h","Damage":90,"RPM":620,"Damage_reduc":1,"Repair_num":6990,"Min_damage":50,"Min_range":16,"Class":"R","Archetype":"R","Shop_name":"ar11_shop","File_name":"@ar11_shop_name"},
	{"key":"CCR","Damage":77,"RPM":700,"Damage_reduc":1,"Repair_num":24960,"Min_damage":50,"Min_range":16,"Class":"R","Archetype":"R","Shop_name":"ar19_shop","File_name":"@ar19_shop_name"},
	{"key":"R249 Para","Damage":75,"RPM":700,"Damage_reduc":2,"Repair_num":6990,"Min_damage":40,"Min_range":13,"Class":"R","Archetype":"R","Shop_name":"mg07_shop","File_name":"@mg07_shop_name"},
	{"key":"LMG3","Damage":65,"RPM":800,"Damage_reduc":2.2,"Repair_num":5400,"Min_damage":40,"Min_range":13,"Class":"R","Archetype":"R","Shop_name":"mg09_shop","File_name":"@mg09_shop_name"},
	{"key":"T27","Damage":80,"RPM":640,"Damage_reduc":1,"Repair_num":6990,"Min_damage":50,"Min_range":16,"Class":"R","Archetype":"R","Shop_name":"ar16_shop","File_name":"@ar16_shop_name"},
	{"key":"AR-GAR","Damage":81,"RPM":630,"Damage_reduc":1.3,"Repair_num":30625,"Min_damage":45,"Min_range":15,"Class":"R","Archetype":"R","Shop_name":"ar23_shop","File_name":"@ar23_shop_name"},
	{"key":"ST-AR","Damage":78,"RPM":650,"Damage_reduc":2,"Repair_num":3510,"Min_damage":45,"Min_range":12,"Class":"R","Archetype":"R","Shop_name":"ar17_shop","File_name":"@ar17_shop_name"},
	{"key":"FY 47","Damage":84,"RPM":600,"Damage_reduc":1,"Repair_num":5400,"Min_damage":45,"Min_range":12.5,"Class":"R","Archetype":"R","Shop_name":"ar22_shop","File_name":"@ar22_shop_name"},
	{"key":"M95AR","Damage":62,"RPM":810,"Damage_reduc":2,"Repair_num":3900,"Min_damage":41,"Min_range":12,"Class":"R","Archetype":"R","Shop_name":"ar07_shop","File_name":"@ar07_shop_name"},
	{"key":"AC7","Damage":72,"RPM":690,"Damage_reduc":2,"Repair_num":2340,"Min_damage":41,"Min_range":14,"Class":"R","Archetype":"R","Shop_name":"ar05_shop","File_name":"@ar05_shop_name"},
	{"key":"AY 551","Damage":73,"RPM":670,"Damage_reduc":1.5,"Repair_num":6240,"Min_damage":51,"Min_range":13.5,"Class":"R","Archetype":"R","Shop_name":"ar08_shop","File_name":"@ar08_shop_name"},
	{"key":"A3-210","Damage":70,"RPM":700,"Damage_reduc":2,"Repair_num":3510,"Min_damage":45,"Min_range":13,"Class":"R","Archetype":"R","Shop_name":"ar03_shop","File_name":"@ar03_shop_name"},
	{"key":"FY 103","Damage":80,"RPM":600,"Damage_reduc":1,"Repair_num":6240,"Min_damage":45,"Min_range":14,"Class":"R","Archetype":"R","Shop_name":"ar04_default","File_name":"@ar04_default_name"},
	{"key":"LMG 240","Damage":80,"RPM":600,"Damage_reduc":2.2,"Repair_num":5400,"Min_damage":40,"Min_range":13,"Class":"R","Archetype":"R","Shop_name":"mg01_shop","File_name":"@mg01_shop_name"},
	{"key":"AC7 MG","Damage":75,"RPM":600,"Damage_reduc":2.2,"Repair_num":6240,"Min_damage":40,"Min_range":15,"Class":"R","Archetype":"R","Shop_name":"mg05_shop","File_name":"@mg05_shop_name"},
	{"key":"A3 H-BAR","Damage":75,"RPM":580,"Damage_reduc":2,"Repair_num":3510,"Min_damage":40,"Min_range":14,"Class":"R","Archetype":"R","Shop_name":"mg08_shop","File_name":"@mg08_shop_name"},
	{"key":"F1000","Damage":87,"RPM":500,"Damage_reduc":2,"Repair_num":6240,"Min_damage":41,"Min_range":14,"Class":"R","Archetype":"R","Shop_name":"ar13_shop","File_name":"@ar13_shop_name"},
	{"key":"Karkom","Damage":70,"RPM":620,"Damage_reduc":2,"Repair_num":3510,"Min_damage":45,"Min_range":12,"Class":"R","Archetype":"R","Shop_name":"ar01_shop","File_name":"@ar01_shop_name"},
	{"key":"LMG4","Damage":80,"RPM":540,"Damage_reduc":2,"Repair_num":3510,"Min_damage":40,"Min_range":13.5,"Class":"R","Archetype":"R","Shop_name":"mg02_default","File_name":"@mg02_default_name"},
	{"key":"GU3","Damage":65,"RPM":660,"Damage_reduc":2,"Repair_num":4360,"Min_damage":40,"Min_range":11,"Class":"R","Archetype":"R","Shop_name":"mg03_shop","File_name":"@mg03_shop_name"},
	{"key":"FY LMG","Damage":80,"RPM":530,"Damage_reduc":1,"Repair_num":24960,"Min_damage":40,"Min_range":14.5,"Class":"R","Archetype":"R","Shop_name":"mg04_shop","File_name":"@mg04_shop_name"},
	{"key":"ZX84K","Damage":63,"RPM":650,"Damage_reduc":2,"Repair_num":2184,"Min_damage":41,"Min_range":12,"Class":"R","Archetype":"R","Shop_name":"ar06_shop","File_name":"@ar06_shop_name"},
	{"key":"GU2","Damage":60,"RPM":670,"Damage_reduc":2,"Repair_num":1872,"Min_damage":41,"Min_range":11,"Class":"R","Archetype":"R","Shop_name":"ar09_shop","File_name":"@ar09_shop_name"},
	{"key":"ZX84 Mg","Damage":70,"RPM":570,"Damage_reduc":2.2,"Repair_num":2184,"Min_damage":40,"Min_range":12,"Class":"R","Archetype":"R","Shop_name":"mg06_shop","File_name":"@mg06_shop_name"},
	{"key":"R16A2 LMG","Damage":60,"RPM":650,"Damage_reduc":2,"Repair_num":1872,"Min_damage":45,"Min_range":11.5,"Class":"R","Archetype":"R","Shop_name":"mg21_shop","File_name":"@mg21_shop_name"},
	{"key":"R60E4","Damage":75,"RPM":500,"Damage_reduc":2.2,"Repair_num":5400,"Min_damage":40,"Min_range":13,"Class":"R","Archetype":"R","Shop_name":"mg12_shop","File_name":"@mg12_shop_name"},
	{"key":"R4A1","Damage":55,"RPM":680,"Damage_reduc":2,"Repair_num":0,"Min_damage":45,"Min_range":11,"Class":"R","Archetype":"R","Shop_name":"ar02_shop","File_name":"@ar02_shop_name"},
	{"key":"R16A4","Damage":75,"RPM":335,"Damage_reduc":2,"Repair_num":6240,"Min_damage":45,"Min_range":14,"Class":"R","Archetype":"R","Shop_name":"ar12_shop","File_name":"@ar12_shop_name"},
	{"key":"Garota","Damage":200,"RPM":400,"Damage_reduc":2,"Repair_num":3510,"Min_damage":75,"Min_range":70,"Class":"S","Archetype":"S","Shop_name":"sr01_shop","File_name":"@sr01_shop_name"},
	{"key":"BT-50","Damage":350,"RPM":215,"Damage_reduc":2,"Repair_num":6990,"Min_damage":40,"Min_range":70,"Class":"S","Archetype":"S","Shop_name":"sr04_shop","File_name":"@sr04_shop_name"},
	{"key":"Calico SNR (M917)","Damage":155,"RPM":450,"Damage_reduc":2,"Repair_num":24960,"Min_damage":75,"Min_range":70,"Class":"S","Archetype":"S","Shop_name":"sr07_shop","File_name":"@sr07_shop_name"},
	{"key":"Karkom SNR","Damage":190,"RPM":450,"Damage_reduc":2,"Repair_num":8240,"Min_damage":75,"Min_range":65,"Class":"S","Archetype":"S","Shop_name":"sr12_shop","File_name":"@sr12_shop_name"},
	{"key":"RK 14 EBR","Damage":225,"RPM":250,"Damage_reduc":2,"Repair_num":6990,"Min_damage":75,"Min_range":70,"Class":"S","Archetype":"S","Shop_name":"sr13_shop","File_name":"@sr13_shop_name"},
	{"key":"Q-88","Damage":210,"RPM":230,"Damage_reduc":2,"Repair_num":1872,"Min_damage":11,"Min_range":50,"Class":"S","Archetype":"S","Shop_name":"sr30_shop","File_name":"@sr30_shop_name"},
	{"key":"Karkom SNR Blue","Damage":180,"RPM":260,"Damage_reduc":2,"Repair_num":6240,"Min_damage":75,"Min_range":70,"Class":"S","Archetype":"S","Shop_name":"sr12_clr01_shop","File_name":"@sr12_clr01_shop_name"},
	{"key":"AY 550","Damage":170,"RPM":245,"Damage_reduc":2,"Repair_num":3900,"Min_damage":75,"Min_range":65,"Class":"S","Archetype":"S","Shop_name":"sr22_shop","File_name":"@sr22_shop_name"},
	{"key":"ZX84 SNR","Damage":180,"RPM":230,"Damage_reduc":2,"Repair_num":2184,"Min_damage":40,"Min_range":65,"Class":"S","Archetype":"S","Shop_name":"sr06_shop","File_name":"@sr06_shop_name"},
	{"key":"CCR SPR","Damage":190,"RPM":210,"Damage_reduc":2,"Repair_num":3510,"Min_damage":75,"Min_range":60,"Class":"S","Archetype":"S","Shop_name":"sr25_shop","File_name":"@sr25_shop_name"},
	{"key":"AC7 SNR","Damage":150,"RPM":260,"Damage_reduc":2,"Repair_num":2184,"Min_damage":40,"Min_range":60,"Class":"S","Archetype":"S","Shop_name":"sr05_shop","File_name":"@sr05_shop_name"},
	{"key":"R16 SPR","Damage":155,"RPM":240,"Damage_reduc":2,"Repair_num":1872,"Min_damage":75,"Min_range":65,"Class":"S","Archetype":"S","Shop_name":"sr23_shop","File_name":"@sr23_shop_name"},
	{"key":"SVK","Damage":135,"RPM":250,"Damage_reduc":2,"Repair_num":0,"Min_damage":75,"Min_range":60,"Class":"S","Archetype":"S","Shop_name":"sr02_default","File_name":"@sr02_default_name"},
	{"key":"Otto OT 3000","Damage":250,"RPM":115,"Damage_reduc":2,"Repair_num":3510,"Min_damage":75,"Min_range":70,"Class":"S","Archetype":"S","Shop_name":"sr26_shop","File_name":"@sr26_shop_name"},
	{"key":"R107","Damage":310,"RPM":90,"Damage_reduc":2,"Repair_num":3510,"Min_damage":100,"Min_range":70,"Class":"S","Archetype":"S","Shop_name":"sr15_shop","File_name":"@sr15_shop_name"},
	{"key":"RBA SR58 SPR","Damage":350,"RPM":56,"Damage_reduc":2,"Repair_num":5400,"Min_damage":75,"Min_range":70,"Class":"S","Archetype":"S","Shop_name":"sr32_shop","File_name":"@sr32_shop_name"},
	{"key":"Miller","Damage":350,"RPM":54,"Damage_reduc":2,"Repair_num":6990,"Min_damage":75,"Min_range":70,"Class":"S","Archetype":"S","Shop_name":"sr09_shop","File_name":"@sr09_shop_name"},
	{"key":"R98B","Damage":350,"RPM":44,"Damage_reduc":2,"Repair_num":30625,"Min_damage":75,"Min_range":70,"Class":"S","Archetype":"S","Shop_name":"sr16_shop","File_name":"@sr16_shop_name"},
	{"key":"M217","Damage":340,"RPM":44,"Damage_reduc":2,"Repair_num":24960,"Min_damage":40,"Min_range":70,"Class":"S","Archetype":"S","Shop_name":"sr08_shop","File_name":"@sr08_shop_name"},
	{"key":"TWM","Damage":300,"RPM":42,"Damage_reduc":2,"Repair_num":1872,"Min_damage":40,"Min_range":70,"Class":"S","Archetype":"S","Shop_name":"sr14_shop","File_name":"@sr14_shop_name"},
	{"key":"Everest","Damage":320,"RPM":39,"Damage_reduc":2,"Repair_num":6240,"Min_damage":40,"Min_range":70,"Class":"S","Archetype":"S","Shop_name":"sr03_shop","File_name":"@sr03_shop_name"},
	{"key":"BNP SNR-1","Damage":345,"RPM":38,"Damage_reduc":7,"Repair_num":6240,"Min_damage":85,"Min_range":65,"Class":"S","Archetype":"S","Shop_name":"sr17_shop","File_name":"@sr17_shop_name"},
	{"key":"STCC","Damage":60,"RPM":650,"Damage_reduc":1.2,"Repair_num":4680,"Min_damage":32,"Min_range":10,"Class":"A","Archetype":"A","Shop_name":"pt10_shop","File_name":"@pt10_shop_name"},
	{"key":"Gun Glove!","Damage":135,"RPM":270,"Damage_reduc":2,"Repair_num":5500,"Min_damage":52,"Min_range":11,"Class":"A","Archetype":"A","Shop_name":"pt66_shop","File_name":"@pt66_shop_name"},
	{"key":"S18G","Damage":50,"RPM":700,"Damage_reduc":3,"Repair_num":4680,"Min_damage":32,"Min_range":9,"Class":"A","Archetype":"A","Shop_name":"pt21_shop","File_name":"@pt21_shop_name"},
	{"key":"Shark-443","Damage":105,"RPM":290,"Damage_reduc":1.2,"Repair_num":3900,"Min_damage":32,"Min_range":11,"Class":"A","Archetype":"A","Shop_name":"pt27_shop","File_name":"@pt27_shop_name"},
	{"key":"R1911","Damage":120,"RPM":290,"Damage_reduc":3,"Repair_num":20000,"Min_damage":50,"Min_range":8,"Class":"A","Archetype":"A","Shop_name":"pt16_shop","File_name":"@pt16_shop_name"},
	{"key":"Eagle Eye","Damage":125,"RPM":270,"Damage_reduc":3,"Repair_num":4000,"Min_damage":50,"Min_range":10,"Class":"A","Archetype":"A","Shop_name":"pt01_default","File_name":"@pt01_default_name"},
	{"key":"Eagle Eye Gold","Damage":125,"RPM":270,"Damage_reduc":3,"Repair_num":4000,"Min_damage":50,"Min_range":11,"Class":"A","Archetype":"A","Shop_name":"pt01_gold01_shop","File_name":"@pt01_gold01_shop_name"},
	{"key":"Hex Autorevolver","Damage":140,"RPM":215,"Damage_reduc":1.2,"Repair_num":2184,"Min_damage":32,"Min_range":12,"Class":"A","Archetype":"A","Shop_name":"pt26_shop","File_name":"@pt26_shop_name"},
	{"key":"P-57","Damage":100,"RPM":300,"Damage_reduc":1.2,"Repair_num":4680,"Min_damage":32,"Min_range":12,"Class":"A","Archetype":"A","Shop_name":"pt22_shop","File_name":"@pt22_shop_name"},
	{"key":"Python","Damage":130,"RPM":230,"Damage_reduc":2,"Repair_num":4680,"Min_damage":32,"Min_range":10,"Class":"A","Archetype":"A","Shop_name":"pt02_shop","File_name":"@pt02_shop_name"},
	{"key":"ZX84 USP","Damage":75,"RPM":335,"Damage_reduc":1,"Repair_num":5000,"Min_damage":32,"Min_range":10,"Class":"A","Archetype":"A","Shop_name":"pt03_shop","File_name":"@pt03_shop_name"},
	{"key":"M900","Damage":65,"RPM":370,"Damage_reduc":1.2,"Repair_num":4680,"Min_damage":32,"Min_range":11,"Class":"A","Archetype":"A","Shop_name":"pt04_shop","File_name":"@pt04_shop_name"},
	{"key":"M9A1","Damage":70,"RPM":330,"Damage_reduc":1,"Repair_num":980,"Min_damage":42,"Min_range":9,"Class":"A","Archetype":"A","Shop_name":"pt06_shop","File_name":"@pt06_shop_name"},
	{"key":"Aquatic Assassin","Damage":140,"RPM":150,"Damage_reduc":1.2,"Repair_num":3900,"Min_damage":40,"Min_range":16,"Class":"A","Archetype":"A","Shop_name":"pt29_fld01_shop","File_name":"@pt29_fld01_shop_name"},
	{"key":"Abada 266mm","Damage":135,"RPM":170,"Damage_reduc":3,"Repair_num":4000,"Min_damage":30,"Min_range":16,"Class":"A","Archetype":"A","Shop_name":"pt25_shop","File_name":"@pt25_shop_name"},
	{"key":"GU5","Damage":65,"RPM":330,"Damage_reduc":1.2,"Repair_num":930,"Min_damage":32,"Min_range":9.5,"Class":"A","Archetype":"A","Shop_name":"pt08_shop","File_name":"@pt08_shop_name"},
	{"key":"MD9","Damage":70,"RPM":300,"Damage_reduc":1.2,"Repair_num":10500,"Min_damage":32,"Min_range":9.8,"Class":"A","Archetype":"A","Shop_name":"pt07_shop","File_name":"@pt19_shop_name"},
	{"key":"Q-92","Damage":65,"RPM":290,"Damage_reduc":1.2,"Repair_num":5200,"Min_damage":32,"Min_range":12,"Class":"A","Archetype":"A","Shop_name":"pt23_shop","File_name":"@pt23_shop_name"},
	{"key":"High Power Pistol","Damage":60,"RPM":410,"Damage_reduc":1.2,"Repair_num":0,"Min_damage":32,"Min_range":12,"Class":"A","Archetype":"A","Shop_name":"pt05_shop","File_name":"@pt05_shop_name"},
	{"key":"M93R","Damage":50,"RPM":350,"Damage_reduc":1.2,"Repair_num":2184,"Min_damage":32,"Min_range":8,"Class":"A","Archetype":"A","Shop_name":"pt15_shop","File_name":"@pt15_shop_name"},
	{"key":"R4A1 Anniversary","Damage":65,"RPM":735,"Damage_reduc":2,"Repair_num":2200,"Min_damage":45,"Min_range":11,"Class":"R","Archetype":"R","Shop_name":"ar02_eua01_shop","File_name":"@ar02_eua01_shop_name"},
	{"key":"MD9 Anniversary","Damage":76,"RPM":335,"Damage_reduc":1,"Repair_num":1248,"Min_damage":32,"Min_range":11,"Class":"A","Archetype":"A","Shop_name":"pt07_eua01_shop","File_name":"@pt07_eua01_shop_name"},
	{"key":"TWM Anniversary","Damage":350,"RPM":56,"Damage_reduc":2,"Repair_num":1872,"Min_damage":40,"Min_range":70,"Class":"S","Archetype":"S","Shop_name":"sr14_eua01_shop","File_name":"@sr14_eua01_shop_name"},
	{"key":"ZX84 UMP Anniversary","Damage":89,"RPM":755,"Damage_reduc":3.8,"Repair_num":5400,"Min_damage":38,"Min_range":8,"Class":"E","Archetype":"E","Shop_name":"smg17_eua01_shop","File_name":"@smg17_eua01_shop_name"},
	{"key":"R16 SPR US set","Damage":155,"RPM":240,"Damage_reduc":2,"Repair_num":12950,"Min_damage":75,"Min_range":65,"Class":"S","Archetype":"S","Shop_name":"sr23_camo07_shop","File_name":"@sr23_camo07_shop_name"},
	{"key":"MD9 US set","Damage":80,"RPM":285,"Damage_reduc":1.2,"Repair_num":20000,"Min_damage":32,"Min_range":12,"Class":"A","Archetype":"A","Shop_name":"pt07_camo07_shop","File_name":"@pt07_camo07_shop_name"},
	{"key":"R4A1 US set","Damage":67,"RPM":680,"Damage_reduc":2,"Repair_num":2200,"Min_damage":45,"Min_range":14,"Class":"R","Archetype":"R","Shop_name":"ar02_camo07_shop","File_name":"@ar02_camo07_shop_name"},
	{"key":"R4 CQB US set","Damage":55,"RPM":840,"Damage_reduc":2.8,"Repair_num":4360,"Min_damage":32,"Min_range":8,"Class":"E","Archetype":"E","Shop_name":"smg13_camo07_shop","File_name":"@smg13_camo07_shop_name"},
	{"key":"Eagle Eye Brazil","Damage":125,"RPM":270,"Damage_reduc":3,"Repair_num":5500,"Min_damage":50,"Min_range":10,"Class":"A","Archetype":"A","Shop_name":"pt01_bra01_shop","File_name":"@pt01_bra01_shop_name"},
	{"key":"TWM Brazil","Damage":320,"RPM":49,"Damage_reduc":2,"Repair_num":12950,"Min_damage":40,"Min_range":70,"Class":"S","Archetype":"S","Shop_name":"sr14_bra01_shop","File_name":"@sr14_bra01_shop_name"},
	{"key":"Karkom Brazil","Damage":70,"RPM":620,"Damage_reduc":2,"Repair_num":3510,"Min_damage":45,"Min_range":12,"Class":"R","Archetype":"R","Shop_name":"ar01_bra01_shop","File_name":"@ar01_bra01_shop_name"},
	{"key":"GU1 Brazil","Damage":60,"RPM":670,"Damage_reduc":2.6,"Repair_num":2184,"Min_damage":32,"Min_range":12,"Class":"E","Archetype":"E","Shop_name":"smg12_bra01_shop","File_name":"@smg12_bra01_shop_name"},
	{"key":"Vec 5 Crown","Damage":65,"RPM":820,"Damage_reduc":3,"Repair_num":6240,"Min_damage":32,"Min_range":11,"Class":"E","Archetype":"E","Shop_name":"smg03_crown02_shop","File_name":"@smg03_crown02_shop_name"},
	{"key":"GU1 Crown","Damage":76,"RPM":670,"Damage_reduc":2.6,"Repair_num":2184,"Min_damage":32,"Min_range":12,"Class":"E","Archetype":"E","Shop_name":"smg12_crown_shop","File_name":"@smg12_crown_shop_name"},
	{"key":"Exar-h Crown","Damage":90,"RPM":620,"Damage_reduc":1,"Repair_num":5400,"Min_damage":50,"Min_range":16,"Class":"R","Archetype":"R","Shop_name":"ar11_crown02_shop","File_name":"@ar11_crown02_shop_name"},
	{"key":"CCR Crown","Damage":80,"RPM":720,"Damage_reduc":2,"Repair_num":5400,"Min_damage":50,"Min_range":16,"Class":"R","Archetype":"R","Shop_name":"ar20_crown02_shop","File_name":"@ar20_crown02_shop_name"},
	{"key":"LMG 240 Crown","Damage":85,"RPM":600,"Damage_reduc":2.2,"Repair_num":6240,"Min_damage":40,"Min_range":16,"Class":"R","Archetype":"R","Shop_name":"mg01_crown02_shop","File_name":"@mg01_crown02_shop_name"},
	{"key":"T27 Crown","Damage":83,"RPM":660,"Damage_reduc":1,"Repair_num":5400,"Min_damage":50,"Min_range":16,"Class":"R","Archetype":"R","Shop_name":"ar16_crown02_shop","File_name":"@ar16_crown02_shop_name"},
	{"key":"BT-50 Crown","Damage":350,"RPM":215,"Damage_reduc":2,"Repair_num":5400,"Min_damage":40,"Min_range":70,"Class":"S","Archetype":"S","Shop_name":"sr04_crown02_shop","File_name":"@sr04_crown02_shop_name"},
	{"key":"RK14 EBR Crown","Damage":245,"RPM":250,"Damage_reduc":2,"Repair_num":5400,"Min_damage":75,"Min_range":70,"Class":"S","Archetype":"S","Shop_name":"sr13_crown02_shop","File_name":"@sr13_crown02_shop_name"},
	{"key":"MD9 Crown","Damage":70,"RPM":320,"Damage_reduc":1.2,"Repair_num":1248,"Min_damage":32,"Min_range":9.8,"Class":"A","Archetype":"A","Shop_name":"pt07_crown02_shop","File_name":"@pt07_crown02_shop_name"},
	{"key":"Eagle Eye Elite Crown","Damage":130,"RPM":270,"Damage_reduc":3,"Repair_num":5500,"Min_damage":32,"Min_range":12,"Class":"A","Archetype":"A","Shop_name":"pt01_crown02_shop","File_name":"@pt01_crown02_shop_name"},
	{"key":"S18G Crown","Damage":50,"RPM":720,"Damage_reduc":3,"Repair_num":5400,"Min_damage":32,"Min_range":10,"Class":"A","Archetype":"A","Shop_name":"pt21_crown02_shop","File_name":"@pt21_crown02_shop_name"},
	{"key":"Karkom SMG Crown","Damage":80,"RPM":840,"Damage_reduc":3,"Repair_num":5400,"Min_damage":38,"Min_range":13,"Class":"E","Archetype":"E","Shop_name":"smg10_crown_shop","File_name":"@smg10_crown_shop_name"},
	{"key":"ZX84 UMP Elite Crown","Damage":85,"RPM":700,"Damage_reduc":3.5,"Repair_num":5400,"Min_damage":38,"Min_range":12,"Class":"E","Archetype":"E","Shop_name":"smg17_crown02_shop","File_name":"@smg17_crown02_shop_name"},
	{"key":"Everest Neon Punk","Damage":320,"RPM":39,"Damage_reduc":2,"Repair_num":6240,"Min_damage":40,"Min_range":70,"Class":"S","Archetype":"S","Shop_name":"sr03_steam01_shop","File_name":"@sr03_steam01_shop_name"},
	{"key":"Karkom Neon Punk","Damage":70,"RPM":620,"Damage_reduc":2,"Repair_num":3510,"Min_damage":45,"Min_range":12,"Class":"R","Archetype":"R","Shop_name":"ar01_steam01_shop","File_name":"@ar01_steam01_shop_name"},
	{"key":"A3 9mm Neon Punk","Damage":62,"RPM":830,"Damage_reduc":3.1,"Repair_num":3510,"Min_damage":32,"Min_range":9.5,"Class":"E","Archetype":"E","Shop_name":"smg11_steam01_shop","File_name":"@smg11_steam01_shop_name"},
	{"key":"STCC Halloween","Damage":60,"RPM":650,"Damage_reduc":1.2,"Repair_num":20000,"Min_damage":32,"Min_range":10,"Class":"A","Archetype":"A","Shop_name":"pt10_hlw01_shop","File_name":"@pt10_hlw01_shop_name"},
	{"key":"ZX84 SNR Halloween","Damage":200,"RPM":230,"Damage_reduc":2,"Repair_num":4360,"Min_damage":40,"Min_range":65,"Class":"S","Archetype":"S","Shop_name":"sr06_hlw01_shop","File_name":"@sr06_hlw01_shop_name"},
	{"key":"ZX84K Halloween","Damage":67,"RPM":650,"Damage_reduc":2,"Repair_num":24960,"Min_damage":41,"Min_range":12,"Class":"R","Archetype":"R","Shop_name":"ar06_hlw01_shop","File_name":"@ar06_hlw01_shop_name"},
	{"key":"ZX84C Halloween","Damage":63,"RPM":750,"Damage_reduc":2.8,"Repair_num":4360,"Min_damage":38,"Min_range":8.3,"Class":"E","Archetype":"E","Shop_name":"smg07_hlw01_shop","File_name":"@smg07_hlw01_shop_name"},
	{"key":"Gu1 Christmas","Damage":55,"RPM":670,"Damage_reduc":2.6,"Repair_num":4360,"Min_damage":38,"Min_range":8,"Class":"E","Archetype":"E","Shop_name":"smg12_xmas_shop","File_name":"@smg12_xmas_shop_name"},
	{"key":"Vec 5 Christmas","Damage":65,"RPM":820,"Damage_reduc":2.6,"Repair_num":24960,"Min_damage":32,"Min_range":12,"Class":"E","Archetype":"E","Shop_name":"smg03_xmas_shop","File_name":"@smg03_xmas_shop_name"},
	{"key":"MD9 Christmas","Damage":75,"RPM":300,"Damage_reduc":1.2,"Repair_num":4800,"Min_damage":32,"Min_range":12,"Class":"A","Archetype":"A","Shop_name":"pt07_xmas_shop","File_name":"@pt07_xmas_shop_name"},
	{"key":"Eagle Eye Christmas","Damage":120,"RPM":270,"Damage_reduc":1.2,"Repair_num":5500,"Min_damage":32,"Min_range":10,"Class":"A","Archetype":"A","Shop_name":"pt01_xmas_shop","File_name":"@pt01_xmas_shop_name"},
	{"key":"Everest Christmas","Damage":320,"RPM":39,"Damage_reduc":2,"Repair_num":12950,"Min_damage":40,"Min_range":70,"Class":"S","Archetype":"S","Shop_name":"sr03_xmas_shop","File_name":"@sr03_xmas_shop_name"},
	{"key":"BT50 Christmas","Damage":300,"RPM":215,"Damage_reduc":2,"Repair_num":30625,"Min_damage":40,"Min_range":70,"Class":"S","Archetype":"S","Shop_name":"sr04_xmas_shop","File_name":"@sr04_xmas_shop_name"},
	{"key":"LMG 240 Christmas","Damage":70,"RPM":600,"Damage_reduc":2.2,"Repair_num":30625,"Min_damage":40,"Min_range":8,"Class":"R","Archetype":"R","Shop_name":"mg01_xmas_shop","File_name":"@mg01_xmas_shop_name"},
	{"key":"CCR Christmas","Damage":63,"RPM":700,"Damage_reduc":2,"Repair_num":30625,"Min_damage":42,"Min_range":11,"Class":"R","Archetype":"R","Shop_name":"ar20_xmas_shop","File_name":"@ar20_xmas_shop_name"},
	{"key":"A3 9mm Winter","Damage":65,"RPM":830,"Damage_reduc":2.4,"Repair_num":24960,"Min_damage":32,"Min_range":10.5,"Class":"E","Archetype":"E","Shop_name":"smg11_camo02_shop","File_name":"@smg11_camo02_shop_name"},
	{"key":"TWM Winter","Damage":320,"RPM":50,"Damage_reduc":2,"Repair_num":3900,"Min_damage":40,"Min_range":70,"Class":"S","Archetype":"S","Shop_name":"sr14_camo02_shop","File_name":"@sr14_camo02_shop_name"},
	{"key":"M217 Winter","Damage":350,"RPM":44,"Damage_reduc":2,"Repair_num":24960,"Min_damage":40,"Min_range":70,"Class":"S","Archetype":"S","Shop_name":"sr08_camo02_shop","File_name":"@sr08_camo02_shop_name"},
	{"key":"A3 H-BAR Winter","Damage":80,"RPM":600,"Damage_reduc":2,"Repair_num":3900,"Min_damage":40,"Min_range":15,"Class":"R","Archetype":"R","Shop_name":"mg08_camo02_shop","File_name":"@mg08_camo02_shop_name"},
	{"key":"M9A1 Winter","Damage":85,"RPM":345,"Damage_reduc":1,"Repair_num":780,"Min_damage":42,"Min_range":9,"Class":"A","Archetype":"A","Shop_name":"pt06_camo02_shop","File_name":"@pt06_camo02_shop_name"},
	{"key":"ZX84 USP Winter","Damage":95,"RPM":325,"Damage_reduc":1,"Repair_num":5000,"Min_damage":42,"Min_range":11.5,"Class":"A","Archetype":"A","Shop_name":"pt03_camo02_shop","File_name":"@pt03_camo02_shop_name"},
	{"key":"AC7 SNR Winter","Damage":210,"RPM":270,"Damage_reduc":2,"Repair_num":2184,"Min_damage":40,"Min_range":60,"Class":"S","Archetype":"S","Shop_name":"sr05_camo02_shop","File_name":"@sr05_camo02_shop_name"},
	{"key":"PDW 19 Winter","Damage":60,"RPM":900,"Damage_reduc":2.5,"Repair_num":6990,"Min_damage":38,"Min_range":7.5,"Class":"E","Archetype":"E","Shop_name":"smg09_camo02_shop","File_name":"@smg09_camo02_shop_name"},
	{"key":"R4A1 Winter","Damage":75,"RPM":680,"Damage_reduc":2,"Repair_num":6990,"Min_damage":45,"Min_range":15.5,"Class":"R","Archetype":"R","Shop_name":"ar02_camo02_shop","File_name":"@ar02_camo02_shop_name"},
	{"key":"ZX84 SMG Winter","Damage":66,"RPM":800,"Damage_reduc":2.8,"Repair_num":6240,"Min_damage":40,"Min_range":11.5,"Class":"E","Archetype":"E","Shop_name":"smg04_camo02_shop","File_name":"@smg04_camo02_shop_name"},
	{"key":"M9551 Winter","Damage":70,"RPM":800,"Damage_reduc":2,"Repair_num":24960,"Min_damage":41,"Min_range":13,"Class":"R","Archetype":"R","Shop_name":"ar07_camo02_shop","File_name":"@ar07_camo02_shop_name"},
	{"key":"SVK Jungle","Damage":190,"RPM":250,"Damage_reduc":2,"Repair_num":3510,"Min_damage":75,"Min_range":60,"Class":"S","Archetype":"S","Shop_name":"sr02_camo03_shop","File_name":"@sr02_camo03_shop_name"},
	{"key":"ZX84K Jungle","Damage":73,"RPM":650,"Damage_reduc":2,"Repair_num":24960,"Min_damage":41,"Min_range":12,"Class":"R","Archetype":"R","Shop_name":"ar06_camo03_shop","File_name":"@ar06_camo03_shop_name"},
	{"key":"MM28 Jungle","Damage":61,"RPM":800,"Damage_reduc":3,"Repair_num":24960,"Min_damage":32,"Min_range":9,"Class":"E","Archetype":"E","Shop_name":"smg01_camo03_shop","File_name":"@smg01_camo03_shop_name"},
	{"key":"FY LMG Specops MK01","Damage":90,"RPM":530,"Damage_reduc":1,"Repair_num":0,"Min_damage":40,"Min_range":14.5,"Class":"R","Archetype":"R","Shop_name":"mg04_zsd01_shop","File_name":"@mg04_zsd01_shop_name"},
	{"key":"LMG3 Specops MK01","Damage":64,"RPM":1000,"Damage_reduc":2.2,"Repair_num":0,"Min_damage":40,"Min_range":14,"Class":"R","Archetype":"R","Shop_name":"mg09_zsd01_shop","File_name":"@mg09_zsd01_shop_name"},
	{"key":"RK14 MK60","Damage":225,"RPM":155,"Damage_reduc":2,"Repair_num":5400,"Min_damage":75,"Min_range":70,"Class":"S","Archetype":"S","Shop_name":"sr13_zsd01_shop","File_name":"@sr13_zsd01_shop_name"},
	{"key":"CH 9mm MK60","Damage":62,"RPM":800,"Damage_reduc":2.6,"Repair_num":3510,"Min_damage":32,"Min_range":11,"Class":"E","Archetype":"E","Shop_name":"smg30_zsd01_shop","File_name":"@smg30_zsd01_shop_name"},
	{"key":"R60E4 MK60","Damage":80,"RPM":500,"Damage_reduc":2.2,"Repair_num":9600,"Min_damage":40,"Min_range":13,"Class":"R","Archetype":"R","Shop_name":"mg12_zsd01_shop","File_name":"@mg12_zsd01_shop_name"},
	{"key":"R107 Gamescom","Damage":280,"RPM":130,"Damage_reduc":2,"Repair_num":3510,"Min_damage":100,"Min_range":70,"Class":"S","Archetype":"S","Shop_name":"sr15_gc01_shop","File_name":"@sr15_gc01_shop_name"},
	{"key":"Exar-H Gamescom","Damage":80,"RPM":600,"Damage_reduc":1,"Repair_num":5400,"Min_damage":45,"Min_range":14,"Class":"R","Archetype":"R","Shop_name":"ar11_gc01_shop","File_name":"@ar11_gc01_shop_name"},
	{"key":"AC7 SMG Gamescom","Damage":70,"RPM":750,"Damage_reduc":3.1,"Repair_num":5400,"Min_damage":30,"Min_range":10,"Class":"E","Archetype":"E","Shop_name":"smg08_gc01_shop","File_name":"@smg08_gc01_shop_name"},
	{"key":"S18G Platinum","Damage":50,"RPM":800,"Damage_reduc":1,"Repair_num":20000,"Min_damage":32,"Min_range":10,"Class":"A","Archetype":"A","Shop_name":"pt21_camo01_shop","File_name":"@pt21_camo01_shop_name"},
	{"key":"R4 CQB Platinum","Damage":55,"RPM":840,"Damage_reduc":2.8,"Repair_num":4360,"Min_damage":32,"Min_range":8,"Class":"E","Archetype":"E","Shop_name":"smg13_camo01_shop","File_name":"@smg13_camo01_shop_name"},
	{"key":"SVK Shiny","Damage":170,"RPM":250,"Damage_reduc":2,"Repair_num":24960,"Min_damage":75,"Min_range":70,"Class":"S","Archetype":"S","Shop_name":"sr02_camo05_shop","File_name":"@sr02_camo05_shop_name"},
	{"key":"FY-9 Shiny","Damage":79,"RPM":720,"Damage_reduc":3.1,"Repair_num":24960,"Min_damage":39,"Min_range":12,"Class":"E","Archetype":"E","Shop_name":"smg06_camo05_shop","File_name":"@smg06_camo05_shop_name"},
	{"key":"FY-103 Shiny","Damage":85,"RPM":610,"Damage_reduc":1,"Repair_num":24960,"Min_damage":45,"Min_range":14,"Class":"R","Archetype":"R","Shop_name":"ar04_camo05_shop","File_name":"@ar04_camo05_shop_name"},
	{"key":"STCC Shiny","Damage":65,"RPM":650,"Damage_reduc":1.2,"Repair_num":20000,"Min_damage":32,"Min_range":10,"Class":"A","Archetype":"A","Shop_name":"pt10_camo05_shop","File_name":"@pt10_camo05_shop_name"},
	{"key":"FY LMG Basic","Damage":65,"RPM":530,"Damage_reduc":2,"Repair_num":12950,"Min_damage":45,"Min_range":11,"Class":"R","Archetype":"R","Shop_name":"mg04_set01_shop","File_name":"@mg04_set01_shop_name"},
	{"key":"R4A1 Basic","Damage":72,"RPM":680,"Damage_reduc":2,"Repair_num":24960,"Min_damage":41,"Min_range":14,"Class":"R","Archetype":"R","Shop_name":"ar02_set01_shop","File_name":"@ar02_set01_shop_name"},
	{"key":"Vec 5 Basic","Damage":58,"RPM":770,"Damage_reduc":3.1,"Repair_num":24960,"Min_damage":25,"Min_range":8.5,"Class":"E","Archetype":"E","Shop_name":"smg03_set01_shop","File_name":"@smg03_set01_shop_name"},
	{"key":"FY-9 Basic","Damage":70,"RPM":720,"Damage_reduc":3.1,"Repair_num":12950,"Min_damage":39,"Min_range":10,"Class":"E","Archetype":"E","Shop_name":"smg06_set01_shop","File_name":"@smg06_set01_shop_name"},
	{"key":"Garota Basic","Damage":200,"RPM":400,"Damage_reduc":2,"Repair_num":24960,"Min_damage":75,"Min_range":50,"Class":"S","Archetype":"S","Shop_name":"sr01_set01_shop","File_name":"@sr01_set01_shop_name"},
	{"key":"TWM Basic","Damage":280,"RPM":44,"Damage_reduc":2,"Repair_num":12950,"Min_damage":40,"Min_range":60,"Class":"S","Archetype":"S","Shop_name":"sr14_set01_shop","File_name":"@sr14_set01_shop_name"},
	{"key":"FY-103 Basic","Damage":67,"RPM":600,"Damage_reduc":2,"Repair_num":12950,"Min_damage":45,"Min_range":10.5,"Class":"R","Archetype":"R","Shop_name":"ar04_set01_shop","File_name":"@ar04_set01_shop_name"},
	{"key":"A3 HBAR Special","Damage":72,"RPM":620,"Damage_reduc":2.2,"Repair_num":6240,"Min_damage":40,"Min_range":13,"Class":"R","Archetype":"R","Shop_name":"mg08_zsd01_shop","File_name":"@mg08_zsd01_shop_name"},
	{"key":"ZX84 MG Special","Damage":63,"RPM":625,"Damage_reduc":2.2,"Repair_num":2184,"Min_damage":40,"Min_range":12,"Class":"R","Archetype":"R","Shop_name":"mg06_zsd01_shop","File_name":"@mg06_zsd01_shop_name"},
	{"key":"Garota Special","Damage":200,"RPM":440,"Damage_reduc":2,"Repair_num":6240,"Min_damage":75,"Min_range":70,"Class":"S","Archetype":"S","Shop_name":"sr01_zsd01_shop","File_name":"@sr01_zsd01_shop_name"},
	{"key":"T27 Desert Camo","Damage":74,"RPM":620,"Damage_reduc":2,"Repair_num":30625,"Min_damage":45,"Min_range":13,"Class":"R","Archetype":"R","Shop_name":"ar16_camo06_shop","File_name":"@ar16_camo06_shop_name"},
	{"key":"Q-92 Desert Camo","Damage":65,"RPM":290,"Damage_reduc":1.2,"Repair_num":5200,"Min_damage":32,"Min_range":12,"Class":"A","Archetype":"A","Shop_name":"pt23_camo06_shop","File_name":"@pt23_camo06_shop_name"},
	{"key":"Ch 9mm Desert Camo","Damage":62,"RPM":800,"Damage_reduc":3.1,"Repair_num":30625,"Min_damage":32,"Min_range":10,"Class":"E","Archetype":"E","Shop_name":"smg30_camo06_shop","File_name":"@smg30_camo06_shop_name"},
	{"key":"Q-88 Desert Camo","Damage":200,"RPM":180,"Damage_reduc":2,"Repair_num":24960,"Min_damage":11,"Min_range":70,"Class":"S","Archetype":"S","Shop_name":"sr30_camo06_shop","File_name":"@sr30_camo06_shop_name"},
	{"key":"FY-103 City","Damage":76,"RPM":600,"Damage_reduc":1,"Repair_num":24960,"Min_damage":45,"Min_range":13,"Class":"R","Archetype":"R","Shop_name":"ar04_camo04_shop","File_name":"@ar04_camo04_shop_name"},
	{"key":"Vec 5 City","Damage":58,"RPM":780,"Damage_reduc":3.1,"Repair_num":24960,"Min_damage":28,"Min_range":9.5,"Class":"E","Archetype":"E","Shop_name":"smg03_camo04_shop","File_name":"@smg03_camo04_shop_name"},
	{"key":"AY 550 City","Damage":175,"RPM":245,"Damage_reduc":2,"Repair_num":24960,"Min_damage":75,"Min_range":68,"Class":"S","Archetype":"S","Shop_name":"sr22_camo04_shop","File_name":"@sr22_camo04_shop_name"},
	{"key":"BT50 NY","Damage":350,"RPM":215,"Damage_reduc":2,"Repair_num":5400,"Min_damage":40,"Min_range":70,"Class":"S","Archetype":"S","Shop_name":"sr04_cny01_shop","File_name":"@sr04_cny01_shop_name"},
	{"key":"GU1 NY","Damage":60,"RPM":670,"Damage_reduc":2.4,"Repair_num":2184,"Min_damage":38,"Min_range":9.5,"Class":"E","Archetype":"E","Shop_name":"smg12_cny01_shop","File_name":"@smg12_cny01_shop_name"},
	{"key":"Eagle Eye NY","Damage":125,"RPM":270,"Damage_reduc":3,"Repair_num":5500,"Min_damage":50,"Min_range":10,"Class":"A","Archetype":"A","Shop_name":"pt01_cny01_shop","File_name":"@pt01_cny01_shop_name"},
	{"key":"CCR NY","Damage":77,"RPM":700,"Damage_reduc":1,"Repair_num":5400,"Min_damage":50,"Min_range":16,"Class":"R","Archetype":"R","Shop_name":"ar20_cny01_shop","File_name":"@ar20_cny01_shop_name"},
	{"key":"GU2 Korea Anniversary","Damage":60,"RPM":670,"Damage_reduc":2,"Repair_num":1872,"Min_damage":41,"Min_range":11,"Class":"R","Archetype":"R","Shop_name":"ar09_kra01_shop","File_name":"@ar09_kra01_shop_name"},
	{"key":"GU5 Korea Anniversary","Damage":65,"RPM":330,"Damage_reduc":1.2,"Repair_num":930,"Min_damage":32,"Min_range":9.5,"Class":"A","Archetype":"A","Shop_name":"pt08_kra01_shop","File_name":"@pt08_kra01_shop_name"},
	{"key":"GU7 Korea Anniversary","Damage":55,"RPM":1000,"Damage_reduc":2.4,"Repair_num":24960,"Min_damage":32,"Min_range":10.5,"Class":"E","Archetype":"E","Shop_name":"smg14_kra01_shop","File_name":"@smg14_kra01_shop_name"},
	{"key":"TWM Korea Anniversary","Damage":320,"RPM":49,"Damage_reduc":2,"Repair_num":24960,"Min_damage":40,"Min_range":70,"Class":"S","Archetype":"S","Shop_name":"sr14_kra01_shop","File_name":"@sr14_kra01_shop_name"},
	{"key":"Hex AutoRevolver Black Dragon","Damage":140,"RPM":250,"Damage_reduc":1.2,"Repair_num":5500,"Min_damage":32,"Min_range":12,"Class":"A","Archetype":"A","Shop_name":"pt26_set02_shop","File_name":"@pt26_set02_shop_name"},
	{"key":"R4 CQB Black Dragon","Damage":75,"RPM":900,"Damage_reduc":2,"Repair_num":1872,"Min_damage":38,"Min_range":10,"Class":"E","Archetype":"E","Shop_name":"smg13_set02_shop","File_name":"@smg13_set02_shop_name"},
	{"key":"F2000 Black Dragon","Damage":70,"RPM":850,"Damage_reduc":2,"Repair_num":3510,"Min_damage":41,"Min_range":14,"Class":"R","Archetype":"R","Shop_name":"ar10_set02_shop","File_name":"@ar10_set02_shop_name"},
	{"key":"M217 Black Dragon","Damage":340,"RPM":44,"Damage_reduc":2,"Repair_num":6240,"Min_damage":40,"Min_range":70,"Class":"S","Archetype":"S","Shop_name":"sr08_set02_shop","File_name":"@sr08_set02_shop_name"},
	{"key":"Hex AutoRevolver Scarlet Dragon","Damage":130,"RPM":230,"Damage_reduc":1.2,"Repair_num":5500,"Min_damage":32,"Min_range":12,"Class":"A","Archetype":"A","Shop_name":"pt26_set04_shop","File_name":"@pt26_set04_shop_name"},
	{"key":"R4 CQB Scarlet Dragon","Damage":65,"RPM":850,"Damage_reduc":2,"Repair_num":1872,"Min_damage":38,"Min_range":9,"Class":"E","Archetype":"E","Shop_name":"smg13_set04_shop","File_name":"@smg13_set04_shop_name"},
	{"key":"F2000 Scarlet Dragon","Damage":65,"RPM":830,"Damage_reduc":2,"Repair_num":3510,"Min_damage":41,"Min_range":12,"Class":"R","Archetype":"R","Shop_name":"ar10_set04_shop","File_name":"@ar10_set04_shop_name"},
	{"key":"M217 Scarlet Dragon","Damage":340,"RPM":44,"Damage_reduc":2,"Repair_num":6240,"Min_damage":40,"Min_range":70,"Class":"S","Archetype":"S","Shop_name":"sr08_set04_shop","File_name":"@sr08_set04_shop_name"},
	{"key":"Hex AutoRevolver Jade Dragon","Damage":120,"RPM":215,"Damage_reduc":1.2,"Repair_num":5500,"Min_damage":32,"Min_range":12,"Class":"A","Archetype":"A","Shop_name":"pt26_set03_shop","File_name":"@pt26_set03_shop_name"},
	{"key":"R4 CQB Jade Dragon","Damage":55,"RPM":800,"Damage_reduc":2,"Repair_num":1872,"Min_damage":38,"Min_range":8,"Class":"E","Archetype":"E","Shop_name":"smg13_set03_shop","File_name":"@smg13_set03_shop_name"},
	{"key":"F2000 Jade Dragon","Damage":60,"RPM":800,"Damage_reduc":2,"Repair_num":3510,"Min_damage":41,"Min_range":10,"Class":"R","Archetype":"R","Shop_name":"ar10_set03_shop","File_name":"@ar10_set03_shop_name"},
	{"key":"M217 Jade Dragon","Damage":300,"RPM":43,"Damage_reduc":2,"Repair_num":6240,"Min_damage":40,"Min_range":70,"Class":"S","Archetype":"S","Shop_name":"sr08_set03_shop","File_name":"@sr08_set03_shop_name"},
	{"key":"MP717 Sneakpeak","Damage":58,"RPM":900,"Damage_reduc":2.5,"Repair_num":24960,"Min_damage":45,"Min_range":7.5,"Class":"E","Archetype":"E","Shop_name":"smg41_ww2_shop","File_name":"@smg41_ww2_shop_name"},
	{"key":"TWM X308","Damage":350,"RPM":47,"Damage_reduc":2,"Repair_num":6240,"Min_damage":75,"Min_range":80,"Class":"S","Archetype":"S","Shop_name":"sr31_shop","File_name":"@sr31_shop_name"},
	{"key":"MM1981/30 Sneakpeak","Damage":285,"RPM":50,"Damage_reduc":2,"Repair_num":12950,"Min_damage":75,"Min_range":70,"Class":"S","Archetype":"S","Shop_name":"sr41_shop","File_name":"@sr41_shop_name"},
	{"key":"HMGL32A7 Oblivion Sneakpeak","Damage":100,"RPM":60,"Damage_reduc":2,"Repair_num":0,"Min_damage":11,"Min_range":70,"Class":"special","Archetype":"special","Shop_name":"gl01_zsd01_shop","File_name":"@gl01_zsd01_shop_name"},
	{"key":"Bumblebee Sneakpeak","Damage":72,"RPM":560,"Damage_reduc":2.2,"Repair_num":3900,"Min_damage":40,"Min_range":13,"Class":"R","Archetype":"R","Shop_name":"mg10_shop","File_name":"@mg10_shop_name"},
	{"key":"AY Gel. CP334","Damage":110,"RPM":320,"Damage_reduc":1.2,"Repair_num":4680,"Min_damage":32,"Min_range":12,"Class":"A","Archetype":"A","Shop_name":"pt14_shop","File_name":"@pt14_shop_name"},
	{"key":"M1895 Sneakpeak","Damage":117,"RPM":190,"Damage_reduc":3,"Repair_num":5400,"Min_damage":45,"Min_range":11,"Class":"A","Archetype":"A","Shop_name":"pt24_shop","File_name":"@pt24_shop_name"},
	{"key":"Bellum Sneakpeak","Damage":95,"RPM":280,"Damage_reduc":1.5,"Repair_num":20000,"Min_damage":65,"Min_range":11,"Class":"A","Archetype":"A","Shop_name":"pt41_ww2_shop","File_name":"@pt41_ww2_shop_name"},
	{"key":"FCG-R3 K1 Sneakpeak","Damage":800,"RPM":40,"Damage_reduc":0.08,"Repair_num":9600,"Min_damage":800,"Min_range":500,"Class":"special","Archetype":"special","Shop_name":"rg01_shop","File_name":"@rg01_shop_name"},
	{"key":"FCG-R3 Sneakpeak","Damage":800,"RPM":40,"Damage_reduc":0.08,"Repair_num":0,"Min_damage":800,"Min_range":500,"Class":"special","Archetype":"special","Shop_name":"rg01_zsd01_shop","File_name":"@rg01_zsd01_shop_name"},
	{"key":"R32A1 Sneakpeak","Damage":100,"RPM":60,"Damage_reduc":2,"Repair_num":2496,"Min_damage":11,"Min_range":70,"Class":"special","Archetype":"special","Shop_name":"gl01_shop","File_name":"@gl01_shop_name"},
	{"key":"AR88 Sneakpeak","Damage":75,"RPM":500,"Damage_reduc":1.2,"Repair_num":24960,"Min_damage":45,"Min_range":13,"Class":"R","Archetype":"R","Shop_name":"ar41_shop","File_name":"@ar41_shop_name"},
	{"key":"Richmond 770","Damage":600,"Min_damage":240,"Damage_reduc":80,"Min_range":4.5,"RPM":80,"Repair_num":0,"Pellets":10,"Class":"M","Shop_name":"shg01_shop","File_name":"@shg01_shop_name"},
	{"key":"Richmond 770 U.S. set","Damage":600,"Min_damage":240,"Damage_reduc":80,"Min_range":4.5,"RPM":80,"Repair_num":12950,"Pellets":10,"Class":"M","Shop_name":"shg01_camo07_shop","File_name":"@shg01_camo07_shop_name"},
	{"key":"Piledriver","Damage":520,"Min_damage":240,"Damage_reduc":64,"Min_range":4,"RPM":240,"Repair_num":24960,"Pellets":8,"Class":"M","Shop_name":"shg02_shop","File_name":"@shg02_shop_name"},
	{"key":"Piledriver Black Dragon","Damage":536,"Min_damage":240,"Damage_reduc":64,"Min_range":5,"RPM":250,"Repair_num":3510,"Pellets":8,"Class":"M","Shop_name":"shg02_set02_shop","File_name":"@shg02_set02_shop_name"},
	{"key":"Piledriver Jade Dragon","Damage":480,"Min_damage":240,"Damage_reduc":64,"Min_range":3,"RPM":230,"Repair_num":3510,"Pellets":8,"Class":"M","Shop_name":"shg02_set03_shop","File_name":"@shg02_set03_shop_name"},
	{"key":"Piledriver Scarlet Dragon","Damage":520,"Min_damage":240,"Damage_reduc":64,"Min_range":4,"RPM":240,"Repair_num":3510,"Pellets":8,"Class":"M","Shop_name":"shg02_set04_shop","File_name":"@shg02_set04_shop_name"},
	{"key":"Piledriver Special","Damage":520,"Min_damage":240,"Damage_reduc":64,"Min_range":4,"RPM":265,"Repair_num":3510,"Pellets":8,"Class":"M","Shop_name":"shg02_zsd01_shop","File_name":"@shg02_zsd01_shop_name"},
	{"key":"PEG","Damage":544,"Min_damage":240,"Damage_reduc":64,"Min_range":4.3,"RPM":130,"Repair_num":3510,"Pellets":8,"Class":"M","Shop_name":"shg03_shop","File_name":"@shg03_shop_name"},
	{"key":"PEG Winter Camo","Damage":635,"Min_damage":300,"Damage_reduc":80,"Min_range":5.5,"RPM":170,"Repair_num":6990,"Pellets":10,"Class":"M","Shop_name":"shg03_camo02_shop","File_name":"@shg03_camo02_shop_name"},
	{"key":"PEG Shiny metal set","Damage":552,"Min_damage":240,"Damage_reduc":64,"Min_range":4.6,"RPM":145,"Repair_num":12950,"Pellets":8,"Class":"M","Shop_name":"shg03_camo05_shop","File_name":"@shg03_camo05_shop_name"},
	{"key":"VIPER","Damage":544,"Min_damage":240,"Damage_reduc":64,"Min_range":3.2,"RPM":300,"Repair_num":6864,"Pellets":8,"Class":"M","Shop_name":"shg04_shop","File_name":"@shg04_shop_name"},
	{"key":"VIPER Basic","Damage":488,"Min_damage":176,"Damage_reduc":64,"Min_range":2.7,"RPM":240,"Repair_num":12950,"Pellets":8,"Class":"M","Shop_name":"shg04_set01_shop","File_name":"@shg04_set01_shop_name"},
	{"key":"VIPER Special","Damage":544,"Min_damage":240,"Damage_reduc":64,"Min_range":3.2,"RPM":330,"Repair_num":6864,"Pellets":8,"Class":"M","Shop_name":"shg04_zsd01_shop","File_name":"@shg04_zsd01_shop_name"},
	{"key":"US-12","Damage":650,"Min_damage":300,"Damage_reduc":80,"Min_range":5.5,"RPM":220,"Repair_num":6990,"Pellets":10,"Class":"M","Shop_name":"shg05_shop","File_name":"@shg05_shop_name"},
	{"key":"US-12 Korea Anniversary","Damage":650,"Min_damage":300,"Damage_reduc":80,"Min_range":5.5,"RPM":220,"Repair_num":24960,"Pellets":10,"Class":"M","Shop_name":"shg05_kra01_shop","File_name":"@shg05_kra01_shop_name"},
	{"key":"US-12 Special","Damage":650,"Min_damage":300,"Damage_reduc":80,"Min_range":5.5,"RPM":240,"Repair_num":5400,"Pellets":10,"Class":"M","Shop_name":"shg05_zsd01_shop","File_name":"@shg05_zsd01_shop_name"},
	{"key":"PHS-12","Damage":650,"Min_damage":240,"Damage_reduc":80,"Min_range":5.3,"RPM":59,"Repair_num":2184,"Pellets":10,"Class":"M","Shop_name":"shg06_shop","File_name":"@shg06_shop_name"},
	{"key":"PHS-12 Crown","Damage":670,"Min_damage":240,"Damage_reduc":90,"Min_range":8,"RPM":59,"Repair_num":2184,"Pellets":10,"Class":"M","Shop_name":"shg06_crown_shop","File_name":"@shg06_crown_shop_name"},
	{"key":"PHS-12 Elite Crown","Damage":672,"Min_damage":360,"Damage_reduc":120,"Min_range":6.3,"RPM":59,"Repair_num":2184,"Pellets":15,"Class":"M","Shop_name":"shg06_crown02_shop","File_name":"@shg06_crown02_shop_name"},
	{"key":"Christmas PHS-12","Damage":660,"Min_damage":300,"Damage_reduc":80,"Min_range":6.5,"RPM":60,"Repair_num":2800,"Pellets":10,"Class":"M","Shop_name":"shg06_xmas_shop","File_name":"@shg06_xmas_shop_name"},
	{"key":"PEG Bullpup","Damage":660,"Min_damage":300,"Damage_reduc":80,"Min_range":6.5,"RPM":210,"Repair_num":6990,"Pellets":10,"Class":"M","Shop_name":"shg07_shop","File_name":"@shg07_shop_name"},
	{"key":"PEG Bullpup Crown","Damage":660,"Min_damage":300,"Damage_reduc":80,"Min_range":7.5,"RPM":210,"Repair_num":5400,"Pellets":10,"Class":"M","Shop_name":"shg07_crown_shop","File_name":"@shg07_crown_shop_name"},
	{"key":"PEG Bullpup Elite Crown","Damage":660,"Min_damage":300,"Damage_reduc":80,"Min_range":6.5,"RPM":210,"Repair_num":5400,"Pellets":10,"Class":"M","Shop_name":"shg07_crown02_shop","File_name":"@shg07_crown02_shop_name"},
	{"key":"PEG Bullpup Mk.60 Mod","Damage":660,"Min_damage":300,"Damage_reduc":80,"Min_range":6.5,"RPM":195,"Repair_num":5400,"Pellets":10,"Class":"M","Shop_name":"shg07_zsd01_shop","File_name":"@shg07_zsd01_shop_name"},
	{"key":"Mooshugel 500 Custom","Damage":680,"Min_damage":240,"Damage_reduc":80,"Min_range":6,"RPM":125,"Repair_num":6990,"Pellets":10,"Class":"M","Shop_name":"shg08_shop","File_name":"@shg08_shop_name"},
	{"key":"Mooshugel 500 Custom Elite Crown","Damage":680,"Min_damage":240,"Damage_reduc":80,"Min_range":6.5,"RPM":130,"Repair_num":2496,"Pellets":10,"Class":"M","Shop_name":"shg08_crown02_shop","File_name":"@shg08_crown02_shop_name"},
	{"key":"Richmond 870 CB","Damage":640,"Min_damage":240,"Damage_reduc":80,"Min_range":5,"RPM":89,"Repair_num":12950,"Pellets":10,"Class":"M","Shop_name":"shg09_shop","File_name":"@shg09_shop_name"},
	{"key":"Richmond 870 CB Anniversary","Damage":700,"Min_damage":240,"Damage_reduc":80,"Min_range":5,"RPM":93,"Repair_num":2496,"Pellets":10,"Class":"M","Shop_name":"shg09_eua01_shop","File_name":"@shg09_eua01_shop_name"},
	{"key":"Richmond 870 CB NeoN Punk","Damage":640,"Min_damage":240,"Damage_reduc":80,"Min_range":5,"RPM":89,"Repair_num":2496,"Pellets":10,"Class":"M","Shop_name":"shg09_steam01_shop","File_name":"@shg09_steam01_shop_name"},
	{"key":"MC 255 12","Damage":650,"Min_damage":240,"Damage_reduc":80,"Min_range":3.2,"RPM":130,"Repair_num":2496,"Pellets":10,"Class":"M","Shop_name":"shg10_shop","File_name":"@shg10_shop_name"},
	{"key":"MC 255 12 Winter Camo","Damage":650,"Min_damage":240,"Damage_reduc":80,"Min_range":4.6,"RPM":180,"Repair_num":4360,"Pellets":10,"Class":"M","Shop_name":"shg10_camo02_shop","File_name":"@shg10_camo02_shop_name"},
	{"key":"Striker","Damage":540,"Min_damage":270,"Damage_reduc":72,"Min_range":4,"RPM":155,"Repair_num":6240,"Pellets":9,"Class":"M","Shop_name":"shg11_shop","File_name":"@shg11_shop_name"},
	{"key":"Striker Jungle","Damage":576,"Min_damage":270,"Damage_reduc":63,"Min_range":4.9,"RPM":155,"Repair_num":12950,"Pellets":9,"Class":"M","Shop_name":"shg11_camo03_shop","File_name":"@shg11_camo03_shop_name"},
	{"key":"NY Striker","Damage":540,"Min_damage":270,"Damage_reduc":72,"Min_range":4,"RPM":155,"Repair_num":6240,"Pellets":9,"Class":"M","Shop_name":"shg11_cny01_shop","File_name":"@shg11_cny01_shop_name"},
	{"key":"Striker Basic","Damage":585,"Min_damage":270,"Damage_reduc":72,"Min_range":5.6,"RPM":155,"Repair_num":24960,"Pellets":9,"Class":"M","Shop_name":"shg11_set01_shop","File_name":"@shg11_set01_shop_name"},
	{"key":"Christmas Striker","Damage":608,"Min_damage":80,"Damage_reduc":128,"Min_range":6,"RPM":155,"Repair_num":30625,"Pellets":16,"Class":"M","Shop_name":"shg11_xmas_shop","File_name":"@shg11_xmas_shop_name"},
	{"key":"Kite Pump","Damage":630,"Min_damage":240,"Damage_reduc":80,"Min_range":5.2,"RPM":80,"Repair_num":3510,"Pellets":10,"Class":"M","Shop_name":"shg12_shop","File_name":"@shg12_shop_name"},
	{"key":"Kite Pump City","Damage":650,"Min_damage":240,"Damage_reduc":80,"Min_range":5.2,"RPM":86,"Repair_num":4360,"Pellets":10,"Class":"M","Shop_name":"shg12_camo04_shop","File_name":"@shg12_camo04_shop_name"},
	{"key":"Kite Pump Desert Camo","Damage":630,"Min_damage":240,"Damage_reduc":80,"Min_range":5.2,"RPM":80,"Repair_num":4360,"Pellets":10,"Class":"M","Shop_name":"shg12_camo06_shop","File_name":"@shg12_camo06_shop_name"},
	{"key":"Kite Pump Navy Blue","Damage":630,"Min_damage":240,"Damage_reduc":80,"Min_range":5.2,"RPM":80,"Repair_num":4360,"Pellets":10,"Class":"M","Shop_name":"shg12_clr01_shop","File_name":"@shg12_clr01_shop_name"},
	{"key":"PEG-KT","Damage":670,"Min_damage":240,"Damage_reduc":80,"Min_range":5.8,"RPM":122,"Repair_num":3510,"Pellets":10,"Class":"M","Shop_name":"shg13_shop","File_name":"@shg13_shop_name"},
	{"key":"Richmond Nova tactical","Damage":682,"Min_damage":264,"Damage_reduc":88,"Min_range":5.6,"RPM":89,"Repair_num":3510,"Pellets":11,"Class":"M","Shop_name":"shg15_shop","File_name":"@shg15_shop_name"},
	{"key":"Richmond Nova tactical Winter Camo","Damage":660,"Min_damage":264,"Damage_reduc":88,"Min_range":6.5,"RPM":103,"Repair_num":3900,"Pellets":11,"Class":"M","Shop_name":"shg15_camo02_shop","File_name":"@shg15_camo02_shop_name"},
	{"key":"CQB combat shotgun","Damage":650,"Min_damage":240,"Damage_reduc":80,"Min_range":5.3,"RPM":59,"Repair_num":2184,"Pellets":10,"Class":"M","Shop_name":"shg20_shop","File_name":"@shg20_shop_name"},
	{"key":"FAS-12","Damage":480,"Min_damage":256,"Damage_reduc":64,"Min_range":3.2,"RPM":260,"Repair_num":5400,"Pellets":8,"Class":"M","Shop_name":"shg21_shop","File_name":"@shg21_shop_name"},
	{"key":"FAS-12 Brazilian World Cup","Damage":480,"Min_damage":256,"Damage_reduc":64,"Min_range":3.2,"RPM":260,"Repair_num":5400,"Pellets":8,"Class":"M","Shop_name":"shg21_bra01_shop","File_name":"@shg21_bra01_shop_name"},
	{"key":"FAS-12 Spec Ops Mk01","Damage":560,"Min_damage":256,"Damage_reduc":64,"Min_range":3.2,"RPM":260,"Repair_num":0,"Pellets":8,"Class":"M","Shop_name":"shg21_zsd01_shop","File_name":"@shg21_zsd01_shop_name"},
	{"key":"Richmond M4 Super 90","Damage":536,"Min_damage":192,"Damage_reduc":64,"Min_range":5.6,"RPM":170,"Repair_num":24960,"Pellets":8,"Class":"M","Shop_name":"shg22_shop","File_name":"@shg22_shop_name"},
	{"key":"Gamescom M4 Super 90","Damage":550,"Min_damage":240,"Damage_reduc":80,"Min_range":6,"RPM":170,"Repair_num":5760,"Pellets":10,"Class":"M","Shop_name":"shg22_gc01_shop","File_name":"@shg22_gc01_shop_name"},
	{"key":"RST-14","Damage":640,"Min_damage":240,"Damage_reduc":80,"Min_range":4.6,"RPM":113,"Repair_num":5400,"Pellets":10,"Class":"M","Shop_name":"shg26_shop","File_name":"@shg26_shop_name"},
	{"key":"SHG M1217","Damage":540,"Min_damage":240,"Damage_reduc":80,"Min_range":5.2,"RPM":68,"Repair_num":6240,"Pellets":10,"Class":"M","Shop_name":"shg27_shop","File_name":"@shg27_shop_name"},
	{"key":"PHS-15","Damage":690,"Min_damage":300,"Damage_reduc":135,"Min_range":5.5,"RPM":90,"Repair_num":2496,"Pellets":15,"Class":"M","Shop_name":"shg28_shop","File_name":"@shg28_shop_name"},
	{"key":"Boas Semi-Auto shotgun","Damage":522,"Min_damage":198,"Damage_reduc":54,"Min_range":6.2,"RPM":160,"Repair_num":3510,"Pellets":9,"Class":"M","Shop_name":"shg30_shop","File_name":"@shg30_shop_name"},
	{"key":"Johnson 1957","Damage":700,"Min_damage":300,"Damage_reduc":50,"Min_range":5.5,"RPM":98,"Repair_num":4360,"Pellets":10,"Class":"M","Shop_name":"shg31_shop","File_name":"@shg31_shop_name"},
	{"key":"Accuracy SEVEN","Damage":550,"Min_damage":300,"Damage_reduc":100,"Min_range":5.8,"RPM":185,"Repair_num":6990,"Pellets":10,"Class":"M","Shop_name":"shg32_shop","File_name":"@shg32_shop_name"},
	{"key":"Richmond 870 RIS","Damage":648,"Min_damage":216,"Damage_reduc":72,"Min_range":5.5,"RPM":82,"Repair_num":5400,"Pellets":9,"Class":"M","Shop_name":"shg33_shop","File_name":"@shg33_shop_name"},
	{"key":"Fararm S.A.T. 8 Pro","Damage":660,"Min_damage":240,"Damage_reduc":60,"Min_range":5.7,"RPM":180,"Repair_num":5760,"Pellets":10,"Class":"M","Shop_name":"shg35_shop","File_name":"@shg35_shop_name"},
	{"key":"Gold Fararm S.A.T. 8 Pro","Damage":660,"Min_damage":240,"Damage_reduc":60,"Min_range":6.7,"RPM":180,"Repair_num":5760,"Pellets":10,"Class":"M","Shop_name":"shg35_gold01_shop","File_name":"@shg35_gold01_shop_name"}];
		localStorage.setItem('weapons', JSON.stringify(weapons));

		var vests = [{"key":"Default","HP":225,"RFProtection":"FALSE","Repel_shot":"FALSE","Armor_per_sec":0,"Explo_res":0,"Melee_res":0,"Special":"none","Repair_num":0,"Shop_name":"shared_vest_01","File_name":"@shared_vest_01_shop_name"},
	{"key":"Anti-Melee","HP":225,"RFProtection":"FALSE","Repel_shot":"FALSE","Armor_per_sec":0,"Explo_res":0,"Melee_res":0.2,"Special":"none","Repair_num":811,"Shop_name":"shared_vest_05","File_name":"@shared_vest_05_shop_name"},
	{"key":"Atlant","HP":225,"RFProtection":"FALSE","Repel_shot":"FALSE","Armor_per_sec":0,"Explo_res":0.25,"Melee_res":0,"Special":"none","Repair_num":2288,"Shop_name":"sniper_vest_01","File_name":"@sniper_vest_01_shop_name"},
	{"key":"Anti-Explosive","HP":225,"RFProtection":"FALSE","Repel_shot":"FALSE","Armor_per_sec":0,"Explo_res":0.25,"Melee_res":0,"Special":"none","Repair_num":913,"Shop_name":"shared_vest_03","File_name":"@shared_vest_03_shop_name"},
	{"key":"Assault","HP":225,"RFProtection":"TRUE","Repel_shot":"FALSE","Armor_per_sec":0,"Explo_res":0,"Melee_res":0.2,"Special":"none","Repair_num":1859,"Shop_name":"shared_vest_09","File_name":"@shared_vest_09_shop_name"},
	{"key":"Strikeforce","HP":225,"RFProtection":"TRUE","Repel_shot":"FALSE","Armor_per_sec":0,"Explo_res":0.25,"Melee_res":0,"Special":"none","Repair_num":2288,"Shop_name":"soldier_vest_01","File_name":"@soldier_vest_01_shop_name"},
	{"key":"Titan-II","HP":225,"RFProtection":"FALSE","Repel_shot":"TRUE","Armor_per_sec":0,"Explo_res":0.25,"Melee_res":0,"Special":"none","Repair_num":807,"Shop_name":"shared_vest_07","File_name":"@shared_vest_07_shop_name"},
	{"key":"Anti-Sniper","HP":225,"RFProtection":"FALSE","Repel_shot":"TRUE","Armor_per_sec":0,"Explo_res":0,"Melee_res":0,"Special":"none","Repair_num":819,"Shop_name":"engineer_vest_01","File_name":"@engineer_vest_01_shop_name"},
	{"key":"Special Medic/Rifle","HP":225,"RFProtection":"TRUE","Repel_shot":"FALSE","Armor_per_sec":0,"Explo_res":0,"Melee_res":0,"Special":"none","Repair_num":819,"Shop_name":"medic_vest_02","File_name":"@medic_vest_02_shop_name"},
	{"key":"Plate","HP":225,"RFProtection":"FALSE","Repel_shot":"TRUE","Armor_per_sec":0,"Explo_res":0.25,"Melee_res":0,"Special":"none","Repair_num":2288,"Shop_name":"engineer_vest_02","File_name":"@engineer_vest_02_shop_name"},
	{"key":"Hawk","HP":225,"RFProtection":"TRUE","Repel_shot":"FALSE","Armor_per_sec":0,"Explo_res":0.3,"Melee_res":0.2,"Special":"10% faster swap","Repair_num":4070,"Shop_name":"sniper_vest_03","File_name":"@sniper_vest_03_shop_name"},
	{"key":"Scout","HP":225,"RFProtection":"TRUE","Repel_shot":"TRUE","Armor_per_sec":0,"Explo_res":0,"Melee_res":0,"Special":"none","Repair_num":2288,"Shop_name":"medic_vest_01","File_name":"@medic_vest_01_shop_name"},
	{"key":"Special Sniper","HP":225,"RFProtection":"FALSE","Repel_shot":"FALSE","Armor_per_sec":0,"Explo_res":0,"Melee_res":0,"Special":"none","Repair_num":819,"Shop_name":"sniper_vest_02","File_name":"@sniper_vest_02_shop_name"},
	{"key":"Crown","HP":250,"RFProtection":"FALSE","Repel_shot":"FALSE","Armor_per_sec":3,"Explo_res":0.25,"Melee_res":0,"Special":"none","Repair_num":9616,"Shop_name":"shared_vest_crown_02","File_name":"@shared_vest_crown_02_shop_name"},
	{"key":"Rhino","HP":255,"RFProtection":"FALSE","Repel_shot":"FALSE","Armor_per_sec":0,"Explo_res":0.3,"Melee_res":0.2,"Special":"none","Repair_num":4070,"Shop_name":"medic_vest_03","File_name":"@medic_vest_03_shop_name"},
	{"key":"Komodo","HP":255,"RFProtection":"FALSE","Repel_shot":"FALSE","Armor_per_sec":0,"Explo_res":0.3,"Melee_res":0,"Special":"none","Repair_num":4070,"Shop_name":"engineer_vest_03","File_name":"@engineer_vest_03_shop_name"},
	{"key":"Christmas","HP":260,"RFProtection":"FALSE","Repel_shot":"FALSE","Armor_per_sec":0,"Explo_res":0.25,"Melee_res":0,"Special":"none","Repair_num":2288,"Shop_name":"shared_vest_xmas_01","File_name":"@shared_vest_xmas_01_shop_name"},
	{"key":"Frontline","HP":275,"RFProtection":"FALSE","Repel_shot":"FALSE","Armor_per_sec":4,"Explo_res":0,"Melee_res":0,"Special":"none","Repair_num":3288,"Shop_name":"shared_vest_02","File_name":"@shared_vest_02_shop_name"},
	{"key":"Warlord Medic","HP":275,"RFProtection":"TRUE","Repel_shot":"FALSE","Armor_per_sec":8,"Explo_res":0,"Melee_res":0,"Special":"none","Repair_num":9620,"Shop_name":"medic_vest_04","File_name":"@medic_vest_04_shop_name"},
	{"key":"Warlord Engi","HP":275,"RFProtection":"FALSE","Repel_shot":"FALSE","Armor_per_sec":8,"Explo_res":0,"Melee_res":0,"Special":"none","Repair_num":9620,"Shop_name":"engineer_vest_04","File_name":"@engineer_vest_04_shop_name"},
	{"key":"Warlord Rifle","HP":275,"RFProtection":"FALSE","Repel_shot":"FALSE","Armor_per_sec":8,"Explo_res":0,"Melee_res":0,"Special":"10% faster reload","Repair_num":9620,"Shop_name":"soldier_vest_04","File_name":"@soldier_vest_04_shop_name"},
	{"key":"Warlord Sniper","HP":275,"RFProtection":"FALSE","Repel_shot":"FALSE","Armor_per_sec":8,"Explo_res":0.3,"Melee_res":0,"Special":"none","Repair_num":9620,"Shop_name":"sniper_vest_04","File_name":"@sniper_vest_04_shop_name"},
	{"key":"Corundum","HP":275,"RFProtection":"FALSE","Repel_shot":"FALSE","Armor_per_sec":0,"Explo_res":0,"Melee_res":0.2,"Special":"none","Repair_num":1859,"Shop_name":"shared_vest_04","File_name":"@shared_vest_04_shop_name"},
	{"key":"Python","HP":275,"RFProtection":"TRUE","Repel_shot":"FALSE","Armor_per_sec":0,"Explo_res":0.3,"Melee_res":0,"Special":"none","Repair_num":4070,"Shop_name":"soldier_vest_03","File_name":"@soldier_vest_03_shop_name"},
	{"key":"Extra Strong","HP":275,"RFProtection":"FALSE","Repel_shot":"FALSE","Armor_per_sec":0,"Explo_res":0,"Melee_res":0,"Special":"none","Repair_num":913,"Shop_name":"shared_vest_06","File_name":"@shared_vest_06_shop_name"},
	{"key":"CQB / Assault / Sniper","HP":200,"RFProtection":"FALSE","Repel_shot":"FALSE","Armor_per_sec":0,"Explo_res":0,"Melee_res":0,"Special":"none","Repair_num":0,"Shop_name":"none","File_name":"none"},
	{"key":"Demoman","HP":250,"RFProtection":"FALSE","Repel_shot":"FALSE","Armor_per_sec":0,"Explo_res":0,"Melee_res":0,"Special":"none","Repair_num":0,"Shop_name":"none","File_name":"none"},
	{"key":"Spec-Ops","HP":300,"RFProtection":"FALSE","Repel_shot":"FALSE","Armor_per_sec":0,"Explo_res":0,"Melee_res":0,"Special":"none","Repair_num":0,"Shop_name":"none","File_name":"none"},
	{"key":"shock1","HP":200,"RFProtection":"FALSE","Repel_shot":"FALSE","Armor_per_sec":0,"Explo_res":0,"Melee_res":0,"Special":"none","Repair_num":0,"Shop_name":"none","File_name":"none"},
	{"key":"shock2","HP":300,"RFProtection":"FALSE","Repel_shot":"FALSE","Armor_per_sec":0,"Explo_res":0,"Melee_res":0,"Special":"none","Repair_num":0,"Shop_name":"none","File_name":"none"},
	{"key":"shock3","HP":350,"RFProtection":"FALSE","Repel_shot":"FALSE","Armor_per_sec":0,"Explo_res":0,"Melee_res":0,"Special":"none","Repair_num":0,"Shop_name":"none","File_name":"none"}];
		localStorage.setItem('vests', JSON.stringify(vests));
		console.log('init Stats finished');
	};

	function clearStats(){
		localStorage.removeItem("helmets");
		localStorage.removeItem("gloves");
		localStorage.removeItem("boots");
		localStorage.removeItem("knives");
		localStorage.removeItem("weapons");
		localStorage.removeItem("vests");
	};

	function getHelmets(){
		return JSON.parse(localStorage.getItem("helmets"));
	}

	function getGloves(){	
		return JSON.parse(localStorage.getItem("gloves"));
	};

	function getBoots(){
		return JSON.parse(localStorage.getItem("boots"));
	};

	function getKnives(){
		return JSON.parse(localStorage.getItem("knives"));
	};

	function getWeapons(){
		return JSON.parse(localStorage.getItem("weapons"));
	};

	function getVests(){
		return JSON.parse(localStorage.getItem("vests"));
	};


	function setHelmets(arr){
		localStorage.setItem("helmets", JSON.stringify(arr));
	};

	function setGloves(arr){	
		localStorage.setItem("gloves", JSON.stringify(arr));
	};

	function setBoots(arr){
		localStorage.setItem("boots", JSON.stringify(arr));
	};

	function setKnives(arr){
		localStorage.setItem("knives", JSON.stringify(arr));
	};

	function setWeapons(arr){
		localStorage.setItem("weapons", JSON.stringify(arr));
	};

	function setVests(arr){
		localStorage.setItem("vests", JSON.stringify(arr));
	};

	return {
		initStats : initStats,
		clearStats:clearStats,
		
		getHelmets:getHelmets,
		getGloves:getGloves,
		getBoots:getBoots, 
		getKnives:getKnives,
		getWeapons:getWeapons,
		getVests:getVests,
		
		setHelmets:setHelmets,
		setGloves:setGloves,
		setBoots:setBoots,
		setKnives:setKnives,
		setWeapons:setWeapons,
		setVests:setVests
	};
});






















