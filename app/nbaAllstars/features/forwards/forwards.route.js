angular
    .module('nbaAllstars.forwards')
    .config(forwardsConfig);

function forwardsConfig($stateProvider) {
    
    $stateProvider.state({
        name: 'forwards', // name of the route
        url: '/forwards', // url endpoint for the route
        templateUrl: '/nbaAllstars/features/forwards/forwards.html', // The url to the view template
        controller: 'ForwardsCtrl', // The name of the controller to use for this route
        controllerAs: 'ForwardsVM' // The namespace for the view to access the view model
    })

}