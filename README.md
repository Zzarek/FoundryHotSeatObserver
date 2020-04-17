# FoundryHotSeatObserver
This module was designed with the intent to assit players who play in-person. Perhaps the DM has a horizontally placed screen with plexiglass on it, or perhaps the DM has a screen mounted in view of the table. Either way, multiple players may need to share a screen.

Classically hotseat refered to players taking turns at a keyboard, so in the same vein, thats what is happening here. When a player's turn is over and initiative is incremented, this module will automatically change the controlled token and selected character along with changes in initiative.



## Current Use Configuration
 
 Currently to use this module you need to add a player named either 'Observer' or 'Hot Seat'. This player should be assigned as owner for every character you want the player to access.


You may rename the observer player in the settings

You may diable camera panning on initiative

You may choose to have the GM control the entire screen by enabling an option where if he clicks on a player token, the observer 
activates that token

If the Gm controls everything, you may also allow for him to deselect tokens for the observer.
 
## Other Notes
This has only been tested in the WHRP4 game system and dnd5e, though there is no reason to assume it wouldn't be universal that I can see.

i18n support is implemented, but only english available as of now.
