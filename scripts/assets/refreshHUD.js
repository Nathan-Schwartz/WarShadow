define(function() {

  function refreshHelper(checked, name) {
    //This function is responsible for opening subwindows when their elements are triggered.
    if (checked == true) {
      overwolf.windows.getWindowState(name,
        function(value) {
          if (value.window_state == "closed") { //if it is closed we will open it
            overwolf.windows.obtainDeclaredWindow(name,
              function(result) {
                if (result.status == "success")
                  overwolf.windows.restore(name);
                else
                  console.log('refreshHUD failed');
              }
            );
          }
          else
            overwolf.windows.restore(name);
        }
      );
    } else {
      overwolf.windows.close(name);
    }
  };

  function refreshHUD() {
    //This function makes sure that all HUD elements are in the state they should be.
    document.getElementById('HSNum').checked ? refreshHelper(true, "HSCounter") : refreshHelper(false, "HSCounter");
    document.getElementById('HSChain').checked ? refreshHelper(true, "HSChains") : refreshHelper(false, "HSChains");
    document.getElementById('HSPerc').checked ? refreshHelper(true, "HSPercent") : refreshHelper(false, "HSPercent");
    document.getElementById('crosshair').checked ? refreshHelper(true, "Crosshair") : refreshHelper(false, "Crosshair");
    document.getElementById('KPM').checked ? refreshHelper(true, "KPminute") : refreshHelper(false, "KPminute");
    document.getElementById('recCount').checked ? refreshHelper(true, "recCount") : refreshHelper(false, "recCount");
  };

  return {
    refreshHUD: refreshHUD,
    refreshHelper: refreshHelper
  };
});
