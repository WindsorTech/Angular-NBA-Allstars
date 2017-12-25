// Main module
angular
    .module('nbaAllstars', [

        // Global Dependencies
        'ui.router',

        // Features - States
        'nbaAllstars.guards',
        'nbaAllstars.forwards'
        //'todoList.list',
        //'todoList.completed'
    ])
    .config(appConfig);

function appConfig($urlRouterProvider) {

    // Direct the app the a page (state)
    $urlRouterProvider.otherwise('/guards');
}