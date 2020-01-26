Hooks.on('init', () => {
    game.settings.register("foundry-hot-seat-observer", "hotSeatObserver", {
       	name: game.i18n.localize("fhso.enableModule.name"),
       	hint: game.i18n.localize("fhso.enableModule.name"),
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
  
  game.settings.register("foundry-hot-seat-observer", "hotSeatPlayerName", {
	name: game.i18n.localize("fhso.hotSeatPlayerName.name"),
	hint: game.i18n.localize("fhso.hotSeatPlayerName.hint"),
	scope: "world",
	config: true,
	default: "Observer",
	type: String
  });

});
