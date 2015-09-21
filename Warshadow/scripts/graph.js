
	define(['jsapi'],function(gAPI){

function graphIT() {

		var options = {
			legend: { position: 'bottom' },
			hAxis: {
				title: 'Distance (m)',
				minValue:0,
				viewWindow: {max: parseFloat(document.getElementById("distance").value)},
				ticks: [10,20, 30, 40, 50, 60, 70, 80, 90, 100]//, 110, 120, 130, 140, 150, 160, 170, 180, 190, 200, 210, 220, 230, 240, 250, 260, 270, 280, 290, 300, 310, 320, 330, 340, 350, 360, 370, 380, 390, 400, 410, 420, 430, 440, 450, 460, 470, 480, 490, 500, 510, 520, 530, 540, 550, 560, 570, 580, 590, 600, 610, 620, 630, 640, 650, 660, 670, 680, 690, 700, 710, 720, 730, 740, 750, 760, 770, 780, 790, 800, 810, 820, 830, 840, 850, 860, 870, 880, 890, 900, 910, 920, 930, 940, 950, 960, 970, 980, 990, 1000]
			},
			vAxis: {
				title: 'Damage',
				minValue: 0,
			},
		
			width: 900,
			height: 500,
			colors: ['#a52714', '#097138']//, '#000080','#8B008B', '#FFFF00']
		};
		console.log(options);
		
		var data = new gAPI.google.visualization.DataTable();
		data.addColumn('number', 'X');
		data.addColumn('number', document.getElementById("weaponSelect1").value);
		
		if(document.getElementById("showsecond").checked == true){
			data.addColumn('number', document.getElementById("weaponSelect2").value);
			options.colors[2] = '#000080';
		}	
		if(document.getElementById("showthird").checked == true){
			data.addColumn('number', document.getElementById("weaponSelect3").value);	
			options.colors[3] = '#8B008B';
		}
		if(document.getElementById("showfourth").checked == true){
			data.addColumn('number', document.getElementById("weaponSelect4").value);
			options.colors[4] = '#7FFF00';
		}
		if(document.getElementById("showfifth").checked == true){
			data.addColumn('number', document.getElementById("weaponSelect5").value);
			
		}	
		
		if((document.getElementById("selectGData").value == "Ddamage")){
			options.vAxis.title = "Damage";
		}else if((document.getElementById("selectGData").value == "DttkV")||(document.getElementById("selectGData").value == "DttkH")){
			options.vAxis.title = "Milliseconds to kill";
		}else if((document.getElementById("selectGData").value == "DntkV")||(document.getElementById("selectGData").value == "DntkH")){
			options.vAxis.title = "Shots to kill";
		}
		
		
		data.addRows(myA);
		
		var chart = new gAPI.google.visualization.LineChart(document.getElementById('chart'));
		chart.draw(data, options);
	  //chart.draw(data, google.charts.Line.convertOptions(options));
	}
	
	return{graphIT:graphIT};
});