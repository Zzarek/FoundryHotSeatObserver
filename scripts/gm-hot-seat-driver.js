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




