import { GMSelectMode } from "./gm-select.js";
import { HotSeatInitiative } from "./hot-seat-initiative.js";



export class StartUp{


    static Register(){
        Hooks.on("init", () => {

        });

        Hooks.on('updateCombat', (data, opt) => {
            HotSeatInitiative._onUpdateCombat(data, opt);
        });

        Hooks.on("controlToken", (token, isControlled) => {
            GMSelectMode._OnControlToken(token, isControlled);

            if(!game.user.isGM && token.actor.isPC)
                token.icon.visible = false;
        });
                     
        Hooks.on("updateUser", (user, updateData, options, userId) => {
            GMSelectMode._OnUpdateUser(user, updateData, options, userId);
        });

        Hooks.on("createToken", (token) => {

        });
    }
}