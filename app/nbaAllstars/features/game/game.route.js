angular
    .module('nbaAllstars.game')
    .config(gameConfig);

function gameConfig($stateProvider) {
    
    $stateProvider.state({
        name: 'game', // name of the route
        url: '/game', // url endpoint for the route
        templateUrl: '/nbaAllstars/features/game/game.html', // The url to the view template
        controller: 'GameCtrl', // The name of the controller to use for this route
        controllerAs: 'GameVM' // The namespace for the view to access the view model
    })

}