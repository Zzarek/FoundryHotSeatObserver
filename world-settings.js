function i18n(key) {
	return game.i18n.localize(key);
}

Hooks.once("init", () => {
	
	/**
	* Register better rolls setting
	*/
	game.settings.register("foundryhotseatobserver", "toggleGMSelect", {
		name: i18n("fhso.toggleGMSelect.name"),
		hint: i18n("fhso.toggleGMSelect.hint"),
		scope: "world",
		config: true,
		default: false,
		type: Boolean
	});
  
  	game.settings.register("foundryhotseatobserver", "hotSeatPlayerName", {
		name: i18n("fhso.hotSeatPlayerName.name"),
		hint: i18n("fhso.hotSeatPlayerName.hint"),
		scope: "world",
		config: true,
		default: true,
		type: string
	});

});
