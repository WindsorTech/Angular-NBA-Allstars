angular
    .module('nbaAllstars.forwards') 
    .controller('ForwardsCtrl', ForwardsCtrl);

function ForwardsCtrl($scope) {
    var vm = this; 

    $(".btn").click(function(){
    	$(this).toggleClass('btn-success');
    });

}