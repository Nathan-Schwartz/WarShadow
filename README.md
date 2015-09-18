# WarShadow

This is my first HTML/CSS/JS project ever! I will be submitting it to the Overwolf app challenge sponsored by Nvidia  (ending Nov 29) in the Warface divisions. 
The code is a bit messy and I'm working on adding comments and cleaning it up currently. I was initially mainly concerned with adding new features. 

Most of the features function as I expect them to, but some of them are unfinished (notably the Statcrack feature). The competition is around 25% over so I still have time to finish it.

I have switched my focus from producing features to learning more about Javascript and refactoring the existing code so that it is cleaner and more intuitive to navigate.

If you have not worked with Overwolf development before, here is a quick guide to installing this app.
There is a developer version of Overwolf found here: http://download.overwolf.com/OverwolfInstallerDevelopers.exe
go to settings > support > development options > load unpacked extensions
Navigate to the folder containing the manifest.json and load it up.
It recieves events from Warface (free-to-play FPS by Crytek) so it won't function to its fullest extent without the game running.

API documentation is found here: http://developers.overwolf.com/documentation/





Summary of the App:
Each item on the checklist will launch a subwindow that demonstrates a feature. Several of these will be displayed differently in the future
-Double clicking on any image in a subwindow will store its position in localStorage so you don't have to move them around constantly
-Counters and other HUD elements will be triggered by game events
-