require(['windowCoreFunctions', 'jquery','jqueryUI'], function(wCore, $, jqueryUI){

	$(function() {
		$( "#infoTabs" ).tabs();
		$("#enemyHelmet8").selectmenu();
		$( "#accordion" ).accordion({
      heightStyle: "content"
    });
		$( "#vertTabs" ).tabs().addClass( "ui-tabs-vertical ui-helper-clearfix" );
		$( "#vertTabs li" ).removeClass( "ui-corner-top" ).addClass( "ui-corner-left" );
		$("#infoContent").fadeIn();
	});
	
	$("#content").mousedown(function(){wCore.dragMove();});
});