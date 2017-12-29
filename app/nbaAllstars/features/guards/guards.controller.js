angular
    .module('nbaAllstars.guards') 
    .controller('GuardsCtrl', GuardsCtrl);

function GuardsCtrl($scope) {
    var vm = this; 

    $(".btn").click(function(){
    	$(this).toggleClass('btn-success');
    });



}