class settings{


    
    static IsCameraPanModeOn(){
        return game.settings.get('foundry-hot-seat-observer', 'cameraMoveOnInitiative')
    }

    static IsGMSelectModeOn(){
        return game.settings.get('foundry-hot-seat-observer', 'toggleGMSelect')
    }

    static IsModuleActive(){
        return game.settings.get('foundry-hot-seat-observer', 'hotSeatObserver');
    }

    static IsCurrentPlayerInHotSeatRole(){
        return (game.user.name == settings.RetreiveHotSeatPlayerName() || game.user.name == 'Hot Seat');
    }

    static RetreiveHotSeatPlayerName(){
        return game.settings.get('foundry-hot-seat-observer', 'hotSeatPlayerName');
    }

        
}