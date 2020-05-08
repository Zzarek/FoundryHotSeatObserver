export class StartUp{

    static Register(){
        Hooks.on('updateCombat', (data, opt) => {

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
        });

        Hooks.on("controlToken", (token, isControlled) => {
            let gameSettingsEnabled = settings.IsGMSelectModeOn();
            let tokenViableForChange = token.actor && token.actor.isPC;
                  if (gameSettingsEnabled && tokenViableForChange && game.user.isGM === true) {
                let hotSeatPlayerName = settings.RetreiveHotSeatPlayerName();
                    let hotSeatPlayerUser = game.users.players.find(t => t.name === hotSeatPlayerName);
        
                    if(hotSeatPlayerUser){
                          hotSeatPlayerUser.update({}, {diff: false, controlled: isControlled, character: token.actor.id});
                    }
            
            }
        });
                     
        Hooks.on("updateUser", (user, updateData, options, userId) => {
            let gameSettingsEnabled = settings.IsGMSelectModeOn();
            let isCorrectUser = game.user._id == updateData._id && settings.IsCurrentPlayerInHotSeatRole();
            if(gameSettingsEnabled && isCorrectUser && options.hasOwnProperty("character") && options.hasOwnProperty("controlled")){
                const actor = game.actors.get(options.character);
                    const tokens = actor.getActiveTokens();
                    if ( tokens.length && options.controlled ) tokens[0].control();
                else if (tokens.length && !options.controlled) tokens[0].release();	
            }
        });
    }
}