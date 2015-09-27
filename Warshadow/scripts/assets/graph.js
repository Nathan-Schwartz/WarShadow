
define(['goog!visualization,1,packages:[corechart,line]'], function(){
	//gAPI.google.load('visualization', '1', {packages: ['corechart', 'line']}); //syntax before implementing Require.js plugin
	
function graphIT(myData) {
// fontName: <string>,color: <string>,fontSize: 20,
		var options = {
			legend: { position: 'bottom' },
			backgroundColor: {stroke: 'black',strokeWidth: 3, fill: '#F9F9F9'},
			forceIframe: true,
			enableInteractivity: true,
			chartArea: {top:50, left: 150, height:'75%', width:'75%'}, 
			hAxis: {
				title: 'Distance (m)',
				minValue:0,
				viewWindow: {max: parseFloat(document.getElementById("distance").value)},
				ticks: [10,20, 30, 40, 50, 60, 70, 80, 90, 100],
				textStyle: {italic: true },
				titleTextStyle: {fontSize: 20,bold: true, fontSize: 16 }
			},
			vAxis: {
				title: 'Damage',
				minValue: 0,
				textStyle: {italic: true },
				titleTextStyle: {fontSize: 20,bold: true, fontSize: 16 }
			},
			legend:{position: 'top', 
					textStyle: {bold: true},
					alignment: 'center'},
			width: 900,
			height: 500,
			colors: ['#a52714', '#097138']//, '#000080','#8B008B', '#FFFF00']
		};
		console.log(options);
		
		var data = new google.visualization.DataTable();
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
		
		data.addRows(myData);
		
		var chart = new google.visualization.LineChart(document.getElementById('chart'));
		chart.draw(data, options);
	  //chart.draw(data, google.charts.Line.convertOptions(options)); //syntax for the beta version
	}
	
	return{graphIT:graphIT};
});