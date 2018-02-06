angular
    .module('nbaAllstars.centers')
    .config(centersConfig);

function centersConfig($stateProvider) {
    
    $stateProvider.state({
        name: 'centers', // name of the route
        url: '/centers', // url endpoint for the route
        templateUrl: '/nbaAllstars/features/centers/centers.html', // The url to the view template
        controller: 'CentersCtrl', // The name of the controller to use for this route
        controllerAs: 'CentersVM' // The namespace for the view to access the view model
    })

}