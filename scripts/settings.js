Hooks.on("init", () => {

	/**
	* Register better rolls setting
	*/
	game.settings.register("foundryhotseatobserver", "toggleGMSelect", {
		name: game.i18n.localize("fhso.toggleGMSelect.name"),
		hint: game.i18n.localize("fhso.toggleGMSelect.hint"),
		scope: "world",
		config: true,
		default: false,
		type: Boolean
	});
  
  	game.settings.register("foundryhotseatobserver", "hotSeatPlayerName", {
		name: game.i18n.localize("fhso.hotSeatPlayerName.name"),
		hint: game.i18n.localize("fhso.hotSeatPlayerName.hint"),
		scope: "world",
		config: true,
		default: true,
		type: String
	});

});
