angular
    .module('nbaAllstars.guards')
    .config(guardsConfig);

function guardsConfig($stateProvider) {
    
    $stateProvider.state({
        name: 'guards', // name of the route
        url: '/guards', // url endpoint for the route
        templateUrl: '/nbaAllstars/features/guards/guards.html', // The url to the view template
        controller: 'GuardsCtrl', // The name of the controller to use for this route
        controllerAs: 'GuardsVM' // The namespace for the view to access the view model
    })

}