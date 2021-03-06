require(['windowCoreFunctions', 'jquery', 'jqueryUI'], function(wCore, $, counters, jqueryUI) {

  document.getElementById("PopupContainer").style.borderImage = "url('../images/boxSide.png') 15% 50% 15% 30%  fill round stretch";
  document.getElementById("message").innerHTML = "<img src='../images/" + localStorage.getItem("message") + ".png' id='alert'>";

  overwolf.games.getRunningGameInfo(function(result) {
    overwolf.windows.changePosition(localStorage.getItem("popupID"), (result.width / 2) - 150, 50, function(result) {
      console.log("move result", result);
      animation();
    });
  });

  function animation() {
    $("#PopupContainer").toggle("slide", {
      direction: 'left',
      duration: 250
    });
    setTimeout(function() {
      $("#PopupContainer").toggle("slide", {
        direction: 'right',
        duration: 150
      });
      setTimeout(function() {
        wCore.closeWindow();
      }, 1000);
    }, 2000);
  }
});
