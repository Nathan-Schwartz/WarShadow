require(['windowCoreFunctions', 'jquery', 'counters'], function(wCore, $, counters) {

  document.getElementById("HScount").innerHTML = 0 + " Hs";

  window.addEventListener('storage', function(storageEvent) {
    if (storageEvent.key == "headshot1") {
      document.getElementById("HScount").innerHTML = counters.getHeadshot(1) + " Hs";
    }
  });

  $("#HUDcontainer").mousedown(wCore.dragMove);
});
