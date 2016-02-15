require(['windowCoreFunctions', 'jquery', 'counters'], function(wCore, $, counters) {

  document.getElementById("HSperc").innerHTML = 0 + "%";

  function hsPercent() {
    headshots = counters.getHeadshot(1);
    kills = counters.getKill();

    var percent = headshots / kills * 100;
    percent = Math.round(percent * 100) / 100;

    return percent;
  };

  window.addEventListener('storage', function(storageEvent) {
    if (storageEvent.key == "headshot1" || storageEvent.key == "kill")
      document.getElementById("HSperc").innerHTML = hsPercent() + "%";
  });

  $("#HUDcontainer").mousedown(wCore.dragMove);
});
