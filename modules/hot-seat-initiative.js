import { Settings } from "./settings/settings.js";

export class HotSeatInitiative {

    static _onUpdateCombat(data, opt) {
        if (Settings.IsModuleActive()) {
            //Leave Hot Seat in for Legacy and testing.
           if (Settings.IsCurrentPlayerInHotSeatRole()) {
               var currentCombatant = data.combatant;
   
               if(currentCombatant.isOwner && currentCombatant.visible) {
                       let isCameraPanEnabled = Settings.IsCameraPanModeOn();
   
                       if(isCameraPanEnabled)
                           game.user.update({character: currentCombatant.actor.id});
                       else
                           game.user.update({}, {diff: false, character: currentCombatant.actor.id});
                       let token = canvas.tokens.placeables
                           .filter(t => t.actor && t.actor.permission >= CONST.DOCUMENT_PERMISSION_LEVELS.OBSERVER).find(a => a.id == currentCombatant.token.id);
                       if(token)    
                           token.control({initializeSight: false});
   
   
               }
           }
       }
    }
}