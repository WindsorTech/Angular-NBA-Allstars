// Main module
angular
    .module('nbaAllstars', [

        // Global Dependencies
        'ui.router',

        // Features - States
        //'todoList.create',
        //'todoList.list',
        //'todoList.completed'
    ])
    .config(appConfig);

function appConfig($urlRouterProvider) {

    // Direct the app the /create state
    $urlRouterProvider.otherwise('/create');
}