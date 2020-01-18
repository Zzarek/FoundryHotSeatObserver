Hooks.on('updateCombat', (data, opt) => {

    if (game.settings.get('foundry-hot-seat-observer', 'hotSeatObserver')) {
         let player = game.settings.get('foundry-hot-seat-observer', 'hotSeatPlayerName')

         //Leave Hot Seat in for Legacy and testing.
        if (game.user.isGM === false && (game.user.name == player || game.user.name == 'Hot Seat')) {
            var currentCombatant = data.combats[0].combatant;

            if(currentCombatant.owner 
                && currentCombatant.visible
                ){
                    game.user.update({character: currentCombatant.actor.id});
                    let token = canvas.tokens.placeables
                        .filter(t => t.actor && t.actor.hasPerm(game.user, "OBSERVER")).find(a => a._id == currentCombatant.token._id);
                    if(token)    
                        token.control({initializeSight: false});


            }
        }
    }
});
