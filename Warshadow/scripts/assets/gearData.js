define(function () {

function initStats(){
	var helmets = [{"key":"Warlord","HP_regen":8,"Damage_reduc":0.4,"Mine":"FALSE","Flash":"FALSE","Repair_num":500,"Shop_name":"medic_helmet_07"},
{"key":"Elite Crown","HP_regen":8,"Damage_reduc":0.3,"Mine":"FALSE","Flash":"TRUE","Repair_num":1170,"Shop_name":"medic_helmet_crown_02"},
{"key":"Dread mask","HP_regen":0,"Damage_reduc":0.55,"Mine":"FALSE","Flash":"TRUE","Repair_num":1430,"Shop_name":"shared_helmet_hlw_03"},
{"key":"Tactical","HP_regen":0,"Damage_reduc":0.8,"Mine":"FALSE","Flash":"TRUE","Repair_num":819,"Shop_name":"medic_helmet_02"},
{"key":"Sapper","HP_regen":0,"Damage_reduc":0.8,"Mine":"TRUE","Flash":"FALSE","Repair_num":1430,"Shop_name":"medic_helmet_05"},
{"key":"Advanced","HP_regen":0,"Damage_reduc":0.8,"Mine":"FALSE","Flash":"FALSE","Repair_num":624,"Shop_name":"medic_helmet_03"},
{"key":"Default","HP_regen":0,"Damage_reduc":0.9,"Mine":"FALSE","Flash":"FALSE","Repair_num":0,"Shop_name":"medic_helmet_01"},
{"key":"npc","HP_regen":0,"Damage_reduc":1,"Mine":"FALSE","Flash":"FALSE","Repair_num":0,"Shop_name":"none"}];
	localStorage.setItem('helmets', JSON.stringify(helmets));
	

	var gloves = [{"key":"Knockdown Gloves","recoil_reduc":0,"Knockdown":"TRUE","Damage_reduc":0,"Reload":0,"Melee_range":0,"Melee_speed":0,"Swap_speed":0,"Spread_reduc":0,"Repair_num":532,"Shop_name":"@ui_armor_soldier_hands_01_name"},
{"key":"Engineer Gloves","recoil_reduc":0,"Knockdown":"FALSE","Damage_reduc":0,"Reload":0.8,"Melee_range":0,"Melee_speed":0,"Swap_speed":0,"Spread_reduc":0,"Repair_num":1700,"Shop_name":"@ui_armor_engineer_hands_01_name"},
{"key":"Mobility Gloves","recoil_reduc":0,"Knockdown":"FALSE","Damage_reduc":0,"Reload":0.8,"Melee_range":0,"Melee_speed":0,"Swap_speed":1.2,"Spread_reduc":0,"Repair_num":1700,"Shop_name":"@ui_armor_soldier_hands_03_name"},
{"key":"Multipurpose Gloves","recoil_reduc":0,"Knockdown":"FALSE","Damage_reduc":0,"Reload":0.8,"Melee_range":0,"Melee_speed":0,"Swap_speed":1.2,"Spread_reduc":0,"Repair_num":1700,"Shop_name":"@ui_armor_sniper_hands_01_name"},
{"key":"Christmas Gloves","recoil_reduc":0,"Knockdown":"FALSE","Damage_reduc":0,"Reload":0.8,"Melee_range":0,"Melee_speed":0,"Swap_speed":0,"Spread_reduc":0,"Repair_num":624,"Shop_name":"@ui_armor_shared_hands_xmas_01_name"},
{"key":"Special Edition Gloves","recoil_reduc":0,"Knockdown":"FALSE","Damage_reduc":0,"Reload":0,"Melee_range":0,"Melee_speed":0,"Swap_speed":0,"Spread_reduc":0,"Repair_num":0,"Shop_name":"@ui_armor_shared_hands_promo_01_name"},
{"key":"Elite Crown Gloves","recoil_reduc":0,"Knockdown":"FALSE","Damage_reduc":0.8,"Reload":0.8,"Melee_range":0,"Melee_speed":0,"Swap_speed":1.2,"Spread_reduc":0.85,"Repair_num":1700,"Shop_name":"@ui_armor_shared_hands_crown_02_name"},
{"key":"Assault Gloves","recoil_reduc":0,"Knockdown":"FALSE","Damage_reduc":0,"Reload":0,"Melee_range":0,"Melee_speed":0,"Swap_speed":1.2,"Spread_reduc":0,"Repair_num":532,"Shop_name":"@ui_armor_shared_hands_06_name"},
{"key":"Carbon Fibre Gloves","recoil_reduc":0,"Knockdown":"FALSE","Damage_reduc":0,"Reload":0.8,"Melee_range":1.2,"Melee_speed":1.35,"Swap_speed":0,"Spread_reduc":0,"Repair_num":930,"Shop_name":"@ui_armor_shared_hands_05_name"},
{"key":"Combat Gloves","recoil_reduc":0,"Knockdown":"TRUE","Damage_reduc":0,"Reload":0.8,"Melee_range":0,"Melee_speed":0,"Swap_speed":0,"Spread_reduc":0,"Repair_num":658,"Shop_name":"@ui_armor_shared_hands_04_name"},
{"key":"Melee hit Gloves","recoil_reduc":0,"Knockdown":"FALSE","Damage_reduc":0,"Reload":0,"Melee_range":1.2,"Melee_speed":1.35,"Swap_speed":0,"Spread_reduc":0,"Repair_num":760,"Shop_name":"@ui_armor_shared_hands_03_name"},
{"key":"Protective Gloves","recoil_reduc":0,"Knockdown":"FALSE","Damage_reduc":0.8,"Reload":0,"Melee_range":0,"Melee_speed":0,"Swap_speed":0,"Spread_reduc":0,"Repair_num":405,"Shop_name":"@ui_armor_shared_hands_02_name"},
{"key":"Default Gloves","recoil_reduc":0,"Knockdown":"FALSE","Damage_reduc":0,"Reload":0,"Melee_range":0,"Melee_speed":0,"Swap_speed":0,"Spread_reduc":0,"Repair_num":0,"Shop_name":"@ui_armor_shared_hands_01_name"},
{"key":"Light Gloves","recoil_reduc":0,"Knockdown":"FALSE","Damage_reduc":0,"Reload":0.8,"Melee_range":0,"Melee_speed":0,"Swap_speed":0,"Spread_reduc":0,"Repair_num":1700,"Shop_name":"@ui_armor_medic_hands_01_name"},
{"key":"Warlord Gloves","recoil_reduc":0.85,"Knockdown":"FALSE","Damage_reduc":0,"Reload":0.85,"Melee_range":0,"Melee_speed":0,"Swap_speed":1.25,"Spread_reduc":0,"Repair_num":6010,"Shop_name":"@ui_armor_shared_hands_07_name"}];
	localStorage.setItem('gloves', JSON.stringify(gloves));



	var boots = [{"key":"Fast Anti-directional Mine Shoes","Damage_reduc_perc":0.8,"Mine_delay":"TRUE","Crouch_speed":0,"Sprint_speed":0,"Sprint_dur":0,"Slide_dist":0,"Silent":"FALSE","Repair_num":2040,"Shop_name":"@ui_armor_engineer_shoes_01_name"},
{"key":"Gumboots","Damage_reduc_perc":0.8,"Mine_delay":"TRUE","Crouch_speed":0,"Sprint_speed":0,"Sprint_dur":0,"Slide_dist":0,"Silent":"FALSE","Repair_num":1622,"Shop_name":"@ui_armor_soldier_shoes_02_name"},
{"key":"Sapper Shoes","Damage_reduc_perc":0.8,"Mine_delay":"TRUE","Crouch_speed":0,"Sprint_speed":0,"Sprint_dur":0,"Slide_dist":0,"Silent":"FALSE","Repair_num":2040,"Shop_name":"@ui_armor_sniper_shoes_01_name"},
{"key":"Default Boots","Damage_reduc_perc":0,"Mine_delay":"FALSE","Crouch_speed":0,"Sprint_speed":0,"Sprint_dur":0,"Slide_dist":0,"Silent":"FALSE","Repair_num":0,"Shop_name":"@ui_armor_shared_shoes_01_name"},
{"key":"Fast Shoes","Damage_reduc_perc":0,"Mine_delay":"FALSE","Crouch_speed":20,"Sprint_speed":1.25,"Sprint_dur":0,"Slide_dist":0,"Silent":"FALSE","Repair_num":2040,"Shop_name":"@ui_armor_shared_shoes_02_name"},
{"key":"Protective Boots","Damage_reduc_perc":0.8,"Mine_delay":"FALSE","Crouch_speed":0,"Sprint_speed":0,"Sprint_dur":0,"Slide_dist":0,"Silent":"FALSE","Repair_num":355,"Shop_name":"@ui_armor_shared_shoes_03_name"},
{"key":"Sprint Shoes","Damage_reduc_perc":0,"Mine_delay":"FALSE","Crouch_speed":0,"Sprint_speed":0,"Sprint_dur":1.5,"Slide_dist":0,"Silent":"FALSE","Repair_num":930,"Shop_name":"@ui_armor_shared_shoes_04_name"},
{"key":"Light Boots","Damage_reduc_perc":0,"Mine_delay":"FALSE","Crouch_speed":0,"Sprint_speed":1.25,"Sprint_dur":0,"Slide_dist":0,"Silent":"FALSE","Repair_num":1622,"Shop_name":"@ui_armor_shared_shoes_05_name"},
{"key":"Silent Boots","Damage_reduc_perc":0,"Mine_delay":"FALSE","Crouch_speed":0,"Sprint_speed":0,"Sprint_dur":0,"Slide_dist":0,"Silent":"TRUE","Repair_num":845,"Shop_name":"@ui_armor_shared_shoes_06_name"},
{"key":"Spy Shoes","Damage_reduc_perc":0,"Mine_delay":"FALSE","Crouch_speed":0,"Sprint_speed":0,"Sprint_dur":1.5,"Slide_dist":0,"Silent":"TRUE","Repair_num":2040,"Shop_name":"@ui_armor_shared_shoes_07_name"},
{"key":"Sliding Boots","Damage_reduc_perc":0,"Mine_delay":"FALSE","Crouch_speed":0,"Sprint_speed":1.15,"Sprint_dur":1.1,"Slide_dist":1.3,"Silent":"FALSE","Repair_num":1622,"Shop_name":"@ui_armor_shared_shoes_08_name"},
{"key":"Crown Boots","Damage_reduc_perc":0,"Mine_delay":"TRUE","Crouch_speed":0,"Sprint_speed":1.25,"Sprint_dur":1.1,"Slide_dist":0,"Silent":"FALSE","Repair_num":1622,"Shop_name":"@ui_armor_shared_shoes_crown_02_name"},
{"key":"Christmas Boots","Damage_reduc_perc":0,"Mine_delay":"FALSE","Crouch_speed":0,"Sprint_speed":1.2,"Sprint_dur":0,"Slide_dist":0,"Silent":"FALSE","Repair_num":1622,"Shop_name":"@ui_armor_shared_shoes_xmas_01_name"},
{"key":"Anti-directional Mine Boots","Damage_reduc_perc":0.8,"Mine_delay":"TRUE","Crouch_speed":0,"Sprint_speed":0,"Sprint_dur":0,"Slide_dist":0,"Silent":"FALSE","Repair_num":1622,"Shop_name":"@ui_armor_soldier_shoes_02_name"},
{"key":"Warlord Boots","Damage_reduc_perc":0.5,"Mine_delay":"FALSE","Crouch_speed":0,"Sprint_speed":1.2,"Sprint_dur":1.35,"Slide_dist":0,"Silent":"FALSE","Repair_num":1248,"Shop_name":"@ui_armor_shared_shoes_09_name"}];
	localStorage.setItem('boots', JSON.stringify(boots));


	var knives = [{"key":"Executor knife","Repair_num":0,"Shop_name":"kn01_default"},
{"key":"Ultra Marine","Repair_num":448,"Shop_name":"kn02"},
{"key":"NY Ultra Marine","Repair_num":442,"Shop_name":"kn02_cny01_shop"},
{"key":"Icicle Knife","Repair_num":442,"Shop_name":"kn02_xmas_shop"},
{"key":"Black Hawk","Repair_num":5200,"Shop_name":"kn03_shop"},
{"key":"Candy Knife","Repair_num":800,"Shop_name":"kn03_xmas_shop"},
{"key":"Black Hawk Spec Ops Mk01","Repair_num":800,"Shop_name":"kn03_zsd01_shop"},
{"key":"Army Knife","Repair_num":800,"Shop_name":"kn04_shop"},
{"key":"Army Knife Halloween","Repair_num":800,"Shop_name":"kn04_hlw01_shop"},
{"key":"Sapper shovel","Repair_num":2184,"Shop_name":"kn05_shop"},
{"key":"Sapper shovel Winter Camo","Repair_num":3900,"Shop_name":"kn05_camo02_shop"},
{"key":"Utility Knife","Repair_num":800,"Shop_name":"kn06_shop"},
{"key":"Kukri Machete","Repair_num":4000,"Shop_name":"kn07_shop"},
{"key":"Neck Knife","Repair_num":800,"Shop_name":"kn08_shop"},
{"key":"Survival Tanto Knife","Repair_num":600,"Shop_name":"kn10_shop"},
{"key":"Katana","Repair_num":5400,"Shop_name":"kn13_shop"},
{"key":"Katana Special","Repair_num":800,"Shop_name":"kn13_zsd01_shop"},
{"key":"Katana Mk.60 Mod","Repair_num":800,"Shop_name":"kn13_zsd02_shop"},
{"key":"ICE-AXE","Repair_num":800,"Shop_name":"kn14_shop"},
{"key":"Sickle","Repair_num":442,"Shop_name":"kn41_ww2_default"},
{"key":"Wooden Hammer","Repair_num":442,"Shop_name":"kn42_viet_shop"},
{"key":"Hammer","Repair_num":442,"Shop_name":"kn42_ww2_shop"},
{"key":"Classic Soviet Knife","Repair_num":600,"Shop_name":"kn43_vdv_shop"},
{"key":"Digger of Doom","Repair_num":2184,"Shop_name":"kn44_fld01_shop"}];
	localStorage.setItem('knives', JSON.stringify(knives));


	var weapons = [{"key":"Exar-L PDW Gold","Damage":80,"RPM":730,"Damage_reduc":3,"Min_damage":35,"Min_range":10.5,"Class":"E","Archetype":"R","Camo":"Vanilla","Repair_num":5100,"Shop_name":"smg31_gold01_shop"},
{"key":"Exar-L PDW","Damage":80,"RPM":730,"Damage_reduc":3,"Min_damage":35,"Min_range":9.5,"Class":"E","Archetype":"R","Camo":"Vanilla","Repair_num":5100,"Shop_name":"smg31_shop"},
{"key":"Karkom SMG","Damage":75,"RPM":840,"Damage_reduc":3,"Min_damage":38,"Min_range":11,"Class":"E","Archetype":"E","Camo":"Vanilla","Repair_num":6990,"Shop_name":"smg10_shop"},
{"key":"Micro Oren","Damage":61,"RPM":1000,"Damage_reduc":3.6,"Min_damage":31,"Min_range":6.5,"Class":"E","Archetype":"E","Camo":"Vanilla","Repair_num":6240,"Shop_name":"smg02_shop"},
{"key":"AC7 SMG","Damage":78,"RPM":780,"Damage_reduc":3.1,"Min_damage":33,"Min_range":12,"Class":"E","Archetype":"E","Camo":"Vanilla","Repair_num":5400,"Shop_name":"smg08_shop"},
{"key":"MP .38","Damage":59,"RPM":1000,"Damage_reduc":3.7,"Min_damage":32,"Min_range":6.5,"Class":"E","Archetype":"E","Camo":"Vanilla","Repair_num":3510,"Shop_name":"smg15_shop"},
{"key":"CCR CQB","Damage":70,"RPM":830,"Damage_reduc":3,"Min_damage":32,"Min_range":10.5,"Class":"E","Archetype":"E","Camo":"Vanilla","Repair_num":6990,"Shop_name":"smg25_shop"},
{"key":"ZX84 UMP","Damage":85,"RPM":700,"Damage_reduc":3.1,"Min_damage":38,"Min_range":9,"Class":"E","Archetype":"E","Camo":"Vanilla","Repair_num":6990,"Shop_name":"smg17_shop"},
{"key":"Metasoma 83","Damage":70,"RPM":800,"Damage_reduc":3.6,"Min_damage":28,"Min_range":7,"Class":"E","Archetype":"E","Camo":"Vanilla","Repair_num":5400,"Shop_name":"smg16_shop"},
{"key":"MT-19","Damage":60,"RPM":900,"Damage_reduc":3,"Min_damage":28,"Min_range":9,"Class":"E","Archetype":"E","Camo":"Vanilla","Repair_num":6240,"Shop_name":"smg24_shop"},
{"key":"M99AS","Damage":60,"RPM":900,"Damage_reduc":3.1,"Min_damage":38,"Min_range":9,"Class":"E","Archetype":"E","Camo":"Vanilla","Repair_num":3510,"Shop_name":"smg05_shop"},
{"key":"Vec 5","Damage":65,"RPM":770,"Damage_reduc":3,"Min_damage":32,"Min_range":10.5,"Class":"E","Archetype":"E","Camo":"Vanilla","Repair_num":6240,"Shop_name":"smg03_default"},
{"key":"GU7","Damage":55,"RPM":950,"Damage_reduc":3.1,"Min_damage":32,"Min_range":8.5,"Class":"E","Archetype":"E","Camo":"Vanilla","Repair_num":5400,"Shop_name":"smg14_shop"},
{"key":"MM28","Damage":60,"RPM":860,"Damage_reduc":3,"Min_damage":32,"Min_range":9.5,"Class":"E","Archetype":"E","Camo":"Vanilla","Repair_num":3510,"Shop_name":"smg01_shop"},
{"key":"A3 9mm","Damage":62,"RPM":830,"Damage_reduc":3.1,"Min_damage":32,"Min_range":9.5,"Class":"E","Archetype":"E","Camo":"Vanilla","Repair_num":3510,"Shop_name":"smg11_shop"},
{"key":"FY9","Damage":70,"RPM":720,"Damage_reduc":3.1,"Min_damage":38,"Min_range":11,"Class":"E","Archetype":"E","Camo":"Vanilla","Repair_num":3510,"Shop_name":"smg06_shop"},
{"key":"Ch 9mm","Damage":62,"RPM":800,"Damage_reduc":3.1,"Min_damage":32,"Min_range":10,"Class":"E","Archetype":"E","Camo":"Vanilla","Repair_num":3510,"Shop_name":"smg30_shop"},
{"key":"MX4 Storm","Damage":64,"RPM":805,"Damage_reduc":1.4,"Min_damage":33,"Min_range":10,"Class":"E","Archetype":"E","Camo":"Vanilla","Repair_num":5100,"Shop_name":"smg26_shop"},
{"key":"AY 552","Damage":63,"RPM":750,"Damage_reduc":3.1,"Min_damage":38,"Min_range":9,"Class":"E","Archetype":"E","Camo":"Vanilla","Repair_num":3510,"Shop_name":"smg23_shop"},
{"key":"PDW 19","Damage":60,"RPM":750,"Damage_reduc":3,"Min_damage":38,"Min_range":8.5,"Class":"E","Archetype":"E","Camo":"Vanilla","Repair_num":3510,"Shop_name":"smg09_shop"},
{"key":"ZX84C","Damage":57,"RPM":750,"Damage_reduc":2.8,"Min_damage":38,"Min_range":8.3,"Class":"E","Archetype":"E","Camo":"Vanilla","Repair_num":2184,"Shop_name":"smg07_shop"},
{"key":"SMG-19 Wisent","Damage":66,"RPM":725,"Damage_reduc":3,"Min_damage":32,"Min_range":10,"Class":"E","Archetype":"E","Camo":"Vanilla","Repair_num":24960,"Shop_name":"smg18_shop"},
{"key":"R4 CQB","Damage":55,"RPM":840,"Damage_reduc":2.8,"Min_damage":38,"Min_range":8,"Class":"E","Archetype":"E","Camo":"Vanilla","Repair_num":1872,"Shop_name":"smg13_shop"},
{"key":"GU1","Damage":60,"RPM":670,"Damage_reduc":2.9,"Min_damage":38,"Min_range":8.5,"Class":"E","Archetype":"E","Camo":"Vanilla","Repair_num":2184,"Shop_name":"smg12_shop"},
{"key":"ZX84 SMG","Damage":50,"RPM":800,"Damage_reduc":2.8,"Min_damage":38,"Min_range":8,"Class":"E","Archetype":"E","Camo":"Vanilla","Repair_num":0,"Shop_name":"smg04_shop"},
{"key":"F2000","Damage":68,"RPM":850,"Damage_reduc":2,"Min_damage":41,"Min_range":14,"Class":"R","Archetype":"R","Camo":"Vanilla","Repair_num":3510,"Shop_name":"ar10_shop"},
{"key":"Exar-h","Damage":90,"RPM":620,"Damage_reduc":1,"Min_damage":50,"Min_range":16,"Class":"R","Archetype":"R","Camo":"Vanilla","Repair_num":6990,"Shop_name":"ar11_shop"},
{"key":"CCR","Damage":77,"RPM":700,"Damage_reduc":1,"Min_damage":50,"Min_range":16,"Class":"R","Archetype":"R","Camo":"Vanilla","Repair_num":24960,"Shop_name":"ar19_shop"},
{"key":"R249 Para","Damage":75,"RPM":700,"Damage_reduc":2,"Min_damage":40,"Min_range":13,"Class":"R","Archetype":"R","Camo":"Vanilla","Repair_num":6990,"Shop_name":"mg07_shop"},
{"key":"LMG3","Damage":65,"RPM":800,"Damage_reduc":2.2,"Min_damage":40,"Min_range":13,"Class":"R","Archetype":"R","Camo":"Vanilla","Repair_num":5400,"Shop_name":"mg09_shop"},
{"key":"T27","Damage":80,"RPM":640,"Damage_reduc":1,"Min_damage":50,"Min_range":16,"Class":"R","Archetype":"R","Camo":"Vanilla","Repair_num":6990,"Shop_name":"ar16_shop"},
{"key":"AR-GAR","Damage":81,"RPM":630,"Damage_reduc":1.3,"Min_damage":45,"Min_range":15,"Class":"R","Archetype":"R","Camo":"Vanilla","Repair_num":30625,"Shop_name":"ar23_shop"},
{"key":"ST-AR","Damage":78,"RPM":650,"Damage_reduc":2,"Min_damage":45,"Min_range":12,"Class":"R","Archetype":"R","Camo":"Vanilla","Repair_num":3510,"Shop_name":"ar17_shop"},
{"key":"FY 47","Damage":84,"RPM":600,"Damage_reduc":1,"Min_damage":45,"Min_range":12.5,"Class":"R","Archetype":"R","Camo":"Vanilla","Repair_num":5400,"Shop_name":"ar22_shop"},
{"key":"M95AR","Damage":62,"RPM":810,"Damage_reduc":2,"Min_damage":41,"Min_range":12,"Class":"R","Archetype":"R","Camo":"Vanilla","Repair_num":3900,"Shop_name":"ar07_shop"},
{"key":"AC7","Damage":72,"RPM":690,"Damage_reduc":2,"Min_damage":41,"Min_range":14,"Class":"R","Archetype":"R","Camo":"Vanilla","Repair_num":2340,"Shop_name":"ar05_shop"},
{"key":"AY 551","Damage":73,"RPM":670,"Damage_reduc":1.5,"Min_damage":51,"Min_range":13.5,"Class":"R","Archetype":"R","Camo":"Vanilla","Repair_num":6240,"Shop_name":"ar08_shop"},
{"key":"A3-210","Damage":70,"RPM":700,"Damage_reduc":2,"Min_damage":45,"Min_range":13,"Class":"R","Archetype":"R","Camo":"Vanilla","Repair_num":3510,"Shop_name":"ar03_shop"},
{"key":"FY 103","Damage":80,"RPM":600,"Damage_reduc":1,"Min_damage":45,"Min_range":14,"Class":"R","Archetype":"R","Camo":"Vanilla","Repair_num":6240,"Shop_name":"ar04_default"},
{"key":"LMG 240","Damage":80,"RPM":600,"Damage_reduc":2.2,"Min_damage":40,"Min_range":13,"Class":"R","Archetype":"R","Camo":"Vanilla","Repair_num":5400,"Shop_name":"mg01_shop"},
{"key":"AC7 MG","Damage":75,"RPM":600,"Damage_reduc":2.2,"Min_damage":40,"Min_range":15,"Class":"R","Archetype":"R","Camo":"Vanilla","Repair_num":6240,"Shop_name":"mg05_shop"},
{"key":"A3-HBAR","Damage":75,"RPM":580,"Damage_reduc":2,"Min_damage":40,"Min_range":14,"Class":"R","Archetype":"R","Camo":"Vanilla","Repair_num":3510,"Shop_name":"mg08_shop"},
{"key":"F1000","Damage":87,"RPM":500,"Damage_reduc":2,"Min_damage":41,"Min_range":14,"Class":"R","Archetype":"R","Camo":"Vanilla","Repair_num":6240,"Shop_name":"ar13_shop"},
{"key":"Karkom","Damage":70,"RPM":620,"Damage_reduc":2,"Min_damage":45,"Min_range":12,"Class":"R","Archetype":"R","Camo":"Vanilla","Repair_num":3510,"Shop_name":"ar01_shop"},
{"key":"LMG4","Damage":80,"RPM":540,"Damage_reduc":2,"Min_damage":40,"Min_range":13.5,"Class":"R","Archetype":"R","Camo":"Vanilla","Repair_num":3510,"Shop_name":"mg02_default"},
{"key":"GU3","Damage":65,"RPM":660,"Damage_reduc":2,"Min_damage":40,"Min_range":11,"Class":"R","Archetype":"R","Camo":"Vanilla","Repair_num":4360,"Shop_name":"mg03_shop"},
{"key":"FY LMG","Damage":80,"RPM":530,"Damage_reduc":1,"Min_damage":40,"Min_range":14.5,"Class":"R","Archetype":"R","Camo":"Vanilla","Repair_num":24960,"Shop_name":"mg04_shop"},
{"key":"ZX84K","Damage":63,"RPM":650,"Damage_reduc":2,"Min_damage":41,"Min_range":12,"Class":"R","Archetype":"R","Camo":"Vanilla","Repair_num":2184,"Shop_name":"ar06_shop"},
{"key":"GU2","Damage":60,"RPM":670,"Damage_reduc":2,"Min_damage":41,"Min_range":11,"Class":"R","Archetype":"R","Camo":"Vanilla","Repair_num":1872,"Shop_name":"ar09_shop"},
{"key":"ZX84 Mg","Damage":70,"RPM":570,"Damage_reduc":2.2,"Min_damage":40,"Min_range":12,"Class":"R","Archetype":"R","Camo":"Vanilla","Repair_num":2184,"Shop_name":"mg06_shop"},
{"key":"R16A2 LMG","Damage":60,"RPM":650,"Damage_reduc":2,"Min_damage":45,"Min_range":11.5,"Class":"R","Archetype":"R","Camo":"Vanilla","Repair_num":1872,"Shop_name":"mg21_shop"},
{"key":"R60E4","Damage":75,"RPM":500,"Damage_reduc":2.2,"Min_damage":40,"Min_range":13,"Class":"R","Archetype":"R","Camo":"Vanilla","Repair_num":5400,"Shop_name":"mg12_shop"},
{"key":"R4A1","Damage":55,"RPM":680,"Damage_reduc":2,"Min_damage":45,"Min_range":11,"Class":"R","Archetype":"R","Camo":"Vanilla","Repair_num":0,"Shop_name":"ar02_shop"},
{"key":"R16A4","Damage":75,"RPM":335,"Damage_reduc":2,"Min_damage":45,"Min_range":14,"Class":"R","Archetype":"R","Camo":"Vanilla","Repair_num":6240,"Shop_name":"ar12_shop"},
{"key":"Garota","Damage":200,"RPM":400,"Damage_reduc":2,"Min_damage":75,"Min_range":70,"Class":"S","Archetype":"S","Camo":"Vanilla","Repair_num":3510,"Shop_name":"sr01_shop"},
{"key":"BT-50","Damage":350,"RPM":215,"Damage_reduc":2,"Min_damage":40,"Min_range":70,"Class":"S","Archetype":"S","Camo":"Vanilla","Repair_num":6990,"Shop_name":"sr04_shop"},
{"key":"Calico SNR (M917)","Damage":155,"RPM":450,"Damage_reduc":2,"Min_damage":75,"Min_range":70,"Class":"S","Archetype":"S","Camo":"Vanilla","Repair_num":24960,"Shop_name":"sr07_shop"},
{"key":"Karkom SNR","Damage":190,"RPM":450,"Damage_reduc":2,"Min_damage":75,"Min_range":65,"Class":"S","Archetype":"S","Camo":"Vanilla","Repair_num":8240,"Shop_name":"sr12_shop"},
{"key":"RK 14 EBR","Damage":225,"RPM":250,"Damage_reduc":2,"Min_damage":75,"Min_range":70,"Class":"S","Archetype":"S","Camo":"Vanilla","Repair_num":6990,"Shop_name":"sr13_shop"},
{"key":"Q-88","Damage":210,"RPM":230,"Damage_reduc":2,"Min_damage":11,"Min_range":50,"Class":"S","Archetype":"S","Camo":"Vanilla","Repair_num":1872,"Shop_name":"sr30_shop"},
{"key":"Karkom SNR Blue","Damage":180,"RPM":260,"Damage_reduc":2,"Min_damage":75,"Min_range":70,"Class":"S","Archetype":"S","Camo":"Vanilla","Repair_num":6240,"Shop_name":"sr12_clr01_shop"},
{"key":"AY 550","Damage":170,"RPM":245,"Damage_reduc":2,"Min_damage":75,"Min_range":65,"Class":"S","Archetype":"S","Camo":"Vanilla","Repair_num":3900,"Shop_name":"sr22_shop"},
{"key":"ZX84 SNR","Damage":180,"RPM":230,"Damage_reduc":2,"Min_damage":40,"Min_range":65,"Class":"S","Archetype":"S","Camo":"Vanilla","Repair_num":2184,"Shop_name":"sr06_shop"},
{"key":"CCR SPR","Damage":190,"RPM":210,"Damage_reduc":2,"Min_damage":75,"Min_range":60,"Class":"S","Archetype":"S","Camo":"Vanilla","Repair_num":3510,"Shop_name":"sr25_shop"},
{"key":"AC7 SNR","Damage":150,"RPM":260,"Damage_reduc":2,"Min_damage":40,"Min_range":60,"Class":"S","Archetype":"S","Camo":"Vanilla","Repair_num":2184,"Shop_name":"sr05_shop"},
{"key":"R16 SPR","Damage":155,"RPM":240,"Damage_reduc":2,"Min_damage":75,"Min_range":65,"Class":"S","Archetype":"S","Camo":"Vanilla","Repair_num":1872,"Shop_name":"sr23_shop"},
{"key":"SVK","Damage":135,"RPM":250,"Damage_reduc":2,"Min_damage":75,"Min_range":60,"Class":"S","Archetype":"S","Camo":"Vanilla","Repair_num":0,"Shop_name":"sr02_default"},
{"key":"Otto OT 3000","Damage":250,"RPM":115,"Damage_reduc":2,"Min_damage":75,"Min_range":70,"Class":"S","Archetype":"S","Camo":"Vanilla","Repair_num":3510,"Shop_name":"sr26_shop"},
{"key":"R107","Damage":310,"RPM":90,"Damage_reduc":2,"Min_damage":100,"Min_range":70,"Class":"S","Archetype":"S","Camo":"Vanilla","Repair_num":3510,"Shop_name":"sr15_shop"},
{"key":"RBA SR58 SPR","Damage":350,"RPM":56,"Damage_reduc":2,"Min_damage":75,"Min_range":70,"Class":"S","Archetype":"S","Camo":"Vanilla","Repair_num":5400,"Shop_name":"sr32_shop"},
{"key":"Miller","Damage":350,"RPM":54,"Damage_reduc":2,"Min_damage":75,"Min_range":70,"Class":"S","Archetype":"S","Camo":"Vanilla","Repair_num":6990,"Shop_name":"sr09_shop"},
{"key":"R98B","Damage":350,"RPM":44,"Damage_reduc":2,"Min_damage":75,"Min_range":70,"Class":"S","Archetype":"S","Camo":"Vanilla","Repair_num":30625,"Shop_name":"sr16_shop"},
{"key":"M217","Damage":340,"RPM":44,"Damage_reduc":2,"Min_damage":40,"Min_range":70,"Class":"S","Archetype":"S","Camo":"Vanilla","Repair_num":24960,"Shop_name":"sr08_shop"},
{"key":"TWM","Damage":300,"RPM":42,"Damage_reduc":2,"Min_damage":40,"Min_range":70,"Class":"S","Archetype":"S","Camo":"Vanilla","Repair_num":1872,"Shop_name":"sr14_shop"},
{"key":"Everest","Damage":320,"RPM":39,"Damage_reduc":2,"Min_damage":40,"Min_range":70,"Class":"S","Archetype":"S","Camo":"Vanilla","Repair_num":6240,"Shop_name":"sr03_shop"},
{"key":"BNP SNR-1","Damage":345,"RPM":38,"Damage_reduc":7,"Min_damage":85,"Min_range":65,"Class":"S","Archetype":"S","Camo":"Vanilla","Repair_num":6240,"Shop_name":"sr17_shop"},
{"key":"STCC","Damage":60,"RPM":650,"Damage_reduc":1.2,"Min_damage":32,"Min_range":10,"Class":"A","Archetype":"A","Camo":"Vanilla","Repair_num":4680,"Shop_name":"pt10_shop"},
{"key":"Gun Glove!","Damage":135,"RPM":270,"Damage_reduc":2,"Min_damage":52,"Min_range":11,"Class":"A","Archetype":"A","Camo":"Vanilla","Repair_num":5500,"Shop_name":"pt66_shop"},
{"key":"S18G","Damage":50,"RPM":700,"Damage_reduc":3,"Min_damage":32,"Min_range":9,"Class":"A","Archetype":"A","Camo":"Vanilla","Repair_num":4680,"Shop_name":"pt21_shop"},
{"key":"Shark-443","Damage":105,"RPM":290,"Damage_reduc":1.2,"Min_damage":32,"Min_range":11,"Class":"A","Archetype":"A","Camo":"Vanilla","Repair_num":3900,"Shop_name":"pt27_shop"},
{"key":"R1911","Damage":120,"RPM":290,"Damage_reduc":3,"Min_damage":50,"Min_range":8,"Class":"A","Archetype":"A","Camo":"Vanilla","Repair_num":20000,"Shop_name":"pt16_shop"},
{"key":"Eagle Eye","Damage":125,"RPM":270,"Damage_reduc":3,"Min_damage":50,"Min_range":10,"Class":"A","Archetype":"A","Camo":"Vanilla","Repair_num":20000,"Shop_name":"pt01_default"},
{"key":"Eagle Eye Gold","Damage":125,"RPM":270,"Damage_reduc":3,"Min_damage":50,"Min_range":11,"Class":"A","Archetype":"A","Camo":"Vanilla","Repair_num":4000,"Shop_name":"pt01_gold01_shop"},
{"key":"Hex Autorevolver","Damage":140,"RPM":215,"Damage_reduc":1.2,"Min_damage":32,"Min_range":12,"Class":"A","Archetype":"A","Camo":"Vanilla","Repair_num":2184,"Shop_name":"pt26_shop"},
{"key":"P-57","Damage":100,"RPM":300,"Damage_reduc":1.2,"Min_damage":32,"Min_range":12,"Class":"A","Archetype":"A","Camo":"Vanilla","Repair_num":4680,"Shop_name":"pt22_shop"},
{"key":"Python","Damage":130,"RPM":230,"Damage_reduc":2,"Min_damage":32,"Min_range":10,"Class":"A","Archetype":"A","Camo":"Vanilla","Repair_num":4680,"Shop_name":"pt02_shop"},
{"key":"ZX84 USP","Damage":75,"RPM":335,"Damage_reduc":1,"Min_damage":32,"Min_range":10,"Class":"A","Archetype":"A","Camo":"Vanilla","Repair_num":5000,"Shop_name":"pt03_shop"},
{"key":"M900","Damage":65,"RPM":370,"Damage_reduc":1.2,"Min_damage":32,"Min_range":11,"Class":"A","Archetype":"A","Camo":"Vanilla","Repair_num":4680,"Shop_name":"pt04_shop"},
{"key":"M9A1","Damage":70,"RPM":330,"Damage_reduc":1,"Min_damage":42,"Min_range":9,"Class":"A","Archetype":"A","Camo":"Vanilla","Repair_num":980,"Shop_name":"pt06_shop"},
{"key":"Aquatic Assassin","Damage":140,"RPM":150,"Damage_reduc":1.2,"Min_damage":40,"Min_range":16,"Class":"A","Archetype":"A","Camo":"Vanilla","Repair_num":3900,"Shop_name":"pt29_fld01_shop"},
{"key":"Abada 266mm","Damage":135,"RPM":170,"Damage_reduc":3,"Min_damage":30,"Min_range":16,"Class":"A","Archetype":"A","Camo":"Vanilla","Repair_num":4000,"Shop_name":"pt25_shop"},
{"key":"GU5","Damage":65,"RPM":330,"Damage_reduc":1.2,"Min_damage":32,"Min_range":9.5,"Class":"A","Archetype":"A","Camo":"Vanilla","Repair_num":930,"Shop_name":"pt08_shop"},
{"key":"MD9","Damage":70,"RPM":300,"Damage_reduc":1.2,"Min_damage":32,"Min_range":9.8,"Class":"A","Archetype":"A","Camo":"Vanilla","Repair_num":10500,"Shop_name":"pt19_shop"},
{"key":"Q-92","Damage":65,"RPM":290,"Damage_reduc":1.2,"Min_damage":32,"Min_range":12,"Class":"A","Archetype":"A","Camo":"Vanilla","Repair_num":5200,"Shop_name":"pt23_shop"},
{"key":"High Power Pistol","Damage":60,"RPM":410,"Damage_reduc":1.2,"Min_damage":32,"Min_range":12,"Class":"A","Archetype":"A","Camo":"Vanilla","Repair_num":0,"Shop_name":"pt05_shop"},
{"key":"M93R","Damage":50,"RPM":350,"Damage_reduc":1.2,"Min_damage":32,"Min_range":8,"Class":"A","Archetype":"A","Camo":"Vanilla","Repair_num":2184,"Shop_name":"pt15_shop"},
{"key":"R4A1 Anniversary","Damage":65,"RPM":735,"Damage_reduc":2,"Min_damage":45,"Min_range":11,"Class":"R","Archetype":"R","Camo":"Anniversary","Repair_num":2200,"Shop_name":"ar02_eua01_shop"},
{"key":"MD9 Anniversary","Damage":76,"RPM":335,"Damage_reduc":1,"Min_damage":32,"Min_range":11,"Class":"A","Archetype":"A","Camo":"Anniversary","Repair_num":1248,"Shop_name":"pt07_eua01_shop"},
{"key":"TWM Anniversary","Damage":350,"RPM":56,"Damage_reduc":2,"Min_damage":40,"Min_range":70,"Class":"S","Archetype":"S","Camo":"Anniversary","Repair_num":1872,"Shop_name":"sr14_eua01_shop"},
{"key":"ZX84 UMP Anniversary","Damage":89,"RPM":755,"Damage_reduc":3.8,"Min_damage":38,"Min_range":8,"Class":"E","Archetype":"E","Camo":"Anniversary","Repair_num":5400,"Shop_name":"smg17_eua01_shop"},
{"key":"R16 SPR US set","Damage":155,"RPM":240,"Damage_reduc":2,"Min_damage":75,"Min_range":65,"Class":"S","Archetype":"S","Camo":"US set","Repair_num":12950,"Shop_name":"sr23_camo07_shop"},
{"key":"MD9 US set","Damage":80,"RPM":285,"Damage_reduc":1.2,"Min_damage":32,"Min_range":12,"Class":"A","Archetype":"A","Camo":"US set","Repair_num":20000,"Shop_name":"pt07_camo07_shop"},
{"key":"R4A1 US set","Damage":67,"RPM":680,"Damage_reduc":2,"Min_damage":45,"Min_range":14,"Class":"R","Archetype":"R","Camo":"US set","Repair_num":2200,"Shop_name":"ar02_camo07_shop"},
{"key":"R4 CQB US set","Damage":55,"RPM":840,"Damage_reduc":2.8,"Min_damage":32,"Min_range":8,"Class":"E","Archetype":"E","Camo":"US set","Repair_num":4360,"Shop_name":"smg13_camo07_shop"},
{"key":"Eagle Eye Brazil","Damage":125,"RPM":270,"Damage_reduc":3,"Min_damage":50,"Min_range":10,"Class":"A","Archetype":"A","Camo":"Brazil","Repair_num":5500,"Shop_name":"pt01_bra01_shop"},
{"key":"TWM Brazil","Damage":320,"RPM":49,"Damage_reduc":2,"Min_damage":40,"Min_range":70,"Class":"S","Archetype":"S","Camo":"Brazil","Repair_num":12950,"Shop_name":"sr14_bra01_shop"},
{"key":"Karkom Brazil","Damage":70,"RPM":620,"Damage_reduc":2,"Min_damage":45,"Min_range":12,"Class":"R","Archetype":"R","Camo":"Brazil","Repair_num":3510,"Shop_name":"ar01_bra01_shop"},
{"key":"GU1 Brazil","Damage":60,"RPM":670,"Damage_reduc":2.6,"Min_damage":32,"Min_range":12,"Class":"E","Archetype":"E","Camo":"Brazil","Repair_num":2184,"Shop_name":"smg12_bra01_shop"},
{"key":"Vec 5 Crown","Damage":65,"RPM":820,"Damage_reduc":3,"Min_damage":32,"Min_range":11,"Class":"E","Archetype":"E","Camo":"Crown","Repair_num":6240,"Shop_name":"smg03_crown02_shop"},
{"key":"GU1 Crown","Damage":76,"RPM":670,"Damage_reduc":2.6,"Min_damage":32,"Min_range":12,"Class":"E","Archetype":"E","Camo":"Crown","Repair_num":2184,"Shop_name":"smg12_crown_shop"},
{"key":"Exar-h Crown","Damage":90,"RPM":620,"Damage_reduc":1,"Min_damage":50,"Min_range":16,"Class":"R","Archetype":"R","Camo":"Crown","Repair_num":5400,"Shop_name":"ar11_crown02_shop"},
{"key":"CCR Crown","Damage":80,"RPM":720,"Damage_reduc":2,"Min_damage":50,"Min_range":16,"Class":"R","Archetype":"R","Camo":"Crown","Repair_num":5400,"Shop_name":"ar20_crown02_shop"},
{"key":"LMG 240 Crown","Damage":85,"RPM":600,"Damage_reduc":2.2,"Min_damage":40,"Min_range":16,"Class":"R","Archetype":"R","Camo":"Crown","Repair_num":6240,"Shop_name":"mg01_crown02_shop"},
{"key":"T27 Crown","Damage":83,"RPM":660,"Damage_reduc":1,"Min_damage":50,"Min_range":16,"Class":"R","Archetype":"R","Camo":"Crown","Repair_num":5400,"Shop_name":"ar16_crown02_shop"},
{"key":"BT-50 Crown","Damage":350,"RPM":215,"Damage_reduc":2,"Min_damage":40,"Min_range":70,"Class":"S","Archetype":"S","Camo":"Crown","Repair_num":5400,"Shop_name":"sr04_crown02_shop"},
{"key":"RK14 EBR Crown","Damage":245,"RPM":250,"Damage_reduc":2,"Min_damage":75,"Min_range":70,"Class":"S","Archetype":"S","Camo":"Crown","Repair_num":5400,"Shop_name":"sr13_crown02_shop"},
{"key":"MD9 Crown","Damage":70,"RPM":320,"Damage_reduc":1.2,"Min_damage":32,"Min_range":9.8,"Class":"A","Archetype":"A","Camo":"Crown","Repair_num":1248,"Shop_name":"pt07_crown02_shop"},
{"key":"Eagle Eye Elite Crown","Damage":130,"RPM":270,"Damage_reduc":3,"Min_damage":32,"Min_range":12,"Class":"A","Archetype":"A","Camo":"Crown","Repair_num":5500,"Shop_name":"pt01_crown02_shop"},
{"key":"S18G Crown","Damage":50,"RPM":720,"Damage_reduc":3,"Min_damage":32,"Min_range":10,"Class":"A","Archetype":"A","Camo":"Crown","Repair_num":5400,"Shop_name":"pt21_crown02_shop"},
{"key":"Karkom SMG Crown","Damage":80,"RPM":840,"Damage_reduc":3,"Min_damage":38,"Min_range":13,"Class":"E","Archetype":"E","Camo":"Crown","Repair_num":5400,"Shop_name":"smg10_crown_shop"},
{"key":"ZX84 UMP Elite Crown","Damage":85,"RPM":700,"Damage_reduc":3.5,"Min_damage":38,"Min_range":12,"Class":"E","Archetype":"E","Camo":"Crown","Repair_num":5400,"Shop_name":"smg17_crown02_shop"},
{"key":"Everest Neon Punk","Damage":320,"RPM":39,"Damage_reduc":2,"Min_damage":40,"Min_range":70,"Class":"S","Archetype":"S","Camo":"Neon Punk","Repair_num":6240,"Shop_name":"sr03_steam01_shop"},
{"key":"Karkom Neon Punk","Damage":70,"RPM":620,"Damage_reduc":2,"Min_damage":45,"Min_range":12,"Class":"R","Archetype":"R","Camo":"Neon Punk","Repair_num":3510,"Shop_name":"ar01_steam01_shop"},
{"key":"A3 9mm Neon Punk","Damage":62,"RPM":830,"Damage_reduc":3.1,"Min_damage":32,"Min_range":9.5,"Class":"E","Archetype":"E","Camo":"Neon Punk","Repair_num":3510,"Shop_name":"smg11_steam01_shop"},
{"key":"STCC Halloween","Damage":60,"RPM":650,"Damage_reduc":1.2,"Min_damage":32,"Min_range":10,"Class":"A","Archetype":"A","Camo":"Halloween","Repair_num":20000,"Shop_name":"pt10_hlw01_shop"},
{"key":"ZX84 SNR Halloween","Damage":200,"RPM":230,"Damage_reduc":2,"Min_damage":40,"Min_range":65,"Class":"S","Archetype":"S","Camo":"Halloween","Repair_num":4360,"Shop_name":"sr06_hlw01_shop"},
{"key":"ZX84K Halloween","Damage":67,"RPM":650,"Damage_reduc":2,"Min_damage":41,"Min_range":12,"Class":"R","Archetype":"R","Camo":"Halloween","Repair_num":24960,"Shop_name":"ar06_hlw01_shop"},
{"key":"ZX84C Halloween","Damage":63,"RPM":750,"Damage_reduc":2.8,"Min_damage":38,"Min_range":8.3,"Class":"E","Archetype":"E","Camo":"Halloween","Repair_num":4360,"Shop_name":"smg07_hlw01_shop"},
{"key":"Gu1 Christmas","Damage":55,"RPM":670,"Damage_reduc":2.6,"Min_damage":38,"Min_range":8,"Class":"E","Archetype":"E","Camo":"Christmas","Repair_num":4360,"Shop_name":"smg12_xmas_shop"},
{"key":"Vec 5 Christmas","Damage":65,"RPM":820,"Damage_reduc":2.6,"Min_damage":32,"Min_range":12,"Class":"E","Archetype":"E","Camo":"Christmas","Repair_num":24960,"Shop_name":"smg03_xmas_shop"},
{"key":"MD9 Christmas","Damage":75,"RPM":300,"Damage_reduc":1.2,"Min_damage":32,"Min_range":12,"Class":"A","Archetype":"A","Camo":"Christmas","Repair_num":4800,"Shop_name":"pt07_xmas_shop"},
{"key":"Eagle Eye Christmas","Damage":120,"RPM":270,"Damage_reduc":1.2,"Min_damage":32,"Min_range":10,"Class":"A","Archetype":"A","Camo":"Christmas","Repair_num":5500,"Shop_name":"pt01_xmas_shop"},
{"key":"Everest Christmas","Damage":320,"RPM":39,"Damage_reduc":2,"Min_damage":40,"Min_range":70,"Class":"S","Archetype":"S","Camo":"Christmas","Repair_num":12950,"Shop_name":"sr03_xmas_shop"},
{"key":"BT50 Christmas","Damage":300,"RPM":215,"Damage_reduc":2,"Min_damage":40,"Min_range":70,"Class":"S","Archetype":"S","Camo":"Christmas","Repair_num":30625,"Shop_name":"sr04_xmas_shop"},
{"key":"LMG 240 Christmas","Damage":70,"RPM":600,"Damage_reduc":2.2,"Min_damage":40,"Min_range":8,"Class":"R","Archetype":"R","Camo":"Christmas","Repair_num":30625,"Shop_name":"mg01_xmas_shop"},
{"key":"CCR Christmas","Damage":63,"RPM":700,"Damage_reduc":2,"Min_damage":42,"Min_range":11,"Class":"R","Archetype":"R","Camo":"Christmas","Repair_num":30625,"Shop_name":"ar20_xmas_shop"},
{"key":"A3 9mm Winter","Damage":65,"RPM":830,"Damage_reduc":2.4,"Min_damage":32,"Min_range":10.5,"Class":"E","Archetype":"E","Camo":"Winter","Repair_num":24960,"Shop_name":"smg11_camo02_shop"},
{"key":"TWM Winter","Damage":320,"RPM":50,"Damage_reduc":2,"Min_damage":40,"Min_range":70,"Class":"S","Archetype":"S","Camo":"Winter","Repair_num":3900,"Shop_name":"sr14_camo02_shop"},
{"key":"M217 Winter","Damage":350,"RPM":44,"Damage_reduc":2,"Min_damage":40,"Min_range":70,"Class":"S","Archetype":"S","Camo":"Winter","Repair_num":24960,"Shop_name":"sr08_camo02_shop"},
{"key":"A3 H-BAR Winter","Damage":80,"RPM":600,"Damage_reduc":2,"Min_damage":40,"Min_range":15,"Class":"R","Archetype":"R","Camo":"Winter","Repair_num":3900,"Shop_name":"mg08_camo02_shop"},
{"key":"M9A1 Winter","Damage":85,"RPM":345,"Damage_reduc":1,"Min_damage":42,"Min_range":9,"Class":"A","Archetype":"A","Camo":"Winter","Repair_num":780,"Shop_name":"pt06_camo02_shop"},
{"key":"ZX84 USP Winter","Damage":95,"RPM":325,"Damage_reduc":1,"Min_damage":42,"Min_range":11.5,"Class":"A","Archetype":"A","Camo":"Winter","Repair_num":5000,"Shop_name":"pt03_camo02_shop"},
{"key":"AC7 SNR Winter","Damage":210,"RPM":270,"Damage_reduc":2,"Min_damage":40,"Min_range":60,"Class":"S","Archetype":"S","Camo":"Winter","Repair_num":2184,"Shop_name":"sr05_camo02_shop"},
{"key":"PDW 19 Winter","Damage":60,"RPM":900,"Damage_reduc":2.5,"Min_damage":38,"Min_range":7.5,"Class":"E","Archetype":"E","Camo":"Winter","Repair_num":6990,"Shop_name":"smg09_camo02_shop"},
{"key":"R4A1 Winter","Damage":75,"RPM":680,"Damage_reduc":2,"Min_damage":45,"Min_range":15.5,"Class":"R","Archetype":"R","Camo":"Winter","Repair_num":6990,"Shop_name":"ar02_camo02_shop"},
{"key":"ZX84 SMG Winter","Damage":66,"RPM":800,"Damage_reduc":2.8,"Min_damage":40,"Min_range":11.5,"Class":"E","Archetype":"E","Camo":"Winter","Repair_num":6240,"Shop_name":"smg04_camo02_shop"},
{"key":"M9551 Winter","Damage":70,"RPM":800,"Damage_reduc":2,"Min_damage":41,"Min_range":13,"Class":"R","Archetype":"R","Camo":"Winter","Repair_num":24960,"Shop_name":"ar07_camo02_shop"},
{"key":"SVK Jungle","Damage":190,"RPM":250,"Damage_reduc":2,"Min_damage":75,"Min_range":60,"Class":"S","Archetype":"S","Camo":"Jungle","Repair_num":3510,"Shop_name":"sr02_camo03_shop"},
{"key":"ZX84K Jungle","Damage":73,"RPM":650,"Damage_reduc":2,"Min_damage":41,"Min_range":12,"Class":"R","Archetype":"R","Camo":"Jungle","Repair_num":24960,"Shop_name":"ar06_camo03_shop"},
{"key":"MM28 Jungle","Damage":61,"RPM":800,"Damage_reduc":3,"Min_damage":32,"Min_range":9,"Class":"E","Archetype":"E","Camo":"Jungle","Repair_num":24960,"Shop_name":"smg01_camo03_shop"},
{"key":"FY LMG Specops MK01","Damage":90,"RPM":530,"Damage_reduc":1,"Min_damage":40,"Min_range":14.5,"Class":"R","Archetype":"R","Camo":"Specops MK01","Repair_num":0,"Shop_name":"mg04_zsd01_shop"},
{"key":"LMG3 Specops MK01","Damage":64,"RPM":1000,"Damage_reduc":2.2,"Min_damage":40,"Min_range":14,"Class":"R","Archetype":"R","Camo":"Specops MK01","Repair_num":0,"Shop_name":"mg09_zsd01_shop"},
{"key":"RK14 MK60","Damage":225,"RPM":155,"Damage_reduc":2,"Min_damage":75,"Min_range":70,"Class":"S","Archetype":"S","Camo":"MK60","Repair_num":5400,"Shop_name":"sr13_zsd01_shop"},
{"key":"CH 9mm MK60","Damage":62,"RPM":800,"Damage_reduc":2.6,"Min_damage":32,"Min_range":11,"Class":"E","Archetype":"E","Camo":"MK60","Repair_num":3510,"Shop_name":"smg30_zsd01_shop"},
{"key":"R60E4 MK60","Damage":80,"RPM":500,"Damage_reduc":2.2,"Min_damage":40,"Min_range":13,"Class":"R","Archetype":"R","Camo":"MK60","Repair_num":9600,"Shop_name":"mg12_zsd01_shop"},
{"key":"R107 Gamescom","Damage":280,"RPM":130,"Damage_reduc":2,"Min_damage":100,"Min_range":70,"Class":"S","Archetype":"S","Camo":"Gamescom","Repair_num":3510,"Shop_name":"sr15_gc01_shop"},
{"key":"Exar-H Gamescom","Damage":80,"RPM":600,"Damage_reduc":1,"Min_damage":45,"Min_range":14,"Class":"R","Archetype":"R","Camo":"Gamescom","Repair_num":5400,"Shop_name":"ar11_gc01_shop"},
{"key":"AC7 SMG Gamescom","Damage":70,"RPM":750,"Damage_reduc":3.1,"Min_damage":30,"Min_range":10,"Class":"E","Archetype":"E","Camo":"Gamescom","Repair_num":5400,"Shop_name":"smg08_gc01_shop"},
{"key":"S18G Platinum","Damage":50,"RPM":800,"Damage_reduc":1,"Min_damage":32,"Min_range":10,"Class":"A","Archetype":"A","Camo":"Platinum","Repair_num":20000,"Shop_name":"pt21_camo01_shop"},
{"key":"R4 CQB Platinum","Damage":55,"RPM":840,"Damage_reduc":2.8,"Min_damage":32,"Min_range":8,"Class":"E","Archetype":"E","Camo":"Platinum","Repair_num":4360,"Shop_name":"smg13_camo01_shop"},
{"key":"SVK Shiny","Damage":170,"RPM":250,"Damage_reduc":2,"Min_damage":75,"Min_range":70,"Class":"S","Archetype":"S","Camo":"Shiny","Repair_num":24960,"Shop_name":"sr02_camo05_shop"},
{"key":"FY-9 Shiny","Damage":79,"RPM":720,"Damage_reduc":3.1,"Min_damage":39,"Min_range":12,"Class":"E","Archetype":"E","Camo":"Shiny","Repair_num":24960,"Shop_name":"smg06_camo05_shop"},
{"key":"FY-103 Shiny","Damage":85,"RPM":610,"Damage_reduc":1,"Min_damage":45,"Min_range":14,"Class":"R","Archetype":"R","Camo":"Shiny","Repair_num":24960,"Shop_name":"ar04_camo05_shop"},
{"key":"STCC Shiny","Damage":65,"RPM":650,"Damage_reduc":1.2,"Min_damage":32,"Min_range":10,"Class":"A","Archetype":"A","Camo":"Shiny","Repair_num":20000,"Shop_name":"pt10_camo05_shop"},
{"key":"FY LMG Basic","Damage":65,"RPM":530,"Damage_reduc":2,"Min_damage":45,"Min_range":11,"Class":"R","Archetype":"R","Camo":"Basic","Repair_num":12950,"Shop_name":"mg04_set01_shop"},
{"key":"R4A1 Basic","Damage":72,"RPM":680,"Damage_reduc":2,"Min_damage":41,"Min_range":14,"Class":"R","Archetype":"R","Camo":"Basic","Repair_num":24960,"Shop_name":"ar02_set01_shop"},
{"key":"Vec 5 Basic","Damage":58,"RPM":770,"Damage_reduc":3.1,"Min_damage":25,"Min_range":8.5,"Class":"E","Archetype":"E","Camo":"Basic","Repair_num":24960,"Shop_name":"smg03_set01_shop"},
{"key":"FY-9 Basic","Damage":70,"RPM":720,"Damage_reduc":3.1,"Min_damage":39,"Min_range":10,"Class":"E","Archetype":"E","Camo":"Basic","Repair_num":12950,"Shop_name":"smg06_set01_shop"},
{"key":"Garota Basic","Damage":200,"RPM":400,"Damage_reduc":2,"Min_damage":75,"Min_range":50,"Class":"S","Archetype":"S","Camo":"Basic","Repair_num":24960,"Shop_name":"sr01_set01_shop"},
{"key":"TWM Basic","Damage":280,"RPM":44,"Damage_reduc":2,"Min_damage":40,"Min_range":60,"Class":"S","Archetype":"S","Camo":"Basic","Repair_num":12950,"Shop_name":"sr14_set01_shop"},
{"key":"FY-103 Basic","Damage":67,"RPM":600,"Damage_reduc":2,"Min_damage":45,"Min_range":10.5,"Class":"R","Archetype":"R","Camo":"Basic","Repair_num":12950,"Shop_name":"ar04_set01_shop"},
{"key":"A3 HBAR Special","Damage":72,"RPM":620,"Damage_reduc":2.2,"Min_damage":40,"Min_range":13,"Class":"R","Archetype":"R","Camo":"Special","Repair_num":6240,"Shop_name":"mg08_zsd01_shop"},
{"key":"ZX84 MG Special","Damage":63,"RPM":625,"Damage_reduc":2.2,"Min_damage":40,"Min_range":12,"Class":"R","Archetype":"R","Camo":"Special","Repair_num":2184,"Shop_name":"mg06_zsd01_shop"},
{"key":"Garota Special","Damage":200,"RPM":440,"Damage_reduc":2,"Min_damage":75,"Min_range":70,"Class":"S","Archetype":"S","Camo":"Special","Repair_num":6240,"Shop_name":"sr01_zsd01_shop"},
{"key":"T27 Desert Camo","Damage":74,"RPM":620,"Damage_reduc":2,"Min_damage":45,"Min_range":13,"Class":"R","Archetype":"R","Camo":"Desert Camo","Repair_num":30625,"Shop_name":"ar16_camo06_shop"},
{"key":"Q-92 Desert Camo","Damage":65,"RPM":290,"Damage_reduc":1.2,"Min_damage":32,"Min_range":12,"Class":"A","Archetype":"A","Camo":"Desert Camo","Repair_num":5200,"Shop_name":"pt23_camo06_shop"},
{"key":"Ch 9mm Desert Camo","Damage":62,"RPM":800,"Damage_reduc":3.1,"Min_damage":32,"Min_range":10,"Class":"E","Archetype":"E","Camo":"Desert Camo","Repair_num":30625,"Shop_name":"smg30_camo06_shop"},
{"key":"Q-88 Desert Camo","Damage":200,"RPM":180,"Damage_reduc":2,"Min_damage":11,"Min_range":70,"Class":"S","Archetype":"S","Camo":"Desert Camo","Repair_num":24960,"Shop_name":"sr30_camo06_shop"},
{"key":"FY-103 City","Damage":76,"RPM":600,"Damage_reduc":1,"Min_damage":45,"Min_range":13,"Class":"R","Archetype":"R","Camo":"City","Repair_num":24960,"Shop_name":"ar04_camo04_shop"},
{"key":"Vec 5 City","Damage":58,"RPM":780,"Damage_reduc":3.1,"Min_damage":28,"Min_range":9.5,"Class":"E","Archetype":"E","Camo":"City","Repair_num":24960,"Shop_name":"smg03_camo04_shop"},
{"key":"AY 550 City","Damage":175,"RPM":245,"Damage_reduc":2,"Min_damage":75,"Min_range":68,"Class":"S","Archetype":"S","Camo":"City","Repair_num":24960,"Shop_name":"sr22_camo04_shop"},
{"key":"BT50 NY","Damage":350,"RPM":215,"Damage_reduc":2,"Min_damage":40,"Min_range":70,"Class":"S","Archetype":"S","Camo":"NY","Repair_num":5400,"Shop_name":"sr04_cny01_shop"},
{"key":"GU1 NY","Damage":60,"RPM":670,"Damage_reduc":2.4,"Min_damage":38,"Min_range":9.5,"Class":"E","Archetype":"E","Camo":"NY","Repair_num":2184,"Shop_name":"smg12_cny01_shop"},
{"key":"Eagle Eye NY","Damage":125,"RPM":270,"Damage_reduc":3,"Min_damage":50,"Min_range":10,"Class":"A","Archetype":"A","Camo":"NY","Repair_num":5500,"Shop_name":"pt01_cny01_shop"},
{"key":"CCR NY","Damage":77,"RPM":700,"Damage_reduc":1,"Min_damage":50,"Min_range":16,"Class":"R","Archetype":"R","Camo":"NY","Repair_num":5400,"Shop_name":"ar20_cny01_shop"},
{"key":"GU2 Korea Anniversary","Damage":60,"RPM":670,"Damage_reduc":2,"Min_damage":41,"Min_range":11,"Class":"R","Archetype":"R","Camo":"Korea Anniversary","Repair_num":1872,"Shop_name":"ar09_kra01_shop"},
{"key":"GU5 Korea Anniversary","Damage":65,"RPM":330,"Damage_reduc":1.2,"Min_damage":32,"Min_range":9.5,"Class":"A","Archetype":"A","Camo":"Korea Anniversary","Repair_num":930,"Shop_name":"pt08_kra01_shop"},
{"key":"GU7 Korea Anniversary","Damage":55,"RPM":1000,"Damage_reduc":2.4,"Min_damage":32,"Min_range":10.5,"Class":"E","Archetype":"E","Camo":"Korea Anniversary","Repair_num":24960,"Shop_name":"smg14_kra01_shop"},
{"key":"TWM Korea Anniversary","Damage":320,"RPM":49,"Damage_reduc":2,"Min_damage":40,"Min_range":70,"Class":"S","Archetype":"S","Camo":"Korea Anniversary","Repair_num":24960,"Shop_name":"sr14_kra01_shop"},
{"key":"Hex AutoRevolver Black Dragon","Damage":140,"RPM":250,"Damage_reduc":1.2,"Min_damage":32,"Min_range":12,"Class":"A","Archetype":"A","Camo":"Black Dragon","Repair_num":5500,"Shop_name":"pt26_set02_shop"},
{"key":"R4 CQB Black Dragon","Damage":75,"RPM":900,"Damage_reduc":2,"Min_damage":38,"Min_range":10,"Class":"E","Archetype":"E","Camo":"Black Dragon","Repair_num":1872,"Shop_name":"smg13_set02_shop"},
{"key":"F2000 Black Dragon","Damage":70,"RPM":850,"Damage_reduc":2,"Min_damage":41,"Min_range":14,"Class":"R","Archetype":"R","Camo":"Black Dragon","Repair_num":3510,"Shop_name":"ar10_set02_shop"},
{"key":"M217 Black Dragon","Damage":340,"RPM":44,"Damage_reduc":2,"Min_damage":40,"Min_range":70,"Class":"S","Archetype":"S","Camo":"Black Dragon","Repair_num":6240,"Shop_name":"sr08_set02_shop"},
{"key":"Hex AutoRevolver Scarlet Dragon","Damage":130,"RPM":230,"Damage_reduc":1.2,"Min_damage":32,"Min_range":12,"Class":"A","Archetype":"A","Camo":"Scarlet Dragon","Repair_num":5500,"Shop_name":"pt26_set04_shop"},
{"key":"R4 CQB Scarlet Dragon","Damage":65,"RPM":850,"Damage_reduc":2,"Min_damage":38,"Min_range":9,"Class":"E","Archetype":"E","Camo":"Scarlet Dragon","Repair_num":1872,"Shop_name":"smg13_set04_shop"},
{"key":"F2000 Scarlet Dragon","Damage":65,"RPM":830,"Damage_reduc":2,"Min_damage":41,"Min_range":12,"Class":"R","Archetype":"R","Camo":"Scarlet Dragon","Repair_num":3510,"Shop_name":"ar10_set04_shop"},
{"key":"M217 Scarlet Dragon","Damage":340,"RPM":44,"Damage_reduc":2,"Min_damage":40,"Min_range":70,"Class":"S","Archetype":"S","Camo":"Scarlet Dragon","Repair_num":6240,"Shop_name":"sr08_set04_shop"},
{"key":"Hex AutoRevolver Jade Dragon","Damage":120,"RPM":215,"Damage_reduc":1.2,"Min_damage":32,"Min_range":12,"Class":"A","Archetype":"A","Camo":"Jade Dragon","Repair_num":5500,"Shop_name":"pt26_set03_shop"},
{"key":"R4 CQB Jade Dragon","Damage":55,"RPM":800,"Damage_reduc":2,"Min_damage":38,"Min_range":8,"Class":"E","Archetype":"E","Camo":"Jade Dragon","Repair_num":1872,"Shop_name":"smg13_set03_shop"},
{"key":"F2000 Jade Dragon","Damage":60,"RPM":800,"Damage_reduc":2,"Min_damage":41,"Min_range":10,"Class":"R","Archetype":"R","Camo":"Jade Dragon","Repair_num":3510,"Shop_name":"ar10_set03_shop"},
{"key":"M217 Jade Dragon","Damage":300,"RPM":43,"Damage_reduc":2,"Min_damage":40,"Min_range":70,"Class":"S","Archetype":"S","Camo":"Jade Dragon","Repair_num":6240,"Shop_name":"sr08_set03_shop"},
{"key":"MP717 Sneakpeak","Damage":58,"RPM":900,"Damage_reduc":2.5,"Min_damage":45,"Min_range":7.5,"Class":"E","Archetype":"E","Camo":"Sneakpeak","Repair_num":24960,"Shop_name":"smg41_ww2_shop"},
{"key":"TWM X308 Sneakpeak","Damage":350,"RPM":47,"Damage_reduc":2,"Min_damage":75,"Min_range":80,"Class":"S","Archetype":"S","Camo":"Sneakpeak","Repair_num":6240,"Shop_name":"sr31_shop"},
{"key":"MM1981/30 Sneakpeak","Damage":285,"RPM":50,"Damage_reduc":2,"Min_damage":75,"Min_range":70,"Class":"S","Archetype":"S","Camo":"Sneakpeak","Repair_num":12950,"Shop_name":"sr41_shop"},
{"key":"HMGL32A7 Oblivion Sneakpeak","Damage":100,"RPM":60,"Damage_reduc":2,"Min_damage":11,"Min_range":70,"Class":"special","Archetype":"special","Camo":"Sneakpeak","Repair_num":0,"Shop_name":"gl01_zsd01_shop"},
{"key":"Bumblebee Sneakpeak","Damage":72,"RPM":560,"Damage_reduc":2.2,"Min_damage":40,"Min_range":13,"Class":"R","Archetype":"R","Camo":"Sneakpeak","Repair_num":3900,"Shop_name":"mg10_shop"},
{"key":"AY Gel. CP334 Sneakpeak","Damage":110,"RPM":320,"Damage_reduc":1.2,"Min_damage":32,"Min_range":12,"Class":"A","Archetype":"A","Camo":"Sneakpeak","Repair_num":4680,"Shop_name":"pt14_shop"},
{"key":"M1895 Sneakpeak","Damage":117,"RPM":190,"Damage_reduc":3,"Min_damage":45,"Min_range":11,"Class":"A","Archetype":"A","Camo":"Sneakpeak","Repair_num":5400,"Shop_name":"pt24_shop"},
{"key":"Bellum Sneakpeak","Damage":95,"RPM":280,"Damage_reduc":1.5,"Min_damage":65,"Min_range":11,"Class":"A","Archetype":"A","Camo":"Sneakpeak","Repair_num":20000,"Shop_name":"pt41_ww2_shop"},
{"key":"FCG-R3 K1 Sneakpeak","Damage":800,"RPM":40,"Damage_reduc":0.08,"Min_damage":800,"Min_range":500,"Class":"special","Archetype":"special","Camo":"Sneakpeak","Repair_num":9600,"Shop_name":"rg01_shop"},
{"key":"FCG-R3 Sneakpeak","Damage":800,"RPM":40,"Damage_reduc":0.08,"Min_damage":800,"Min_range":500,"Class":"special","Archetype":"special","Camo":"Sneakpeak","Repair_num":0,"Shop_name":"rg01_zsd01_shop"},
{"key":"R32A1 Sneakpeak","Damage":100,"RPM":60,"Damage_reduc":2,"Min_damage":11,"Min_range":70,"Class":"special","Archetype":"special","Camo":"Sneakpeak","Repair_num":2496,"Shop_name":"gl01_shop"},
{"key":"AR88 Sneakpeak","Damage":75,"RPM":500,"Damage_reduc":1.2,"Min_damage":45,"Min_range":13,"Class":"R","Archetype":"R","Camo":"Sneakpeak","Repair_num":24960,"Shop_name":"ar41_shop"}];
	localStorage.setItem('weapons', JSON.stringify(weapons));
// !!!!missing shotguns

	var vests = [{"key":"Default","HP":225,"RFProtection":"FALSE","Repel_shot":"FALSE","Armor_per_sec":0,"Explo_res":0,"Melee_res":0,"Special":"none","Repair_num":0,"Shop_name":"@ui_armor_shared_vest_01_name"},
{"key":"Anti-Melee","HP":225,"RFProtection":"FALSE","Repel_shot":"FALSE","Armor_per_sec":0,"Explo_res":0,"Melee_res":0.2,"Special":"none","Repair_num":811,"Shop_name":"@ui_armor_shared_vest_05_name"},
{"key":"Atlant","HP":225,"RFProtection":"FALSE","Repel_shot":"FALSE","Armor_per_sec":0,"Explo_res":0.25,"Melee_res":0,"Special":"none","Repair_num":2288,"Shop_name":"@ui_armor_sniper_vest_01_name"},
{"key":"Anti-Explosive","HP":225,"RFProtection":"FALSE","Repel_shot":"FALSE","Armor_per_sec":0,"Explo_res":0.25,"Melee_res":0,"Special":"none","Repair_num":913,"Shop_name":"@ui_armor_shared_vest_03_name"},
{"key":"Assault","HP":225,"RFProtection":"TRUE","Repel_shot":"FALSE","Armor_per_sec":0,"Explo_res":0,"Melee_res":0.2,"Special":"none","Repair_num":1859,"Shop_name":"@ui_armor_shared_vest_09_name"},
{"key":"Strikeforce","HP":225,"RFProtection":"TRUE","Repel_shot":"FALSE","Armor_per_sec":0,"Explo_res":0.25,"Melee_res":0,"Special":"none","Repair_num":2288,"Shop_name":"@ui_armor_soldier_vest_01_name"},
{"key":"Titan-II","HP":225,"RFProtection":"FALSE","Repel_shot":"TRUE","Armor_per_sec":0,"Explo_res":0.25,"Melee_res":0,"Special":"none","Repair_num":807,"Shop_name":"@ui_armor_shared_vest_07_name"},
{"key":"Anti-Sniper","HP":225,"RFProtection":"FALSE","Repel_shot":"TRUE","Armor_per_sec":0,"Explo_res":0,"Melee_res":0,"Special":"none","Repair_num":819,"Shop_name":"@ui_armor_engineer_vest_01_name"},
{"key":"Special Medic/Rifle","HP":225,"RFProtection":"TRUE","Repel_shot":"FALSE","Armor_per_sec":0,"Explo_res":0,"Melee_res":0,"Special":"none","Repair_num":819,"Shop_name":"@ui_armor_medic_vest_02_name"},
{"key":"Plate","HP":225,"RFProtection":"FALSE","Repel_shot":"TRUE","Armor_per_sec":0,"Explo_res":0.25,"Melee_res":0,"Special":"none","Repair_num":2288,"Shop_name":"@ui_armor_engineer_vest_02_name"},
{"key":"Hawk","HP":225,"RFProtection":"TRUE","Repel_shot":"FALSE","Armor_per_sec":0,"Explo_res":0.3,"Melee_res":0.2,"Special":"10% faster swap","Repair_num":4070,"Shop_name":"@ui_armor_sniper_vest_03_name"},
{"key":"Scout","HP":225,"RFProtection":"TRUE","Repel_shot":"TRUE","Armor_per_sec":0,"Explo_res":0,"Melee_res":0,"Special":"none","Repair_num":2288,"Shop_name":"@ui_armor_medic_vest_01_name"},
{"key":"Special Sniper","HP":225,"RFProtection":"FALSE","Repel_shot":"FALSE","Armor_per_sec":0,"Explo_res":0,"Melee_res":0,"Special":"none","Repair_num":819,"Shop_name":"@ui_armor_sniper_vest_02_name"},
{"key":"Crown","HP":250,"RFProtection":"FALSE","Repel_shot":"FALSE","Armor_per_sec":3,"Explo_res":0.25,"Melee_res":0,"Special":"none","Repair_num":9616,"Shop_name":"@ui_armor_shared_vest_crown_02_name"},
{"key":"Rhino","HP":255,"RFProtection":"FALSE","Repel_shot":"FALSE","Armor_per_sec":0,"Explo_res":0.3,"Melee_res":0.2,"Special":"none","Repair_num":4070,"Shop_name":"@ui_armor_medic_vest_03_name"},
{"key":"Komodo","HP":255,"RFProtection":"FALSE","Repel_shot":"FALSE","Armor_per_sec":0,"Explo_res":0.3,"Melee_res":0,"Special":"none","Repair_num":4070,"Shop_name":"@ui_armor_engineer_vest_03_name"},
{"key":"Christmas","HP":260,"RFProtection":"FALSE","Repel_shot":"FALSE","Armor_per_sec":0,"Explo_res":0.25,"Melee_res":0,"Special":"none","Repair_num":2288,"Shop_name":"@ui_armor_shared_vest_xmas_01_name"},
{"key":"Frontline","HP":275,"RFProtection":"FALSE","Repel_shot":"FALSE","Armor_per_sec":4,"Explo_res":0,"Melee_res":0,"Special":"none","Repair_num":3288,"Shop_name":"@ui_armor_shared_vest_02_name"},
{"key":"Warlord Medic","HP":275,"RFProtection":"TRUE","Repel_shot":"FALSE","Armor_per_sec":8,"Explo_res":0,"Melee_res":0,"Special":"none","Repair_num":9620,"Shop_name":"@ui_armor_medic_vest_04_name"},
{"key":"Warlord Engi","HP":275,"RFProtection":"FALSE","Repel_shot":"FALSE","Armor_per_sec":8,"Explo_res":0,"Melee_res":0,"Special":"none","Repair_num":9620,"Shop_name":"@ui_armor_engineer_vest_04_name"},
{"key":"Warlord Rifle","HP":275,"RFProtection":"FALSE","Repel_shot":"FALSE","Armor_per_sec":8,"Explo_res":0,"Melee_res":0,"Special":"10% faster reload","Repair_num":9620,"Shop_name":"@ui_armor_soldier_vest_04_name"},
{"key":"Warlord Sniper","HP":275,"RFProtection":"FALSE","Repel_shot":"FALSE","Armor_per_sec":8,"Explo_res":0.3,"Melee_res":0,"Special":"none","Repair_num":9620,"Shop_name":"@ui_armor_sniper_vest_04_name"},
{"key":"Corundum","HP":275,"RFProtection":"FALSE","Repel_shot":"FALSE","Armor_per_sec":0,"Explo_res":0,"Melee_res":0.2,"Special":"none","Repair_num":1859,"Shop_name":"@ui_armor_shared_vest_04_name"},
{"key":"Python","HP":275,"RFProtection":"TRUE","Repel_shot":"FALSE","Armor_per_sec":0,"Explo_res":0.3,"Melee_res":0,"Special":"none","Repair_num":4070,"Shop_name":"@ui_armor_soldier_vest_03_name"},
{"key":"Extra Strong","HP":275,"RFProtection":"FALSE","Repel_shot":"FALSE","Armor_per_sec":0,"Explo_res":0,"Melee_res":0,"Special":"none","Repair_num":913,"Shop_name":"@ui_armor_shared_vest_06_name"}];
	localStorage.setItem('vests', JSON.stringify(vests));
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
	JSON.stringify(localStorage.setItem("helmets", arr));
};

function setGloves(arr){	
	JSON.stringify(localStorage.setItem("gloves", arr));
};

function setBoots(arr){
	JSON.stringify(localStorage.setItem("boots", arr));
};

function setKnives(arr){
	JSON.stringify(localStorage.setItem("knives", arr));
};

function setWeapons(arr){
	JSON.stringify(localStorage.setItem("weapons", arr));
};

function setVests(arr){
	JSON.stringify(localStorage.setItem("vests", arr));
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






















