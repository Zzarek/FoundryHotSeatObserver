export class Settings {

    static moduleName = 'foundry-hot-seat-observer';

    static cameraMoveOnInitiativeSettingName = 'cameraMoveOnInitiative';
    static toggleGMSelectSettingName = 'toggleGMSelect';
    static hotSeatPlayerNameSettingName = 'hotSeatPlayerName';
    static IsModuleActiveSettingName = 'enableHotSeatObserver';
    static hidePlayerIconsSettingName = 'hidePlayerIcons';


    static HidePlayer(){
        return game.settings.get(Settings.moduleName, Settings.hidePlayerIconsSettingName) && Settings.IsModuleActive();
    }

    static IsCameraPanModeOn(){
        return game.settings.get(Settings.moduleName, Settings.cameraMoveOnInitiativeSettingName) && Settings.IsModuleActive();
    }

    static IsCurrentPlayerInHotSeatRole(){
        return !game.user.isGM &&
                (game.user.name == Settings.RetreiveHotSeatPlayerName() || game.user.name == 'Hot Seat');
    }

    static IsGMSelectModeOn(){
        return game.settings.get(Settings.moduleName, Settings.toggleGMSelectSettingName) 
            && settings.IsModuleActive();
    }

    static IsModuleActive(){
        //Included in some settings checks to prevent them from activating when module is off
        return game.settings.get(Settings.moduleName, Settings.IsModuleActiveSettingName);
    }

    static RetreiveHotSeatPlayerName(){
        return game.settings.get(Settings.moduleName, Settings.hotSeatPlayerNameSettingName);
    }

    static localizedSettingHint(settingName){
        return game.i18n.localize(`fhso.${settingName}.hint`);
    }

    static localizedSettingName(settingName){
        return game.i18n.localize(`fhso.${settingName}.name`);
    }
}