import { Settings } from "./settings.js";

export class HideIconMode{

    static _OnSettingsChanged (enabled)  {
        let gameSettingsEnabled = settings.HidePlayer();
        
        let hotSeatPlayerName = Settings.RetreiveHotSeatPlayerName();
        let hotSeatPlayerUser = game.users.players.find(t => t.name === hotSeatPlayerName);



        let tokenViableForChange = token.actor && token.actor.isPC;
        let isUserGm = game.user.isGM;
        if (!isUserGm && tokenViableForChange && gameSettingsEnabled === true) {
            token.icon.visible = false;
        }
        
    }

}