Hooks.on("controlToken", (token, isControlled) => {
	  let gameSettingsEnabled = game.settings.get('foundry-hot-seat-observer', 'hotSeatObserver') && game.settings.get('foundry-hot-seat-observer', 'toggleGMSelect');
	  let tokenViableForChange = token.actor && token.actor.isPC;
      if (gameSettingsEnabled && tokenViableForChange && game.user.isGM === true) {
	        let hotSeatPlayerName = game.settings.get('foundry-hot-seat-observer', 'hotSeatPlayerName')
            let hotSeatPlayerUser = game.users.players.find(t => t.name === hotSeatPlayerName);

            if(hotSeatPlayerUser && isControlled){
               hotSeatPlayerUser.update({character: token.actor.id});

            }
            else if(hotSeatPlayerUser && !isControlled){
                hotSeatPlayerUser.update({character: token.actor.id, release: true});

            }

      }
});

Hooks.on("updateUser", (user, updateData, options, userId) => {
	let isCorrectUser = game.user._id == updateData._id && !game.user.isGM;
    if ( isCorrectUser  && "character" in updateData) {
    const actor = game.actors.get(updateData.character);
    const tokens = actor.getActiveTokens();
    if ( tokens.length ) tokens[0].control();
  }
});



