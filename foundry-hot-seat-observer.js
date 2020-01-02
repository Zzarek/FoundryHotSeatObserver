Hooks.on('init', () => {
    game.settings.register("actually-private-rolls", "hidePrivateRolls", {
        name: "Hide Private Rolls",
        hint: "Enable this to hide Private GM Rolls unless they are GM or the one that rolled.",
        scope: "world",
        config: true,
        default: true,
        type: Boolean,
    });
});

Hooks.on('renderChatMessage', (app, html, msg) => {

    if (game.settings.get('actually-private-rolls', 'hidePrivateRolls') && msg.isWhisper === 1) {
        if (game.user.isGM === false && game.user.data._id !== msg.author.data._id) {
            html.hide();
        }
    }
});
