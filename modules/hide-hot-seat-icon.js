export class HideIconMode{

    static _OnControlToken (token, isControlled)  {
        let gameSettingsEnabled = settings.HidePlayer();
        let tokenViableForChange = token.actor && token.actor.isPC;
        let isUserGm = game.user.isGM;
        if (!isUserGm && tokenViableForChange && gameSettingsEnabled === true) {
            token.icon.visible = false;
        }
        
    }

}