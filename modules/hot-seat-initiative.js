export class HotSeatInitiative {

    static _onUpdateCombat(data, opt) {
        if (settings.IsModuleActive()) {
            //Leave Hot Seat in for Legacy and testing.
           if (settings.IsCurrentPlayerInHotSeatRole()) {
               var currentCombatant = data.combatant;
   
               if(currentCombatant.owner && currentCombatant.visible) {
                       let isCameraPanEnabled = settings.IsCameraPanModeOn();
   
                       if(isCameraPanEnabled)
                           game.user.update({character: currentCombatant.actor.id});
                       else
                           game.user.update({}, {diff: false, character: currentCombatant.actor.id});
                       let token = canvas.tokens.placeables
                           .filter(t => t.actor && t.actor.hasPerm(game.user, "OBSERVER")).find(a => a.id == currentCombatant.token._id);
                       if(token)    
                           token.control({initializeSight: false});
   
   
               }
           }
       }
    }
}