Hooks.on('init', () => {
    game.settings.register("foundry-hot-seat-observer", "hotSeatObserver", {
        name: "Hot Seat Observer",
        hint: game.i18n.localize("fhso.toggleGMSelect.hint"),
        scope: "world",
        config: true,
        default: true,
        type: Boolean,
    });
    
    game.settings.register("foundry-hot-seat-observer", "toggleGMSelect", {
		name: game.i18n.localize("fhso.toggleGMSelect.name"),
		hint: game.i18n.localize("fhso.toggleGMSelect.hint"),
		scope: "world",
		config: true,
		default: false,
		type: Boolean
	});
});

Hooks.on('updateCombat', (data, opt) => {

    if (game.settings.get('foundry-hot-seat-observer', 'hotSeatObserver')) {
        if (game.user.isGM === false && (game.user.name == 'Observer' || game.user.name == 'Hot Seat')) {
            var currentCombatant = data.combatant;

            if(currentCombatant.owner 
                && currentCombatant.visible
                ){
                    game.user.update({character: currentCombatant.actor.id});
                    let token = canvas.tokens.placeables
                        .filter(t => t.actor && t.actor.hasPerm(game.user, "OBSERVER")).find(a => a.id == currentCombatant.token.id);
                    if(token)    
                        token.control({initializeSight: false});


            }
        }
    }
});
