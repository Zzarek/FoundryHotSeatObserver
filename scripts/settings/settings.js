class settings{

    static moduleName = 'foundry-hot-seat-observer';

    static cameraMoveOnInitiativeSettingName = 'cameraMoveOnInitiative';
    static toggleGMSelectSettingName = 'toggleGMSelect';
    static hotSeatPlayerNameSettingName = 'hotSeatPlayerName';
    static IsModuleActiveSettingName = 'enableHotSeatObserver';
    static hidePlayerIconsSettingName = 'hidePlayerIcons';


    static HidePlayer(){
        return game.settings.get(settings.moduleName, settings.hidePlayerIconsSettingName) && settings.IsModuleActive();
    }

    static IsCameraPanModeOn(){
        return game.settings.get(settings.moduleName, settings.cameraMoveOnInitiativeSettingName) && settings.IsModuleActive();
    }

    static IsCurrentPlayerInHotSeatRole(){
        return !game.user.isGM &&
                (game.user.name == settings.RetreiveHotSeatPlayerName() || game.user.name == 'Hot Seat');
    }

    static IsGMSelectModeOn(){
        return game.settings.get(settings.moduleName, settings.toggleGMSelectSettingName) 
            && settings.IsModuleActive();
    }

    static IsModuleActive(){
        //Included in some settings checks to prevent them from activating when module is off
        return game.settings.get(settings.moduleName, settings.IsModuleActiveSettingName);
    }

    static RetreiveHotSeatPlayerName(){
        return game.settings.get(settings.moduleName, settings.hotSeatPlayerNameSettingName);
    }

    static localizedSettingHint(settingName){
        return game.i18n.localize(`fhso.${settingName}.hint`);
    }

    static localizedSettingName(settingName){
        return game.i18n.localize(`fhso.${settingName}.name`);
    }
}