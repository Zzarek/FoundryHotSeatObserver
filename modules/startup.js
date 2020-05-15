import { GMSelectMode } from "./gm-select.js";
import { HotSeatInitiative } from "./hot-seat-initiative.js";
import { registerSettings } from "./settings/settings-register.js";
import { HideIconMode } from "./settings/hide-hot-seat-icon.js";


export class StartUp{


    static Register(){
        Hooks.on("init", () => {
            registerSettings();
        });

        Hooks.on('updateCombat', (data, opt) => {
            HotSeatInitiative._onUpdateCombat(data, opt);
            
        });

        Hooks.on("updateUser", (user, updateData, options, userId) => {
            GMSelectMode._OnUpdateUser(user, updateData, options, userId);
        });

        Hooks.on("controlToken", (token, isControlled) => {
            GMSelectMode._OnControlToken(token, isControlled);
        });


        Hooks.once('ready', () => { 

            const original = Token.prototype.refresh;

            Token.prototype.refresh = function(){
                if(!game.user.isGM && t.actor.isPC)
                    HideIconMode.UpdateTokenVisibility(this);

                original.apply(this);
            }

        
        });       




    }
}