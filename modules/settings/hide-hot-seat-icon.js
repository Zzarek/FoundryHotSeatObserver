import { Settings } from "./settings.js";

export class HideIconMode{

    static _OnSettingsChanged (enabled)  {
        let hotSeatPlayerName = Settings.RetreiveHotSeatPlayerName();
        let hotSeatPlayerUser = game.users.players.find(t => t.name === hotSeatPlayerName);

        let pcs = game.actors.entities.filter(t => t.isPC && t.data.permission[hotSeatPlayerUser.id] == "3");

        let isUserGm = game.user.isGM;

        if(!isUserGm){   
            pcs.forEach(element => {
                let tokens = canvas.tokens.placeables
                let pcToken = tokens.find(t => t.actor && t.actor._id == element._id);
                this.UpdateTokenVisibility(pcToken);
            });
        }

    }

    static UpdateTokenVisibility(token) {
        let gameSettingsEnabled = Settings.HidePlayer();
        token.icon.visible = !gameSettingsEnabled;
    }



}