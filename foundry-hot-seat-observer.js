Hooks.on('init', () => {
    game.settings.register("foundry-hot-seat-observer", "hotSeatObserver", {
        name: "Hot Seat Observer",
        hint: "Enable this to allow a Hot-Seat player to function in a hot seat matter",
        scope: "world",
        config: true,
        default: true,
        type: Boolean,
    });
});

Hooks.on('updateCombat', (data, opt) => {

    if (game.settings.get('foundry-hot-seat-observer', 'hotSeatObserver')) {
        if (game.user.isGM === false && game.user.name == 'Observer') {
            // Do Thing
        }
    }
});
