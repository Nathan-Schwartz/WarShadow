require(['windowCoreFunctions', 'jquery', 'jqueryUI'], function(wCore, $, jqueryUI) {

  document.body.style.overflow = "auto";

  $(function() {
    $("#infoTabs").tabs();
    $("#enemyHelmet8").selectmenu();
    $("#RECaccordion, #HUDaccordion").accordion({
      heightStyle: "content",
      collapsible: true,
      active: false
    });
    $("#vertTabs").tabs().addClass("ui-tabs-vertical ui-helper-clearfix");
    $("#vertTabs li").removeClass("ui-corner-top").addClass("ui-corner-left");
    $("#infoContent").fadeIn();
  });
});
