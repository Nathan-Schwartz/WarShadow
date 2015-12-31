# WarShadow

This is my first HTML/CSS/JS project ever! It isn't perfect but I'm happy with the progress I've made while working on it.
I have submitted it in the Nvidia Overwolf App Contest. Winners should be announced on the 4th of January [here](http://www.overwolf.com/nvidia-app-challenge/).

Can be found on the Overwolf App store [here](http://store.overwolf.com/app/Nathan-Schwartz).


*A brief explanation of the app is below.*
* The program opens main.html first.
* All .html files are in the /html folder.
* All .js files that correspond to an html file are in the /scripts folder.
* All of the other .js files I wrote are helpers and are found in /scripts/assets. The ones I didn't are in /scripts/lib
* The CSS is a mess. (My main focus was learning Javascript and I didn't have time to consolidate the CSS before submitting the app.)


**settings.js**<br>
Changes to settings are sent to localStorage via update() from settingHelper.js
When the settings window is opened it will load the users current settings via load() from settingHelper.js
These settings are checked via localStorage by many different functions to ensure that the program behaves according to user preference.

**main.js**<br>
Launching the app (both manually and automatically) is handled by launchManager.js
Handles launching all windows via refreshHUD.js
Listens for in-game events such as kills and headshots.  These are are handled by gameEventHandler.js
This file also reacts to changes in game state such as tab-in, tab-out, and closing the game. 

**gameEventHandler.js**<br>
This file will figure out which event occured and increment the necessary counters in counters.js
It will also read settings and if the user wants to record on certain events it will invoke a recording through recording.js

**HSChains.js  HSCounter.js  HSPercent.js  SmokeTimer.js  recCount.js  KPminute.js**<br>
These all correspond to HUD elements that mostly track in-game statistics and recieve their data from counters.js which is updated by gameEventHandler.js 

**StatCrack.js**<br>
This feature utilizes more files than any other in my project. 
<nutshell> There are 3 tabs. tab1 calculates damages. tab2 calculates repair costs. tab3 displays armor values </nutshell>

gearData.js stores (you guessed it) gear data in arrays of objects with initialize/set/get methods.
sync.js utilizes an Overwolf plugin to grab a game dump that contains item prices in an xml file. It overwrites the corresponding item values in gearData.js

* tab1:
updateData grabs the users input and calculates the damage each weapon with selected attachment does against the selected enemy gear data at each distance from 0-100.
This data is stored in a multidimensional array in arrayData.js and passed to graph.js
graph.js uses the data passed in and uses the Google Charts API to make a graph that is displayed with the users distance input in mind.
Note: I had to use several plugins to make it compatible with require.js: propertyParser.js & goog.js & async.js

* tab2:
repairCalc.js is what I call from StatCrack.js to do most of the work in tab2. It has 2 functions that are revealed, one for repair and one for rewards.
These calculate costs and income for scenarios in game using the choices provided by the user. Both of these functions call an external method that 
recalculates and prints the tables that are displayed for comparisons in the side-bar.

* tab3:
printArmorTab.js does exactly what you would expect of it.

**htmlInjection.js**<br>
This stores lists of options for drop down menus. These are appended to the innerHTML of 6 different select boxes and save 1000+ lines of HTML code.

**recordingMenu.js**<br> 
Offers 2 different recording types and a compact interface for using them. Implements several checks to ensure that no conflict with autorecording is made.

**crosshair.js**<br>
Provides previews of various crosshairs and 3 different ways of adjusting the crosshair position.



