import { Settings } from "./settings.js";


export function registerSettings() {

	game.settings.register(Settings.moduleName, Settings.IsModuleActiveSettingName, {
		name: game.i18n.localize("fhso.enableHotSeatObserver.name"),
		hint: game.i18n.localize("fhso.enableHotSeatObserver.hint"),
		scope: "world",
		config: true,
		default: true,
	 	type: Boolean,
 	});

	game.settings.register(Settings.moduleName, Settings.toggleGMSelectSettingName, {
 		name: Settings.localizedSettingName(Settings.toggleGMSelectSettingName),
 		hint: Settings.localizedSettingHint(Settings.toggleGMSelectSettingName),
		config: true,
		scope: "world",
 		default: false,
 		type: Boolean
 	});

	game.settings.register(Settings.moduleName, Settings.hotSeatPlayerNameSettingName, {
 		name: Settings.localizedSettingName(Settings.hotSeatPlayerNameSettingName),
 		hint: Settings.localizedSettingHint(Settings.hotSeatPlayerNameSettingName),
 		scope: "world",
 		config: true,
 		default: "Observer",
 		type: String
	});

	game.settings.register(Settings.moduleName, Settings.cameraMoveOnInitiativeSettingName, {
 		name: Settings.localizedSettingName(Settings.cameraMoveOnInitiativeSettingName),
 		hint: Settings.localizedSettingHint(Settings.cameraMoveOnInitiativeSettingName),
 		scope: "world",
 		config: true,
 		default: true,
 		type: Boolean
	});

}



