require(['windowCoreFunctions', 'jquery', 'counters'], function(wCore, $, counters) {

  document.getElementById("recCount").innerHTML = localStorage.getItem("recordingCount") + " vids";

  window.addEventListener('storage', function(storageEvent) {
    if (storageEvent.key == "recordingCount")
      document.getElementById("recCount").innerHTML = storageEvent.newValue + " vids";
  });

  $("#HUDcontainer").mousedown(wCore.dragMove);
});