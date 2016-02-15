require(['windowCoreFunctions', 'jquery', 'counters'], function(wCore, $, counters) {

  document.getElementById("KPMcount").innerHTML = 0 + " K/m";

  (function killPerMinute() {
    var intervals = setInterval(function() {
      counters.incrementTime();
      document.getElementById("KPMcount").innerHTML = Math.round((counters.getKill() * 60 * 100) / counters.getTime()) / 100 + " K/m";
    }, 1000);
  })();

  window.addEventListener('storage', function(storageEvent) {
    if (storageEvent.key == "kill") {
      document.getElementById("KPMcount").innerHTML = Math.round((counters.getKill() * 60 * 100) / counters.getTime()) / 100 + " K/m";
    }
  });

  $("#HUDcontainer").mousedown(wCore.dragMove);
});
