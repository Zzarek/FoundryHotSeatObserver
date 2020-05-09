import { GMSelectMode } from "./gm-select.js";
import { HotSeatInitiative } from "./hot-seat-initiative.js";
import { registerSettings } from "./settings/settings-register.js";


export class StartUp{


    static Register(){
        Hooks.on("init", () => {
            registerSettings();
        });

        Hooks.on('updateCombat', (data, opt) => {
            HotSeatInitiative._onUpdateCombat(data, opt);

        });

        Hooks.on("controlToken", (token, isControlled) => {
            GMSelectMode._OnControlToken(token, isControlled);
        });
                     
        Hooks.on("updateUser", (user, updateData, options, userId) => {
            GMSelectMode._OnUpdateUser(user, updateData, options, userId);
        });

    }
}