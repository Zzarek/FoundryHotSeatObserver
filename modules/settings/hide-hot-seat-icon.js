import { Settings } from "./settings.js";

export class HideIconMode{

    static _OnSettingsChanged (enabled)  {
        let gameSettingsEnabled = Settings.HidePlayer();

        let hotSeatPlayerName = Settings.RetreiveHotSeatPlayerName();
        let hotSeatPlayerUser = game.users.players.find(t => t.name === hotSeatPlayerName);

        let pcs = game.actors.entities.filter(t => t.isPC && t.data.permission[hotSeatPlayerUser.id] == "3");

        let isUserGm = game.user.isGM;

        if(!isUserGm){   
            pcs.forEach(element => {
                let tokens = canvas.tokens.placeables
                let pcToken = token.find(t => t.actor && t.actor._id == element._id);
                pcToken.icon.visible = gameSettingsEnabled;
            });
        }

    }

    static _OnRenderToken() {
        let gameSettingsEnabled = Settings.HidePlayer();

    }



}