require(['jquery', 'jqueryUI', 'localStorageInit', 'gameEvent', 'windowCoreFunctions', 'refreshHUD', 'recording', "launchManager", "spectrum", 'counters'], function($, jqueryUI, localStorageInit, gEvent, wCore, rHUD, rec, launcher, spectrum, counters) {

  function setTheme() {
    if (JSON.parse(localStorage.getItem("updateTheme")) === false) {
      console.log("init theme");
      if (!JSON.parse(localStorage.getItem("Settings")).useLP) {
        document.getElementById("contentWrapper").style.borderImage = "url('../images/box.png') 40% 15% 50% 15% stretch round";
        document.getElementById("contentWrapper").style.background = "-webkit-linear-gradient(right bottom," + localStorage.getItem('color1') + "," + localStorage.getItem('color2') + ")";
        document.getElementById("contentWrapper").style.backgroundClip = "padding-box";
      } else {
        document.getElementById("content").style.backgroundColor = "rgba(5, 5, 5, 0.5)";
        $('#KPMP, #HSNumP, #HSPercP, #HSChainP, #recCountP, #crosshairP, #autoonP').toggleClass("orangeCheckbox normalCheckbox");
        $('#Stats, #record, #showcontent').toggleClass("orangeButton button");
        $('#tower, #cold').toggleClass("subOrangeButton subbutton");
        $('#minimize, #info, #close, #settingsWin').toggleClass("orangeSmallButton smallbutton");
        document.getElementById("settingsWin").style.backgroundImage = "url(../images/optionsTrans.png)";
        $("#colorContainer").hide();
      }
    } else {
      console.log("updating theme");
      $('#KPMP, #HSNumP, #HSPercP, #HSChainP, #recCountP, #crosshairP, #autoonP').toggleClass("orangeCheckbox normalCheckbox");
      $('#Stats, #record, #showcontent').toggleClass("orangeButton button");
      $('#tower, #cold').toggleClass("subOrangeButton subbutton");
      $('#minimize, #info, #close, #settingsWin').toggleClass("orangeSmallButton smallbutton");

      if (!JSON.parse(localStorage.getItem("Settings")).useLP) {
        document.getElementById("content").style.backgroundColor = "transparent";
        document.getElementById("contentWrapper").style.borderImage = "url('../images/box.png') 40% 15% 50% 15% stretch round";
        document.getElementById("contentWrapper").style.background = "-webkit-linear-gradient(right bottom," + localStorage.getItem('color1') + "," + localStorage.getItem('color2') + ")";
        document.getElementById("contentWrapper").style.backgroundClip = "padding-box";

        document.getElementById("settingsWin").style.backgroundImage = "url(../images/options.png)";
        $("#colorContainer").show();
      } else {
        document.getElementById("content").style.background = "rgba(5, 5, 5, 0.5)";
        document.getElementById("contentWrapper").style.background = "transparent";
        document.getElementById("contentWrapper").style.border = "10px solid transparent";

        document.getElementById("settingsWin").style.backgroundImage = "url(../images/optionsTrans.png)";
        $("#colorContainer").hide();
      }
      localStorage.setItem("updateTheme", false);
    }
  }
  setTheme();

  $("#content").fadeIn();

  $("#autoCapConflict").dialog({
    autoOpen: false,
    resizable: false,
    draggable: false,
    height: 320,
    width: 175,
    modal: true,
    buttons: {
      Cancel: {
        text: 'OK',
        click: function() {
          $(this).dialog("close");
        }
      }
    }
  });
  $("#closeDialog").dialog({
    autoOpen: false,
    resizable: false,
    draggable: false,
    height: 320,
    width: 175,
    modal: true,
    buttons: {
      Proceed: {
        text: 'Yes',
        click: function() {
          wCore.closeWindow();
        }
      },
      Cancel: {
        text: 'Cancel',
        click: function() {
          $(this).dialog("close");
        }
      }
    }
  });

  var dialogCounter = 1;
  $("#dialog").dialog({
    autoOpen: false,
    resizable: false,
    draggable: false,
    height: 320,
    width: 175,
    modal: true,
    buttons: {
      Proceed: {
        text: 'Next',
        click: function() {
          dialogCounter++;

          if (dialogCounter == 2) {
            document.getElementById("page2").style.display = "block";
            document.getElementById("page1").style.display = "none";
          } else if (dialogCounter == 3) {
            document.getElementById("page3").style.display = "block";
            document.getElementById("page2").style.display = "none";
          } else if (dialogCounter == 4) {
            document.getElementById("page4").style.display = "block";
            document.getElementById("page3").style.display = "none";
          } else if (dialogCounter == 5) {
            document.getElementById("page5").style.display = "block";
            document.getElementById("page4").style.display = "none";
          } else if (dialogCounter == 6) {
            document.getElementById("page6").style.display = "block";
            document.getElementById("page5").style.display = "none";
          } else if (dialogCounter == 7) {
            document.getElementById("page7").style.display = "block";
            document.getElementById("page6").style.display = "none";
          } else if (dialogCounter == 8) {
            document.getElementById("page8").style.display = "block";
            document.getElementById("page7").style.display = "none";
          }
          /*else if(dialogCounter == 9){
          						document.getElementById("page9").style.display = "block";
          						document.getElementById("page8").style.display = "none";
          					}*/

          if (dialogCounter > 8) {
            $(this).dialog("close");
            rHUD.refreshHelper(true, 'Settings');
          }
        }
      },
      Cancel: {
        class: 'rightButton',
        text: 'Cancel',
        click: function() {
          $(this).dialog("close");
          rHUD.refreshHelper(true, 'Settings');
        }
      }
    }
  });

  //check if the window was closed while collapsed last session. If so, resize it when launching.
  overwolf.windows.getCurrentWindow(function(window) {
    if (window.window.width < 150) {
      smallwindow = true;
      ResizeMain();
    }
  });

  //Color pickers
  $('#cpicker1').spectrum({
    color: localStorage.getItem('color1'),
    preferredFormat: "rgb",
    showAlpha: true,
    showButtons: false,
    move: function(color) {
      document.getElementById("contentWrapper").style.background = "-webkit-linear-gradient(right bottom," + color + "," + $("#cpicker2").spectrum("get") + ")";
      document.getElementById("contentWrapper").style.backgroundClip = "padding-box";
      localStorage.setItem('color1', color);
    }
  });

  $('#cpicker2').spectrum({
    color: localStorage.getItem('color2'),
    preferredFormat: "rgb",
    showAlpha: true,
    showButtons: false,
    move: function(color) {
      document.getElementById("contentWrapper").style.background = "-webkit-linear-gradient(right bottom," + $("#cpicker1").spectrum("get") + "," + color + ")";
      document.getElementById("contentWrapper").style.backgroundClip = "padding-box";
      localStorage.setItem('color2', color);
    }
  });



  var smallwindow = false;

  function ResizeMain() {
    if (!JSON.parse(localStorage.getItem("Settings")).useLP) {
      /*This function will trigger upon clicking the icon in the main windows top-left corner
      It resizes the window to be small enough to hide all buttons and text. 
      Toggling it again will make the window larger so that all features can be seen.*/
      if (smallwindow === true) {
        document.getElementById("contentWrapper").style.background = "-webkit-linear-gradient(right bottom," + $("#cpicker1").spectrum("get") + "," + $("#cpicker2").spectrum("get") + ")";
        document.getElementById("contentWrapper").style.backgroundClip = "padding-box";
        document.getElementById("contentWrapper").style.borderImage = "url('../images/box.png') 40% 15% 50% 15% stretch round";
        document.getElementById("content").style.padding = "5px";
        overwolf.windows.changeSize(localStorage.getItem("MainID"), 200, 425);
        //overwolf.windows.changeSize('MainWindow', 200, 460);//This would idealy work, but its not working
        smallwindow = false;
        document.getElementById("WarLogo").style.display = "block";

      } else if (smallwindow === false) {
        document.getElementById("contentWrapper").style.background = "-webkit-linear-gradient(right bottom,rgba(256,256,256,0),rgba(256,256,256,0))";
        document.getElementById("contentWrapper").style.backgroundClip = "padding-box";
        document.getElementById("contentWrapper").style.borderImage = "url('../images/closed.png') 20% fill stretch";
        document.getElementById("content").style.padding = "1px";
        overwolf.windows.changeSize(localStorage.getItem("MainID"), 80, 80);
        smallwindow = true;
        document.getElementById("WarLogo").style.display = "none";
      }
    } else {
      if (smallwindow === true) {
        overwolf.windows.changeSize(localStorage.getItem("MainID"), 200, 425);
        smallwindow = false;
        document.getElementById("WarLogo").style.display = "block";
        document.getElementById("content").style.backgroundColor = "rgba(5, 5, 5, 0.5)";
      } else if (smallwindow === false) {
        overwolf.windows.changeSize(localStorage.getItem("MainID"), 80, 80);
        smallwindow = true;
        document.getElementById("WarLogo").style.display = "none";
        document.getElementById("content").style.backgroundColor = "rgba(5, 5, 5, 0)";
      }
    }
  };

  //	Game Events Listener
  overwolf.games.events.onNewEvents.addListener(
    function(value) {
      for (var i = 0; i < value.events.length; i++) {
        console.log("Event: " + value.events[i].name);
        gEvent.nameHandler(value.events[i].name);
      }
    }
  );

  window.onbeforeunload = function(event) {
    rec.turnOff();
  };

  window.addEventListener("storage", function(e) {
    if (e.key == "recordingOn" && JSON.parse(e.newValue) === false) {
      document.getElementById("autoon").checked = false;
    }

    if (e.key == "updateTheme" && JSON.parse(e.newValue) === true)
      setTheme();

    if (e.key == "recordingLayers") {
      if (JSON.parse(localStorage.getItem("recordingLayers")) < 0)
        console.log("We broke science");
    }
  });

  overwolf.settings.registerHotKey("resetCounters", function(arg) {
    if (arg.status == "success") {
      counters.resetCounters();
    }
  });

  var smoking = false;
  var timeout = 0;
  overwolf.settings.registerHotKey("smokeTimer", function(arg) {
    if (arg.status == "success") {
      if (smoking === false) {
        smoking = true;
        rHUD.refreshHelper(true, "SmokeTimer");
        timeout = setTimeout(function() {
          smoking = false
        }, 15000);
      } else if (smoking === true) {
        clearTimeout(timeout);
        rHUD.refreshHelper(false, "SmokeTimer");
        rHUD.refreshHelper(true, "SmokeTimer");
        timeout = setTimeout(function() {
          smoking = false
        }, 15000);
      }
    }
  });

  overwolf.settings.registerHotKey("capture", function(arg) {
    rec.capture(parseInt(JSON.parse(localStorage.getItem("Settings")).Rgrab) * 1000, 1);
  });

  overwolf.settings.registerHotKey("showHideWindows", function(arg) {
    if (arg.status == "success") {
      overwolf.windows.getCurrentWindow(function(window) {
        if (window.window.isVisible === true) {
          minimizeAllWindows();
        } else {
          restoreAllWindows();
        }
      });
    }
  });

  //Slider for content
  $("#showcontent").click(function() {
    $("#contentbuttons").slideToggle(200);
  });

  //		Menu Listeners
  $("#contentWrapper").mousedown(function(e) {
    if (!$(e.target).hasClass('draggable'))
      return;

    wCore.dragMove();
  });

  //menu buttons
  $("#resize").dblclick(ResizeMain);
  $("#minimize").click(wCore.minimizeWindow);
  $("#close").click(function() {
    if (JSON.parse(localStorage.getItem("manualRecordingOn")) === false) {
      if (JSON.parse(localStorage.getItem("recordingLayers")) == 0)
        rec.turnOff(function() {
          wCore.closeWindow();
        });
      else
        $("#closeDialog").dialog("open");
    } else {
      rec.finishCapture(function(result) {
        rec.turnOff(function() {
          wCore.closeWindow();
        });
      });
    }
  });
  $("#cold").click(function() {
    overwolf.utils.openUrlInOverwolfBrowser("https://steamcommunity.com/sharedfiles/filedetails/?id=352301863");
  }); //openUrlInDefaultBrowser
  $("#tower").click(function() {
    overwolf.utils.openUrlInOverwolfBrowser("https://steamcommunity.com/sharedfiles/filedetails/?id=299691346");
  });

  $("#info").click(function() {
    rHUD.refreshHelper(true, 'Info');
  });
  $("#settingsWin").click(function() {
    rHUD.refreshHelper(true, 'Settings');
  });
  $("#settingsWin").mouseenter(function() {
    if (JSON.parse(localStorage.getItem("Settings")).useLP) document.getElementById("settingsWin").style.backgroundImage = "url(../images/optionsOrange.png)";
  });
  $("#settingsWin").mouseleave(function() {
    if (JSON.parse(localStorage.getItem("Settings")).useLP) document.getElementById("settingsWin").style.backgroundImage = "url(../images/optionsTrans.png)";
  });
  $("#Stats").click(function() {
    rHUD.refreshHelper(true, "StatCrack");
  });
  $("#record").click(function() {
    localStorage.setItem("dontRestoreRecMenu", false);
    rHUD.refreshHelper(true, "Recording");
  });

  //menu checkboxes
  $("#KPM, #HSChain, #HSPerc, #crosshair, #HSNum, #recCount").change(rHUD.refreshHUD);

  $("#autoon").change(function() {
    if (document.getElementById("autoon").checked == false) {
      localStorage.setItem("AutoRecActive", false);

    } else {
      if (!JSON.parse(localStorage.getItem("manualRecordingOn"))) {
        rec.turnOn(function(result) {
          if (result.status != "success" && result.error != "Already turned on.") {
            console.log("ERROR ENABLING RECORDING: ", result.error);
            document.getElementById("autoon").checked = false;
            localStorage.setItem("AutoRecActive", false);
          } else {
            localStorage.setItem("AutoRecActive", true);
          }
        });
      } else {
        $("#autoCapConflict").dialog("open");
        document.getElementById("autoon").checked = false;
        localStorage.setItem("AutoRecActive", false);
      }
    }
  });
  $("#colorContainer input:checkbox[id=colorVis]").click(function() {
    var $this = $(this);
    if ($this.attr("checked")) {
      $('#container').toggleClass("bigCheckbox normalCheckbox");
    } else {
      $this.parent().toggleClass("normalCheckbox bigCheckbox");
    }
  });
  $("#colorVis").change(function(e) {
    if (document.getElementById("colorVis").checked === true) {
      $("#colorText").hide();
      $("#colorbuttons").fadeIn();
      document.getElementById("colorContainer").style.left = '5px';

    } else {
      $("#colorText").fadeIn();
      $("#colorbuttons").hide();
      document.getElementById("colorContainer").style.left = '0px';
    }
  });

  //Restore all windows together
  overwolf.windows.onMainWindowRestored.addListener(
    function(value) {
      rHUD.refreshHUD();
    }
  );

  function restoreAllWindows() {
    overwolf.windows.restore(localStorage.getItem("MainID")); //"MainWindow");
    overwolf.windows.restore("Info");
    overwolf.windows.restore("Settings");
    overwolf.windows.restore("StatCrack");
    overwolf.windows.restore("Replay");
    rHUD.refreshHUD();
    if (JSON.parse(localStorage.getItem("dontRestoreRecMenu")) === false)
      overwolf.windows.restore("Recording");
  };

  function minimizeAllWindows() {
    overwolf.windows.minimize('SmokeTimer');
    overwolf.windows.minimize('HSCounter');
    overwolf.windows.minimize('HSChains');
    overwolf.windows.minimize('HSPercent');
    overwolf.windows.minimize('recCount');
    overwolf.windows.minimize('KPminute');
    overwolf.windows.minimize('KDR');

    overwolf.windows.minimize('Info');
    overwolf.windows.minimize(localStorage.getItem("MainID")); //'MainWindow');
    overwolf.windows.minimize('Settings');
    overwolf.windows.minimize('StatCrack');
    overwolf.windows.minimize('Replay');
    overwolf.windows.minimize('Recording');
  };

  //If game ends close the program, focus change manager
  overwolf.games.onGameInfoUpdated.addListener(
    function(resultA) {
      var test = JSON.parse(localStorage.getItem("Settings"));
      if (test.closeOnEnd == true) {
        if (resultA.runningChanged == true) {
          overwolf.games.getRunningGameInfo(
            function(resultB) {
              if (resultB == null)
                overwolf.windows.close(localStorage.getItem("MainID")); //'MainWindow');//game closed
            }
          );
        }
      }
      if (resultA.focusChanged === true) {
        // if open and minimize are disabled, app can disapear behind other apps when tabbed out, and will open in game if not minimized. 
        if (resultA.gameInfo.isInFocus === true) {
          if (test.restoreOnTab === true) {
            //game is in focus so restore all except settings and statcrack
            restoreAllWindows();
          }
        } else {
          if (test.minimizeOnTab === true) {
            //game is out of focus so minimize all
            minimizeAllWindows();
          }
        }
      }
    }
  );
});
