import { Settings } from "./settings.js";

export class HideIconMode{

    static _OnSettingsChanged (enabled)  {
        let gameSettingsEnabled = Settings.HidePlayer();
        
        let hotSeatPlayerName = Settings.RetreiveHotSeatPlayerName();
        let hotSeatPlayerUser = game.users.players.find(t => t.name === hotSeatPlayerName);

        let pcs = game.actors.entities.filter(t => t.isPC && t.data.permission[hotSeatPlayerUser.id] == "3");


        let pcTokens = game.tokens.entities.filter(t => t.actor.isPC && t.actor.data.permission[hotSeatPlayerUser.id] == "3");
        let isUserGm = game.user.isGM;

        pcs.forEach(element => {
            if(!isUserGm)
                element.data.token.icon.visible = gameSettingsEnabled;
        });


        // let tokenViableForChange = token.actor && token.actor.isPC;
        // let isUserGm = game.user.isGM;
        // if (!isUserGm && tokenViableForChange && gameSettingsEnabled === true) {
        //     token.icon.visible = false;
        // }
        
    }

}