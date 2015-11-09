
/*		
Milliseconds between bullets = 	60000/rpm
# of shots to kill = 	ROUNDUP(Vest hp value/Damage_Used) + if(vest_type = deflect, 1,0))
damage_reduction = 	if(distance>min_range, Distance - min_range, return zero) * damage/meter-lost * damage/meter-silencer-modifier
Experimental Damage = 	(gun_damage_default - Damage_reduction) * point_blank_silencer_mod - vest_mod
Damage Used = 	if(Experimental_Damage <min_damage(modded), min damage(modded), Experimental_Damage)
point_blank_silencer_mod = 	If(Silencer= shared, .85, if(Silencer= specialized, .9, if(Silencer= none = 1)))
vest_mod = 	if(vest absorbs 10 damage, 10, 0)
min_damage(modded) = 	gun_min damage * point_blank_silencer_mod - vest_mod
*/

//sorry for the switch in naming style, it was easier for me to look at since the names are all technical.

define(function () {

	function NTKvest(damage_default, min_default, attachment_equipped, RFProt, distance_selected, weapon_range, weapon_class, damage_lost_p_meter, vestHP, Repelshot, pellets){
		var tank = Repelshot === true ? 1 : 0;

		var NTK = (  (vestHP / damageCalc(damage_default, min_default, attachment_equipped, RFProt, distance_selected, weapon_range, weapon_class, damage_lost_p_meter, pellets)) - tank  );
		return Math.ceil(NTK);
	}

	function NTKhead(damage_default, min_default, attachment_equipped, RFProt, distance_selected, weapon_range, weapon_class, damage_lost_p_meter, vestHP, Hdamage_reduc, weapon_archetype, pellets){
		var HSmult = 5;
		
		if(weapon_archetype == "E")
			HSmult = 4;
		else if(weapon_archetype == "M")
			HSmult = 1.2 * (Math.round(pellets * (100 - distance_selected)/100)-pellets)/pellets;//should be 1.2, but accounting for pellets missin I'm changing it to be based on a percentage. 
		
		var NTK = vestHP / (damageCalc(damage_default, min_default, attachment_equipped, false, distance_selected, weapon_range, weapon_class, damage_lost_p_meter, pellets) * Hdamage_reduc * HSmult);
		return Math.ceil(NTK);
		}
		

	function TTKhead(damage_default, min_default, attachment_equipped, RFProt, distance_selected, weapon_range, weapon_class, damage_lost_p_meter, vestHP, Hdamage_reduc, weapon_archetype, RPM, pellets){

		var milliseconds_between_shots = 60000/RPM;
		return Math.round(((NTKhead(damage_default, min_default, attachment_equipped, RFProt, distance_selected, weapon_range, weapon_class, damage_lost_p_meter, vestHP, Hdamage_reduc, weapon_archetype, pellets)* milliseconds_between_shots) - milliseconds_between_shots)*100)/100;
	}

	function TTKvest(damage_default, min_default, attachment_equipped, RFProt, distance_selected, weapon_range, weapon_class, damage_lost_p_meter, vestHP, Repelshot, RPM, pellets){
		var milliseconds_between_shots = 60000/RPM;
		return Math.round(((NTKvest(damage_default, min_default, attachment_equipped, RFProt, distance_selected, weapon_range, weapon_class, damage_lost_p_meter, vestHP, Repelshot, pellets)* milliseconds_between_shots) - milliseconds_between_shots)*100)/100;
	}

	function damageCalc(damage_default, min_default, attachment_equipped, RFProt, distance_selected, weapon_range, weapon_class, damage_lost_p_meter, pellets){
	//This is the main damage function, the ones below are just helpers
	//console.log("pellets: " + pellets);
	
		var silencer_reduc_mult = 1;
		var silencer_fall_off_mult = 1;
		var vest_reduc = 0;
		var test_damage = 0;
		var weaponrange = weapon_range;
		
		if(RFProt == true)
			vest_reduc = 10;
			
		if(attachment_equipped == "sharedsil"){
			silencer_reduc_mult = .85;
			silencer_fall_off_mult = 1.1;
		}else if(attachment_equipped == "specsil"){
			silencer_reduc_mult = .9;
			if(weapon_class == "E")
				silencer_fall_off_mult = 1.2;
			else
				silencer_fall_off_mult = 1;
		}else if(attachment_equipped == "suppressor")
			weaponrange = weapon_range*1.2;
		
		if(weapon_class == 'M'){
		/*
		Shotgun calculations
		
		This will be annoying and more complicated unfortunately
		
		Minimum damage won't apply 90% of the time because its rare to hit with all pellets at long distances
		Its hard to calculate damage accurately. All I can do realistically is compare shotguns against other shotguns.
		
		My current Idea is to estimate how many pellets hit and reduce the % as distance increases. Then multiply damage per pellet by the % of pellets that hit.
		My current method is to set relate it inversely to distance so 100 meters = 0% hit, 99 meters 1% hit, 50 meters 50% hit, etc. Seems reasonable.
		
		Headshots calculations are gonna be totally messed up because even less pellets hit the head.
		To compensate i guess i could just reduce by more %
		
		*/
			var minDamage_per_pellet = minDamage(min_default, vest_reduc, silencer_reduc_mult)/pellets;
			damage_default = damage_default/pellets;
			damage_lost_p_meter = damage_lost_p_meter/pellets
			test_damage_per_pellet = ((damage_default - damageFallOff(distance_selected, weaponrange, weapon_class, damage_lost_p_meter, silencer_fall_off_mult)) * silencer_reduc_mult);//vest reduc should not apply to individual pellets
			console.log("test damage per pellet: " + test_damage_per_pellet);
			var pellets_hit_bogus = Math.round(pellets * (100 - distance_selected)/100);//This is some bogus hocus pocus I made up to try to estimate how many pellets will hit a target at given range
			
			test_damage_per_pellet = test_damage_per_pellet < minDamage_per_pellet ? minDamage_per_pellet : test_damage_per_pellet; //don't let individual pellets go below minimum damage
			
			return ((test_damage_per_pellet * pellets_hit_bogus) - vest_reduc) < 0 ? 0 :  Math.round(((test_damage_per_pellet * pellets_hit_bogus) - vest_reduc)*100)/100; //If damage is less than a single pellet return single pellet
			
		}else{
			test_damage = ((damage_default - damageFallOff(distance_selected, weaponrange, weapon_class, damage_lost_p_meter, silencer_fall_off_mult)) * silencer_reduc_mult) - vest_reduc;

			var minDamTemp = minDamage(min_default, vest_reduc, silencer_reduc_mult);
			return (test_damage <= minDamTemp) ? Math.round(minDamTemp*100)/100 : Math.round(test_damage*100)/100;
		}
	}
			
	function minDamage(min_default, vest_reduc, silencer_reduc_mult){
	
		var adjusted_min_damage = 0;
		adjusted_min_damage = min_default * silencer_reduc_mult - vest_reduc;
		return adjusted_min_damage;
	};
	
	function damageFallOff(distance_selected, weapon_range, weapon_class, damage_lost_p_meter, silencer_fall_off_mult){
		
		var fall_off_distance = distance_selected - weapon_range;
		var damage_lost = 0;
		
		if(distance_selected > weapon_range)
			damage_lost = fall_off_distance * (damage_lost_p_meter * silencer_fall_off_mult);	

		return damage_lost;
	}
	
	return{
		TTKhead:TTKhead,
		TTKvest:TTKvest,
		NTKhead:NTKhead,
		NTKvest:NTKvest,
		damageCalc:damageCalc
	};
});	