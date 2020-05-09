import { Settings } from "./settings.js";

export class HideIconMode{

    static _OnSettingsChanged (enabled)  {
        let gameSettingsEnabled = Settings.HidePlayer();
        
        let hotSeatPlayerName = Settings.RetreiveHotSeatPlayerName();
        let hotSeatPlayerUser = game.users.players.find(t => t.name === hotSeatPlayerName);

        let pcs = game.actors.entities.filter(t => t.isPC && t.data.permission[hotSeatPlayerUser.id] == "2");

        pcs.array.forEach(element => {
            
        });


        let tokenViableForChange = token.actor && token.actor.isPC;
        let isUserGm = game.user.isGM;
        if (!isUserGm && tokenViableForChange && gameSettingsEnabled === true) {
            token.icon.visible = false;
        }
        
    }

}