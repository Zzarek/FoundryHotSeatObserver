import { GMSelectMode } from "./gm-select.js";
import { HotSeatInitiative } from "./hot-seat-initiative.js";
import { HideIconMode } from "./hide-hot-seat-icon.js";



export class StartUp{


    static Register(){
        Hooks.on("init", () => {

        });

        Hooks.on('updateCombat', (data, opt) => {
            HotSeatInitiative._onUpdateCombat(data, opt);

        });

        Hooks.on("controlToken", (token, isControlled) => {
            GMSelectMode._OnControlToken(token, isControlled);
            HideIconMode._OnControlToken(token, isControlled);
        });
                     
        Hooks.on("updateUser", (user, updateData, options, userId) => {
            GMSelectMode._OnUpdateUser(user, updateData, options, userId);
        });

        Hooks.on("updateSettingsConfig", (event, formData) => {
            HideIconMode._OnControlToken(token);

        });

        Hooks.on("updateFormApplication", (event, formData) => {
            HideIconMode._OnControlToken(token);

        });
    }
}