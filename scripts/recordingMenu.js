require(['windowCoreFunctions', 'jquery', 'jqueryUI', 'refreshHUD', 'recording'], function(wCore, $, jqueryUI, rHUD, rec) {

  $("#RecordingMenuContainer").fadeIn();

  $(document).tooltip({
    track: true,
    show: {
      delay: 200
    },
    hide: false,
    position: {
      collision: "fit"
    }
  });

  window.addEventListener('storage', function(storageEvent) {
    if (storageEvent.key == "recordingOn") {
      if (!JSON.parse(storageEvent.newValue)) {
        document.getElementById("turnOn").style.backgroundImage = "url('../images/off.png')";
        $("#onceEnabled").hide();
      } else {
        document.getElementById("turnOn").style.backgroundImage = "url('../images/on.png')";
        $("#onceEnabled").fadeIn().css("display", "inline-block");
      }
    }
    if (storageEvent.key == "recordingLayers") {
      if (JSON.parse(localStorage.getItem("recordingLayers")) == 0 && document.getElementById("error").title == "You have pending recordings from Autocapture, please wait until they finish.")
        $("#error").hide();
    }

    if (storageEvent.key == "AutoRecActive") {
      if (document.getElementById("error").title == "Please turn off AutoRecord first.")
        $("#error").hide();
    }
  });

//		Menu Listeners
  //menu buttons
  $("#settingsRec").click(function() {
    localStorage.setItem('optionsCalledBy', "recording");
    rHUD.refreshHelper(true, 'Settings');
  });

  var enabled = false;
  var url = "";

  JSON.parse(localStorage.getItem('recordingOn')) ? (function() {
    document.getElementById("turnOn").style.backgroundImage = "url('../images/on.png')";
    $("#onceEnabled").fadeIn().css("display", "inline-block");
    document.getElementById("turnOn").title = "Disable Recording";
  })() : document.getElementById("turnOn").style.backgroundImage = "url('../images/off.png')";

  var successHandler = {};
  successHandler.postCheckCallback = function() {};
  successHandler.successCheck = function(result) {
    if (result.status == "success") {
      if (typeof successHandler.postCheckCallback == "function")
        successHandler.postCheckCallback();
    } else {
      console.log("failed:", result);
    }
  };

  $("#turnOn").click(function() {
    if (JSON.parse(localStorage.getItem('recordingOn')) === true) {
      successHandler.postCheckCallback = function() {
        document.getElementById("turnOn").style.backgroundImage = "url('../images/off.png')";
        document.getElementById("turnOn").title = "Enable Recording"
        $("#onceEnabled").hide();
      };
      rec.turnOff(successHandler.successCheck);

    } else if (JSON.parse(localStorage.getItem('recordingOn')) === false) {
      successHandler.postCheckCallback = function() {
        document.getElementById("turnOn").style.backgroundImage = "url('../images/on.png')";
        document.getElementById("turnOn").title = "Disable Recording";
        $("#onceEnabled").fadeIn().css("display", "inline-block");
      };
      rec.turnOn(successHandler.successCheck);

    }
  });

  $("#start").click(function() {
    if (!JSON.parse(localStorage.getItem("manualRecordingOn"))) {
      successHandler.postCheckCallback = function() {
        document.getElementById("start").style.backgroundImage = "url('../images/pause.png')";
        document.getElementById("start").title = "Finish Recording";

        document.getElementById("unavailableButtons").style.display = "none";
        document.getElementById("moreButtons").style.display = "none";

        localStorage.setItem("manualRecordingOn", !JSON.parse(localStorage.getItem("manualRecordingOn")));
      }

      if (!JSON.parse(localStorage.getItem("AutoRecActive"))) {
        if (JSON.parse(localStorage.getItem("recordingLayers")) == 0) {
          if (JSON.parse(localStorage.getItem("layersUsed")) === true) {
            rec.turnOff(function() {
              rec.turnOn(function() {
                rec.startCapture(successHandler.successCheck);
                $("#error").hide();
              }, false);
            });
          } else {
            rec.startCapture(successHandler.successCheck);
            $("#error").hide();
          }
        } else {
          document.getElementById("error").title = "You have pending recordings from Autocapture, please wait until they finish.";
          flashError();
        }
      } else {
        document.getElementById("error").title = "Please turn off AutoRecord first.";
        flashError();
      }
    } else {
      successHandler.postCheckCallback = function() {
        document.getElementById("start").style.backgroundImage = "url('../images/play.png')";
        document.getElementById("start").title = "Start Recording";

        document.getElementById("unavailableButtons").style.display = "inline-block";
        document.getElementById("moreButtons").style.display = "inline-block";

        localStorage.setItem("manualRecordingOn", !JSON.parse(localStorage.getItem("manualRecordingOn")));
      };
      rec.finishCapture(successHandler.successCheck);
    }
  });

  $("#RecordingMenuContainer").mousedown(wCore.dragMove);
  $("#capture").click(function() {
    rec.capture(parseInt(JSON.parse(localStorage.getItem("Settings")).Rgrab) * 1000, 1);
  });
  $("#closeRec").click(function() {
    wCore.minimizeWindow();
    localStorage.setItem("dontRestoreRecMenu", true);
  });

  function flashError() {
    $("#error").show();
    var showing = false;
    var original = document.getElementById("error").style.background;
    $("#error").mouseenter(function() {
      clearInterval(loop);
      document.getElementById("error").style.background = original;
    });
    var loop = setInterval(function() {
      showing = !showing;
      if (showing)
        document.getElementById("error").style.background = "#323232";
      else
        document.getElementById("error").style.background = original;
    }, 200);
  }
});
