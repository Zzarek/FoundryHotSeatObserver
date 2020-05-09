Hooks.on('init', () => {
    game.settings.register(settings.moduleName, settings.IsModuleActiveSettingName, {
       	name: game.i18n.localize("fhso.enableHotSeatObserver.name"),
       	hint: game.i18n.localize("fhso.enableHotSeatObserver.hint"),
       	scope: "world",
       	config: true,
       	default: true,
	type: Boolean,
    });
   
   game.settings.register(settings.moduleName, settings.toggleGMSelectSettingName, {
	name: settings.localizedSettingName(settings.toggleGMSelectSettingName),
	hint: settings.localizedSettingHint(settings.toggleGMSelectSettingName),
	scope: "world",
	config: true,
	default: false,
	type: Boolean
    });
  
  game.settings.register(settings.moduleName, settings.hotSeatPlayerNameSettingName, {
	name: settings.localizedSettingName(settings.hotSeatPlayerNameSettingName),
	hint: settings.localizedSettingHint(settings.hotSeatPlayerNameSettingName),
	scope: "world",
	config: true,
	default: "Observer",
	type: String
  });

  game.settings.register(settings.moduleName, settings.cameraMoveOnInitiativeSettingName, {
	name: settings.localizedSettingName(settings.cameraMoveOnInitiativeSettingName),
	hint: settings.localizedSettingHint(settings.cameraMoveOnInitiativeSettingName),
	scope: "world",
	config: true,
	default: true,
	type: Boolean
  });

  game.settings.register(settings.moduleName, settings.hidePlayerIconsSettingName, {
	name: settings.localizedSettingName(settings.hidePlayerIconsSettingName),
	hint: settings.localizedSettingHint(settings.hidePlayerIconsSettingName),
	scope: "world",
	config: true,
	default: false,
	type: Boolean
  });


});
