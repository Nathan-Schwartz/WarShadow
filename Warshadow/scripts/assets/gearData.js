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
	

	var gloves = [{"key":"Knockdown Gloves","recoil_reduc":0,"Knockdown":"TRUE","Damage_reduc":0,"Reload":0,"Melee_range":0,"Melee_speed":0,"Swap_speed":0,"Spread_reduc":0,"Repair_num":532,"Shop_name":"soldier_hands_01"},
{"key":"Engineer Gloves","recoil_reduc":0,"Knockdown":"FALSE","Damage_reduc":0,"Reload":0.8,"Melee_range":0,"Melee_speed":0,"Swap_speed":0,"Spread_reduc":0,"Repair_num":1700,"Shop_name":"engineer_hands_01"},
{"key":"Mobility Gloves","recoil_reduc":0,"Knockdown":"FALSE","Damage_reduc":0,"Reload":0.8,"Melee_range":0,"Melee_speed":0,"Swap_speed":1.2,"Spread_reduc":0,"Repair_num":1700,"Shop_name":"soldier_hands_03"},
{"key":"Multipurpose Gloves","recoil_reduc":0,"Knockdown":"FALSE","Damage_reduc":0,"Reload":0.8,"Melee_range":0,"Melee_speed":0,"Swap_speed":1.2,"Spread_reduc":0,"Repair_num":1700,"Shop_name":"sniper_hands_01"},
{"key":"Christmas Gloves","recoil_reduc":0,"Knockdown":"FALSE","Damage_reduc":0,"Reload":0.8,"Melee_range":0,"Melee_speed":0,"Swap_speed":0,"Spread_reduc":0,"Repair_num":624,"Shop_name":"shared_hands_xmas_01"},
{"key":"Special Edition Gloves","recoil_reduc":0,"Knockdown":"FALSE","Damage_reduc":0,"Reload":0,"Melee_range":0,"Melee_speed":0,"Swap_speed":0,"Spread_reduc":0,"Repair_num":0,"Shop_name":"shared_hands_promo_01"},
{"key":"Elite Crown Gloves","recoil_reduc":0,"Knockdown":"FALSE","Damage_reduc":0.8,"Reload":0.8,"Melee_range":0,"Melee_speed":0,"Swap_speed":1.2,"Spread_reduc":0.85,"Repair_num":1700,"Shop_name":"shared_hands_crown_02"},
{"key":"Assault Gloves","recoil_reduc":0,"Knockdown":"FALSE","Damage_reduc":0,"Reload":0,"Melee_range":0,"Melee_speed":0,"Swap_speed":1.2,"Spread_reduc":0,"Repair_num":532,"Shop_name":"shared_hands_06"},
{"key":"Carbon Fibre Gloves","recoil_reduc":0,"Knockdown":"FALSE","Damage_reduc":0,"Reload":0.8,"Melee_range":1.2,"Melee_speed":1.35,"Swap_speed":0,"Spread_reduc":0,"Repair_num":930,"Shop_name":"shared_hands_05"},
{"key":"Combat Gloves","recoil_reduc":0,"Knockdown":"TRUE","Damage_reduc":0,"Reload":0.8,"Melee_range":0,"Melee_speed":0,"Swap_speed":0,"Spread_reduc":0,"Repair_num":658,"Shop_name":"shared_hands_04"},
{"key":"Melee hit Gloves","recoil_reduc":0,"Knockdown":"FALSE","Damage_reduc":0,"Reload":0,"Melee_range":1.2,"Melee_speed":1.35,"Swap_speed":0,"Spread_reduc":0,"Repair_num":760,"Shop_name":"shared_hands_03"},
{"key":"Protective Gloves","recoil_reduc":0,"Knockdown":"FALSE","Damage_reduc":0.8,"Reload":0,"Melee_range":0,"Melee_speed":0,"Swap_speed":0,"Spread_reduc":0,"Repair_num":405,"Shop_name":"shared_hands_02"},
{"key":"Default Gloves","recoil_reduc":0,"Knockdown":"FALSE","Damage_reduc":0,"Reload":0,"Melee_range":0,"Melee_speed":0,"Swap_speed":0,"Spread_reduc":0,"Repair_num":0,"Shop_name":"shared_hands_01"},
{"key":"Light Gloves","recoil_reduc":0,"Knockdown":"FALSE","Damage_reduc":0,"Reload":0.8,"Melee_range":0,"Melee_speed":0,"Swap_speed":0,"Spread_reduc":0,"Repair_num":1700,"Shop_name":"medic_hands_01"},
{"key":"Warlord Gloves","recoil_reduc":0.85,"Knockdown":"FALSE","Damage_reduc":0,"Reload":0.85,"Melee_range":0,"Melee_speed":0,"Swap_speed":1.25,"Spread_reduc":0,"Repair_num":6010,"Shop_name":"shared_hands_07"}];
	localStorage.setItem('gloves', JSON.stringify(gloves));



	var boots = [{"key":"Fast Anti-directional Mine Shoes","Damage_reduc_perc":0.8,"Mine_delay":"TRUE","Crouch_speed":0,"Sprint_speed":0,"Sprint_dur":0,"Slide_dist":0,"Silent":"FALSE","Repair_num":2040,"Shop_name":"engineer_shoes_01"},
{"key":"Gumboots","Damage_reduc_perc":0.8,"Mine_delay":"TRUE","Crouch_speed":0,"Sprint_speed":0,"Sprint_dur":0,"Slide_dist":0,"Silent":"FALSE","Repair_num":1622,"Shop_name":"soldier_shoes_02"},
{"key":"Sapper Shoes","Damage_reduc_perc":0.8,"Mine_delay":"TRUE","Crouch_speed":0,"Sprint_speed":0,"Sprint_dur":0,"Slide_dist":0,"Silent":"FALSE","Repair_num":2040,"Shop_name":"sniper_shoes_01"},
{"key":"Default Boots","Damage_reduc_perc":0,"Mine_delay":"FALSE","Crouch_speed":0,"Sprint_speed":0,"Sprint_dur":0,"Slide_dist":0,"Silent":"FALSE","Repair_num":0,"Shop_name":"shared_shoes_01"},
{"key":"Fast Shoes","Damage_reduc_perc":0,"Mine_delay":"FALSE","Crouch_speed":20,"Sprint_speed":1.25,"Sprint_dur":0,"Slide_dist":0,"Silent":"FALSE","Repair_num":2040,"Shop_name":"shared_shoes_02"},
{"key":"Protective Boots","Damage_reduc_perc":0.8,"Mine_delay":"FALSE","Crouch_speed":0,"Sprint_speed":0,"Sprint_dur":0,"Slide_dist":0,"Silent":"FALSE","Repair_num":355,"Shop_name":"shared_shoes_03"},
{"key":"Sprint Shoes","Damage_reduc_perc":0,"Mine_delay":"FALSE","Crouch_speed":0,"Sprint_speed":0,"Sprint_dur":1.5,"Slide_dist":0,"Silent":"FALSE","Repair_num":930,"Shop_name":"shared_shoes_04"},
{"key":"Light Boots","Damage_reduc_perc":0,"Mine_delay":"FALSE","Crouch_speed":0,"Sprint_speed":1.25,"Sprint_dur":0,"Slide_dist":0,"Silent":"FALSE","Repair_num":1622,"Shop_name":"shared_shoes_05"},
{"key":"Silent Boots","Damage_reduc_perc":0,"Mine_delay":"FALSE","Crouch_speed":0,"Sprint_speed":0,"Sprint_dur":0,"Slide_dist":0,"Silent":"TRUE","Repair_num":845,"Shop_name":"shared_shoes_06"},
{"key":"Spy Shoes","Damage_reduc_perc":0,"Mine_delay":"FALSE","Crouch_speed":0,"Sprint_speed":0,"Sprint_dur":1.5,"Slide_dist":0,"Silent":"TRUE","Repair_num":2040,"Shop_name":"shared_shoes_07"},
{"key":"Sliding Boots","Damage_reduc_perc":0,"Mine_delay":"FALSE","Crouch_speed":0,"Sprint_speed":1.15,"Sprint_dur":1.1,"Slide_dist":1.3,"Silent":"FALSE","Repair_num":1622,"Shop_name":"shared_shoes_08"},
{"key":"Crown Boots","Damage_reduc_perc":0,"Mine_delay":"TRUE","Crouch_speed":0,"Sprint_speed":1.25,"Sprint_dur":1.1,"Slide_dist":0,"Silent":"FALSE","Repair_num":1622,"Shop_name":"shared_shoes_crown_02"},
{"key":"Christmas Boots","Damage_reduc_perc":0,"Mine_delay":"FALSE","Crouch_speed":0,"Sprint_speed":1.2,"Sprint_dur":0,"Slide_dist":0,"Silent":"FALSE","Repair_num":1622,"Shop_name":"shared_shoes_xmas_01"},
{"key":"Anti-directional Mine Boots","Damage_reduc_perc":0.8,"Mine_delay":"TRUE","Crouch_speed":0,"Sprint_speed":0,"Sprint_dur":0,"Slide_dist":0,"Silent":"FALSE","Repair_num":1622,"Shop_name":"soldier_shoes_02"},
{"key":"Warlord Boots","Damage_reduc_perc":0.5,"Mine_delay":"FALSE","Crouch_speed":0,"Sprint_speed":1.2,"Sprint_dur":1.35,"Slide_dist":0,"Silent":"FALSE","Repair_num":1248,"Shop_name":"shared_shoes_09"}];
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


	var weapons = [{"Name":"Exar-L PDW Gold","key":"Exar-L PDW Gold","Damage":80,"RPM":730,"Damage_reduc":3,"Camo":"Vanilla","Repair_num":5100,"Min_damage":35,"Min_range":10.5,"Class":"E","Archetype":"R","Shop_name":"smg31_gold01_shop"},
{"Name":"Exar-L PDW","key":"Exar-L PDW","Damage":80,"RPM":730,"Damage_reduc":3,"Camo":"Vanilla","Repair_num":5100,"Min_damage":35,"Min_range":9.5,"Class":"E","Archetype":"R","Shop_name":"smg31_shop"},
{"Name":"Karkom SMG","key":"Karkom SMG","Damage":75,"RPM":840,"Damage_reduc":3,"Camo":"Vanilla","Repair_num":6990,"Min_damage":38,"Min_range":11,"Class":"E","Archetype":"E","Shop_name":"smg10_shop"},
{"Name":"Micro Oren","key":"Micro Oren","Damage":61,"RPM":1000,"Damage_reduc":3.6,"Camo":"Vanilla","Repair_num":6240,"Min_damage":31,"Min_range":6.5,"Class":"E","Archetype":"E","Shop_name":"smg02_shop"},
{"Name":"AC7 SMG","key":"AC7 SMG","Damage":78,"RPM":780,"Damage_reduc":3.1,"Camo":"Vanilla","Repair_num":5400,"Min_damage":33,"Min_range":12,"Class":"E","Archetype":"E","Shop_name":"smg08_shop"},
{"Name":"MP .38","key":"MP .38","Damage":59,"RPM":1000,"Damage_reduc":3.7,"Camo":"Vanilla","Repair_num":3510,"Min_damage":32,"Min_range":6.5,"Class":"E","Archetype":"E","Shop_name":"smg15_shop"},
{"Name":"CCR CQB","key":"CCR CQB","Damage":70,"RPM":830,"Damage_reduc":3,"Camo":"Vanilla","Repair_num":6990,"Min_damage":32,"Min_range":10.5,"Class":"E","Archetype":"E","Shop_name":"smg25_shop"},
{"Name":"ZX84 UMP","key":"ZX84 UMP","Damage":85,"RPM":700,"Damage_reduc":3.1,"Camo":"Vanilla","Repair_num":6990,"Min_damage":38,"Min_range":9,"Class":"E","Archetype":"E","Shop_name":"smg17_shop"},
{"Name":"Metasoma 83","key":"Metasoma 83","Damage":70,"RPM":800,"Damage_reduc":3.6,"Camo":"Vanilla","Repair_num":5400,"Min_damage":28,"Min_range":7,"Class":"E","Archetype":"E","Shop_name":"smg16_shop"},
{"Name":"MT-19","key":"MT-19","Damage":60,"RPM":900,"Damage_reduc":3,"Camo":"Vanilla","Repair_num":6240,"Min_damage":28,"Min_range":9,"Class":"E","Archetype":"E","Shop_name":"smg24_shop"},
{"Name":"M99AS","key":"M99AS","Damage":60,"RPM":900,"Damage_reduc":3.1,"Camo":"Vanilla","Repair_num":3510,"Min_damage":38,"Min_range":9,"Class":"E","Archetype":"E","Shop_name":"smg05_shop"},
{"Name":"Vec 5","key":"Vec 5","Damage":65,"RPM":770,"Damage_reduc":3,"Camo":"Vanilla","Repair_num":6240,"Min_damage":32,"Min_range":10.5,"Class":"E","Archetype":"E","Shop_name":"smg03_default"},
{"Name":"GU7","key":"GU7","Damage":55,"RPM":950,"Damage_reduc":3.1,"Camo":"Vanilla","Repair_num":5400,"Min_damage":32,"Min_range":8.5,"Class":"E","Archetype":"E","Shop_name":"smg14_shop"},
{"Name":"MM28","key":"MM28","Damage":60,"RPM":860,"Damage_reduc":3,"Camo":"Vanilla","Repair_num":3510,"Min_damage":32,"Min_range":9.5,"Class":"E","Archetype":"E","Shop_name":"smg01_shop"},
{"Name":"A3 9mm","key":"A3 9mm","Damage":62,"RPM":830,"Damage_reduc":3.1,"Camo":"Vanilla","Repair_num":3510,"Min_damage":32,"Min_range":9.5,"Class":"E","Archetype":"E","Shop_name":"smg11_shop"},
{"Name":"FY9","key":"FY9","Damage":70,"RPM":720,"Damage_reduc":3.1,"Camo":"Vanilla","Repair_num":3510,"Min_damage":38,"Min_range":11,"Class":"E","Archetype":"E","Shop_name":"smg06_shop"},
{"Name":"Ch 9mm","key":"Ch 9mm","Damage":62,"RPM":800,"Damage_reduc":3.1,"Camo":"Vanilla","Repair_num":3510,"Min_damage":32,"Min_range":10,"Class":"E","Archetype":"E","Shop_name":"smg30_shop"},
{"Name":"MX4 Storm","key":"MX4 Storm","Damage":64,"RPM":805,"Damage_reduc":1.4,"Camo":"Vanilla","Repair_num":5100,"Min_damage":33,"Min_range":10,"Class":"E","Archetype":"E","Shop_name":"smg26_shop"},
{"Name":"AY 552","key":"AY 552","Damage":63,"RPM":750,"Damage_reduc":3.1,"Camo":"Vanilla","Repair_num":3510,"Min_damage":38,"Min_range":9,"Class":"E","Archetype":"E","Shop_name":"smg23_shop"},
{"Name":"PDW 19","key":"PDW 19","Damage":60,"RPM":750,"Damage_reduc":3,"Camo":"Vanilla","Repair_num":3510,"Min_damage":38,"Min_range":8.5,"Class":"E","Archetype":"E","Shop_name":"smg09_shop"},
{"Name":"ZX84C","key":"ZX84C","Damage":57,"RPM":750,"Damage_reduc":2.8,"Camo":"Vanilla","Repair_num":2184,"Min_damage":38,"Min_range":8.3,"Class":"E","Archetype":"E","Shop_name":"smg07_shop"},
{"Name":"SMG-19 Wisent","key":"SMG-19 Wisent","Damage":66,"RPM":725,"Damage_reduc":3,"Camo":"Vanilla","Repair_num":24960,"Min_damage":32,"Min_range":10,"Class":"E","Archetype":"E","Shop_name":"smg18_shop"},
{"Name":"","key":"R4 CQB","Damage":55,"RPM":840,"Damage_reduc":2.8,"Camo":"Vanilla","Repair_num":1872,"Min_damage":38,"Min_range":8,"Class":"E","Archetype":"E","Shop_name":"smg13_shop"},
{"Name":"GU1","key":"GU1","Damage":60,"RPM":670,"Damage_reduc":2.9,"Camo":"Vanilla","Repair_num":2184,"Min_damage":38,"Min_range":8.5,"Class":"E","Archetype":"E","Shop_name":"smg12_shop"},
{"Name":"ZX84 SMG","key":"ZX84 SMG","Damage":50,"RPM":800,"Damage_reduc":2.8,"Camo":"Vanilla","Repair_num":0,"Min_damage":38,"Min_range":8,"Class":"E","Archetype":"E","Shop_name":"smg04_shop"},
{"Name":"F2000","key":"F2000","Damage":68,"RPM":850,"Damage_reduc":2,"Camo":"Vanilla","Repair_num":3510,"Min_damage":41,"Min_range":14,"Class":"R","Archetype":"R","Shop_name":"ar10_shop"},
{"Name":"Exar-h","key":"Exar-h","Damage":90,"RPM":620,"Damage_reduc":1,"Camo":"Vanilla","Repair_num":6990,"Min_damage":50,"Min_range":16,"Class":"R","Archetype":"R","Shop_name":"ar11_shop"},
{"Name":"CCR","key":"CCR","Damage":77,"RPM":700,"Damage_reduc":1,"Camo":"Vanilla","Repair_num":24960,"Min_damage":50,"Min_range":16,"Class":"R","Archetype":"R","Shop_name":"ar19_shop"},
{"Name":"R249 Para","key":"R249 Para","Damage":75,"RPM":700,"Damage_reduc":2,"Camo":"Vanilla","Repair_num":6990,"Min_damage":40,"Min_range":13,"Class":"R","Archetype":"R","Shop_name":"mg07_shop"},
{"Name":"LMG3","key":"LMG3","Damage":65,"RPM":800,"Damage_reduc":2.2,"Camo":"Vanilla","Repair_num":5400,"Min_damage":40,"Min_range":13,"Class":"R","Archetype":"R","Shop_name":"mg09_shop"},
{"Name":"T27","key":"T27","Damage":80,"RPM":640,"Damage_reduc":1,"Camo":"Vanilla","Repair_num":6990,"Min_damage":50,"Min_range":16,"Class":"R","Archetype":"R","Shop_name":"ar16_shop"},
{"Name":"AR-GAR","key":"AR-GAR","Damage":81,"RPM":630,"Damage_reduc":1.3,"Camo":"Vanilla","Repair_num":30625,"Min_damage":45,"Min_range":15,"Class":"R","Archetype":"R","Shop_name":"ar23_shop"},
{"Name":"ST-AR","key":"ST-AR","Damage":78,"RPM":650,"Damage_reduc":2,"Camo":"Vanilla","Repair_num":3510,"Min_damage":45,"Min_range":12,"Class":"R","Archetype":"R","Shop_name":"ar17_shop"},
{"Name":"FY 47","key":"FY 47","Damage":84,"RPM":600,"Damage_reduc":1,"Camo":"Vanilla","Repair_num":5400,"Min_damage":45,"Min_range":12.5,"Class":"R","Archetype":"R","Shop_name":"ar22_shop"},
{"Name":"M95AR","key":"M95AR","Damage":62,"RPM":810,"Damage_reduc":2,"Camo":"Vanilla","Repair_num":3900,"Min_damage":41,"Min_range":12,"Class":"R","Archetype":"R","Shop_name":"ar07_shop"},
{"Name":"AC7","key":"AC7","Damage":72,"RPM":690,"Damage_reduc":2,"Camo":"Vanilla","Repair_num":2340,"Min_damage":41,"Min_range":14,"Class":"R","Archetype":"R","Shop_name":"ar05_shop"},
{"Name":"AY 551","key":"AY 551","Damage":73,"RPM":670,"Damage_reduc":1.5,"Camo":"Vanilla","Repair_num":6240,"Min_damage":51,"Min_range":13.5,"Class":"R","Archetype":"R","Shop_name":"ar08_shop"},
{"Name":"A3-210","key":"A3-210","Damage":70,"RPM":700,"Damage_reduc":2,"Camo":"Vanilla","Repair_num":3510,"Min_damage":45,"Min_range":13,"Class":"R","Archetype":"R","Shop_name":"ar03_shop"},
{"Name":"FY 103","key":"FY 103","Damage":80,"RPM":600,"Damage_reduc":1,"Camo":"Vanilla","Repair_num":6240,"Min_damage":45,"Min_range":14,"Class":"R","Archetype":"R","Shop_name":"ar04_default"},
{"Name":"LMG 240","key":"LMG 240","Damage":80,"RPM":600,"Damage_reduc":2.2,"Camo":"Vanilla","Repair_num":5400,"Min_damage":40,"Min_range":13,"Class":"R","Archetype":"R","Shop_name":"mg01_shop"},
{"Name":"AC7 MG","key":"AC7 MG","Damage":75,"RPM":600,"Damage_reduc":2.2,"Camo":"Vanilla","Repair_num":6240,"Min_damage":40,"Min_range":15,"Class":"R","Archetype":"R","Shop_name":"mg05_shop"},
{"Name":"A3-HBAR","key":"A3-HBAR","Damage":75,"RPM":580,"Damage_reduc":2,"Camo":"Vanilla","Repair_num":3510,"Min_damage":40,"Min_range":14,"Class":"R","Archetype":"R","Shop_name":"mg08_shop"},
{"Name":"F1000","key":"F1000","Damage":87,"RPM":500,"Damage_reduc":2,"Camo":"Vanilla","Repair_num":6240,"Min_damage":41,"Min_range":14,"Class":"R","Archetype":"R","Shop_name":"ar13_shop"},
{"Name":"Karkom","key":"Karkom","Damage":70,"RPM":620,"Damage_reduc":2,"Camo":"Vanilla","Repair_num":3510,"Min_damage":45,"Min_range":12,"Class":"R","Archetype":"R","Shop_name":"ar01_shop"},
{"Name":"LMG4","key":"LMG4","Damage":80,"RPM":540,"Damage_reduc":2,"Camo":"Vanilla","Repair_num":3510,"Min_damage":40,"Min_range":13.5,"Class":"R","Archetype":"R","Shop_name":"mg02_default"},
{"Name":"GU3","key":"GU3","Damage":65,"RPM":660,"Damage_reduc":2,"Camo":"Vanilla","Repair_num":4360,"Min_damage":40,"Min_range":11,"Class":"R","Archetype":"R","Shop_name":"mg03_shop"},
{"Name":"FY LMG","key":"FY LMG","Damage":80,"RPM":530,"Damage_reduc":1,"Camo":"Vanilla","Repair_num":24960,"Min_damage":40,"Min_range":14.5,"Class":"R","Archetype":"R","Shop_name":"mg04_shop"},
{"Name":"ZX84K","key":"ZX84K","Damage":63,"RPM":650,"Damage_reduc":2,"Camo":"Vanilla","Repair_num":2184,"Min_damage":41,"Min_range":12,"Class":"R","Archetype":"R","Shop_name":"ar06_shop"},
{"Name":"GU2","key":"GU2","Damage":60,"RPM":670,"Damage_reduc":2,"Camo":"Vanilla","Repair_num":1872,"Min_damage":41,"Min_range":11,"Class":"R","Archetype":"R","Shop_name":"ar09_shop"},
{"Name":"ZX84 Mg","key":"ZX84 Mg","Damage":70,"RPM":570,"Damage_reduc":2.2,"Camo":"Vanilla","Repair_num":2184,"Min_damage":40,"Min_range":12,"Class":"R","Archetype":"R","Shop_name":"mg06_shop"},
{"Name":"R16A2 LMG","key":"R16A2 LMG","Damage":60,"RPM":650,"Damage_reduc":2,"Camo":"Vanilla","Repair_num":1872,"Min_damage":45,"Min_range":11.5,"Class":"R","Archetype":"R","Shop_name":"mg21_shop"},
{"Name":"R60E4","key":"R60E4","Damage":75,"RPM":500,"Damage_reduc":2.2,"Camo":"Vanilla","Repair_num":5400,"Min_damage":40,"Min_range":13,"Class":"R","Archetype":"R","Shop_name":"mg12_shop"},
{"Name":"R4A1","key":"R4A1","Damage":55,"RPM":680,"Damage_reduc":2,"Camo":"Vanilla","Repair_num":0,"Min_damage":45,"Min_range":11,"Class":"R","Archetype":"R","Shop_name":"ar02_shop"},
{"Name":"R16A4","key":"R16A4","Damage":75,"RPM":335,"Damage_reduc":2,"Camo":"Vanilla","Repair_num":6240,"Min_damage":45,"Min_range":14,"Class":"R","Archetype":"R","Shop_name":"ar12_shop"},
{"Name":"Garota","key":"Garota","Damage":200,"RPM":400,"Damage_reduc":2,"Camo":"Vanilla","Repair_num":3510,"Min_damage":75,"Min_range":70,"Class":"S","Archetype":"S","Shop_name":"sr01_shop"},
{"Name":"BT-50","key":"BT-50","Damage":350,"RPM":215,"Damage_reduc":2,"Camo":"Vanilla","Repair_num":6990,"Min_damage":40,"Min_range":70,"Class":"S","Archetype":"S","Shop_name":"sr04_shop"},
{"Name":"Calico SNR (M917)","key":"Calico SNR (M917)","Damage":155,"RPM":450,"Damage_reduc":2,"Camo":"Vanilla","Repair_num":24960,"Min_damage":75,"Min_range":70,"Class":"S","Archetype":"S","Shop_name":"sr07_shop"},
{"Name":"Karkom SNR","key":"Karkom SNR","Damage":190,"RPM":450,"Damage_reduc":2,"Camo":"Vanilla","Repair_num":8240,"Min_damage":75,"Min_range":65,"Class":"S","Archetype":"S","Shop_name":"sr12_shop"},
{"Name":"RK 14 EBR","key":"RK 14 EBR","Damage":225,"RPM":250,"Damage_reduc":2,"Camo":"Vanilla","Repair_num":6990,"Min_damage":75,"Min_range":70,"Class":"S","Archetype":"S","Shop_name":"sr13_shop"},
{"Name":"Q-88","key":"Q-88","Damage":210,"RPM":230,"Damage_reduc":2,"Camo":"Vanilla","Repair_num":1872,"Min_damage":11,"Min_range":50,"Class":"S","Archetype":"S","Shop_name":"sr30_shop"},
{"Name":"Karkom SNR Blue","key":"Karkom SNR Blue","Damage":180,"RPM":260,"Damage_reduc":2,"Camo":"Vanilla","Repair_num":6240,"Min_damage":75,"Min_range":70,"Class":"S","Archetype":"S","Shop_name":"sr12_clr01_shop"},
{"Name":"AY 550","key":"AY 550","Damage":170,"RPM":245,"Damage_reduc":2,"Camo":"Vanilla","Repair_num":3900,"Min_damage":75,"Min_range":65,"Class":"S","Archetype":"S","Shop_name":"sr22_shop"},
{"Name":"ZX84 SNR","key":"ZX84 SNR","Damage":180,"RPM":230,"Damage_reduc":2,"Camo":"Vanilla","Repair_num":2184,"Min_damage":40,"Min_range":65,"Class":"S","Archetype":"S","Shop_name":"sr06_shop"},
{"Name":"CCR SPR","key":"CCR SPR","Damage":190,"RPM":210,"Damage_reduc":2,"Camo":"Vanilla","Repair_num":3510,"Min_damage":75,"Min_range":60,"Class":"S","Archetype":"S","Shop_name":"sr25_shop"},
{"Name":"AC7 SNR","key":"AC7 SNR","Damage":150,"RPM":260,"Damage_reduc":2,"Camo":"Vanilla","Repair_num":2184,"Min_damage":40,"Min_range":60,"Class":"S","Archetype":"S","Shop_name":"sr05_shop"},
{"Name":"R16 SPR","key":"R16 SPR","Damage":155,"RPM":240,"Damage_reduc":2,"Camo":"Vanilla","Repair_num":1872,"Min_damage":75,"Min_range":65,"Class":"S","Archetype":"S","Shop_name":"sr23_shop"},
{"Name":"SVK","key":"SVK","Damage":135,"RPM":250,"Damage_reduc":2,"Camo":"Vanilla","Repair_num":0,"Min_damage":75,"Min_range":60,"Class":"S","Archetype":"S","Shop_name":"sr02_default"},
{"Name":"Otto OT 3000","key":"Otto OT 3000","Damage":250,"RPM":115,"Damage_reduc":2,"Camo":"Vanilla","Repair_num":3510,"Min_damage":75,"Min_range":70,"Class":"S","Archetype":"S","Shop_name":"sr26_shop"},
{"Name":"R107","key":"R107","Damage":310,"RPM":90,"Damage_reduc":2,"Camo":"Vanilla","Repair_num":3510,"Min_damage":100,"Min_range":70,"Class":"S","Archetype":"S","Shop_name":"sr15_shop"},
{"Name":"RBA SR58 SPR","key":"RBA SR58 SPR","Damage":350,"RPM":56,"Damage_reduc":2,"Camo":"Vanilla","Repair_num":5400,"Min_damage":75,"Min_range":70,"Class":"S","Archetype":"S","Shop_name":"sr32_shop"},
{"Name":"Miller","key":"Miller","Damage":350,"RPM":54,"Damage_reduc":2,"Camo":"Vanilla","Repair_num":6990,"Min_damage":75,"Min_range":70,"Class":"S","Archetype":"S","Shop_name":"sr09_shop"},
{"Name":"R98B","key":"R98B","Damage":350,"RPM":44,"Damage_reduc":2,"Camo":"Vanilla","Repair_num":30625,"Min_damage":75,"Min_range":70,"Class":"S","Archetype":"S","Shop_name":"sr16_shop"},
{"Name":"M217","key":"M217","Damage":340,"RPM":44,"Damage_reduc":2,"Camo":"Vanilla","Repair_num":24960,"Min_damage":40,"Min_range":70,"Class":"S","Archetype":"S","Shop_name":"sr08_shop"},
{"Name":"TWM","key":"TWM","Damage":300,"RPM":42,"Damage_reduc":2,"Camo":"Vanilla","Repair_num":1872,"Min_damage":40,"Min_range":70,"Class":"S","Archetype":"S","Shop_name":"sr14_shop"},
{"Name":"Everest","key":"Everest","Damage":320,"RPM":39,"Damage_reduc":2,"Camo":"Vanilla","Repair_num":6240,"Min_damage":40,"Min_range":70,"Class":"S","Archetype":"S","Shop_name":"sr03_shop"},
{"Name":"BNP SNR-1","key":"BNP SNR-1","Damage":345,"RPM":38,"Damage_reduc":7,"Camo":"Vanilla","Repair_num":6240,"Min_damage":85,"Min_range":65,"Class":"S","Archetype":"S","Shop_name":"sr17_shop"},
{"Name":"STCC","key":"STCC","Damage":60,"RPM":650,"Damage_reduc":1.2,"Camo":"Vanilla","Repair_num":4680,"Min_damage":32,"Min_range":10,"Class":"A","Archetype":"A","Shop_name":"pt10_shop"},
{"Name":"Gun Glove!","key":"Gun Glove!","Damage":135,"RPM":270,"Damage_reduc":2,"Camo":"Vanilla","Repair_num":5500,"Min_damage":52,"Min_range":11,"Class":"A","Archetype":"A","Shop_name":"pt66_shop"},
{"Name":"S18G","key":"S18G","Damage":50,"RPM":700,"Damage_reduc":3,"Camo":"Vanilla","Repair_num":4680,"Min_damage":32,"Min_range":9,"Class":"A","Archetype":"A","Shop_name":"pt21_shop"},
{"Name":"Shark-443","key":"Shark-443","Damage":105,"RPM":290,"Damage_reduc":1.2,"Camo":"Vanilla","Repair_num":3900,"Min_damage":32,"Min_range":11,"Class":"A","Archetype":"A","Shop_name":"pt27_shop"},
{"Name":"R1911","key":"R1911","Damage":120,"RPM":290,"Damage_reduc":3,"Camo":"Vanilla","Repair_num":20000,"Min_damage":50,"Min_range":8,"Class":"A","Archetype":"A","Shop_name":"pt16_shop"},
{"Name":"Eagle Eye","key":"Eagle Eye","Damage":125,"RPM":270,"Damage_reduc":3,"Camo":"Vanilla","Repair_num":20000,"Min_damage":50,"Min_range":10,"Class":"A","Archetype":"A","Shop_name":"pt01_default"},
{"Name":"Eagle Eye Gold","key":"Eagle Eye Gold","Damage":125,"RPM":270,"Damage_reduc":3,"Camo":"Vanilla","Repair_num":4000,"Min_damage":50,"Min_range":11,"Class":"A","Archetype":"A","Shop_name":"pt01_gold01_shop"},
{"Name":"Hex Autorevolver","key":"Hex Autorevolver","Damage":140,"RPM":215,"Damage_reduc":1.2,"Camo":"Vanilla","Repair_num":2184,"Min_damage":32,"Min_range":12,"Class":"A","Archetype":"A","Shop_name":"pt26_shop"},
{"Name":"P-57","key":"P-57","Damage":100,"RPM":300,"Damage_reduc":1.2,"Camo":"Vanilla","Repair_num":4680,"Min_damage":32,"Min_range":12,"Class":"A","Archetype":"A","Shop_name":"pt22_shop"},
{"Name":"Python","key":"Python","Damage":130,"RPM":230,"Damage_reduc":2,"Camo":"Vanilla","Repair_num":4680,"Min_damage":32,"Min_range":10,"Class":"A","Archetype":"A","Shop_name":"pt02_shop"},
{"Name":"ZX84 USP","key":"ZX84 USP","Damage":75,"RPM":335,"Damage_reduc":1,"Camo":"Vanilla","Repair_num":5000,"Min_damage":32,"Min_range":10,"Class":"A","Archetype":"A","Shop_name":"pt03_shop"},
{"Name":"M900","key":"M900","Damage":65,"RPM":370,"Damage_reduc":1.2,"Camo":"Vanilla","Repair_num":4680,"Min_damage":32,"Min_range":11,"Class":"A","Archetype":"A","Shop_name":"pt04_shop"},
{"Name":"M9A1","key":"M9A1","Damage":70,"RPM":330,"Damage_reduc":1,"Camo":"Vanilla","Repair_num":980,"Min_damage":42,"Min_range":9,"Class":"A","Archetype":"A","Shop_name":"pt06_shop"},
{"Name":"Aquatic Assassin","key":"Aquatic Assassin","Damage":140,"RPM":150,"Damage_reduc":1.2,"Camo":"Vanilla","Repair_num":3900,"Min_damage":40,"Min_range":16,"Class":"A","Archetype":"A","Shop_name":"pt29_fld01_shop"},
{"Name":"Abada 266mm","key":"Abada 266mm","Damage":135,"RPM":170,"Damage_reduc":3,"Camo":"Vanilla","Repair_num":4000,"Min_damage":30,"Min_range":16,"Class":"A","Archetype":"A","Shop_name":"pt25_shop"},
{"Name":"GU5","key":"GU5","Damage":65,"RPM":330,"Damage_reduc":1.2,"Camo":"Vanilla","Repair_num":930,"Min_damage":32,"Min_range":9.5,"Class":"A","Archetype":"A","Shop_name":"pt08_shop"},
{"Name":"MD9","key":"MD9","Damage":70,"RPM":300,"Damage_reduc":1.2,"Camo":"Vanilla","Repair_num":10500,"Min_damage":32,"Min_range":9.8,"Class":"A","Archetype":"A","Shop_name":"pt19_shop"},
{"Name":"Q-92","key":"Q-92","Damage":65,"RPM":290,"Damage_reduc":1.2,"Camo":"Vanilla","Repair_num":5200,"Min_damage":32,"Min_range":12,"Class":"A","Archetype":"A","Shop_name":"pt23_shop"},
{"Name":"High Power Pistol","key":"High Power Pistol","Damage":60,"RPM":410,"Damage_reduc":1.2,"Camo":"Vanilla","Repair_num":0,"Min_damage":32,"Min_range":12,"Class":"A","Archetype":"A","Shop_name":"pt05_shop"},
{"Name":"M93R","key":"M93R","Damage":50,"RPM":350,"Damage_reduc":1.2,"Camo":"Vanilla","Repair_num":2184,"Min_damage":32,"Min_range":8,"Class":"A","Archetype":"A","Shop_name":"pt15_shop"},
{"Name":"R4A1","key":"R4A1 Anniversary","Damage":65,"RPM":735,"Damage_reduc":2,"Camo":"Anniversary","Repair_num":2200,"Min_damage":45,"Min_range":11,"Class":"R","Archetype":"R","Shop_name":"ar02_eua01_shop"},
{"Name":"MD9","key":"MD9 Anniversary","Damage":76,"RPM":335,"Damage_reduc":1,"Camo":"Anniversary","Repair_num":1248,"Min_damage":32,"Min_range":11,"Class":"A","Archetype":"A","Shop_name":"pt07_eua01_shop"},
{"Name":"TWM","key":"TWM Anniversary","Damage":350,"RPM":56,"Damage_reduc":2,"Camo":"Anniversary","Repair_num":1872,"Min_damage":40,"Min_range":70,"Class":"S","Archetype":"S","Shop_name":"sr14_eua01_shop"},
{"Name":"ZX84 UMP","key":"ZX84 UMP Anniversary","Damage":89,"RPM":755,"Damage_reduc":3.8,"Camo":"Anniversary","Repair_num":5400,"Min_damage":38,"Min_range":8,"Class":"E","Archetype":"E","Shop_name":"smg17_eua01_shop"},
{"Name":"R16 SPR","key":"R16 SPR US set","Damage":155,"RPM":240,"Damage_reduc":2,"Camo":"US set","Repair_num":12950,"Min_damage":75,"Min_range":65,"Class":"S","Archetype":"S","Shop_name":"sr23_camo07_shop"},
{"Name":"MD9","key":"MD9 US set","Damage":80,"RPM":285,"Damage_reduc":1.2,"Camo":"US set","Repair_num":20000,"Min_damage":32,"Min_range":12,"Class":"A","Archetype":"A","Shop_name":"pt07_camo07_shop"},
{"Name":"R4A1","key":"R4A1 US set","Damage":67,"RPM":680,"Damage_reduc":2,"Camo":"US set","Repair_num":2200,"Min_damage":45,"Min_range":14,"Class":"R","Archetype":"R","Shop_name":"ar02_camo07_shop"},
{"Name":"R4 CQB","key":"R4 CQB US set","Damage":55,"RPM":840,"Damage_reduc":2.8,"Camo":"US set","Repair_num":4360,"Min_damage":32,"Min_range":8,"Class":"E","Archetype":"E","Shop_name":"smg13_camo07_shop"},
{"Name":"Eagle Eye","key":"Eagle Eye Brazil","Damage":125,"RPM":270,"Damage_reduc":3,"Camo":"Brazil","Repair_num":5500,"Min_damage":50,"Min_range":10,"Class":"A","Archetype":"A","Shop_name":"pt01_bra01_shop"},
{"Name":"TWM","key":"TWM Brazil","Damage":320,"RPM":49,"Damage_reduc":2,"Camo":"Brazil","Repair_num":12950,"Min_damage":40,"Min_range":70,"Class":"S","Archetype":"S","Shop_name":"sr14_bra01_shop"},
{"Name":"Karkom","key":"Karkom Brazil","Damage":70,"RPM":620,"Damage_reduc":2,"Camo":"Brazil","Repair_num":3510,"Min_damage":45,"Min_range":12,"Class":"R","Archetype":"R","Shop_name":"ar01_bra01_shop"},
{"Name":"GU1","key":"GU1 Brazil","Damage":60,"RPM":670,"Damage_reduc":2.6,"Camo":"Brazil","Repair_num":2184,"Min_damage":32,"Min_range":12,"Class":"E","Archetype":"E","Shop_name":"smg12_bra01_shop"},
{"Name":"Vec 5","key":"Vec 5 Crown","Damage":65,"RPM":820,"Damage_reduc":3,"Camo":"Crown","Repair_num":6240,"Min_damage":32,"Min_range":11,"Class":"E","Archetype":"E","Shop_name":"smg03_crown02_shop"},
{"Name":"GU1","key":"GU1 Crown","Damage":76,"RPM":670,"Damage_reduc":2.6,"Camo":"Crown","Repair_num":2184,"Min_damage":32,"Min_range":12,"Class":"E","Archetype":"E","Shop_name":"smg12_crown_shop"},
{"Name":"Exar-h","key":"Exar-h Crown","Damage":90,"RPM":620,"Damage_reduc":1,"Camo":"Crown","Repair_num":5400,"Min_damage":50,"Min_range":16,"Class":"R","Archetype":"R","Shop_name":"ar11_crown02_shop"},
{"Name":"CCR","key":"CCR Crown","Damage":80,"RPM":720,"Damage_reduc":2,"Camo":"Crown","Repair_num":5400,"Min_damage":50,"Min_range":16,"Class":"R","Archetype":"R","Shop_name":"ar20_crown02_shop"},
{"Name":"LMG 240","key":"LMG 240 Crown","Damage":85,"RPM":600,"Damage_reduc":2.2,"Camo":"Crown","Repair_num":6240,"Min_damage":40,"Min_range":16,"Class":"R","Archetype":"R","Shop_name":"mg01_crown02_shop"},
{"Name":"T27","key":"T27 Crown","Damage":83,"RPM":660,"Damage_reduc":1,"Camo":"Crown","Repair_num":5400,"Min_damage":50,"Min_range":16,"Class":"R","Archetype":"R","Shop_name":"ar16_crown02_shop"},
{"Name":"BT-50","key":"BT-50 Crown","Damage":350,"RPM":215,"Damage_reduc":2,"Camo":"Crown","Repair_num":5400,"Min_damage":40,"Min_range":70,"Class":"S","Archetype":"S","Shop_name":"sr04_crown02_shop"},
{"Name":"RK14 EBR","key":"RK14 EBR Crown","Damage":245,"RPM":250,"Damage_reduc":2,"Camo":"Crown","Repair_num":5400,"Min_damage":75,"Min_range":70,"Class":"S","Archetype":"S","Shop_name":"sr13_crown02_shop"},
{"Name":"","key":"MD9 Crown","Damage":70,"RPM":320,"Damage_reduc":1.2,"Camo":"Crown","Repair_num":1248,"Min_damage":32,"Min_range":9.8,"Class":"A","Archetype":"A","Shop_name":"pt07_crown02_shop"},
{"Name":"Eagle Eye Elite","key":"Eagle Eye Elite Crown","Damage":130,"RPM":270,"Damage_reduc":3,"Camo":"Crown","Repair_num":5500,"Min_damage":32,"Min_range":12,"Class":"A","Archetype":"A","Shop_name":"pt01_crown02_shop"},
{"Name":"S18G","key":"S18G Crown","Damage":50,"RPM":720,"Damage_reduc":3,"Camo":"Crown","Repair_num":5400,"Min_damage":32,"Min_range":10,"Class":"A","Archetype":"A","Shop_name":"pt21_crown02_shop"},
{"Name":"Karkom SMG","key":"Karkom SMG Crown","Damage":80,"RPM":840,"Damage_reduc":3,"Camo":"Crown","Repair_num":5400,"Min_damage":38,"Min_range":13,"Class":"E","Archetype":"E","Shop_name":"smg10_crown_shop"},
{"Name":"ZX84 UMP","key":"ZX84 UMP Elite Crown","Damage":85,"RPM":700,"Damage_reduc":3.5,"Camo":"Crown","Repair_num":5400,"Min_damage":38,"Min_range":12,"Class":"E","Archetype":"E","Shop_name":"smg17_crown02_shop"},
{"Name":"Everest","key":"Everest Neon Punk","Damage":320,"RPM":39,"Damage_reduc":2,"Camo":"Neon Punk","Repair_num":6240,"Min_damage":40,"Min_range":70,"Class":"S","Archetype":"S","Shop_name":"sr03_steam01_shop"},
{"Name":"Karkom","key":"Karkom Neon Punk","Damage":70,"RPM":620,"Damage_reduc":2,"Camo":"Neon Punk","Repair_num":3510,"Min_damage":45,"Min_range":12,"Class":"R","Archetype":"R","Shop_name":"ar01_steam01_shop"},
{"Name":"A3 9mm","key":"A3 9mm Neon Punk","Damage":62,"RPM":830,"Damage_reduc":3.1,"Camo":"Neon Punk","Repair_num":3510,"Min_damage":32,"Min_range":9.5,"Class":"E","Archetype":"E","Shop_name":"smg11_steam01_shop"},
{"Name":"STCC","key":"STCC Halloween","Damage":60,"RPM":650,"Damage_reduc":1.2,"Camo":"Halloween","Repair_num":20000,"Min_damage":32,"Min_range":10,"Class":"A","Archetype":"A","Shop_name":"pt10_hlw01_shop"},
{"Name":"ZX84 SNR","key":"ZX84 SNR Halloween","Damage":200,"RPM":230,"Damage_reduc":2,"Camo":"Halloween","Repair_num":4360,"Min_damage":40,"Min_range":65,"Class":"S","Archetype":"S","Shop_name":"sr06_hlw01_shop"},
{"Name":"ZX84K","key":"ZX84K Halloween","Damage":67,"RPM":650,"Damage_reduc":2,"Camo":"Halloween","Repair_num":24960,"Min_damage":41,"Min_range":12,"Class":"R","Archetype":"R","Shop_name":"ar06_hlw01_shop"},
{"Name":"ZX84C","key":"ZX84C Halloween","Damage":63,"RPM":750,"Damage_reduc":2.8,"Camo":"Halloween","Repair_num":4360,"Min_damage":38,"Min_range":8.3,"Class":"E","Archetype":"E","Shop_name":"smg07_hlw01_shop"},
{"Name":"Gu1","key":"Gu1 Christmas","Damage":55,"RPM":670,"Damage_reduc":2.6,"Camo":"Christmas","Repair_num":4360,"Min_damage":38,"Min_range":8,"Class":"E","Archetype":"E","Shop_name":"smg12_xmas_shop"},
{"Name":"Vec 5","key":"Vec 5 Christmas","Damage":65,"RPM":820,"Damage_reduc":2.6,"Camo":"Christmas","Repair_num":24960,"Min_damage":32,"Min_range":12,"Class":"E","Archetype":"E","Shop_name":"smg03_xmas_shop"},
{"Name":"MD9","key":"MD9 Christmas","Damage":75,"RPM":300,"Damage_reduc":1.2,"Camo":"Christmas","Repair_num":4800,"Min_damage":32,"Min_range":12,"Class":"A","Archetype":"A","Shop_name":"pt07_xmas_shop"},
{"Name":"Eagle Eye","key":"Eagle Eye Christmas","Damage":120,"RPM":270,"Damage_reduc":1.2,"Camo":"Christmas","Repair_num":5500,"Min_damage":32,"Min_range":10,"Class":"A","Archetype":"A","Shop_name":"pt01_xmas_shop"},
{"Name":"Everest","key":"Everest Christmas","Damage":320,"RPM":39,"Damage_reduc":2,"Camo":"Christmas","Repair_num":12950,"Min_damage":40,"Min_range":70,"Class":"S","Archetype":"S","Shop_name":"sr03_xmas_shop"},
{"Name":"BT50","key":"BT50 Christmas","Damage":300,"RPM":215,"Damage_reduc":2,"Camo":"Christmas","Repair_num":30625,"Min_damage":40,"Min_range":70,"Class":"S","Archetype":"S","Shop_name":"sr04_xmas_shop"},
{"Name":"LMG 240","key":"LMG 240 Christmas","Damage":70,"RPM":600,"Damage_reduc":2.2,"Camo":"Christmas","Repair_num":30625,"Min_damage":40,"Min_range":8,"Class":"R","Archetype":"R","Shop_name":"mg01_xmas_shop"},
{"Name":"CCR","key":"CCR Christmas","Damage":63,"RPM":700,"Damage_reduc":2,"Camo":"Christmas","Repair_num":30625,"Min_damage":42,"Min_range":11,"Class":"R","Archetype":"R","Shop_name":"ar20_xmas_shop"},
{"Name":"A3 9mm","key":"A3 9mm Winter","Damage":65,"RPM":830,"Damage_reduc":2.4,"Camo":"Winter","Repair_num":24960,"Min_damage":32,"Min_range":10.5,"Class":"E","Archetype":"E","Shop_name":"smg11_camo02_shop"},
{"Name":"TWM","key":"TWM Winter","Damage":320,"RPM":50,"Damage_reduc":2,"Camo":"Winter","Repair_num":3900,"Min_damage":40,"Min_range":70,"Class":"S","Archetype":"S","Shop_name":"sr14_camo02_shop"},
{"Name":"","key":"M217 Winter","Damage":350,"RPM":44,"Damage_reduc":2,"Camo":"Winter","Repair_num":24960,"Min_damage":40,"Min_range":70,"Class":"S","Archetype":"S","Shop_name":"sr08_camo02_shop"},
{"Name":"A3 H-BAR","key":"A3 H-BAR Winter","Damage":80,"RPM":600,"Damage_reduc":2,"Camo":"Winter","Repair_num":3900,"Min_damage":40,"Min_range":15,"Class":"R","Archetype":"R","Shop_name":"mg08_camo02_shop"},
{"Name":"M9A1","key":"M9A1 Winter","Damage":85,"RPM":345,"Damage_reduc":1,"Camo":"Winter","Repair_num":780,"Min_damage":42,"Min_range":9,"Class":"A","Archetype":"A","Shop_name":"pt06_camo02_shop"},
{"Name":"ZX84 USP","key":"ZX84 USP Winter","Damage":95,"RPM":325,"Damage_reduc":1,"Camo":"Winter","Repair_num":5000,"Min_damage":42,"Min_range":11.5,"Class":"A","Archetype":"A","Shop_name":"pt03_camo02_shop"},
{"Name":"AC7 SNR","key":"AC7 SNR Winter","Damage":210,"RPM":270,"Damage_reduc":2,"Camo":"Winter","Repair_num":2184,"Min_damage":40,"Min_range":60,"Class":"S","Archetype":"S","Shop_name":"sr05_camo02_shop"},
{"Name":"PDW 19","key":"PDW 19 Winter","Damage":60,"RPM":900,"Damage_reduc":2.5,"Camo":"Winter","Repair_num":6990,"Min_damage":38,"Min_range":7.5,"Class":"E","Archetype":"E","Shop_name":"smg09_camo02_shop"},
{"Name":"R4A1","key":"R4A1 Winter","Damage":75,"RPM":680,"Damage_reduc":2,"Camo":"Winter","Repair_num":6990,"Min_damage":45,"Min_range":15.5,"Class":"R","Archetype":"R","Shop_name":"ar02_camo02_shop"},
{"Name":"ZX84 SMG","key":"ZX84 SMG Winter","Damage":66,"RPM":800,"Damage_reduc":2.8,"Camo":"Winter","Repair_num":6240,"Min_damage":40,"Min_range":11.5,"Class":"E","Archetype":"E","Shop_name":"smg04_camo02_shop"},
{"Name":"M9551","key":"M9551 Winter","Damage":70,"RPM":800,"Damage_reduc":2,"Camo":"Winter","Repair_num":24960,"Min_damage":41,"Min_range":13,"Class":"R","Archetype":"R","Shop_name":"ar07_camo02_shop"},
{"Name":"SVK","key":"SVK Jungle","Damage":190,"RPM":250,"Damage_reduc":2,"Camo":"Jungle","Repair_num":3510,"Min_damage":75,"Min_range":60,"Class":"S","Archetype":"S","Shop_name":"sr02_camo03_shop"},
{"Name":"ZX84K","key":"ZX84K Jungle","Damage":73,"RPM":650,"Damage_reduc":2,"Camo":"Jungle","Repair_num":24960,"Min_damage":41,"Min_range":12,"Class":"R","Archetype":"R","Shop_name":"ar06_camo03_shop"},
{"Name":"MM28","key":"MM28 Jungle","Damage":61,"RPM":800,"Damage_reduc":3,"Camo":"Jungle","Repair_num":24960,"Min_damage":32,"Min_range":9,"Class":"E","Archetype":"E","Shop_name":"smg01_camo03_shop"},
{"Name":"FY LMG","key":"FY LMG Specops MK01","Damage":90,"RPM":530,"Damage_reduc":1,"Camo":"Specops MK01","Repair_num":0,"Min_damage":40,"Min_range":14.5,"Class":"R","Archetype":"R","Shop_name":"mg04_zsd01_shop"},
{"Name":"LMG3","key":"LMG3 Specops MK01","Damage":64,"RPM":1000,"Damage_reduc":2.2,"Camo":"Specops MK01","Repair_num":0,"Min_damage":40,"Min_range":14,"Class":"R","Archetype":"R","Shop_name":"mg09_zsd01_shop"},
{"Name":"RK14","key":"RK14 MK60","Damage":225,"RPM":155,"Damage_reduc":2,"Camo":"MK60","Repair_num":5400,"Min_damage":75,"Min_range":70,"Class":"S","Archetype":"S","Shop_name":"sr13_zsd01_shop"},
{"Name":"CH 9mm","key":"CH 9mm MK60","Damage":62,"RPM":800,"Damage_reduc":2.6,"Camo":"MK60","Repair_num":3510,"Min_damage":32,"Min_range":11,"Class":"E","Archetype":"E","Shop_name":"smg30_zsd01_shop"},
{"Name":"R60E4","key":"R60E4 MK60","Damage":80,"RPM":500,"Damage_reduc":2.2,"Camo":"MK60","Repair_num":9600,"Min_damage":40,"Min_range":13,"Class":"R","Archetype":"R","Shop_name":"mg12_zsd01_shop"},
{"Name":"R107","key":"R107 Gamescom","Damage":280,"RPM":130,"Damage_reduc":2,"Camo":"Gamescom","Repair_num":3510,"Min_damage":100,"Min_range":70,"Class":"S","Archetype":"S","Shop_name":"sr15_gc01_shop"},
{"Name":"Exar-H","key":"Exar-H Gamescom","Damage":80,"RPM":600,"Damage_reduc":1,"Camo":"Gamescom","Repair_num":5400,"Min_damage":45,"Min_range":14,"Class":"R","Archetype":"R","Shop_name":"ar11_gc01_shop"},
{"Name":"AC7 SMG","key":"AC7 SMG Gamescom","Damage":70,"RPM":750,"Damage_reduc":3.1,"Camo":"Gamescom","Repair_num":5400,"Min_damage":30,"Min_range":10,"Class":"E","Archetype":"E","Shop_name":"smg08_gc01_shop"},
{"Name":"S18G","key":"S18G Platinum","Damage":50,"RPM":800,"Damage_reduc":1,"Camo":"Platinum","Repair_num":20000,"Min_damage":32,"Min_range":10,"Class":"A","Archetype":"A","Shop_name":"pt21_camo01_shop"},
{"Name":"R4 CQB","key":"R4 CQB Platinum","Damage":55,"RPM":840,"Damage_reduc":2.8,"Camo":"Platinum","Repair_num":4360,"Min_damage":32,"Min_range":8,"Class":"E","Archetype":"E","Shop_name":"smg13_camo01_shop"},
{"Name":"SVK","key":"SVK Shiny","Damage":170,"RPM":250,"Damage_reduc":2,"Camo":"Shiny","Repair_num":24960,"Min_damage":75,"Min_range":70,"Class":"S","Archetype":"S","Shop_name":"sr02_camo05_shop"},
{"Name":"FY-9","key":"FY-9 Shiny","Damage":79,"RPM":720,"Damage_reduc":3.1,"Camo":"Shiny","Repair_num":24960,"Min_damage":39,"Min_range":12,"Class":"E","Archetype":"E","Shop_name":"smg06_camo05_shop"},
{"Name":"FY-103","key":"FY-103 Shiny","Damage":85,"RPM":610,"Damage_reduc":1,"Camo":"Shiny","Repair_num":24960,"Min_damage":45,"Min_range":14,"Class":"R","Archetype":"R","Shop_name":"ar04_camo05_shop"},
{"Name":"STCC","key":"STCC Shiny","Damage":65,"RPM":650,"Damage_reduc":1.2,"Camo":"Shiny","Repair_num":20000,"Min_damage":32,"Min_range":10,"Class":"A","Archetype":"A","Shop_name":"pt10_camo05_shop"},
{"Name":"FY LMG","key":"FY LMG Basic","Damage":65,"RPM":530,"Damage_reduc":2,"Camo":"Basic","Repair_num":12950,"Min_damage":45,"Min_range":11,"Class":"R","Archetype":"R","Shop_name":"mg04_set01_shop"},
{"Name":"R4A1","key":"R4A1 Basic","Damage":72,"RPM":680,"Damage_reduc":2,"Camo":"Basic","Repair_num":24960,"Min_damage":41,"Min_range":14,"Class":"R","Archetype":"R","Shop_name":"ar02_set01_shop"},
{"Name":"Vec 5","key":"Vec 5 Basic","Damage":58,"RPM":770,"Damage_reduc":3.1,"Camo":"Basic","Repair_num":24960,"Min_damage":25,"Min_range":8.5,"Class":"E","Archetype":"E","Shop_name":"smg03_set01_shop"},
{"Name":"FY-9","key":"FY-9 Basic","Damage":70,"RPM":720,"Damage_reduc":3.1,"Camo":"Basic","Repair_num":12950,"Min_damage":39,"Min_range":10,"Class":"E","Archetype":"E","Shop_name":"smg06_set01_shop"},
{"Name":"Garota","key":"Garota Basic","Damage":200,"RPM":400,"Damage_reduc":2,"Camo":"Basic","Repair_num":24960,"Min_damage":75,"Min_range":50,"Class":"S","Archetype":"S","Shop_name":"sr01_set01_shop"},
{"Name":"TWM","key":"TWM Basic","Damage":280,"RPM":44,"Damage_reduc":2,"Camo":"Basic","Repair_num":12950,"Min_damage":40,"Min_range":60,"Class":"S","Archetype":"S","Shop_name":"sr14_set01_shop"},
{"Name":"FY-103","key":"FY-103 Basic","Damage":67,"RPM":600,"Damage_reduc":2,"Camo":"Basic","Repair_num":12950,"Min_damage":45,"Min_range":10.5,"Class":"R","Archetype":"R","Shop_name":"ar04_set01_shop"},
{"Name":"A3 HBAR","key":"A3 HBAR Special","Damage":72,"RPM":620,"Damage_reduc":2.2,"Camo":"Special","Repair_num":6240,"Min_damage":40,"Min_range":13,"Class":"R","Archetype":"R","Shop_name":"mg08_zsd01_shop"},
{"Name":"ZX84 MG","key":"ZX84 MG Special","Damage":63,"RPM":625,"Damage_reduc":2.2,"Camo":"Special","Repair_num":2184,"Min_damage":40,"Min_range":12,"Class":"R","Archetype":"R","Shop_name":"mg06_zsd01_shop"},
{"Name":"Garota","key":"Garota Special","Damage":200,"RPM":440,"Damage_reduc":2,"Camo":"Special","Repair_num":6240,"Min_damage":75,"Min_range":70,"Class":"S","Archetype":"S","Shop_name":"sr01_zsd01_shop"},
{"Name":"T27","key":"T27 Desert Camo","Damage":74,"RPM":620,"Damage_reduc":2,"Camo":"Desert Camo","Repair_num":30625,"Min_damage":45,"Min_range":13,"Class":"R","Archetype":"R","Shop_name":"ar16_camo06_shop"},
{"Name":"Q-92","key":"Q-92 Desert Camo","Damage":65,"RPM":290,"Damage_reduc":1.2,"Camo":"Desert Camo","Repair_num":5200,"Min_damage":32,"Min_range":12,"Class":"A","Archetype":"A","Shop_name":"pt23_camo06_shop"},
{"Name":"Ch 9mm","key":"Ch 9mm Desert Camo","Damage":62,"RPM":800,"Damage_reduc":3.1,"Camo":"Desert Camo","Repair_num":30625,"Min_damage":32,"Min_range":10,"Class":"E","Archetype":"E","Shop_name":"smg30_camo06_shop"},
{"Name":"Q-88","key":"Q-88 Desert Camo","Damage":200,"RPM":180,"Damage_reduc":2,"Camo":"Desert Camo","Repair_num":24960,"Min_damage":11,"Min_range":70,"Class":"S","Archetype":"S","Shop_name":"sr30_camo06_shop"},
{"Name":"FY-103","key":"FY-103 City","Damage":76,"RPM":600,"Damage_reduc":1,"Camo":"City","Repair_num":24960,"Min_damage":45,"Min_range":13,"Class":"R","Archetype":"R","Shop_name":"ar04_camo04_shop"},
{"Name":"Vec 5","key":"Vec 5 City","Damage":58,"RPM":780,"Damage_reduc":3.1,"Camo":"City","Repair_num":24960,"Min_damage":28,"Min_range":9.5,"Class":"E","Archetype":"E","Shop_name":"smg03_camo04_shop"},
{"Name":"AY 550","key":"AY 550 City","Damage":175,"RPM":245,"Damage_reduc":2,"Camo":"City","Repair_num":24960,"Min_damage":75,"Min_range":68,"Class":"S","Archetype":"S","Shop_name":"sr22_camo04_shop"},
{"Name":"BT50","key":"BT50 NY","Damage":350,"RPM":215,"Damage_reduc":2,"Camo":"NY","Repair_num":5400,"Min_damage":40,"Min_range":70,"Class":"S","Archetype":"S","Shop_name":"sr04_cny01_shop"},
{"Name":"GU1","key":"GU1 NY","Damage":60,"RPM":670,"Damage_reduc":2.4,"Camo":"NY","Repair_num":2184,"Min_damage":38,"Min_range":9.5,"Class":"E","Archetype":"E","Shop_name":"smg12_cny01_shop"},
{"Name":"Eagle Eye","key":"Eagle Eye NY","Damage":125,"RPM":270,"Damage_reduc":3,"Camo":"NY","Repair_num":5500,"Min_damage":50,"Min_range":10,"Class":"A","Archetype":"A","Shop_name":"pt01_cny01_shop"},
{"Name":"CCR","key":"CCR NY","Damage":77,"RPM":700,"Damage_reduc":1,"Camo":"NY","Repair_num":5400,"Min_damage":50,"Min_range":16,"Class":"R","Archetype":"R","Shop_name":"ar20_cny01_shop"},
{"Name":"GU2","key":"GU2 Korea Anniversary","Damage":60,"RPM":670,"Damage_reduc":2,"Camo":"Korea Anniversary","Repair_num":1872,"Min_damage":41,"Min_range":11,"Class":"R","Archetype":"R","Shop_name":"ar09_kra01_shop"},
{"Name":"GU5","key":"GU5 Korea Anniversary","Damage":65,"RPM":330,"Damage_reduc":1.2,"Camo":"Korea Anniversary","Repair_num":930,"Min_damage":32,"Min_range":9.5,"Class":"A","Archetype":"A","Shop_name":"pt08_kra01_shop"},
{"Name":"GU7","key":"GU7 Korea Anniversary","Damage":55,"RPM":1000,"Damage_reduc":2.4,"Camo":"Korea Anniversary","Repair_num":24960,"Min_damage":32,"Min_range":10.5,"Class":"E","Archetype":"E","Shop_name":"smg14_kra01_shop"},
{"Name":"TWM","key":"TWM Korea Anniversary","Damage":320,"RPM":49,"Damage_reduc":2,"Camo":"Korea Anniversary","Repair_num":24960,"Min_damage":40,"Min_range":70,"Class":"S","Archetype":"S","Shop_name":"sr14_kra01_shop"},
{"Name":"Hex AutoRevolver","key":"Hex AutoRevolver Black Dragon","Damage":140,"RPM":250,"Damage_reduc":1.2,"Camo":"Black Dragon","Repair_num":5500,"Min_damage":32,"Min_range":12,"Class":"A","Archetype":"A","Shop_name":"pt26_set02_shop"},
{"Name":"R4 CQB","key":"R4 CQB Black Dragon","Damage":75,"RPM":900,"Damage_reduc":2,"Camo":"Black Dragon","Repair_num":1872,"Min_damage":38,"Min_range":10,"Class":"E","Archetype":"E","Shop_name":"smg13_set02_shop"},
{"Name":"F2000","key":"F2000 Black Dragon","Damage":70,"RPM":850,"Damage_reduc":2,"Camo":"Black Dragon","Repair_num":3510,"Min_damage":41,"Min_range":14,"Class":"R","Archetype":"R","Shop_name":"ar10_set02_shop"},
{"Name":"M217","key":"M217 Black Dragon","Damage":340,"RPM":44,"Damage_reduc":2,"Camo":"Black Dragon","Repair_num":6240,"Min_damage":40,"Min_range":70,"Class":"S","Archetype":"S","Shop_name":"sr08_set02_shop"},
{"Name":"Hex AutoRevolver","key":"Hex AutoRevolver Scarlet Dragon","Damage":130,"RPM":230,"Damage_reduc":1.2,"Camo":"Scarlet Dragon","Repair_num":5500,"Min_damage":32,"Min_range":12,"Class":"A","Archetype":"A","Shop_name":"pt26_set04_shop"},
{"Name":"R4 CQB","key":"R4 CQB Scarlet Dragon","Damage":65,"RPM":850,"Damage_reduc":2,"Camo":"Scarlet Dragon","Repair_num":1872,"Min_damage":38,"Min_range":9,"Class":"E","Archetype":"E","Shop_name":"smg13_set04_shop"},
{"Name":"F2000","key":"F2000 Scarlet Dragon","Damage":65,"RPM":830,"Damage_reduc":2,"Camo":"Scarlet Dragon","Repair_num":3510,"Min_damage":41,"Min_range":12,"Class":"R","Archetype":"R","Shop_name":"ar10_set04_shop"},
{"Name":"M217","key":"M217 Scarlet Dragon","Damage":340,"RPM":44,"Damage_reduc":2,"Camo":"Scarlet Dragon","Repair_num":6240,"Min_damage":40,"Min_range":70,"Class":"S","Archetype":"S","Shop_name":"sr08_set04_shop"},
{"Name":"Hex AutoRevolver","key":"Hex AutoRevolver Jade Dragon","Damage":120,"RPM":215,"Damage_reduc":1.2,"Camo":"Jade Dragon","Repair_num":5500,"Min_damage":32,"Min_range":12,"Class":"A","Archetype":"A","Shop_name":"pt26_set03_shop"},
{"Name":"R4 CQB","key":"R4 CQB Jade Dragon","Damage":55,"RPM":800,"Damage_reduc":2,"Camo":"Jade Dragon","Repair_num":1872,"Min_damage":38,"Min_range":8,"Class":"E","Archetype":"E","Shop_name":"smg13_set03_shop"},
{"Name":"F2000","key":"F2000 Jade Dragon","Damage":60,"RPM":800,"Damage_reduc":2,"Camo":"Jade Dragon","Repair_num":3510,"Min_damage":41,"Min_range":10,"Class":"R","Archetype":"R","Shop_name":"ar10_set03_shop"},
{"Name":"M217","key":"M217 Jade Dragon","Damage":300,"RPM":43,"Damage_reduc":2,"Camo":"Jade Dragon","Repair_num":6240,"Min_damage":40,"Min_range":70,"Class":"S","Archetype":"S","Shop_name":"sr08_set03_shop"},
{"Name":"MP717","key":"MP717 Sneakpeak","Damage":58,"RPM":900,"Damage_reduc":2.5,"Camo":"Sneakpeak","Repair_num":24960,"Min_damage":45,"Min_range":7.5,"Class":"E","Archetype":"E","Shop_name":"smg41_ww2_shop"},
{"Name":"TWM X308","key":"TWM X308 Sneakpeak","Damage":350,"RPM":47,"Damage_reduc":2,"Camo":"Sneakpeak","Repair_num":6240,"Min_damage":75,"Min_range":80,"Class":"S","Archetype":"S","Shop_name":"sr31_shop"},
{"Name":"MM1981/30","key":"MM1981/30 Sneakpeak","Damage":285,"RPM":50,"Damage_reduc":2,"Camo":"Sneakpeak","Repair_num":12950,"Min_damage":75,"Min_range":70,"Class":"S","Archetype":"S","Shop_name":"sr41_shop"},
{"Name":"HMGL32A7 Oblivion","key":"HMGL32A7 Oblivion Sneakpeak","Damage":100,"RPM":60,"Damage_reduc":2,"Camo":"Sneakpeak","Repair_num":0,"Min_damage":11,"Min_range":70,"Class":"special","Archetype":"special","Shop_name":"gl01_zsd01_shop"},
{"Name":"Bumblebee","key":"Bumblebee Sneakpeak","Damage":72,"RPM":560,"Damage_reduc":2.2,"Camo":"Sneakpeak","Repair_num":3900,"Min_damage":40,"Min_range":13,"Class":"R","Archetype":"R","Shop_name":"mg10_shop"},
{"Name":"AY Gel. CP334","key":"AY Gel. CP334 Sneakpeak","Damage":110,"RPM":320,"Damage_reduc":1.2,"Camo":"Sneakpeak","Repair_num":4680,"Min_damage":32,"Min_range":12,"Class":"A","Archetype":"A","Shop_name":"pt14_shop"},
{"Name":"M1895","key":"M1895 Sneakpeak","Damage":117,"RPM":190,"Damage_reduc":3,"Camo":"Sneakpeak","Repair_num":5400,"Min_damage":45,"Min_range":11,"Class":"A","Archetype":"A","Shop_name":"pt24_shop"},
{"Name":"Bellum","key":"Bellum Sneakpeak","Damage":95,"RPM":280,"Damage_reduc":1.5,"Camo":"Sneakpeak","Repair_num":20000,"Min_damage":65,"Min_range":11,"Class":"A","Archetype":"A","Shop_name":"pt41_ww2_shop"},
{"Name":"FCG-R3 K1","key":"FCG-R3 K1 Sneakpeak","Damage":800,"RPM":40,"Damage_reduc":0.08,"Camo":"Sneakpeak","Repair_num":9600,"Min_damage":800,"Min_range":500,"Class":"special","Archetype":"special","Shop_name":"rg01_shop"},
{"Name":"FCG-R3","key":"FCG-R3 Sneakpeak","Damage":800,"RPM":40,"Damage_reduc":0.08,"Camo":"Sneakpeak","Repair_num":0,"Min_damage":800,"Min_range":500,"Class":"special","Archetype":"special","Shop_name":"rg01_zsd01_shop"},
{"Name":"R32A1","key":"R32A1 Sneakpeak","Damage":100,"RPM":60,"Damage_reduc":2,"Camo":"Sneakpeak","Repair_num":2496,"Min_damage":11,"Min_range":70,"Class":"special","Archetype":"special","Shop_name":"gl01_shop"},
{"Name":"AR88","key":"AR88 Sneakpeak","Damage":75,"RPM":500,"Damage_reduc":1.2,"Camo":"Sneakpeak","Repair_num":24960,"Min_damage":45,"Min_range":13,"Class":"R","Archetype":"R","Shop_name":"ar41_shop"}];
	localStorage.setItem('weapons', JSON.stringify(weapons));
// !!!!missing shotguns

	var vests = [{"key":"Default","HP":225,"RFProtection":"FALSE","Repel_shot":"FALSE","Armor_per_sec":0,"Explo_res":0,"Melee_res":0,"Special":"none","Repair_num":0,"Shop_name":"shared_vest_01"},
{"key":"Anti-Melee","HP":225,"RFProtection":"FALSE","Repel_shot":"FALSE","Armor_per_sec":0,"Explo_res":0,"Melee_res":0.2,"Special":"none","Repair_num":811,"Shop_name":"shared_vest_05"},
{"key":"Atlant","HP":225,"RFProtection":"FALSE","Repel_shot":"FALSE","Armor_per_sec":0,"Explo_res":0.25,"Melee_res":0,"Special":"none","Repair_num":2288,"Shop_name":"sniper_vest_01"},
{"key":"Anti-Explosive","HP":225,"RFProtection":"FALSE","Repel_shot":"FALSE","Armor_per_sec":0,"Explo_res":0.25,"Melee_res":0,"Special":"none","Repair_num":913,"Shop_name":"shared_vest_03"},
{"key":"Assault","HP":225,"RFProtection":"TRUE","Repel_shot":"FALSE","Armor_per_sec":0,"Explo_res":0,"Melee_res":0.2,"Special":"none","Repair_num":1859,"Shop_name":"shared_vest_09"},
{"key":"Strikeforce","HP":225,"RFProtection":"TRUE","Repel_shot":"FALSE","Armor_per_sec":0,"Explo_res":0.25,"Melee_res":0,"Special":"none","Repair_num":2288,"Shop_name":"soldier_vest_01"},
{"key":"Titan-II","HP":225,"RFProtection":"FALSE","Repel_shot":"TRUE","Armor_per_sec":0,"Explo_res":0.25,"Melee_res":0,"Special":"none","Repair_num":807,"Shop_name":"shared_vest_07"},
{"key":"Anti-Sniper","HP":225,"RFProtection":"FALSE","Repel_shot":"TRUE","Armor_per_sec":0,"Explo_res":0,"Melee_res":0,"Special":"none","Repair_num":819,"Shop_name":"engineer_vest_01"},
{"key":"Special Medic/Rifle","HP":225,"RFProtection":"TRUE","Repel_shot":"FALSE","Armor_per_sec":0,"Explo_res":0,"Melee_res":0,"Special":"none","Repair_num":819,"Shop_name":"medic_vest_02"},
{"key":"Plate","HP":225,"RFProtection":"FALSE","Repel_shot":"TRUE","Armor_per_sec":0,"Explo_res":0.25,"Melee_res":0,"Special":"none","Repair_num":2288,"Shop_name":"engineer_vest_02"},
{"key":"Hawk","HP":225,"RFProtection":"TRUE","Repel_shot":"FALSE","Armor_per_sec":0,"Explo_res":0.3,"Melee_res":0.2,"Special":"10% faster swap","Repair_num":4070,"Shop_name":"sniper_vest_03"},
{"key":"Scout","HP":225,"RFProtection":"TRUE","Repel_shot":"TRUE","Armor_per_sec":0,"Explo_res":0,"Melee_res":0,"Special":"none","Repair_num":2288,"Shop_name":"medic_vest_01"},
{"key":"Special Sniper","HP":225,"RFProtection":"FALSE","Repel_shot":"FALSE","Armor_per_sec":0,"Explo_res":0,"Melee_res":0,"Special":"none","Repair_num":819,"Shop_name":"sniper_vest_02"},
{"key":"Crown","HP":250,"RFProtection":"FALSE","Repel_shot":"FALSE","Armor_per_sec":3,"Explo_res":0.25,"Melee_res":0,"Special":"none","Repair_num":9616,"Shop_name":"shared_vest_crown_02"},
{"key":"Rhino","HP":255,"RFProtection":"FALSE","Repel_shot":"FALSE","Armor_per_sec":0,"Explo_res":0.3,"Melee_res":0.2,"Special":"none","Repair_num":4070,"Shop_name":"medic_vest_03"},
{"key":"Komodo","HP":255,"RFProtection":"FALSE","Repel_shot":"FALSE","Armor_per_sec":0,"Explo_res":0.3,"Melee_res":0,"Special":"none","Repair_num":4070,"Shop_name":"engineer_vest_03"},
{"key":"Christmas","HP":260,"RFProtection":"FALSE","Repel_shot":"FALSE","Armor_per_sec":0,"Explo_res":0.25,"Melee_res":0,"Special":"none","Repair_num":2288,"Shop_name":"shared_vest_xmas_01"},
{"key":"Frontline","HP":275,"RFProtection":"FALSE","Repel_shot":"FALSE","Armor_per_sec":4,"Explo_res":0,"Melee_res":0,"Special":"none","Repair_num":3288,"Shop_name":"shared_vest_02"},
{"key":"Warlord Medic","HP":275,"RFProtection":"TRUE","Repel_shot":"FALSE","Armor_per_sec":8,"Explo_res":0,"Melee_res":0,"Special":"none","Repair_num":9620,"Shop_name":"medic_vest_04"},
{"key":"Warlord Engi","HP":275,"RFProtection":"FALSE","Repel_shot":"FALSE","Armor_per_sec":8,"Explo_res":0,"Melee_res":0,"Special":"none","Repair_num":9620,"Shop_name":"engineer_vest_04"},
{"key":"Warlord Rifle","HP":275,"RFProtection":"FALSE","Repel_shot":"FALSE","Armor_per_sec":8,"Explo_res":0,"Melee_res":0,"Special":"10% faster reload","Repair_num":9620,"Shop_name":"soldier_vest_04"},
{"key":"Warlord Sniper","HP":275,"RFProtection":"FALSE","Repel_shot":"FALSE","Armor_per_sec":8,"Explo_res":0.3,"Melee_res":0,"Special":"none","Repair_num":9620,"Shop_name":"sniper_vest_04"},
{"key":"Corundum","HP":275,"RFProtection":"FALSE","Repel_shot":"FALSE","Armor_per_sec":0,"Explo_res":0,"Melee_res":0.2,"Special":"none","Repair_num":1859,"Shop_name":"shared_vest_04"},
{"key":"Python","HP":275,"RFProtection":"TRUE","Repel_shot":"FALSE","Armor_per_sec":0,"Explo_res":0.3,"Melee_res":0,"Special":"none","Repair_num":4070,"Shop_name":"soldier_vest_03"},
{"key":"Extra Strong","HP":275,"RFProtection":"FALSE","Repel_shot":"FALSE","Armor_per_sec":0,"Explo_res":0,"Melee_res":0,"Special":"none","Repair_num":913,"Shop_name":"shared_vest_06"},
{"key":"CQB / Assault / Sniper","HP":200,"RFProtection":"FALSE","Repel_shot":"FALSE","Armor_per_sec":0,"Explo_res":0,"Melee_res":0,"Special":"none","Repair_num":0,"Shop_name":"none"},
{"key":"Demoman","HP":250,"RFProtection":"FALSE","Repel_shot":"FALSE","Armor_per_sec":0,"Explo_res":0,"Melee_res":0,"Special":"none","Repair_num":0,"Shop_name":"none"},
{"key":"Spec-Ops","HP":300,"RFProtection":"FALSE","Repel_shot":"FALSE","Armor_per_sec":0,"Explo_res":0,"Melee_res":0,"Special":"none","Repair_num":0,"Shop_name":"none"}];
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






















