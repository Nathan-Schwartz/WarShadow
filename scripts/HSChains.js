require(['windowCoreFunctions', 'jquery', 'counters'], function(wCore, $, counters) {

  document.getElementById("HSchains").innerHTML = 0 + " Avg";

  function avgChain() {
    var headshot1 = counters.getHeadshot(1);
    var headshot2 = counters.getHeadshot(2);
    var headshot3 = counters.getHeadshot(3);
    var headshot4 = counters.getHeadshot(4);
    var headshot5 = counters.getHeadshot(5);

    //Since we know how many headshots have happened (kept in localStorage), all we need to do is figure out how many individual chains there were.
    var NumberofChainsPRESINGLE = headshot2 + headshot3 + headshot4 + headshot5;
    var HSfromChains = headshot2 * 2 + headshot3 * 3 + headshot4 * 4 + headshot5 * 5;
    var NumberofSingleHS = headshot1 - HSfromChains; //number of singles
    var NumberofChains = NumberofSingleHS + NumberofChainsPRESINGLE; //add the number of singles to the number of chains cuz we are counting them.
    var AverageChainLength = headshot1 / NumberofChains;
    AverageChainLength = Math.round(AverageChainLength * 100) / 100; //round to .01

    return Math.round(AverageChainLength * 100) / 100; //round to .01
  }

  window.addEventListener('storage', function(storageEvent) {
    if (storageEvent.key == "headshot1" || storageEvent.key == "headshot2" || storageEvent.key == "headshot3" || storageEvent.key == "headshot4" || storageEvent.key == "headshot5")
      document.getElementById("HSchains").innerHTML = avgChain() + " Avg";
  });

  $("#HUDcontainer").mousedown(wCore.dragMove);
});
