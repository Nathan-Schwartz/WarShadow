define(["refreshHUD"], function(rHUD) {

  overwolf.media.onScreenshotTaken.addListener(function() {
    localStorage.setItem('message', "alertScreenshot");
    rHUD.refreshHelper(true, "popup");
  });

  function isFunction(arg) {
    if (typeof arg == "function")
      return true;

    return false;
  };

  function turnOn(callback, notifyUser) {
    overwolf.media.replays.turnOn(
      {},
      function(result) {
        if (result.status == "success") {
          localStorage.setItem('recordingOn', true);
          localStorage.setItem('message', "alertEnabled");
          rHUD.refreshHelper(true, "popup");
        } else {
          if (result.error != "Already turned on.") {
            alert("I'm sorry, the recording feature wasn't able to start properly. Overwolf says the error is: " + result.error + "\n \nLook at the Info page to learn more.");
          } else if (result.error == "Already turned on." && JSON.parse(localStorage.getItem('recordingOn')) === false) {
            alert("There was an error. My app seems to think that another app stole the recording feature. If you you are using another app for recordings, please turn it off. Another possibility is that you aren't using the close button to close the app. \n\n Close and reopen the app, then try recording again. \n\nIf the problem persists, please check the Info page.");
          }
        }
        if (isFunction(callback))
          callback(result);
      }
    );
  };

  function turnOff(callback) {
    overwolf.media.replays.turnOff(
      function(result) {
        if (isFunction(callback))
          callback(result);

        localStorage.setItem("layersUsed", false);

        if (result.status == "success") {
          localStorage.setItem('message', "alertDisabled");
          localStorage.setItem('recordingOn', false);
          rHUD.refreshHelper(true, "popup");
        }
      }
    );
  };

  var url = "";

  function startCapture(callback) {
    overwolf.media.replays.startCapture(1,
      function(result) {
        if (isFunction(callback))
          callback(result);

        url = result.url;
        localStorage.setItem("url", result.url);
      }
    );
  };

  function finishCapture(callback) {
    overwolf.media.replays.finishCapture(localStorage.getItem("url"), function(result) {
      if (isFunction(callback))
        callback(result);

      if (result.status == "success") {
        localStorage.setItem("recordingCount", JSON.parse(localStorage.getItem("recordingCount")) + 1);
      }
    });
  };

  function capture(before, after, callback, recursed, recurseCount) {
    overwolf.media.replays.capture(before, after,
      function(result) {
        if (result.status == "success")
          localStorage.setItem("recordingCount", JSON.parse(localStorage.getItem("recordingCount")) + 1);

        if (isFunction(callback))
          callback(result);

      },
      function(result) {
        if (result.status == "success") {
          localStorage.setItem("url", result.url);
          overwolf.media.replays.finishCapture(result.url);
        } else if (result.error == "Replay is already capturing.") {
          if (!recursed) {
            setTimeout(function() {
              capture(before, after, callback, true, 0);
            }, 300);
          } else {
            console.log("recursed-already capturing", recurseCount);
            if (recurseCount < 5) {
              setTimeout(function() {
                capture(before, after, callback, true, recurseCount + 1);
              }, 300);
            } else {
              //already capturing, executing callback
              if (isFunction(callback))
                callback(result);
            }
          }
        } else if (result.error == "Replay not capturing.") {
          if (!recursed) {
            setTimeout(function() {
              capture(before, after, callback, true, 0);
            }, 300);
          } else {
            console.log("recursed - not capturing", recurseCount);
            if (recurseCount < 5) {
              setTimeout(function() {
                capture(before, after, callback, true, recurseCount + 1);
              }, 300);
            } else {
              //capture failed entirely, executing callback
              if (isFunction(callback))
                callback(result);
            }
          }
        }
      }
    );
  };

  return {
    capture: capture,
    turnOff: turnOff,
    turnOn: turnOn,
    startCapture: startCapture,
    finishCapture: finishCapture,
  };
});
